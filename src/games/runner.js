// Kazoo Runner — salta los obstáculos. Espacio / W / ↑ / clic.
// Física con dt para velocidad constante en cualquier monitor.
import { CONFIG } from "../config.js";

export function mountRunner(container, audio) {
  const W = 560, H = 260;
  const c = document.createElement("canvas");
  c.className = "game";
  c.width = W; c.height = H;
  container.appendChild(c);
  const ctx = c.getContext("2d");
  const cat = new Image();
  cat.src = CONFIG.catImage;

  const gY = H - 78;
  let player, obs, score, best = 0, state, speed, raf, last = 0;
  function reset() { player = { x: 70, y: gY, vy: 0, s: 38, ground: true }; obs = []; score = 0; speed = 4.4; state = "ready"; }
  reset();

  function jump() {
    if (state === "ready") state = "play";
    else if (state === "dead") { reset(); return; }
    if (player.ground) { player.vy = -11.5; player.ground = false; audio.beep(660, 0.05); }
  }
  function key(e) { if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") { e.preventDefault(); jump(); } }
  window.addEventListener("keydown", key);
  c.addEventListener("click", jump);
  function die() { if (state !== "dead") { state = "dead"; audio.staticBurst(0.1); } }

  function loop(now) {
    const dt = last ? Math.min((now - last) / 16.6667, 3) : 1;
    last = now;
    ctx.fillStyle = "#05060a"; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "#6e1a5c"; ctx.beginPath(); ctx.moveTo(0, gY + player.s); ctx.lineTo(W, gY + player.s); ctx.stroke();
    if (state === "play") {
      speed += 0.0022 * dt;
      player.vy += 0.62 * dt;
      player.y += player.vy * dt;
      if (player.y >= gY) { player.y = gY; player.vy = 0; player.ground = true; }
      // Separación mínima amplia (antes salían muy juntos e injusto): hueco 280–480px.
      if (obs.length === 0 || obs[obs.length - 1].x < W - 280 - Math.random() * 200) obs.push({ x: W, w: 18 + Math.random() * 16, h: 26 + Math.random() * 30 });
      obs.forEach((o) => (o.x -= speed * dt));
      obs = obs.filter((o) => o.x + o.w > 0);
      obs.forEach((o) => {
        if (!o.p && o.x + o.w < player.x) { o.p = true; score++; best = Math.max(best, score); audio.beep(880, 0.04); }
        const oy = gY + player.s - o.h;
        if (player.x + player.s > o.x && player.x < o.x + o.w && player.y + player.s > oy) die();
      });
    }
    ctx.fillStyle = "#fa4dd5"; obs.forEach((o) => ctx.fillRect(o.x, gY + player.s - o.h, o.w, o.h));
    if (cat.complete && cat.naturalWidth) ctx.drawImage(cat, player.x, player.y, player.s, player.s);
    else { ctx.fillStyle = "#fff"; ctx.fillRect(player.x, player.y, player.s, player.s); }
    ctx.fillStyle = "#fff"; ctx.font = "bold 18px 'Courier New'"; ctx.textAlign = "right"; ctx.fillText(score, W - 14, 26);
    if (state === "ready") { ctx.textAlign = "center"; ctx.font = "15px 'Courier New'"; ctx.fillText("ESPACIO / W / ↑ PARA SALTAR", W / 2, H / 2); }
    if (state === "dead") {
      ctx.textAlign = "center"; ctx.fillStyle = "#fa4dd5"; ctx.font = "bold 20px 'Courier New'"; ctx.fillText("¡CHOCASTE!", W / 2, H / 2 - 12);
      ctx.fillStyle = "#fff"; ctx.font = "14px 'Courier New'"; ctx.fillText("mejor: " + best + " — clic para reintentar", W / 2, H / 2 + 14);
    }
    raf = requestAnimationFrame(loop);
  }
  raf = requestAnimationFrame(loop);

  return () => { cancelAnimationFrame(raf); window.removeEventListener("keydown", key); container.innerHTML = ""; };
}
