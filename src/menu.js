// ─────────────────────────────────────────────────────────────
// Menú de Kazoo TV: canales + vista previa, reloj local, volumen,
// estado en vivo (online/offline), noticias con aviso, y admin.
// ─────────────────────────────────────────────────────────────
import { CONFIG } from "./config.js";
import * as audio from "./audio.js";
import { mountFlappy } from "./games/flappy.js";
import { mountSnake } from "./games/snake.js";
import { mountGato } from "./games/gato.js";
import { mountRunner } from "./games/runner.js";
import { mountFnaf } from "./games/fnaf.js";
import { store, seedIfEmpty, onChange } from "./store.js";
import { isAdmin, toggleAdmin, onAdminChange } from "./admin.js";
import { mountNews } from "./channels/news.js";
import { mountGang } from "./channels/gang.js";
import { checkEventPopup, openEventAdmin } from "./events.js";

function el(tag, cls) { const n = document.createElement(tag); if (cls) n.className = cls; return n; }
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

export function runMenu(root) {
  seedIfEmpty();
  root.innerHTML = "";
  const crt = el("div", "crt flicker");
  crt.innerHTML = `<div class="fx-grad"></div><div class="grain"></div><div class="scanlines"></div><div class="fx-bloom"></div><div class="vignette"></div><div class="hud-corner"><span class="hc-tl">KZO-TV // UPLINK</span><span class="hc-br" id="hcTs"></span></div><div class="fx-glitch" id="fxGlitch"></div>`;
  const screen = el("div", "screen");
  crt.appendChild(screen);
  root.appendChild(crt);

  screen.innerHTML = `
    <div class="topbar">
      <div class="brand"><div class="k">K</div><div><div class="tt">KAZOO GANG</div><div class="sub">Kazoo TV<span class="caret"></span></div></div></div>
      <div class="hud-top"><span class="hud-sig" id="hudSig">▮▮▮▮▯</span><span class="hud-tag" id="hudSys">SYS: NOMINAL</span></div>
      <div class="corner">
        <div class="ch" id="chNum">CH 01</div>
        <div class="clock" id="clock">--:--:--</div>
        <div class="corner-sub" id="hudUptime">UPTIME 00:00:00</div>
        <div class="corner-sub">19.43°N 99.13°W</div>
      </div>
    </div>
    <div class="mid" id="mid"></div>
    <div class="botbar">
      <div class="bl"><button id="adminBtn" class="admin-btn">🔒 ADMIN</button><button id="evBtn" class="admin-btn" style="display:none">🗓️ EVENTOS</button><span id="hint">◄ ► CANAL · OK ENTRAR · ESC VOLVER</span></div>
      <div class="hud-bot"><span class="hud-chip">LAT <b id="hudLat">--</b></span><span class="hud-chip">CPU <b id="hudCpu">--</b></span><span class="hud-chip">RAM <b id="hudRam">--</b></span><span class="hud-chip" id="hudNow">CH01 · EN VIVO</span></div>
      <div class="vol"><span>VOL</span><input type="range" id="vol" min="0" max="100" value="60" /><span id="volval">60</span></div>
    </div>`;

  const mid = screen.querySelector("#mid");
  const chNum = screen.querySelector("#chNum");
  const adminBtn = screen.querySelector("#adminBtn");
  const evBtn = screen.querySelector("#evBtn");

  // Transición tipo "cambio de frecuencia" (glitch CRT) entre canales.
  const fxGlitch = crt.querySelector("#fxGlitch");
  let glTimer = null;
  function glitch(strong) {
    fxGlitch.classList.remove("on", "strong");
    void fxGlitch.offsetWidth; // reinicia la animación
    fxGlitch.classList.add("on");
    if (strong) fxGlitch.classList.add("strong");
    clearTimeout(glTimer);
    glTimer = setTimeout(() => fxGlitch.classList.remove("on", "strong"), strong ? 300 : 200);
  }
  function updateNow() {
    const c = channels[sel];
    const n = screen.querySelector("#hudNow");
    if (n && c) n.textContent = "CH" + c.n + " · " + c.name;
  }

  const liveState = { online: null, text: "" };
  let sel = 0;
  let inChannel = false;
  let cleanup = null;

  function liveBadge() {
    if (liveState.online === true) return `<span class="live-badge on">🔴 ONLINE${liveState.text ? " · " + esc(liveState.text) : ""}</span>`;
    if (liveState.online === false) return `<span class="live-badge off">⚫ OFFLINE</span>`;
    return `<span class="live-badge unk">buscando señal…</span>`;
  }

  const channels = [
    {
      n: "01", name: "EN VIVO",
      preview: () => `<div class="pv-tag">🔴 EN VIVO · TWITCH</div>${liveBadge()}<div class="pv-line">${liveState.online === false ? 'Ahorita está apagado. Entra para ver el "offline" o cae al rato.' : "¡Cae al directo cuando esté prendido!"}</div><button class="btn enter">▶ ENTRAR AL DIRECTO</button>`,
      open: (stage) => {
        const host = location.hostname || "localhost";
        stage.innerHTML = `<div class="live-wrap"><div class="live-status" id="lst">${liveBadge()}</div><iframe src="https://player.twitch.tv/?channel=${CONFIG.twitchChannel}&parent=${host}&autoplay=true&muted=false" allowfullscreen></iframe></div>`;
        return () => { stage.innerHTML = ""; };
      },
    },
    {
      n: "02", name: "KAZOO CINEMA",
      preview: `<div class="pv-tag">🎬 KAZOO CINEMA</div><div class="pv-big">En función · 24/7</div><div class="pv-line">Solo tus videos largos, todo el día, como en el cine.</div><button class="btn enter">▶ ENTRAR A LA SALA</button>`,
      open: (stage) => {
        const list = CONFIG.cinemaVideos;
        const first = list[0];
        const rest = list.slice(1).join(",");
        const src = `https://www.youtube-nocookie.com/embed/${first}?playlist=${rest}&loop=1&autoplay=1&rel=0&modestbranding=1`;
        stage.innerHTML = `<div class="theater"><div class="curtain left"></div><div class="curtain right"></div><div class="screenbox" id="cineScreen"><div class="cine-poster"><div class="cine-badge">🎬 KAZOO CINEMA</div><div class="cine-title">FUNCIÓN CONTINUA</div><div class="cine-desc">Tus videos largos en loop, 24/7. ${list.length} títulos en cartelera.</div><button class="btn cine-play">▶ PLAY</button><div class="cine-meta">CH02 · 1080p · DUR ∞</div></div></div><div class="seats"></div></div>`;
        const box = stage.querySelector("#cineScreen");
        stage.querySelector(".cine-play").onclick = () => { audio.enterSfx(); box.innerHTML = `<iframe src="${src}" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`; };
        return () => { stage.innerHTML = ""; };
      },
    },
    {
      n: "03", name: "NOTICIAS Y ANUNCIOS",
      preview: () => {
        const news = store.news().slice(0, 3);
        return `<div class="pv-tag">📢 NOTICIAS Y ANUNCIOS</div>${news.length ? news.map((x) => `<div class="pv-line">• ${esc(x.title)}</div>`).join("") : '<div class="pv-line">Sin noticias todavía.</div>'}<button class="btn enter">▶ VER NOTICIAS</button>`;
      },
      open: (stage) => mountNews(stage, { audio, onPublish: (t) => showToast(t) }),
    },
    {
      n: "04", name: "KAZOO GANG",
      preview: `<div class="pv-tag">💬 KAZOO GANG · MURO</div><div class="pv-big">Grafitea el muro</div><div class="pv-line">Pinta tu tag, deja tu marca. Todos pueden pintar.</div><button class="btn enter">▶ ENTRAR AL MURO</button>`,
      open: (stage) => mountGang(stage, { audio }),
    },
    {
      n: "05", name: "MINIJUEGOS",
      preview: `<div class="pv-tag">🕹️ MINIJUEGOS</div><div class="pv-line">🐤 Flappy Gata</div><div class="pv-line">🐍 Snake (flechas/WASD)</div><div class="pv-line"># Gato vs IA</div><div class="pv-line">🏃 Kazoo Runner</div><button class="btn enter">▶ JUGAR</button>`,
      open: (stage) => {
        const games = [
          { t: "🐤 Flappy Gata", m: mountFlappy },
          { t: "🐍 Snake", m: mountSnake },
          { t: "#  Gato vs IA", m: mountGato },
          { t: "🏃 Kazoo Runner", m: mountRunner },
          { t: "🌙 Noche en Kazoo (FNAF)", m: mountFnaf },
        ];
        let gclean = null;
        function lobby() {
          if (gclean) { gclean(); gclean = null; }
          stage.innerHTML = `<div class="arcade"><h3>🕹️ MINIJUEGOS</h3><div class="glist"></div><div class="pv-note">Flechas / WASD / espacio</div></div>`;
          const gl = stage.querySelector(".glist");
          games.forEach((g) => { const b = el("button", "btn ghost"); b.textContent = g.t; b.onclick = () => { audio.enterSfx(); play(g); }; gl.appendChild(b); });
        }
        function play(g) {
          stage.innerHTML = `<div class="gamewrap"><button class="btn ghost backg">◄ JUEGOS</button><div class="gcanvas"></div></div>`;
          stage.querySelector(".backg").onclick = () => { audio.blip(); lobby(); };
          gclean = g.m(stage.querySelector(".gcanvas"), audio);
        }
        lobby();
        return () => { if (gclean) gclean(); };
      },
    },
    {
      n: "06", name: "MÁS KAZOO",
      preview: `<div class="pv-tag">🔗 MÁS KAZOO</div><div class="pv-big">Todo lo demás de mí</div><div class="pv-line">Tus redes en un solo lugar.</div><button class="btn enter">▶ VER REDES</button>`,
      open: (stage) => {
        const links = CONFIG.socials.map((s) => `<a class="social" style="--c:${s.color}" href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join("");
        stage.innerHTML = `<div class="more"><h3>🔗 MÁS KAZOO</h3><p>Sígueme en todos lados — aquí están todos mis links.</p><div class="sgrid">${links}</div></div>`;
        return () => { stage.innerHTML = ""; };
      },
    },
  ];

  function previewHtml(c) { return typeof c.preview === "function" ? c.preview() : c.preview; }

  function renderList() {
    mid.className = "mid";
    mid.innerHTML = `<ul class="menu-list" id="list"></ul><div class="preview" id="prev"></div>`;
    const list = mid.querySelector("#list");
    channels.forEach((c, i) => {
      const li = el("li", i === sel ? "sel" : "");
      li.textContent = (i === sel ? "▸ " : "  ") + c.n + "   " + c.name;
      li.onclick = () => { if (i === sel) openChannel(); else { sel = i; glitch(false); audio.blip(); renderList(); } };
      list.appendChild(li);
    });
    const prev = mid.querySelector("#prev");
    prev.innerHTML = previewHtml(channels[sel]);
    const pb = prev.querySelector(".enter");
    if (pb) pb.onclick = openChannel;
    chNum.textContent = "CH " + channels[sel].n;
    updateNow();
  }

  function showMenu() {
    if (cleanup) { cleanup(); cleanup = null; }
    inChannel = false;
    renderList();
  }

  function openChannel() {
    glitch(true);
    audio.enterSfx();
    audio.staticBurst();
    inChannel = true;
    chNum.textContent = "CH " + channels[sel].n;
    updateNow();
    mid.className = "mid";
    mid.innerHTML = `<div class="channel"><div class="chead"><span>${channels[sel].n} · ${channels[sel].name}</span><button class="btn ghost back">◄ VOLVER</button></div><div class="stage" id="stage"></div></div>`;
    mid.querySelector(".back").onclick = () => { glitch(true); audio.blip(); audio.staticBurst(); showMenu(); };
    cleanup = channels[sel].open(mid.querySelector("#stage")) || null;
  }

  // ── Aviso amarillo de noticias ──
  function showToast(title) {
    const t = el("div", "news-toast");
    t.innerHTML = `<span class="nt-ico">📢</span><div class="nt-body"><b>¡NOTICIA NUEVA!</b><div class="nt-title">${esc(title)}</div></div><span class="nt-x">✕</span>`;
    crt.appendChild(t);
    requestAnimationFrame(() => t.classList.add("show"));
    const close = () => { t.classList.remove("show"); setTimeout(() => t.remove(), 300); };
    t.querySelector(".nt-x").onclick = (e) => { e.stopPropagation(); close(); };
    t.onclick = () => { close(); store.markSeen(); if (!inChannel) { sel = 2; openChannel(); } };
    audio.beep(990, 0.08); setTimeout(() => audio.beep(760, 0.08), 110);
    setTimeout(close, 8000);
  }

  // ── Estado en vivo (decapi.me, gratis, sin claves) ──
  async function refreshLive() {
    try {
      const r = await fetch(`https://decapi.me/twitch/uptime/${CONFIG.twitchChannel}`, { cache: "no-store" });
      const txt = (await r.text()).trim();
      liveState.online = !/offline|not\s|error|unable/i.test(txt);
      liveState.text = liveState.online ? txt : "";
    } catch { liveState.online = null; liveState.text = ""; }
    if (!inChannel && sel === 0) renderList();
    else if (inChannel && sel === 0) { const b = mid.querySelector("#lst"); if (b) b.innerHTML = liveBadge(); }
  }

  // Reloj local
  const clock = screen.querySelector("#clock");
  const tick = () => (clock.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
  tick(); setInterval(tick, 1000);

  // ── HUD vivo (uptime real; cpu/ram/lat/señal decorativos) ──
  const startTime = Date.now();
  const H = {
    sig: screen.querySelector("#hudSig"), sys: screen.querySelector("#hudSys"), up: screen.querySelector("#hudUptime"),
    lat: screen.querySelector("#hudLat"), cpu: screen.querySelector("#hudCpu"), ram: screen.querySelector("#hudRam"), ts: crt.querySelector("#hcTs"),
  };
  const p2 = (n) => String(n).padStart(2, "0");
  let hCpu = 12, hRam = 41, hLat = 24;
  function updateHud() {
    const up = Math.floor((Date.now() - startTime) / 1000);
    H.up.textContent = `UPTIME ${p2(Math.floor(up / 3600))}:${p2(Math.floor(up / 60) % 60)}:${p2(up % 60)}`;
    hCpu = Math.max(6, Math.min(48, hCpu + (Math.random() * 6 - 3)));
    hRam = Math.max(28, Math.min(74, hRam + (Math.random() * 4 - 2)));
    hLat = Math.max(11, Math.min(72, hLat + (Math.random() * 10 - 5)));
    H.cpu.textContent = Math.round(hCpu) + "%";
    H.ram.textContent = Math.round(hRam) + "%";
    H.lat.textContent = Math.round(hLat) + "ms";
    const bars = Math.random() < 0.14 ? 3 : Math.random() < 0.25 ? 5 : 4;
    H.sig.textContent = "▮".repeat(bars) + "▯".repeat(5 - bars);
    if (Math.random() < 0.05) H.sys.textContent = ["SIGNAL: WEAK", "RE-TUNING…", "SYNC", "UPLINK OK"][Math.floor(Math.random() * 4)];
    else if (Math.random() < 0.15) H.sys.textContent = "SYS: NOMINAL";
    const d = new Date();
    H.ts.textContent = `${d.getFullYear()}.${p2(d.getMonth() + 1)}.${p2(d.getDate())} ${p2(d.getHours())}:${p2(d.getMinutes())}:${p2(d.getSeconds())} · v1.0`;
  }
  updateHud(); setInterval(updateHud, 1000);

  // Tick sutil al pasar el cursor por algo interactivo
  let lastHover = null;
  screen.addEventListener("pointerover", (e) => {
    const t = e.target.closest(".menu-list li, .btn, .admin-btn, .enter, .social, .tool");
    if (t && t !== lastHover) { lastHover = t; audio.tick(); }
  });

  // Interferencia MUY ocasional (glitch breve + estática bajita)
  (function scheduleInterference() {
    setTimeout(() => { glitch(false); audio.staticBurst(0.05); scheduleInterference(); }, 18000 + Math.random() * 32000);
  })();

  // Volumen funcional
  const vol = screen.querySelector("#vol");
  const vv = screen.querySelector("#volval");
  vol.oninput = () => { vv.textContent = vol.value; audio.setVolume(vol.value / 100); };
  vol.onchange = () => audio.blip();
  audio.setVolume(0.6);

  // Admin
  adminBtn.onclick = () => toggleAdmin();
  evBtn.onclick = () => openEventAdmin(audio);
  function applyAdminUI(admin) {
    adminBtn.textContent = admin ? "🔓 ADMIN ✓" : "🔒 ADMIN";
    adminBtn.classList.toggle("on", admin);
    evBtn.style.display = admin ? "" : "none";
  }
  applyAdminUI(isAdmin());
  onAdminChange((admin) => {
    applyAdminUI(admin);
    if (inChannel && (sel === 2 || sel === 3)) openChannel();
  });

  // Teclado (control remoto)
  document.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || e.target.isContentEditable) return;
    if (inChannel) { if (e.key === "Escape") showMenu(); return; }
    if (e.key === "ArrowDown") { e.preventDefault(); sel = (sel + 1) % channels.length; glitch(false); audio.blip(); renderList(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); sel = (sel - 1 + channels.length) % channels.length; glitch(false); audio.blip(); renderList(); }
    else if (e.key === "Enter") openChannel();
  });

  showMenu();
  refreshLive();
  setInterval(refreshLive, 60000);

  // Tiempo real: refresca previews y avisa de noticias nuevas cuando llegan.
  let toastChecked = false;
  onChange(() => {
    if (!inChannel) renderList();
    if (!toastChecked && store.news().length) { toastChecked = true; if (store.hasUnseen()) showToast(store.news()[0].title); }
  });
  // Aviso de evento próximo (≤ ~3 días)
  setTimeout(() => checkEventPopup(crt, audio), 2200);
}
