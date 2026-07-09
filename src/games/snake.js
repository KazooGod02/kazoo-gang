// Snake — flechas o WASD. Cola de entradas para que registre bien los giros rápidos.
export function mountSnake(container, audio) {
  const N = 20, CELL = 22, W = N * CELL, H = N * CELL;
  const c = document.createElement("canvas");
  c.className = "game";
  c.width = W; c.height = H;
  container.appendChild(c);
  const ctx = c.getContext("2d");

  let snake, dir, queue, food, score, state, timer;
  function rndFood() { let f; do { f = { x: (Math.random() * N) | 0, y: (Math.random() * N) | 0 }; } while (snake && snake.some((s) => s.x === f.x && s.y === f.y)); return f; }
  function reset() { snake = [{ x: 10, y: 10 }]; dir = { x: 1, y: 0 }; queue = []; food = rndFood(); score = 0; state = "play"; }
  reset();

  function press(nd) {
    const lastDir = queue.length ? queue[queue.length - 1] : dir;
    if (nd.x === -lastDir.x && nd.y === -lastDir.y) return; // no reversa
    if (nd.x === lastDir.x && nd.y === lastDir.y) return;   // misma dirección
    if (queue.length < 2) queue.push(nd);
  }
  function key(e) {
    const k = e.key.toLowerCase();
    if (k === "arrowup" || k === "w") press({ x: 0, y: -1 });
    else if (k === "arrowdown" || k === "s") press({ x: 0, y: 1 });
    else if (k === "arrowleft" || k === "a") press({ x: -1, y: 0 });
    else if (k === "arrowright" || k === "d") press({ x: 1, y: 0 });
    else if (k === " " && state === "dead") reset();
    if (k.startsWith("arrow") || "wasd ".includes(k)) e.preventDefault();
  }
  window.addEventListener("keydown", key);

  function step() {
    if (state === "play") {
      if (queue.length) dir = queue.shift();
      const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
      if (head.x < 0 || head.y < 0 || head.x >= N || head.y >= N || snake.some((s) => s.x === head.x && s.y === head.y)) {
        state = "dead"; audio.staticBurst(0.1);
      } else {
        snake.unshift(head);
        if (head.x === food.x && head.y === food.y) { score++; audio.beep(880, 0.05); food = rndFood(); }
        else snake.pop();
      }
    }
    draw();
  }
  function draw() {
    ctx.fillStyle = "#05060a"; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#ffd24d"; ctx.fillRect(food.x * CELL + 3, food.y * CELL + 3, CELL - 6, CELL - 6);
    snake.forEach((s, i) => { ctx.fillStyle = i === 0 ? "#fff" : "#fa4dd5"; ctx.fillRect(s.x * CELL + 1, s.y * CELL + 1, CELL - 2, CELL - 2); });
    ctx.fillStyle = "#fff"; ctx.font = "bold 18px 'Courier New'"; ctx.textAlign = "left"; ctx.fillText("★ " + score, 8, 22);
    if (state === "dead") {
      ctx.textAlign = "center"; ctx.fillStyle = "#fa4dd5"; ctx.font = "bold 22px 'Courier New'"; ctx.fillText("GAME OVER", W / 2, H / 2 - 10);
      ctx.fillStyle = "#fff"; ctx.font = "14px 'Courier New'"; ctx.fillText("espacio para reiniciar", W / 2, H / 2 + 16);
    }
  }
  timer = setInterval(step, 95);
  draw();

  return () => { clearInterval(timer); window.removeEventListener("keydown", key); container.innerHTML = ""; };
}
