// ─────────────────────────────────────────────────────────────
// Canal 04 · KAZOO GANG — muro interactivo tipo pizarra:
// pincel (como Paint), texto, imágenes y posts. Todo se arrastra.
// Cada quien edita/borra lo suyo; el admin puede con todo.
// ─────────────────────────────────────────────────────────────
import { CONFIG } from "../config.js";
import { store, uid, ownerId, onChange } from "../store.js";
import { isAdmin } from "../admin.js";

const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
const COLORS = ["#fa4dd5", "#4dd5fa", "#8bff9e", "#ffd24d", "#ff6b6b", "#c084fc", "#ffffff", "#000000"];

function downscale(file, max = 480) {
  return new Promise((res) => {
    const r = new FileReader();
    r.onload = () => { const img = new Image(); img.onload = () => { let { width: w, height: h } = img; if (w > max || h > max) { const s = max / Math.max(w, h); w = Math.round(w * s); h = Math.round(h * s); } const cv = document.createElement("canvas"); cv.width = w; cv.height = h; cv.getContext("2d").drawImage(img, 0, 0, w, h); res(cv.toDataURL("image/png")); }; img.src = r.result; };
    r.readAsDataURL(file);
  });
}

export function mountGang(stage, { audio }) {
  const me = ownerId();
  let mode = "move", color = COLORS[0], brush = 4, stroke = null, erasing = false;

  stage.innerHTML = `
    <div class="board-wrap">
      <div class="board" id="board"><canvas id="paint"></canvas></div>
      <div class="board-tools">
        <button class="tool sel" data-mode="move" title="Mover">🖐️</button>
        <button class="tool" data-mode="paint" title="Pincel">✏️</button>
        <button class="tool" data-mode="text" title="Texto">🅰️</button>
        <button class="tool" data-mode="image" title="Imagen">🖼️</button>
        <button class="tool" data-mode="post" title="Post">📝</button>
        <button class="tool" data-mode="erase" title="Borrar">🧽</button>
        <span class="tool-sep"></span>
        <span class="swatches" id="sw"></span>
        <input type="range" id="brush" min="2" max="22" value="4" title="Grosor del pincel" />
        ${isAdmin() ? `<button class="btn ghost" id="clearAll">🗑️ TODO</button>` : ""}
        ${CONFIG.discordInvite ? `<a class="btn ghost dc" href="${CONFIG.discordInvite}" target="_blank" rel="noopener">💬 DISCORD</a>` : ""}
      </div>
      <input type="file" id="imgpick" accept="image/*" hidden />
    </div>`;

  const board = stage.querySelector("#board");
  const canvas = stage.querySelector("#paint");
  const ctx = canvas.getContext("2d");
  const imgpick = stage.querySelector("#imgpick");

  const sw = stage.querySelector("#sw");
  COLORS.forEach((c, i) => { const b = document.createElement("button"); b.className = "swatch" + (i === 0 ? " on" : ""); b.style.background = c; b.onclick = () => { color = c; sw.querySelectorAll(".swatch").forEach((s) => s.classList.remove("on")); b.classList.add("on"); }; sw.appendChild(b); });
  stage.querySelector("#brush").oninput = (e) => (brush = +e.target.value);
  if (isAdmin()) stage.querySelector("#clearAll").onclick = () => { if (confirm("¿Borrar TODO el muro?")) { store.graffiti().slice().forEach((g) => store.deleteGraffiti(g.id)); audio.staticBurst(0.12); render(); } };

  stage.querySelectorAll(".tool").forEach((b) => { b.onclick = () => { mode = b.dataset.mode; stage.querySelectorAll(".tool").forEach((t) => t.classList.remove("sel")); b.classList.add("sel"); board.style.cursor = mode === "move" ? "default" : mode === "erase" ? "cell" : "crosshair"; }; });

  // Goma: borra los trazos del pincel cercanos al cursor (además de items sueltos).
  function eraseAt(nx, ny, rad = 0.04) {
    let changed = false;
    items().filter((i) => i.type === "draw" && canEdit(i)).forEach((it) => {
      if (it.points.some((p) => Math.hypot(p[0] - nx, p[1] - ny) < rad)) { store.deleteGraffiti(it.id); changed = true; }
    });
    if (changed) { audio.staticBurst(0.05); redraw(); }
  }

  const items = () => store.graffiti();
  const canEdit = (it) => isAdmin() || it.owner === me;

  function sizeCanvas() { canvas.width = board.clientWidth; canvas.height = board.clientHeight; redraw(); }
  function drawStroke(d) {
    ctx.strokeStyle = d.color; ctx.lineWidth = d.size; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath();
    d.points.forEach((p, i) => { const x = p[0] * canvas.width, y = p[1] * canvas.height; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
    ctx.stroke();
  }
  function redraw() { ctx.clearRect(0, 0, canvas.width, canvas.height); items().filter((i) => i.type === "draw").forEach(drawStroke); }

  function render() {
    board.querySelectorAll(".bitem").forEach((n) => n.remove());
    board.querySelector(".wall-empty")?.remove();
    const its = items();
    if (its.length === 0) { const e = document.createElement("div"); e.className = "wall-empty"; e.textContent = "Muro vacío… pinta, escribe o sube algo 🎨"; board.appendChild(e); }
    its.filter((i) => i.type !== "draw").forEach((it) => board.appendChild(itemEl(it)));
    redraw();
  }

  function itemEl(it) {
    const d = document.createElement("div");
    d.className = "bitem bitem-" + it.type;
    d.style.left = it.x + "%"; d.style.top = it.y + "%";
    if (it.rot) d.style.transform = `rotate(${it.rot}deg)`;
    if (it.type === "text") { d.style.color = it.color; d.style.fontSize = (it.size || 26) + "px"; d.innerHTML = `<span>${esc(it.content)}</span>`; }
    else if (it.type === "image") { d.style.width = (it.w || 160) + "px"; d.innerHTML = `<img src="${it.src}" draggable="false" />`; }
    else if (it.type === "post") { d.style.borderColor = it.color || "#fa4dd5"; d.innerHTML = `<div class="post-t" style="color:${it.color || "#fa4dd5"}">${esc(it.title)}</div><div class="post-b">${esc(it.body)}</div>${it.by ? `<div class="post-by">— ${esc(it.by)}</div>` : ""}`; }
    if (canEdit(it)) {
      const ctrl = document.createElement("div"); ctrl.className = "bit-ctrl";
      ctrl.innerHTML = `<button title="editar">✎</button><button title="borrar">✕</button>`;
      const [ed, del] = ctrl.querySelectorAll("button");
      ed.onpointerdown = (e) => e.stopPropagation();
      ed.onclick = (e) => { e.stopPropagation(); editItem(it); };
      del.onpointerdown = (e) => e.stopPropagation();
      del.onclick = (e) => { e.stopPropagation(); store.deleteGraffiti(it.id); audio.staticBurst(0.08); render(); };
      d.appendChild(ctrl);
    }
    d.addEventListener("pointerdown", (e) => {
      if (mode === "erase") { if (canEdit(it)) { store.deleteGraffiti(it.id); audio.staticBurst(0.08); render(); } return; }
      if (mode !== "move" || !canEdit(it)) return;
      e.preventDefault(); e.stopPropagation();
      const rect = board.getBoundingClientRect();
      const sx = e.clientX, sy = e.clientY, ox = it.x, oy = it.y;
      try { d.setPointerCapture(e.pointerId); } catch {}
      d.classList.add("dragging");
      const mv = (ev) => { it.x = Math.max(0, Math.min(96, ox + (ev.clientX - sx) / rect.width * 100)); it.y = Math.max(0, Math.min(94, oy + (ev.clientY - sy) / rect.height * 100)); d.style.left = it.x + "%"; d.style.top = it.y + "%"; };
      const up = () => { d.classList.remove("dragging"); d.removeEventListener("pointermove", mv); d.removeEventListener("pointerup", up); store.updateGraffiti(it.id, { x: it.x, y: it.y }); };
      d.addEventListener("pointermove", mv); d.addEventListener("pointerup", up);
    });
    return d;
  }

  function editItem(it) {
    if (it.type === "text") { const t = prompt("Editar texto:", it.content); if (t != null) { store.updateGraffiti(it.id, { content: t.slice(0, 80) }); render(); } }
    else if (it.type === "post") { const ti = prompt("Título:", it.title); if (ti == null) return; const bo = prompt("Texto:", it.body); if (bo == null) return; store.updateGraffiti(it.id, { title: ti.slice(0, 40), body: bo.slice(0, 220) }); render(); }
    else if (it.type === "image") { if (confirm("¿Borrar imagen?")) { store.deleteGraffiti(it.id); render(); } }
  }

  board.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".bitem")) return;
    const rect = board.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width, ny = (e.clientY - rect.top) / rect.height;
    if (mode === "erase") { erasing = true; try { board.setPointerCapture(e.pointerId); } catch {} eraseAt(nx, ny); }
    else if (mode === "paint") { stroke = { id: uid(), type: "draw", color, size: brush, owner: me, ts: Date.now(), points: [[nx, ny]] }; try { board.setPointerCapture(e.pointerId); } catch {} }
    else if (mode === "text") { const t = prompt("Tu texto:"); if (t) { store.addGraffiti({ id: uid(), type: "text", content: t.slice(0, 80), color, size: 26, x: nx * 100, y: ny * 100, rot: (Math.random() * 16 - 8) | 0, owner: me, ts: Date.now() }); audio.enterSfx(); render(); } }
    else if (mode === "post") { const ti = prompt("Título del post:"); if (!ti) return; const bo = prompt("Texto:") || ""; const by = prompt("Tu nombre (opcional):") || ""; store.addGraffiti({ id: uid(), type: "post", title: ti.slice(0, 40), body: bo.slice(0, 220), by: by.slice(0, 18), color, x: nx * 100, y: ny * 100, owner: me, ts: Date.now() }); audio.enterSfx(); render(); }
    else if (mode === "image") { imgpick._pos = [nx * 100, ny * 100]; imgpick.click(); }
  });
  board.addEventListener("pointermove", (e) => {
    if (!stroke && !erasing) return;
    const rect = board.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width, ny = (e.clientY - rect.top) / rect.height;
    if (erasing) { eraseAt(nx, ny); return; }
    stroke.points.push([nx, ny]);
    drawStroke(stroke);
  });
  board.addEventListener("pointerup", () => {
    erasing = false;
    if (stroke) { if (stroke.points.length > 1) store.addGraffiti(stroke); stroke = null; audio.beep(480, 0.03); }
  });

  imgpick.onchange = async (e) => { const f = e.target.files[0]; if (!f) return; const src = await downscale(f); const [x, y] = imgpick._pos || [40, 30]; store.addGraffiti({ id: uid(), type: "image", src, w: 160, x, y, rot: (Math.random() * 10 - 5) | 0, owner: me, ts: Date.now() }); audio.enterSfx(); e.target.value = ""; render(); };

  sizeCanvas();
  render();
  const off = onChange(() => render());
  const onResize = () => sizeCanvas();
  window.addEventListener("resize", onResize);
  return () => { off(); window.removeEventListener("resize", onResize); stage.innerHTML = ""; };
}
