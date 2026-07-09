// Flappy Gata — vuela a tu gata entre los tubos. Espacio / W / ↑ / clic.
// Física independiente del framerate (dt) para que no vaya rapidísimo en pantallas de 120/144 Hz.
import { CONFIG } from "../config.js";

export function mountFlappy(container, audio) {
  const W = 420, H = 520;
  const c = document.createElement("canvas");
  c.className = "game";
  c.width = W; c.height = H;
  container.appendChild(c);
  const ctx = c.getContext("2d");
  const cat = new Image();
  cat.src = CONFIG.catImage;

  const GAP = 158, PW = 60, SPEED = 2.3, G = 0.42, FLAP = -7.2;
  let bird, pipes, score, best = 0, state, raf, last = 0;

  function reset() { bird = { x: 96, y: H / 2, v: 0, r: 18 }; pipes = []; score = 0; state = "ready"; }
  reset();

  function addPipe() { const top = 46 + Math.random() * (H - GAP - 150); pipes.push({ x: W, top, passed: false }); }
  function flap() {
    if (state === "ready") { state = "play"; addPipe(); }
    if (state === "play") { bird.v = FLAP; audio.beep(660, 0.05); }
    else if (state === "dead") reset();
  }
  function key(e) {
    if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") { e.preventDefault(); flap(); }
  }
  window.addEventListener("keydown", key);
  c.addEventListener("click", flap);
  function die() { if (state !== "dead") { state = "dead"; audio.staticBurst(0.1); } }

  function loop(now) {
    const dt = last ? Math.min((now - last) / 16.6667, 3) : 1;
    last = now;
    ctx.fillStyle = "#05060a"; ctx.fillRect(0, 0, W, H);
    if (state === "play") {
      bird.v += G * dt;
      bird.y += bird.v * dt;
      if (pipes.length === 0 || pipes[pipes.length - 1].x < W - 210) addPipe();
      pipes.forEach((p) => (p.x -= SPEED * dt));
      pipes = pipes.filter((p) => p.x + PW > 0);
      pipes.forEach((p) => {
        if (!p.passed && p.x + PW < bird.x) { p.passed = true; score++; best = Math.max(best, score); audio.beep(880, 0.05); }
        const inX = bird.x + bird.r > p.x && bird.x - bird.r < p.x + PW;
        if (inX && (bird.y - bird.r < p.top || bird.y + bird.r > p.top + GAP)) die();
      });
      if (bird.y + bird.r > H || bird.y - bird.r < 0) die();
    }
    ctx.fillStyle = "#fa4dd5";
    pipes.forEach((p) => { ctx.fillRect(p.x, 0, PW, p.top); ctx.fillRect(p.x, p.top + GAP, PW, H - p.top - GAP); });
    if (cat.complete && cat.naturalWidth) ctx.drawImage(cat, bird.x - bird.r, bird.y - bird.r, bird.r * 2, bird.r * 2);
    else { ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(bird.x, bird.y, bird.r, 0, 7); ctx.fill(); }
    ctx.fillStyle = "#fff"; ctx.font = "bold 28px 'Courier New'"; ctx.textAlign = "center"; ctx.fillText(score, W / 2, 52);
    if (state === "ready") { ctx.font = "15px 'Courier New'"; ctx.fillText("ESPACIO / W / CLIC PARA VOLAR", W / 2, H / 2 - 40); }
    if (state === "dead") {
      ctx.fillStyle = "#fa4dd5"; ctx.font = "bold 24px 'Courier New'"; ctx.fillText("¡TE ESTRELLASTE!", W / 2, H / 2 - 16);
      ctx.fillStyle = "#fff"; ctx.font = "15px 'Courier New'"; ctx.fillText("mejor: " + best + " — clic para reintentar", W / 2, H / 2 + 12);
    }
    raf = requestAnimationFrame(loop);
  }
  raf = requestAnimationFrame(loop);

  return () => { cancelAnimationFrame(raf); window.removeEventListener("keydown", key); container.innerHTML = ""; };
}
