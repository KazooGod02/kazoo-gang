// ─────────────────────────────────────────────────────────────
// Audio con WebAudio — el slider de volumen controla el master gain
// (blips de navegación, estática al cambiar de canal y sonidos de juegos).
// ─────────────────────────────────────────────────────────────
let ctx = null;
let master = null;

export function initAudio() {
  if (ctx) return;
  try {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain();
    master.gain.value = 0.6;
    master.connect(ctx.destination);
  } catch (e) {
    /* sin audio, no pasa nada */
  }
}

export function setVolume(v) {
  if (master) master.gain.value = Math.max(0, Math.min(1, v));
}

function tone(freq, dur, type = "square", gain = 0.14) {
  if (!ctx) return;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.value = freq;
  o.connect(g);
  g.connect(master);
  const t = ctx.currentTime;
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.start(t);
  o.stop(t + dur);
}

export function blip() {
  tone(520, 0.05, "square", 0.1);
}
export function beep(freq = 440, dur = 0.06) {
  tone(freq, dur, "square", 0.1);
}
export function enterSfx() {
  tone(300, 0.08, "square", 0.12);
  setTimeout(() => tone(600, 0.1, "square", 0.12), 70);
}
export function staticBurst(dur = 0.16) {
  if (!ctx) return;
  const size = Math.floor(ctx.sampleRate * dur);
  const buffer = ctx.createBuffer(1, size, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < size; i++) data[i] = (Math.random() * 2 - 1) * 0.5;
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const g = ctx.createGain();
  g.gain.value = 0.22;
  src.connect(g);
  g.connect(master);
  src.start();
}
