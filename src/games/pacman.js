// Kazoo-Man — laberinto PROCEDURAL. Come todos los puntos, esquiva fantasmas.
// Movimiento cuadrícula-a-cuadrícula: NUNCA puede entrar a una pared (sin bugs).
const GW = 15, GH = 15, CELL = 20; // impares
const DIRS = { up: { dx: 0, dy: -1 }, down: { dx: 0, dy: 1 }, left: { dx: -1, dy: 0 }, right: { dx: 1, dy: 0 } };

export function mountPacman(container, audio) {
  const W = GW * CELL, H = GH * CELL + 28;
  const c = document.createElement("canvas");
  c.className = "game"; c.width = W; c.height = H;
  container.appendChild(c);
  const ctx = c.getContext("2d");

  let grid, pellets, power, pac, ghosts, score, lives, dots, state, frightT, raf, last = 0, level = 1;

  function genMaze() {
    const g = Array.from({ length: GH }, () => Array(GW).fill(1));
    (function carve(x, y) {
      g[y][x] = 0;
      const ds = [[2, 0], [-2, 0], [0, 2], [0, -2]].sort(() => Math.random() - 0.5);
      for (const [dx, dy] of ds) { const nx = x + dx, ny = y + dy; if (nx > 0 && nx < GW - 1 && ny > 0 && ny < GH - 1 && g[ny][nx] === 1) { g[y + dy / 2][x + dx / 2] = 0; carve(nx, ny); } }
    })(1, 1);
    for (let y = 1; y < GH - 1; y++) for (let x = 1; x < GW - 1; x++) {
      if (g[y][x] === 1 && Math.random() < 0.12) { const o = (g[y - 1][x] === 0) + (g[y + 1][x] === 0) + (g[y][x - 1] === 0) + (g[y][x + 1] === 0); if (o >= 2) g[y][x] = 0; }
    }
    return g;
  }
  const open = (x, y) => x >= 0 && x < GW && y >= 0 && y < GH && grid[y][x] === 0;

  function build() {
    grid = genMaze();
    pellets = Array.from({ length: GH }, () => Array(GW).fill(false));
    power = Array.from({ length: GH }, () => Array(GW).fill(false));
    dots = 0;
    for (let y = 0; y < GH; y++) for (let x = 0; x < GW; x++) if (grid[y][x] === 0) { pellets[y][x] = true; dots++; }
    // power pellets en las 4 esquinas abiertas
    const corners = [[1, 1], [GW - 2, 1], [1, GH - 2], [GW - 2, GH - 2]];
    corners.forEach(([cx, cy]) => { const p = nearestOpen(cx, cy); if (p) { power[p[1]][p[0]] = true; } });
    // pac en (1,1)
    pac = { cx: 1, cy: 1, dir: null, want: null, p: 0 };
    pellets[1][1] = false; dots--;
    // fantasmas cerca del centro
    const gc = nearestOpen(7, 7);
    const cols = ["#ff6b6b", "#4dd5fa", "#ffd24d", "#c084fc"];
    ghosts = [];
    for (let i = 0; i < 4; i++) { const s = nearestOpen(7 + (i % 2), 7 + ((i / 2) | 0)) || gc; ghosts.push({ cx: s[0], cy: s[1], dir: pick(s[0], s[1], null), p: 0, home: s.slice(), col: cols[i], eaten: false }); }
  }
  function nearestOpen(x, y) {
    for (let r = 0; r < GW; r++) for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) { const nx = x + dx, ny = y + dy; if (open(nx, ny)) return [nx, ny]; }
    return null;
  }
  function pick(cx, cy, curDir) {
    const opts = Object.values(DIRS).filter((d) => open(cx + d.dx, cy + d.dy));
    const nonRev = opts.filter((d) => !curDir || !(d.dx === -curDir.dx && d.dy === -curDir.dy));
    const list = nonRev.length ? nonRev : opts;
    return list.length ? list[(Math.random() * list.length) | 0] : null;
  }
  function reset() { score = 0; lives = 3; level = 1; state = "play"; frightT = 0; build(); }
  reset();

  function key(e) {
    const map = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right", KeyW: "up", KeyS: "down", KeyA: "left", KeyD: "right" };
    if (map[e.code]) { e.preventDefault(); if (state === "play") pac.want = DIRS[map[e.code]]; }
    if (e.code === "Space" && state !== "play") reset();
  }
  window.addEventListener("keydown", key);

  const SPD = 0.14; // celdas por frame (a 60fps)
  function advance(ent, chooser, dt) {
    ent.p += SPD * dt;
    while (ent.p >= 1) {
      ent.p -= 1;
      ent.cx += ent.dir ? ent.dir.dx : 0; ent.cy += ent.dir ? ent.dir.dy : 0;
      chooser(ent);
      if (!ent.dir || !open(ent.cx + ent.dir.dx, ent.cy + ent.dir.dy)) { ent.dir = ent.dir && open(ent.cx + ent.dir.dx, ent.cy + ent.dir.dy) ? ent.dir : null; ent.p = 0; break; }
    }
  }
  function pacChoose(e) {
    if (e.want && open(e.cx + e.want.dx, e.cy + e.want.dy)) { e.dir = e.want; }
    else if (e.dir && !open(e.cx + e.dir.dx, e.cy + e.dir.dy)) { e.dir = null; }
    // comer
    if (pellets[e.cy][e.cx]) { pellets[e.cy][e.cx] = false; dots--; score += 10; audio.beep(720, 0.02); }
    if (power[e.cy][e.cx]) { power[e.cy][e.cx] = false; frightT = 6000; score += 50; audio.beep(1040, 0.08); }
    if (dots <= 0) { level++; score += 200; build(); }
  }
  function ghostChoose(g) {
    if (frightT > 0) { g.dir = pick(g.cx, g.cy, g.dir); return; }
    // 55%: perseguir (elige vecino que acerca a pac); si no, aleatorio
    const opts = Object.values(DIRS).filter((d) => open(g.cx + d.dx, g.cy + d.dy) && !(g.dir && d.dx === -g.dir.dx && d.dy === -g.dir.dy));
    const list = opts.length ? opts : Object.values(DIRS).filter((d) => open(g.cx + d.dx, g.cy + d.dy));
    if (!list.length) { g.dir = null; return; }
    if (Math.random() < 0.55) { list.sort((a, b) => dist(g.cx + a.dx, g.cy + a.dy) - dist(g.cx + b.dx, g.cy + b.dy)); g.dir = list[0]; }
    else g.dir = list[(Math.random() * list.length) | 0];
  }
  const dist = (x, y) => Math.abs(x - pac.cx) + Math.abs(y - pac.cy);
  const cx2px = (cx, dir, p) => (cx + (dir ? dir.dx * p : 0)) * CELL + CELL / 2;
  const cy2px = (cy, dir, p) => (cy + (dir ? dir.dy * p : 0)) * CELL + CELL / 2 + 24;

  function hitGhost() {
    ghosts.forEach((g) => {
      const dx = (g.cx + (g.dir ? g.dir.dx * g.p : 0)) - (pac.cx + (pac.dir ? pac.dir.dx * pac.p : 0));
      const dy = (g.cy + (g.dir ? g.dir.dy * g.p : 0)) - (pac.cy + (pac.dir ? pac.dir.dy * pac.p : 0));
      if (Math.hypot(dx, dy) < 0.6) {
        if (frightT > 0) { score += 200; audio.beep(1300, 0.1); const h = g.home; g.cx = h[0]; g.cy = h[1]; g.p = 0; g.dir = pick(h[0], h[1], null); }
        else { lives--; audio.staticBurst(0.14); if (lives <= 0) { state = "lose"; } else { softReset(); } }
      }
    });
  }
  function softReset() { pac.cx = 1; pac.cy = 1; pac.dir = null; pac.want = null; pac.p = 0; ghosts.forEach((g) => { g.cx = g.home[0]; g.cy = g.home[1]; g.p = 0; g.dir = pick(g.home[0], g.home[1], null); }); frightT = 0; }

  let mouth = 0;
  function draw() {
    ctx.fillStyle = "#05060a"; ctx.fillRect(0, 0, W, H);
    // paredes
    for (let y = 0; y < GH; y++) for (let x = 0; x < GW; x++) if (grid[y][x] === 1) { ctx.fillStyle = "#241033"; ctx.fillRect(x * CELL, y * CELL + 24, CELL, CELL); ctx.strokeStyle = "#6e1a5c"; ctx.strokeRect(x * CELL + 1, y * CELL + 25, CELL - 2, CELL - 2); }
    // puntos
    for (let y = 0; y < GH; y++) for (let x = 0; x < GW; x++) {
      if (pellets[y][x]) { ctx.fillStyle = "#ffd24d"; ctx.beginPath(); ctx.arc(x * CELL + CELL / 2, y * CELL + CELL / 2 + 24, 2, 0, 7); ctx.fill(); }
      if (power[y][x]) { ctx.fillStyle = "#8bff9e"; ctx.beginPath(); ctx.arc(x * CELL + CELL / 2, y * CELL + CELL / 2 + 24, 5, 0, 7); ctx.fill(); }
    }
    // pac
    const px = cx2px(pac.cx, pac.dir, pac.p), py = cy2px(pac.cy, pac.dir, pac.p);
    const ang = pac.dir ? Math.atan2(pac.dir.dy, pac.dir.dx) : 0;
    const m = Math.abs(Math.sin(mouth)) * 0.5;
    ctx.fillStyle = "#ffd24d"; ctx.beginPath(); ctx.moveTo(px, py); ctx.arc(px, py, CELL / 2 - 2, ang + m, ang + Math.PI * 2 - m); ctx.closePath(); ctx.fill();
    // fantasmas
    ghosts.forEach((g) => { const gx = cx2px(g.cx, g.dir, g.p), gy = cy2px(g.cy, g.dir, g.p); ctx.fillStyle = frightT > 0 ? (frightT < 1500 && ((frightT / 200) | 0) % 2 ? "#fff" : "#3355ff") : g.col; ctx.beginPath(); ctx.arc(gx, gy, CELL / 2 - 2, Math.PI, 0); ctx.lineTo(gx + CELL / 2 - 2, gy + CELL / 2 - 2); ctx.lineTo(gx - CELL / 2 + 2, gy + CELL / 2 - 2); ctx.closePath(); ctx.fill(); ctx.fillStyle = "#fff"; ctx.fillRect(gx - 4, gy - 2, 3, 4); ctx.fillRect(gx + 1, gy - 2, 3, 4); });
    // HUD
    ctx.fillStyle = "#fff"; ctx.font = "bold 14px 'Courier New'"; ctx.textAlign = "left"; ctx.fillText("PTS " + score, 8, 17);
    ctx.textAlign = "center"; ctx.fillText("NIVEL " + level, W / 2, 17);
    ctx.textAlign = "right"; ctx.fillStyle = "#ffd24d"; ctx.fillText("●".repeat(Math.max(0, lives)), W - 8, 17);
    if (state === "lose") { ctx.fillStyle = "rgba(5,6,10,.82)"; ctx.fillRect(0, 0, W, H); ctx.textAlign = "center"; ctx.fillStyle = "#fa4dd5"; ctx.font = "bold 24px 'Courier New'"; ctx.fillText("GAME OVER", W / 2, H / 2); ctx.fillStyle = "#fff"; ctx.font = "13px 'Courier New'"; ctx.fillText("puntos: " + score + " — espacio para reiniciar", W / 2, H / 2 + 24); }
  }
  function loop(now) {
    const dt = last ? Math.min((now - last) / 16.6667, 2.5) : 1; last = now; mouth += 0.3 * dt;
    if (state === "play") {
      advance(pac, pacChoose, dt);
      ghosts.forEach((g) => advance(g, ghostChoose, dt));
      if (frightT > 0) frightT = Math.max(0, frightT - dt * 16.6667);
      hitGhost();
    }
    draw();
    raf = requestAnimationFrame(loop);
  }
  raf = requestAnimationFrame(loop);

  return () => { cancelAnimationFrame(raf); window.removeEventListener("keydown", key); container.innerHTML = ""; };
}
