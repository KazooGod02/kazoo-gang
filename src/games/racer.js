// Kazoo Motorist — ← → cambia de carril. Esquiva los carros; cada vez más rápido.
export function mountRacer(container, audio) {
  const W = 340, H = 380;
  const c = document.createElement("canvas");
  c.className = "game"; c.width = W; c.height = H;
  container.appendChild(c);
  const ctx = c.getContext("2d");

  const LANES = 4, ROADX = 30, ROADW = W - 60, LANEW = ROADW / LANES, CARW = LANEW - 14, CARH = 46;
  const laneX = (i) => ROADX + i * LANEW + (LANEW - CARW) / 2;
  let player, cars, speed, dist, state, spawnT, dash, raf, last = 0;
  const keys = {};

  function reset() { player = { lane: 1, x: laneX(1), tx: laneX(1) }; cars = []; speed = 3.2; dist = 0; state = "play"; spawnT = 0; dash = 0; }
  reset();

  function key(e) {
    if (["ArrowLeft", "ArrowRight", "KeyA", "KeyD", "Space"].includes(e.code)) e.preventDefault();
    if (e.type !== "keydown") return;
    if (state !== "play") { if (e.code === "Space" || e.code === "Enter") reset(); return; }
    if ((e.code === "ArrowLeft" || e.code === "KeyA") && player.lane > 0) { player.lane--; audio.blip && audio.blip(); }
    if ((e.code === "ArrowRight" || e.code === "KeyD") && player.lane < LANES - 1) { player.lane++; audio.blip && audio.blip(); }
    player.tx = laneX(player.lane);
  }
  window.addEventListener("keydown", key);

  const PY = H - CARH - 16;
  function spawn() {
    // no llenar un carril completo: deja al menos uno libre
    const lane = (Math.random() * LANES) | 0;
    // evita spawnear pegado a otro del mismo carril
    if (cars.some((o) => o.lane === lane && o.y < CARH * 1.8)) return;
    const cols = ["#4dd5fa", "#8bff9e", "#ff6b6b", "#c084fc", "#ffd24d"];
    cars.push({ lane, x: laneX(lane), y: -CARH, col: cols[(Math.random() * cols.length) | 0] });
  }

  function drawCar(x, y, col, flip) {
    ctx.fillStyle = col; ctx.fillRect(x, y, CARW, CARH);
    ctx.fillStyle = "rgba(0,0,0,.35)"; ctx.fillRect(x + 4, y + (flip ? CARH - 16 : 6), CARW - 8, 10); // parabrisas
    ctx.fillStyle = "#111"; ctx.fillRect(x - 3, y + 6, 3, 10); ctx.fillRect(x + CARW, y + 6, 3, 10); ctx.fillRect(x - 3, y + CARH - 16, 3, 10); ctx.fillRect(x + CARW, y + CARH - 16, 3, 10);
  }

  function loop(now) {
    const dt = last ? Math.min((now - last) / 16.6667, 3) : 1; last = now;
    ctx.fillStyle = "#0a0a10"; ctx.fillRect(0, 0, W, H);
    // pasto
    ctx.fillStyle = "#0d160f"; ctx.fillRect(0, 0, ROADX, H); ctx.fillRect(ROADX + ROADW, 0, ROADX, H);
    // carretera
    ctx.fillStyle = "#15151c"; ctx.fillRect(ROADX, 0, ROADW, H);
    // líneas de carril (dash animado)
    if (state === "play") dash = (dash + speed * dt) % 40;
    ctx.strokeStyle = "#5a5a6e"; ctx.lineWidth = 3; ctx.setLineDash([20, 20]); ctx.lineDashOffset = -dash;
    for (let i = 1; i < LANES; i++) { const lx = ROADX + i * LANEW; ctx.beginPath(); ctx.moveTo(lx, 0); ctx.lineTo(lx, H); ctx.stroke(); }
    ctx.setLineDash([]);
    // bordes
    ctx.strokeStyle = "#fa4dd5"; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(ROADX, 0); ctx.lineTo(ROADX, H); ctx.moveTo(ROADX + ROADW, 0); ctx.lineTo(ROADX + ROADW, H); ctx.stroke();

    if (state === "play") {
      speed += 0.0016 * dt; dist += speed * dt;
      spawnT -= dt; if (spawnT <= 0) { spawn(); spawnT = 22 + Math.random() * 26 - Math.min(12, dist / 600); }
      cars.forEach((o) => (o.y += speed * dt));
      cars = cars.filter((o) => o.y < H + CARH);
      // mover jugador suave hacia su carril
      player.x += (player.tx - player.x) * Math.min(1, 0.25 * dt);
      // colisión
      cars.forEach((o) => { if (o.lane === player.lane && o.y + CARH > PY + 6 && o.y < PY + CARH - 6) { state = "crash"; audio.staticBurst(0.14); } });
    }

    cars.forEach((o) => drawCar(o.x, o.y, o.col, true));
    drawCar(player.x, PY, "#fa4dd5", false);

    ctx.fillStyle = "#fff"; ctx.font = "bold 15px 'Courier New'"; ctx.textAlign = "left"; ctx.fillText((dist / 10 | 0) + " m", 10, 22);
    ctx.textAlign = "right"; ctx.fillText((speed * 12 | 0) + " km/h", W - 10, 22);
    if (state === "crash") {
      ctx.fillStyle = "rgba(5,6,10,.82)"; ctx.fillRect(0, 0, W, H);
      ctx.textAlign = "center"; ctx.fillStyle = "#fa4dd5"; ctx.font = "bold 24px 'Courier New'"; ctx.fillText("¡CHOCASTE!", W / 2, H / 2 - 8);
      ctx.fillStyle = "#fff"; ctx.font = "14px 'Courier New'"; ctx.fillText((dist / 10 | 0) + " m — espacio para reintentar", W / 2, H / 2 + 18);
    }
    raf = requestAnimationFrame(loop);
  }
  raf = requestAnimationFrame(loop);

  return () => { cancelAnimationFrame(raf); window.removeEventListener("keydown", key); container.innerHTML = ""; };
}
