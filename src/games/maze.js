// Kazoo Maze — laberinto PROCEDURAL. Llega a la salida 🏁. Flechas / WASD.
export function mountMaze(container, audio) {
  const CELL = 18, PAD = 14;
  const c = document.createElement("canvas");
  c.className = "game";
  container.appendChild(c);
  const ctx = c.getContext("2d");

  let GW, GH, grid, px, py, level, moves, state, W, H, t0, raf, last = 0, done = false;

  function genMaze(gw, gh) {
    const g = Array.from({ length: gh }, () => Array(gw).fill(1));
    const stack = [[1, 1]]; g[1][1] = 0;
    while (stack.length) {
      const [x, y] = stack[stack.length - 1];
      const ds = [[2, 0], [-2, 0], [0, 2], [0, -2]].filter(([dx, dy]) => { const nx = x + dx, ny = y + dy; return nx > 0 && nx < gw - 1 && ny > 0 && ny < gh - 1 && g[ny][nx] === 1; });
      if (!ds.length) { stack.pop(); continue; }
      const [dx, dy] = ds[(Math.random() * ds.length) | 0];
      g[y + dy / 2][x + dx / 2] = 0; g[y + dy][x + dx] = 0; stack.push([x + dx, y + dy]);
    }
    return g;
  }
  function setup() {
    GW = 11 + level * 2; GH = 11 + level * 2; if (GW > 25) GW = 25; if (GH > 25) GH = 25;
    if (GW % 2 === 0) GW++; if (GH % 2 === 0) GH++;
    grid = genMaze(GW, GH);
    px = 1; py = 1; moves = 0; done = false; t0 = performance.now();
    W = GW * CELL + PAD * 2; H = GH * CELL + PAD * 2 + 26;
    c.width = W; c.height = H;
  }
  function reset() { level = 1; state = "play"; setup(); }
  reset();

  const open = (x, y) => x >= 0 && x < GW && y >= 0 && y < GH && grid[y][x] === 0;
  function move(dx, dy) {
    if (state !== "play" && state !== "win") return;
    if (open(px + dx, py + dy)) { px += dx; py += dy; moves++; audio.tick && audio.tick(); if (px === GW - 2 && py === GH - 2) winLevel(); }
  }
  function winLevel() { state = "win"; done = true; audio.beep(880, 0.08); setTimeout(() => audio.beep(1200, 0.1), 90); }

  function key(e) {
    const k = e.code;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "KeyW", "KeyA", "KeyS", "KeyD", "Space"].includes(k)) e.preventDefault();
    if (state === "win" && (k === "Space" || k === "Enter")) { level++; state = "play"; setup(); return; }
    if (k === "ArrowUp" || k === "KeyW") move(0, -1);
    else if (k === "ArrowDown" || k === "KeyS") move(0, 1);
    else if (k === "ArrowLeft" || k === "KeyA") move(-1, 0);
    else if (k === "ArrowRight" || k === "KeyD") move(1, 0);
  }
  window.addEventListener("keydown", key);

  function draw() {
    ctx.fillStyle = "#05060a"; ctx.fillRect(0, 0, W, H);
    const oy = 24;
    for (let y = 0; y < GH; y++) for (let x = 0; x < GW; x++) {
      if (grid[y][x] === 1) { ctx.fillStyle = "#241033"; ctx.fillRect(PAD + x * CELL, oy + PAD + y * CELL, CELL, CELL); ctx.strokeStyle = "#6e1a5c"; ctx.strokeRect(PAD + x * CELL + 0.5, oy + PAD + y * CELL + 0.5, CELL - 1, CELL - 1); }
    }
    // salida
    ctx.fillStyle = "#8bff9e"; ctx.fillRect(PAD + (GW - 2) * CELL + 3, oy + PAD + (GH - 2) * CELL + 3, CELL - 6, CELL - 6);
    ctx.font = (CELL - 6) + "px serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText("🏁", PAD + (GW - 2) * CELL + CELL / 2, oy + PAD + (GH - 2) * CELL + CELL / 2 + 1);
    // jugador
    ctx.fillStyle = "#fa4dd5"; ctx.beginPath(); ctx.arc(PAD + px * CELL + CELL / 2, oy + PAD + py * CELL + CELL / 2, CELL / 2 - 3, 0, 7); ctx.fill();
    ctx.textBaseline = "alphabetic";
    // HUD
    const secs = done ? ((performance.now() - t0) / 1000) : ((performance.now() - t0) / 1000);
    ctx.fillStyle = "#fff"; ctx.font = "bold 13px 'Courier New'"; ctx.textAlign = "left"; ctx.fillText("NIVEL " + level, 10, 17);
    ctx.textAlign = "right"; ctx.fillText(moves + " pasos · " + secs.toFixed(1) + "s", W - 10, 17);
    if (state === "win") {
      ctx.fillStyle = "rgba(5,6,10,.8)"; ctx.fillRect(0, 0, W, H);
      ctx.textAlign = "center"; ctx.fillStyle = "#8bff9e"; ctx.font = "bold 22px 'Courier New'"; ctx.fillText("¡SALIDA! 🏁", W / 2, H / 2 - 6);
      ctx.fillStyle = "#fff"; ctx.font = "13px 'Courier New'"; ctx.fillText("espacio para el siguiente (más grande)", W / 2, H / 2 + 18);
    }
  }
  function loop() { draw(); raf = requestAnimationFrame(loop); }
  raf = requestAnimationFrame(loop);

  return () => { cancelAnimationFrame(raf); window.removeEventListener("keydown", key); container.innerHTML = ""; };
}
