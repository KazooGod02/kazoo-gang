// Kazoo Tetris — ← → mueve, ↑ rota, ↓ baja, ESPACIO cae. Clásico, con dt.
const COLS = 10, ROWS = 20, CELL = 16;
const OX = 16, OY = 20; // offset del tablero dentro del canvas
const SHAPES = {
  I: { c: "#4dd5fa", r: [[1, 1, 1, 1]] },
  O: { c: "#ffd24d", r: [[1, 1], [1, 1]] },
  T: { c: "#c084fc", r: [[0, 1, 0], [1, 1, 1]] },
  S: { c: "#8bff9e", r: [[0, 1, 1], [1, 1, 0]] },
  Z: { c: "#ff6b6b", r: [[1, 1, 0], [0, 1, 1]] },
  J: { c: "#6b8bff", r: [[1, 0, 0], [1, 1, 1]] },
  L: { c: "#fa4dd5", r: [[0, 0, 1], [1, 1, 1]] },
};
const KEYS = Object.keys(SHAPES);

export function mountTetris(container, audio) {
  const W = 300, H = ROWS * CELL + OY * 2;
  const c = document.createElement("canvas");
  c.className = "game"; c.width = W; c.height = H;
  container.appendChild(c);
  const ctx = c.getContext("2d");

  let grid, piece, next, score, lines, over, dropMs, acc, raf, last = 0, paused = false;

  function empty() { return Array.from({ length: ROWS }, () => Array(COLS).fill(null)); }
  function spawn() {
    const k = next || KEYS[(Math.random() * KEYS.length) | 0];
    next = KEYS[(Math.random() * KEYS.length) | 0];
    const s = SHAPES[k];
    return { k, c: s.c, m: s.r.map((row) => row.slice()), x: ((COLS - s.r[0].length) / 2) | 0, y: 0 };
  }
  function reset() { grid = empty(); score = 0; lines = 0; over = false; dropMs = 700; acc = 0; next = null; piece = spawn(); }
  reset();

  function collide(p, nx, ny, m) {
    m = m || p.m;
    for (let r = 0; r < m.length; r++) for (let col = 0; col < m[r].length; col++) {
      if (!m[r][col]) continue;
      const gx = nx + col, gy = ny + r;
      if (gx < 0 || gx >= COLS || gy >= ROWS) return true;
      if (gy >= 0 && grid[gy][gx]) return true;
    }
    return false;
  }
  function rotate(m) {
    const R = m.length, C = m[0].length;
    const out = Array.from({ length: C }, () => Array(R).fill(0));
    for (let r = 0; r < R; r++) for (let col = 0; col < C; col++) out[col][R - 1 - r] = m[r][col];
    return out;
  }
  function lock() {
    piece.m.forEach((row, r) => row.forEach((v, col) => { if (v) { const gy = piece.y + r, gx = piece.x + col; if (gy >= 0) grid[gy][gx] = piece.c; } }));
    // limpiar líneas
    let cleared = 0;
    for (let r = ROWS - 1; r >= 0; r--) {
      if (grid[r].every((x) => x)) { grid.splice(r, 1); grid.unshift(Array(COLS).fill(null)); cleared++; r++; }
    }
    if (cleared) { lines += cleared; score += [0, 100, 300, 500, 800][cleared]; dropMs = Math.max(120, 700 - lines * 18); audio.beep(660 + cleared * 120, 0.08); }
    else audio.beep(300, 0.03);
    piece = spawn();
    if (collide(piece, piece.x, piece.y)) { over = true; audio.staticBurst(0.12); }
  }
  function step() {
    if (collide(piece, piece.x, piece.y + 1)) lock();
    else piece.y++;
  }
  function hardDrop() { while (!collide(piece, piece.x, piece.y + 1)) piece.y++; lock(); }

  function key(e) {
    if (over) { if (e.code === "Space" || e.code === "Enter") { reset(); } return; }
    if (e.code === "ArrowLeft") { if (!collide(piece, piece.x - 1, piece.y)) { piece.x--; audio.tick && audio.tick(); } }
    else if (e.code === "ArrowRight") { if (!collide(piece, piece.x + 1, piece.y)) { piece.x++; audio.tick && audio.tick(); } }
    else if (e.code === "ArrowDown") { step(); acc = 0; }
    else if (e.code === "ArrowUp" || e.code === "KeyW") { const m = rotate(piece.m); let nx = piece.x; if (collide(piece, nx, piece.y, m)) nx = collide(piece, piece.x - 1, piece.y, m) ? (collide(piece, piece.x + 1, piece.y, m) ? null : piece.x + 1) : piece.x - 1; if (nx != null) { piece.m = m; piece.x = nx; audio.blip && audio.blip(); } }
    else if (e.code === "Space") { hardDrop(); }
    else return;
    e.preventDefault();
  }
  window.addEventListener("keydown", key);

  function cellRect(x, y, col) { ctx.fillStyle = col; ctx.fillRect(OX + x * CELL, OY + y * CELL, CELL - 1, CELL - 1); }
  function draw() {
    ctx.fillStyle = "#05060a"; ctx.fillRect(0, 0, W, H);
    // marco tablero
    ctx.strokeStyle = "#6e1a5c"; ctx.strokeRect(OX - 1, OY - 1, COLS * CELL + 1, ROWS * CELL + 1);
    for (let r = 0; r < ROWS; r++) for (let col = 0; col < COLS; col++) if (grid[r][col]) cellRect(col, r, grid[r][col]);
    piece.m.forEach((row, r) => row.forEach((v, col) => { if (v && piece.y + r >= 0) cellRect(piece.x + col, piece.y + r, piece.c); }));
    // panel derecho
    const px = OX + COLS * CELL + 16;
    ctx.fillStyle = "#fff"; ctx.font = "bold 13px 'Courier New'"; ctx.textAlign = "left";
    ctx.fillText("PUNTOS", px, 40); ctx.fillStyle = "#fa4dd5"; ctx.font = "bold 18px 'Courier New'"; ctx.fillText(score, px, 62);
    ctx.fillStyle = "#fff"; ctx.font = "bold 13px 'Courier New'"; ctx.fillText("LÍNEAS", px, 96); ctx.fillStyle = "#8bff9e"; ctx.fillText(String(lines), px, 116);
    ctx.fillStyle = "#9aa"; ctx.font = "11px 'Courier New'"; ctx.fillText("SIGUIENTE", px, 150);
    const ns = SHAPES[next]; if (ns) { ns.r.forEach((row, r) => row.forEach((v, col) => { if (v) { ctx.fillStyle = ns.c; ctx.fillRect(px + col * 12, 160 + r * 12, 11, 11); } })); }
    ctx.fillStyle = "#667"; ctx.font = "10px 'Courier New'"; ctx.fillText("← → ↓  ↑ rota", px, H - 44); ctx.fillText("ESPACIO cae", px, H - 30);
    if (over) {
      ctx.fillStyle = "rgba(5,6,10,.82)"; ctx.fillRect(0, 0, W, H);
      ctx.textAlign = "center"; ctx.fillStyle = "#fa4dd5"; ctx.font = "bold 22px 'Courier New'"; ctx.fillText("GAME OVER", W / 2, H / 2 - 8);
      ctx.fillStyle = "#fff"; ctx.font = "13px 'Courier New'"; ctx.fillText("puntos: " + score + " — espacio para reiniciar", W / 2, H / 2 + 18);
    }
  }
  function loop(now) {
    const dt = last ? now - last : 16; last = now;
    if (!over) { acc += dt; if (acc >= dropMs) { acc = 0; step(); } }
    draw();
    raf = requestAnimationFrame(loop);
  }
  raf = requestAnimationFrame(loop);

  return () => { cancelAnimationFrame(raf); window.removeEventListener("keydown", key); container.innerHTML = ""; };
}
