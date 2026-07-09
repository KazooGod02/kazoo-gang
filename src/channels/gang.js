// ─────────────────────────────────────────────────────────────
// Canal 04 · KAZOO GANG — muro de graffiti. Cualquiera pinta su tag;
// el admin puede editar o borrar cualquier cosa.
// ─────────────────────────────────────────────────────────────
import { CONFIG } from "../config.js";
import { store, uid } from "../store.js";
import { isAdmin } from "../admin.js";

const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
const COLORS = ["#fa4dd5", "#4dd5fa", "#8bff9e", "#ffd24d", "#ff6b6b", "#c084fc", "#ffffff"];
const FONTS = ["'Courier New', monospace", "'Arial Black', sans-serif", "Impact, sans-serif", "Georgia, serif"];

export function mountGang(stage, { audio }) {
  function render() {
    const admin = isAdmin();
    const tags = store.graffiti();
    stage.innerHTML = `
      <div class="gangwrap">
        <div class="wall" id="wall">
          ${tags.length === 0 ? `<div class="wall-empty">El muro está limpio… sé el primero en pintar 🎨</div>` : ""}
        </div>
        <div class="wall-bar">
          <input type="text" id="gname" maxlength="18" placeholder="tu nombre (opcional)" />
          <input type="text" id="gtext" maxlength="60" placeholder="escribe tu graffiti…" />
          <div class="swatches" id="sw"></div>
          <button class="btn" id="paint">PINTAR 🎨</button>
        </div>
        ${admin ? `<div class="admin-flag">MODO ADMIN · toca ✎/✕ en cada tag</div>` : ""}
      </div>`;

    const wall = stage.querySelector("#wall");
    let chosen = COLORS[0];
    const sw = stage.querySelector("#sw");
    COLORS.forEach((c) => {
      const b = document.createElement("button");
      b.className = "swatch";
      b.style.background = c;
      b.onclick = () => { chosen = c; sw.querySelectorAll(".swatch").forEach((s) => s.classList.remove("on")); b.classList.add("on"); };
      sw.appendChild(b);
    });
    sw.firstChild.classList.add("on");

    tags.forEach((g) => wall.appendChild(tagEl(g, admin)));

    function tagEl(g, admin) {
      const d = document.createElement("div");
      d.className = "tag";
      d.style.left = g.x + "%";
      d.style.top = g.y + "%";
      d.style.color = g.color;
      d.style.fontFamily = g.font || FONTS[0];
      d.style.transform = `rotate(${g.rot}deg)`;
      d.innerHTML = `<span class="tag-txt">${esc(g.text)}</span>${g.name ? `<span class="tag-by">— ${esc(g.name)}</span>` : ""}`;
      if (admin) {
        const ctrl = document.createElement("span");
        ctrl.className = "tag-ctrl";
        ctrl.innerHTML = `<button title="editar">✎</button><button title="borrar">✕</button>`;
        const [ed, del] = ctrl.querySelectorAll("button");
        ed.onclick = (e) => { e.stopPropagation(); const nt = prompt("Editar graffiti:", g.text); if (nt != null) { store.updateGraffiti(g.id, { text: nt.slice(0, 60) }); audio.beep(700, 0.05); render(); } };
        del.onclick = (e) => { e.stopPropagation(); store.deleteGraffiti(g.id); audio.staticBurst(0.1); render(); };
        d.appendChild(ctrl);
      }
      return d;
    }

    function paint() {
      const text = stage.querySelector("#gtext").value.trim();
      if (!text) return;
      const name = stage.querySelector("#gname").value.trim();
      const g = {
        id: uid(),
        text,
        name,
        color: chosen,
        font: FONTS[(Math.random() * FONTS.length) | 0],
        x: 4 + Math.random() * 78,
        y: 6 + Math.random() * 68,
        rot: (Math.random() * 24 - 12) | 0,
        ts: Date.now(),
      };
      store.addGraffiti(g);
      audio.enterSfx();
      render();
    }
    stage.querySelector("#paint").onclick = paint;
    stage.querySelector("#gtext").addEventListener("keydown", (e) => { e.stopPropagation(); if (e.key === "Enter") paint(); });
    stage.querySelector("#gname").addEventListener("keydown", (e) => e.stopPropagation());
  }

  render();
  return () => { stage.innerHTML = ""; };
}

export function gangDiscordFooter() {
  return CONFIG.discordInvite;
}
