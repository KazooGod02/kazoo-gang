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
import { store, seedIfEmpty } from "./store.js";
import { isAdmin, toggleAdmin, onAdminChange } from "./admin.js";
import { mountNews } from "./channels/news.js";
import { mountGang } from "./channels/gang.js";

function el(tag, cls) { const n = document.createElement(tag); if (cls) n.className = cls; return n; }
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

export function runMenu(root) {
  seedIfEmpty();
  root.innerHTML = "";
  const crt = el("div", "crt flicker");
  crt.innerHTML = `<div class="grain"></div><div class="scanlines"></div><div class="vignette"></div>`;
  const screen = el("div", "screen");
  crt.appendChild(screen);
  root.appendChild(crt);

  screen.innerHTML = `
    <div class="topbar">
      <div class="brand"><div class="k">K</div><div><div class="tt">KAZOO GANG</div><div class="sub">Kazoo TV</div></div></div>
      <div class="corner"><div class="ch" id="chNum">CH 01</div><div class="clock" id="clock">--:--:--</div></div>
    </div>
    <div class="mid" id="mid"></div>
    <div class="botbar">
      <div class="bl"><button id="adminBtn" class="admin-btn">🔒 ADMIN</button><span id="hint">◄ ► CANAL · OK ENTRAR · ESC VOLVER</span></div>
      <div class="vol"><span>VOL</span><input type="range" id="vol" min="0" max="100" value="60" /><span id="volval">60</span></div>
    </div>`;

  const mid = screen.querySelector("#mid");
  const chNum = screen.querySelector("#chNum");
  const adminBtn = screen.querySelector("#adminBtn");

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
        stage.innerHTML = `<div class="theater"><div class="curtain left"></div><div class="curtain right"></div><div class="screenbox"><iframe src="${src}" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe></div><div class="seats"></div></div>`;
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
      li.onclick = () => { if (i === sel) openChannel(); else { sel = i; audio.blip(); renderList(); } };
      list.appendChild(li);
    });
    const prev = mid.querySelector("#prev");
    prev.innerHTML = previewHtml(channels[sel]);
    const pb = prev.querySelector(".enter");
    if (pb) pb.onclick = openChannel;
    chNum.textContent = "CH " + channels[sel].n;
  }

  function showMenu() {
    if (cleanup) { cleanup(); cleanup = null; }
    inChannel = false;
    renderList();
  }

  function openChannel() {
    audio.enterSfx();
    audio.staticBurst();
    inChannel = true;
    chNum.textContent = "CH " + channels[sel].n;
    mid.className = "mid";
    mid.innerHTML = `<div class="channel"><div class="chead"><span>${channels[sel].n} · ${channels[sel].name}</span><button class="btn ghost back">◄ VOLVER</button></div><div class="stage" id="stage"></div></div>`;
    mid.querySelector(".back").onclick = () => { audio.blip(); audio.staticBurst(); showMenu(); };
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

  // Volumen funcional
  const vol = screen.querySelector("#vol");
  const vv = screen.querySelector("#volval");
  vol.oninput = () => { vv.textContent = vol.value; audio.setVolume(vol.value / 100); };
  vol.onchange = () => audio.blip();
  audio.setVolume(0.6);

  // Admin
  adminBtn.onclick = () => toggleAdmin();
  onAdminChange((admin) => {
    adminBtn.textContent = admin ? "🔓 ADMIN ✓" : "🔒 ADMIN";
    adminBtn.classList.toggle("on", admin);
    if (inChannel && (sel === 2 || sel === 3)) openChannel();
  });

  // Teclado (control remoto)
  document.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || e.target.isContentEditable) return;
    if (inChannel) { if (e.key === "Escape") showMenu(); return; }
    if (e.key === "ArrowDown") { e.preventDefault(); sel = (sel + 1) % channels.length; audio.blip(); renderList(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); sel = (sel - 1 + channels.length) % channels.length; audio.blip(); renderList(); }
    else if (e.key === "Enter") openChannel();
  });

  showMenu();
  refreshLive();
  setInterval(refreshLive, 60000);

  // Aviso al entrar si hay noticias sin ver
  if (store.hasUnseen()) setTimeout(() => showToast(store.news()[0].title), 900);
}
