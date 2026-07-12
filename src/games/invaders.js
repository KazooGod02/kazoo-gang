// Kazoo Invaders — ← → mueve, ESPACIO dispara. Mata a todos antes de que bajen.
export function mountInvaders(container, audio) {
  const W = 520, H = 360;
  const c = document.createElement("canvas");
  c.className = "game"; c.width = W; c.height = H;
  container.appendChild(c);
  const ctx = c.getContext("2d");

  const COLS = 8, ROWS = 4, IW = 26, IH = 18, GAP = 18;
  let player, inv, bullets, bombs, dir, score, lives, state, tick, raf, last = 0;
  const keys = {};

  function makeInv() {
    const arr = [];
    const startX = (W - (COLS * (IW + GAP) - GAP)) / 2;
    for (let r = 0; r < ROWS; r++) for (let col = 0; col < COLS; col++)
      arr.push({ x: startX + col * (IW + GAP), y: 40 + r * (IH + GAP), alive: true, row: r });
    return arr;
  }
  function reset() {
    player = { x: W / 2 - 18, y: H - 30, w: 36, h: 12, cd: 0 };
    inv = makeInv(); bullets = []; bombs = []; dir = 1; score = 0; lives = 3; state = "play"; tick = 0;
  }
  reset();

  function key(e) {
    if (["ArrowLeft", "ArrowRight", "Space", "KeyA", "KeyD"].includes(e.code)) e.preventDefault();
    keys[e.code] = e.type === "keydown";
    if (e.type === "keydown" && e.code === "Space" && state !== "play") reset();
  }
  window.addEventListener("keydown", key);
  window.addEventListener("keyup", key);

  function shoot() { if (player.cd <= 0) { bullets.push({ x: player.x + player.w / 2 - 1.5, y: player.y, w: 3, h: 10 }); player.cd = 18; audio.beep(880, 0.04); } }

  function loop(now) {
    const dt = last ? Math.min((now - last) / 16.6667, 3) : 1; last = now; tick++;
    ctx.fillStyle = "#05060a"; ctx.fillRect(0, 0, W, H);

    if (state === "play") {
      // jugador
      if (keys.ArrowLeft || keys.KeyA) player.x -= 4.4 * dt;
      if (keys.ArrowRight || keys.KeyD) player.x += 4.4 * dt;
      player.x = Math.max(6, Math.min(W - player.w - 6, player.x));
      if (keys.Space) shoot();
      if (player.cd > 0) player.cd -= dt;

      // enemigos: velocidad sube al quedar pocos
      const alive = inv.filter((i) => i.alive);
      const spd = (0.4 + (ROWS * COLS - alive.length) * 0.05) * dt;
      let hitEdge = false;
      alive.forEach((i) => { i.x += dir * spd; if (i.x < 6 || i.x + IW > W - 6) hitEdge = true; });
      if (hitEdge) { dir *= -1; alive.forEach((i) => (i.y += 14)); audio.beep(160, 0.04); }

      // bombas enemigas
      if (alive.length && Math.random() < 0.02 * dt + 0.008) { const s = alive[(Math.random() * alive.length) | 0]; bombs.push({ x: s.x + IW / 2, y: s.y + IH, w: 3, h: 10 }); }
      bombs.forEach((b) => (b.y += 3.2 * dt));
      bombs = bombs.filter((b) => {
        if (b.y > H) return false;
        if (b.x < player.x + player.w && b.x + b.w > player.x && b.y + b.h > player.y && b.y < player.y + player.h) { lives--; audio.staticBurst(0.1); if (lives <= 0) state = "lose"; return false; }
        return true;
      });

      // balas jugador
      bullets.forEach((bl) => (bl.y -= 7 * dt));
      bullets = bullets.filter((bl) => {
        if (bl.y + bl.h < 0) return false;
        for (const i of alive) { if (i.alive && bl.x < i.x + IW && bl.x + bl.w > i.x && bl.y < i.y + IH && bl.y + bl.h > i.y) { i.alive = false; score += 10; audio.beep(1040, 0.04); return false; } }
        return true;
      });

      if (alive.some((i) => i.y + IH >= player.y)) state = "lose";
      if (alive.length === 0) state = "win";
    }

    // dibujar enemigos
    inv.forEach((i) => { if (!i.alive) return; ctx.fillStyle = ["#fa4dd5", "#4dd5fa", "#8bff9e", "#ffd24d"][i.row % 4]; const wob = Math.sin(tick / 14 + i.row) * 2; ctx.fillRect(i.x, i.y, IW, IH - 4); ctx.fillRect(i.x + 4 + wob, i.y + IH - 5, 4, 4); ctx.fillRect(i.x + IW - 8 - wob, i.y + IH - 5, 4, 4); });
    // balas / bombas
    ctx.fillStyle = "#fff"; bullets.forEach((b) => ctx.fillRect(b.x, b.y, b.w, b.h));
    ctx.fillStyle = "#ff6b6b"; bombs.forEach((b) => ctx.fillRect(b.x, b.y, b.w, b.h));
    // jugador
    ctx.fillStyle = "#fa4dd5"; ctx.fillRect(player.x, player.y, player.w, player.h); ctx.fillRect(player.x + player.w / 2 - 2, player.y - 6, 4, 6);
    // HUD
    ctx.fillStyle = "#fff"; ctx.font = "bold 15px 'Courier New'"; ctx.textAlign = "left"; ctx.fillText("PTS " + score, 12, 22);
    ctx.textAlign = "right"; ctx.fillText("♥".repeat(Math.max(0, lives)), W - 12, 22);

    if (state !== "play") {
      ctx.fillStyle = "rgba(5,6,10,.8)"; ctx.fillRect(0, 0, W, H);
      ctx.textAlign = "center"; ctx.fillStyle = state === "win" ? "#8bff9e" : "#fa4dd5"; ctx.font = "bold 24px 'Courier New'";
      ctx.fillText(state === "win" ? "¡GANASTE!" : "TE INVADIERON", W / 2, H / 2 - 8);
      ctx.fillStyle = "#fff"; ctx.font = "14px 'Courier New'"; ctx.fillText("puntos: " + score + " — espacio para jugar otra vez", W / 2, H / 2 + 18);
    }
    raf = requestAnimationFrame(loop);
  }
  raf = requestAnimationFrame(loop);

  return () => { cancelAnimationFrame(raf); window.removeEventListener("keydown", key); window.removeEventListener("keyup", key); container.innerHTML = ""; };
}
