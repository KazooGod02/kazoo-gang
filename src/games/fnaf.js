// Noche en Kazoo — minijuego tipo FNAF en 8-bit. Cierra la puerta correcta
// (A/← izquierda, D/→ derecha) antes de que el animatrónico entre. Cuida la
// energía y sobrevive hasta las 6 AM. Espacio para reiniciar.
import { CONFIG } from "../config.js";

export function mountFnaf(container, audio) {
  const W = 560, H = 340;
  const c = document.createElement("canvas");
  c.className = "game";
  c.width = W; c.height = H;
  container.appendChild(c);
  const ctx = c.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  const cat = new Image();
  cat.src = CONFIG.catImage;

  const HOUR_SEC = 12; // segundos por "hora"; 6 horas ≈ 72s
  let power, hour, hourT, doorL, doorR, threat, spawnT, state, raf, last = 0, scareT, warn;

  function reset() { power = 100; hour = 0; hourT = 0; doorL = false; doorR = false; threat = null; spawnT = 5; state = "play"; scareT = 0; warn = 0; }
  reset();

  function toggle(side) { if (state !== "play") return; if (side === "L") doorL = !doorL; else doorR = !doorR; audio.beep(150, 0.07); }
  function key(e) {
    const k = e.key.toLowerCase();
    if (k === "a" || k === "arrowleft") { e.preventDefault(); toggle("L"); }
    else if (k === "d" || k === "arrowright") { e.preventDefault(); toggle("R"); }
    else if (k === " " && state !== "play") { e.preventDefault(); reset(); }
  }
  window.addEventListener("keydown", key);
  c.addEventListener("click", (e) => { if (state !== "play") { reset(); return; } const r = c.getBoundingClientRect(); toggle((e.clientX - r.left) / r.width < 0.5 ? "L" : "R"); });

  function die() { if (state === "play") { state = "dead"; scareT = 1.4; audio.staticBurst(0.5); } }

  // ── pixel helpers ──
  const px = (x, y, w, h, col) => { ctx.fillStyle = col; ctx.fillRect(x | 0, y | 0, w | 0, h | 0); };
  function drawCatFace(cx, cy, s, eyeCol) {
    if (cat.complete && cat.naturalWidth) { ctx.globalAlpha = 0.9; ctx.drawImage(cat, cx - s / 2, cy - s / 2, s, s); ctx.globalAlpha = 1; }
    else { px(cx - s / 2, cy - s / 2, s, s, "#3a2030"); }
    const e = s * 0.12;
    px(cx - s * 0.22 - e / 2, cy - s * 0.05, e, e, eyeCol);
    px(cx + s * 0.22 - e / 2, cy - s * 0.05, e, e, eyeCol);
  }

  function loop(now) {
    const dt = last ? Math.min((now - last) / 16.6667, 3) : 1;
    const sec = dt / 60;
    last = now;

    if (state === "play") {
      power -= (0.03 + (doorL ? 0.06 : 0) + (doorR ? 0.06 : 0)) * dt;
      if (power <= 0) { power = 0; die(); }
      hourT += sec;
      if (hourT >= HOUR_SEC) { hourT = 0; hour++; audio.beep(500, 0.12); if (hour >= 6) { state = "win"; } }
      // amenaza
      if (threat) {
        const closed = threat.side === "L" ? doorL : doorR;
        if (closed) { threat = null; spawnT = 3 + Math.random() * 4; audio.beep(240, 0.08); }
        else { threat.t -= sec; if (threat.t <= 0) die(); }
      } else {
        spawnT -= sec;
        if (spawnT <= 0) { threat = { side: Math.random() < 0.5 ? "L" : "R", t: 3.4 }; warn = 0.6; audio.beep(760, 0.1); }
      }
      if (warn > 0) warn -= sec;
    }

    // ── dibujo ──
    px(0, 0, W, H, "#0a0710");
    // paredes / oficina
    px(40, 40, W - 80, H - 90, "#120b18");
    // ventanas
    const winY = 90, winW = 78, winH = 150;
    // izquierda
    px(40, winY, winW, winH, "#05040a");
    px(W - 40 - winW, winY, winW, winH, "#05040a");
    // animatrónico asomándose
    if (threat && state === "play") {
      const wx = threat.side === "L" ? 40 + winW / 2 : W - 40 - winW / 2;
      const blink = Math.sin(now * 0.02) > 0 ? "#ff2b4d" : "#ff6b6b";
      drawCatFace(wx, winY + winH / 2, 66, blink);
    }
    // puertas (persianas)
    if (doorL) for (let i = 0; i < winH; i += 10) px(40, winY + i, winW, 6, i % 20 ? "#fa4dd5" : "#8a2a72");
    if (doorR) for (let i = 0; i < winH; i += 10) px(W - 40 - winW, winY + i, winW, 6, i % 20 ? "#fa4dd5" : "#8a2a72");
    // marcos
    ctx.strokeStyle = "#3a2440"; ctx.lineWidth = 3;
    ctx.strokeRect(40, winY, winW, winH); ctx.strokeRect(W - 40 - winW, winY, winW, winH);

    // HUD
    ctx.fillStyle = "#fff"; ctx.font = "bold 15px 'Courier New'"; ctx.textAlign = "left";
    const hLabel = hour === 0 ? "12 AM" : hour + " AM";
    ctx.fillText(hLabel, 52, 66);
    // energía
    ctx.textAlign = "left"; ctx.fillText("ENERGÍA", 52, H - 34);
    px(52, H - 28, 160, 12, "#241830");
    px(52, H - 28, 160 * (power / 100), 12, power > 30 ? "#8bff9e" : "#ff5470");
    // controles
    ctx.fillStyle = "#8a86a0"; ctx.font = "12px 'Courier New'"; ctx.textAlign = "right";
    ctx.fillText("A/← cerrar izq · D/→ cerrar der", W - 48, H - 22);
    // aviso
    if (warn > 0) { ctx.fillStyle = "#ffd21f"; ctx.font = "bold 16px 'Courier New'"; ctx.textAlign = "center"; ctx.fillText("¡SE ACERCA POR LA " + (threat.side === "L" ? "IZQUIERDA" : "DERECHA") + "!", W / 2, 60); }

    if (state === "dead") {
      if (scareT > 0) {
        scareT -= sec;
        px(0, 0, W, H, Math.random() > 0.5 ? "#2a0010" : "#000");
        drawCatFace(W / 2 + (Math.random() * 10 - 5), H / 2 + (Math.random() * 10 - 5), 260, "#ff2b4d");
      } else {
        px(0, 0, W, H, "#0a0004");
        ctx.fillStyle = "#ff5470"; ctx.font = "bold 30px 'Courier New'"; ctx.textAlign = "center"; ctx.fillText("TE ATRAPARON", W / 2, H / 2 - 6);
        ctx.fillStyle = "#fff"; ctx.font = "14px 'Courier New'"; ctx.fillText("clic / espacio para reintentar", W / 2, H / 2 + 24);
      }
    }
    if (state === "win") {
      px(0, 0, W, H, "#04120a");
      ctx.fillStyle = "#8bff9e"; ctx.font = "bold 30px 'Courier New'"; ctx.textAlign = "center"; ctx.fillText("¡SOBREVIVISTE! 6 AM", W / 2, H / 2 - 6);
      ctx.fillStyle = "#fff"; ctx.font = "14px 'Courier New'"; ctx.fillText("clic / espacio para jugar otra vez", W / 2, H / 2 + 24);
    }

    raf = requestAnimationFrame(loop);
  }
  raf = requestAnimationFrame(loop);

  return () => { cancelAnimationFrame(raf); window.removeEventListener("keydown", key); container.innerHTML = ""; };
}
