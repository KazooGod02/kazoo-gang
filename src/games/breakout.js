// Kazoo Breakout — ← → mueve la paleta (o el mouse). Rompe todos los ladrillos.
export function mountBreakout(container, audio) {
  const W = 460, H = 340;
  const c = document.createElement("canvas");
  c.className = "game"; c.width = W; c.height = H;
  container.appendChild(c);
  const ctx = c.getContext("2d");

  const COLS = 9, ROWS = 5, BW = 40, BH = 16, BGAP = 6, BTOP = 46;
  const OFX = (W - (COLS * (BW + BGAP) - BGAP)) / 2;
  const COLR = ["#fa4dd5", "#c084fc", "#4dd5fa", "#8bff9e", "#ffd24d"];
  let paddle, ball, bricks, score, lives, state, raf, last = 0;
  const keys = {};

  function makeBricks() { const a = []; for (let r = 0; r < ROWS; r++) for (let col = 0; col < COLS; col++) a.push({ x: OFX + col * (BW + BGAP), y: BTOP + r * (BH + BGAP), col: COLR[r], alive: true }); return a; }
  function resetBall() { ball = { x: W / 2, y: H - 60, vx: 3 * (Math.random() < 0.5 ? 1 : -1), vy: -3.4, r: 6, stuck: true }; }
  function reset() { paddle = { x: W / 2 - 38, y: H - 24, w: 76, h: 10 }; bricks = makeBricks(); score = 0; lives = 3; state = "play"; resetBall(); }
  reset();

  function key(e) {
    if (["ArrowLeft", "ArrowRight", "KeyA", "KeyD", "Space"].includes(e.code)) e.preventDefault();
    keys[e.code] = e.type === "keydown";
    if (e.type === "keydown" && e.code === "Space") { if (state !== "play") reset(); else if (ball.stuck) ball.stuck = false; }
  }
  window.addEventListener("keydown", key);
  window.addEventListener("keyup", key);
  function onMove(e) { const rect = c.getBoundingClientRect(); const mx = (e.clientX - rect.left) * (W / rect.width); paddle.x = Math.max(0, Math.min(W - paddle.w, mx - paddle.w / 2)); }
  c.addEventListener("mousemove", onMove);
  c.addEventListener("click", () => { if (ball.stuck) ball.stuck = false; else if (state !== "play") reset(); });

  function loop(now) {
    const dt = last ? Math.min((now - last) / 16.6667, 3) : 1; last = now;
    ctx.fillStyle = "#05060a"; ctx.fillRect(0, 0, W, H);

    if (state === "play") {
      if (keys.ArrowLeft || keys.KeyA) paddle.x -= 6 * dt;
      if (keys.ArrowRight || keys.KeyD) paddle.x += 6 * dt;
      paddle.x = Math.max(0, Math.min(W - paddle.w, paddle.x));
      if (ball.stuck) { ball.x = paddle.x + paddle.w / 2; ball.y = paddle.y - ball.r - 1; }
      else {
        ball.x += ball.vx * dt; ball.y += ball.vy * dt;
        if (ball.x - ball.r < 0) { ball.x = ball.r; ball.vx *= -1; audio.tick && audio.tick(); }
        if (ball.x + ball.r > W) { ball.x = W - ball.r; ball.vx *= -1; audio.tick && audio.tick(); }
        if (ball.y - ball.r < 0) { ball.y = ball.r; ball.vy *= -1; audio.tick && audio.tick(); }
        // paleta
        if (ball.vy > 0 && ball.y + ball.r >= paddle.y && ball.y < paddle.y + paddle.h && ball.x > paddle.x && ball.x < paddle.x + paddle.w) {
          ball.y = paddle.y - ball.r; ball.vy *= -1; const hit = (ball.x - (paddle.x + paddle.w / 2)) / (paddle.w / 2); ball.vx = hit * 4.4; audio.beep(600, 0.03);
          const sp = Math.min(7.5, Math.hypot(ball.vx, ball.vy) + 0.12); const a = Math.atan2(ball.vy, ball.vx); ball.vx = Math.cos(a) * sp; ball.vy = Math.sin(a) * sp;
        }
        // caída
        if (ball.y - ball.r > H) { lives--; audio.staticBurst(0.1); if (lives <= 0) state = "lose"; else resetBall(); }
        // ladrillos
        for (const b of bricks) {
          if (!b.alive) continue;
          if (ball.x + ball.r > b.x && ball.x - ball.r < b.x + BW && ball.y + ball.r > b.y && ball.y - ball.r < b.y + BH) {
            b.alive = false; score += 10; audio.beep(880, 0.03);
            const cx = b.x + BW / 2, cy = b.y + BH / 2;
            if (Math.abs(ball.x - cx) / BW > Math.abs(ball.y - cy) / BH) ball.vx *= -1; else ball.vy *= -1;
            break;
          }
        }
        if (bricks.every((b) => !b.alive)) state = "win";
      }
    }

    bricks.forEach((b) => { if (b.alive) { ctx.fillStyle = b.col; ctx.fillRect(b.x, b.y, BW, BH); ctx.fillStyle = "rgba(255,255,255,.15)"; ctx.fillRect(b.x, b.y, BW, 3); } });
    ctx.fillStyle = "#fff"; ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);
    ctx.fillStyle = "#ffd24d"; ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.r, 0, 7); ctx.fill();
    ctx.fillStyle = "#fff"; ctx.font = "bold 14px 'Courier New'"; ctx.textAlign = "left"; ctx.fillText("PTS " + score, 10, 22);
    ctx.textAlign = "right"; ctx.fillStyle = "#fa4dd5"; ctx.fillText("♥".repeat(Math.max(0, lives)), W - 10, 22);
    if (ball.stuck && state === "play") { ctx.fillStyle = "#9aa"; ctx.font = "13px 'Courier New'"; ctx.textAlign = "center"; ctx.fillText("ESPACIO / CLIC para lanzar", W / 2, H - 44); }
    if (state !== "play") {
      ctx.fillStyle = "rgba(5,6,10,.8)"; ctx.fillRect(0, 0, W, H);
      ctx.textAlign = "center"; ctx.fillStyle = state === "win" ? "#8bff9e" : "#fa4dd5"; ctx.font = "bold 24px 'Courier New'"; ctx.fillText(state === "win" ? "¡GANASTE!" : "GAME OVER", W / 2, H / 2 - 8);
      ctx.fillStyle = "#fff"; ctx.font = "14px 'Courier New'"; ctx.fillText("puntos: " + score + " — espacio para jugar otra vez", W / 2, H / 2 + 18);
    }
    raf = requestAnimationFrame(loop);
  }
  raf = requestAnimationFrame(loop);

  return () => { cancelAnimationFrame(raf); window.removeEventListener("keydown", key); window.removeEventListener("keyup", key); container.innerHTML = ""; };
}
