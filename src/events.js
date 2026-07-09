// ─────────────────────────────────────────────────────────────
// Eventos: el admin los crea. Cuando falta ~3 días o menos, aparece
// una ventana pop-up (estética TV/Windows viejo) con miniatura, texto
// y un botón personalizable; se cierra con la ✕ de arriba.
// ─────────────────────────────────────────────────────────────
import { store, uid } from "./store.js";

const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
const DAY = 864e5;

function downscale(file, max = 640) {
  return new Promise((res) => {
    const r = new FileReader();
    r.onload = () => { const img = new Image(); img.onload = () => { let { width: w, height: h } = img; if (w > max || h > max) { const s = max / Math.max(w, h); w = Math.round(w * s); h = Math.round(h * s); } const cv = document.createElement("canvas"); cv.width = w; cv.height = h; cv.getContext("2d").drawImage(img, 0, 0, w, h); res(cv.toDataURL("image/jpeg", 0.82)); }; img.src = r.result; };
    r.readAsDataURL(file);
  });
}

const DISMISS = "kg_ev_dismissed";
const dismissed = (id) => { try { return (JSON.parse(sessionStorage.getItem(DISMISS)) || []).includes(id); } catch { return false; } };
const dismiss = (id) => { try { const a = JSON.parse(sessionStorage.getItem(DISMISS)) || []; a.push(id); sessionStorage.setItem(DISMISS, JSON.stringify(a)); } catch {} };

function fmtWhen(dateStr) {
  const d = new Date(dateStr), diff = d.getTime() - Date.now();
  const days = Math.floor(diff / DAY), hrs = Math.floor((diff % DAY) / 36e5);
  const when = d.toLocaleString([], { weekday: "long", day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
  return `${when} · ${days > 0 ? `en ${days}d ${hrs}h` : `en ${hrs}h`}`;
}

export function checkEventPopup(root, audio) {
  const now = Date.now();
  const up = store.events()
    .filter((e) => { const d = new Date(e.date).getTime(); return d > now && d - now <= 3.2 * DAY; })
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .find((e) => !dismissed(e.id));
  if (up) showEventPopup(root, up, audio);
}

function showEventPopup(root, ev, audio) {
  const ov = document.createElement("div");
  ov.className = "win-ov";
  ov.innerHTML = `
    <div class="win98">
      <div class="win-bar"><span class="win-title">📺 EVENTO PRÓXIMO</span><button class="win-x" title="cerrar">✕</button></div>
      <div class="win-body">
        ${ev.thumb ? `<img class="win-thumb" src="${ev.thumb}" alt="evento" />` : ""}
        <div class="win-h">${esc(ev.title)}</div>
        <div class="win-when">🗓️ ${esc(fmtWhen(ev.date))}</div>
        ${ev.desc ? `<div class="win-desc">${esc(ev.desc)}</div>` : ""}
      </div>
      <div class="win-foot"><button class="btn win-cta">${esc(ev.buttonText || "¡AHÍ NOS VEMOS!")}</button></div>
    </div>`;
  root.appendChild(ov);
  requestAnimationFrame(() => ov.classList.add("show"));
  if (audio) { audio.beep(880, 0.09); setTimeout(() => audio.beep(1100, 0.09), 120); }
  const close = () => { dismiss(ev.id); ov.classList.remove("show"); setTimeout(() => ov.remove(), 260); };
  ov.querySelector(".win-x").onclick = close;
  ov.querySelector(".win-cta").onclick = () => { if (ev.buttonUrl) window.open(ev.buttonUrl, "_blank", "noopener"); close(); };
  ov.addEventListener("click", (e) => { if (e.target === ov) close(); });
}

// ── Admin: gestionar eventos ──
export function openEventAdmin(audio) {
  const ov = document.createElement("div");
  ov.className = "modal-ov";
  document.body.appendChild(ov);
  ov.addEventListener("keydown", (e) => e.stopPropagation());
  ov.addEventListener("click", (e) => { if (e.target === ov) ov.remove(); });

  function list() {
    const evs = store.events().slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    ov.innerHTML = `<div class="modal modal-lg">
      <h3>🗓️ EVENTOS</h3>
      <div class="ev-list">${evs.length ? evs.map((e) => `<div class="ev-row"><span>${esc(e.title)} · ${new Date(e.date).toLocaleString()}</span><span><button data-ed="${e.id}" class="mini">✎</button><button data-del="${e.id}" class="mini">✕</button></span></div>`).join("") : '<div class="pv-note">Sin eventos. Crea uno y saldrá el aviso cuando falten ~3 días.</div>'}</div>
      <div class="mrow"><button class="btn" id="newEv">＋ NUEVO EVENTO</button><button class="btn ghost" id="closeEv">CERRAR</button></div>
    </div>`;
    ov.querySelector("#closeEv").onclick = () => ov.remove();
    ov.querySelector("#newEv").onclick = () => form(null);
    ov.querySelectorAll("[data-ed]").forEach((b) => (b.onclick = () => form(store.events().find((x) => x.id === b.dataset.ed))));
    ov.querySelectorAll("[data-del]").forEach((b) => (b.onclick = () => { store.deleteEvent(b.dataset.del); list(); }));
  }

  function form(existing) {
    ov.innerHTML = `<div class="modal modal-lg">
      <h3>${existing ? "EDITAR" : "NUEVO"} EVENTO</h3>
      <input type="text" id="et" placeholder="Título del evento" value="${existing ? esc(existing.title) : ""}" />
      <div class="frow"><label>Fecha/hora:</label> <input type="datetime-local" id="ed" value="${existing ? esc(existing.date) : ""}" /></div>
      <textarea id="edesc" class="rt-body" placeholder="Descripción (opcional)">${existing ? esc(existing.desc || "") : ""}</textarea>
      <div class="frow"><label>Miniatura:</label> <input type="file" id="ethumb" accept="image/*" /> <input type="text" id="ethumburl" placeholder="o URL" value="${existing && existing.thumb && !existing.thumb.startsWith("data:") ? esc(existing.thumb) : ""}" /></div>
      <div class="frow"><label>Texto del botón:</label> <input type="text" id="ebtn" placeholder="¡AHÍ NOS VEMOS!" value="${existing ? esc(existing.buttonText || "") : ""}" /></div>
      <div class="frow"><label>Link del botón:</label> <input type="text" id="eurl" placeholder="https://…" value="${existing ? esc(existing.buttonUrl || "") : ""}" /></div>
      <div class="mrow"><button class="btn" id="save">GUARDAR</button><button class="btn ghost" id="back">◄</button></div>
      <div class="merr" id="err"></div>
    </div>`;
    let thumbData = existing ? existing.thumb : "";
    ov.querySelector("#ethumb").onchange = async (e) => { const f = e.target.files[0]; if (f) { thumbData = await downscale(f); ov.querySelector("#err").textContent = "Miniatura lista ✓"; } };
    ov.querySelector("#back").onclick = list;
    ov.querySelector("#save").onclick = () => {
      const title = ov.querySelector("#et").value.trim();
      const date = ov.querySelector("#ed").value;
      if (!title || !date) { ov.querySelector("#err").textContent = "Falta título o fecha"; return; }
      const thumbUrl = ov.querySelector("#ethumburl").value.trim();
      const data = { title, date, desc: ov.querySelector("#edesc").value.trim(), thumb: thumbUrl || thumbData || "", buttonText: ov.querySelector("#ebtn").value.trim(), buttonUrl: ov.querySelector("#eurl").value.trim() };
      if (existing) store.updateEvent(existing.id, data); else store.addEvent({ id: uid(), ...data });
      if (audio) audio.enterSfx();
      list();
    };
  }

  list();
}
