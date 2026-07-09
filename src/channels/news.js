// ─────────────────────────────────────────────────────────────
// Canal 03 · NOTICIAS — lista de tarjetas (título + descripción) que se
// abren al clic para ver la noticia completa (con miniatura/video).
// El admin puede publicar (con negrita/cursiva/etc.), editar y borrar.
// ─────────────────────────────────────────────────────────────
import { store, uid } from "../store.js";
import { isAdmin } from "../admin.js";

const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
function strip(html) { const d = document.createElement("div"); d.innerHTML = html || ""; return (d.textContent || "").trim(); }
function fecha(ts) { return new Date(ts).toLocaleDateString([], { day: "2-digit", month: "short", year: "numeric" }); }
function ytId(url) { const m = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/); return m ? m[1] : null; }

function mediaHtml(item) {
  let h = "";
  if (item.img) h += `<img class="news-img" src="${item.img}" alt="miniatura" />`;
  if (item.video) {
    const id = ytId(item.video);
    if (id) h += `<div class="news-vid"><iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0" allow="encrypted-media; fullscreen" allowfullscreen></iframe></div>`;
    else h += `<video class="news-img" src="${esc(item.video)}" controls></video>`;
  }
  return h;
}

function downscale(file, max = 820) {
  return new Promise((resolve) => {
    const r = new FileReader();
    r.onload = () => {
      const img = new Image();
      img.onload = () => {
        let { width: w, height: h } = img;
        if (w > max || h > max) { const s = max / Math.max(w, h); w = Math.round(w * s); h = Math.round(h * s); }
        const cv = document.createElement("canvas"); cv.width = w; cv.height = h;
        cv.getContext("2d").drawImage(img, 0, 0, w, h);
        resolve(cv.toDataURL("image/jpeg", 0.82));
      };
      img.src = r.result;
    };
    r.readAsDataURL(file);
  });
}

export function mountNews(stage, { audio, onPublish }) {
  function render() {
    const news = store.news();
    const admin = isAdmin();
    const ticker = news.slice(0, 6).map((n) => n.title).join("   •   ") || "Kazoo TV";
    stage.innerHTML = `
      <div class="news">
        <div class="ticker"><span>${esc(ticker)}   •   ${esc(ticker)}   •   </span></div>
        <div class="news-head">
          <h3>📢 NOTICIAS Y ANUNCIOS</h3>
          ${admin ? `<button class="btn" id="addNews">＋ NUEVA NOTICIA</button>` : ""}
        </div>
        <div class="news-list">
          ${news.length === 0 ? `<div class="pv-note">Aún no hay noticias.</div>` : news.map((n) => `
            <div class="news-card" data-id="${n.id}">
              ${n.img ? `<div class="news-thumb" style="background-image:url('${n.img}')"></div>` : `<div class="news-thumb news-thumb-empty">📺</div>`}
              <div class="news-cardbody">
                <div class="news-title">${esc(n.title)}</div>
                <div class="news-desc">${esc(strip(n.html).slice(0, 130))}${strip(n.html).length > 130 ? "…" : ""}</div>
                <div class="news-date">${fecha(n.ts)}${n.video ? " · 🎬" : ""}</div>
              </div>
              <div class="news-go">▸</div>
            </div>`).join("")}
        </div>
      </div>`;
    stage.querySelectorAll(".news-card").forEach((el) => {
      el.onclick = () => { audio.beep(520, 0.05); detail(el.dataset.id); };
    });
    if (admin) stage.querySelector("#addNews").onclick = () => { audio.beep(600, 0.05); openForm(null); };
  }

  function detail(id) {
    const n = store.news().find((x) => x.id === id);
    if (!n) return render();
    const admin = isAdmin();
    stage.innerHTML = `
      <div class="news news-detail">
        <button class="btn ghost" id="back">◄ NOTICIAS</button>
        <h2 class="nd-title">${esc(n.title)}</h2>
        <div class="nd-date">${fecha(n.ts)}</div>
        ${mediaHtml(n)}
        <div class="nd-body">${n.html || ""}</div>
        ${admin ? `<div class="mrow"><button class="btn" id="edit">EDITAR</button><button class="btn ghost" id="del">BORRAR</button></div>` : ""}
      </div>`;
    stage.querySelector("#back").onclick = () => { audio.blip(); render(); };
    if (admin) {
      stage.querySelector("#edit").onclick = () => openForm(n);
      stage.querySelector("#del").onclick = () => { if (confirm("¿Borrar esta noticia?")) { store.deleteNews(n.id); audio.staticBurst(0.1); render(); } };
    }
  }

  function openForm(existing) {
    const ov = document.createElement("div");
    ov.className = "modal-ov";
    ov.innerHTML = `
      <div class="modal modal-lg">
        <h3>${existing ? "EDITAR" : "NUEVA"} NOTICIA</h3>
        <input type="text" id="nt" placeholder="Título" value="${existing ? esc(existing.title) : ""}" />
        <div class="rt-tools">
          <button data-cmd="bold"><b>B</b></button>
          <button data-cmd="italic"><i>I</i></button>
          <button data-cmd="underline"><u>U</u></button>
          <button data-cmd="insertUnorderedList">•</button>
        </div>
        <div id="nb" class="rt-body" contenteditable="true">${existing ? existing.html : ""}</div>
        <div class="frow"><label>Miniatura:</label> <input type="file" id="nimg" accept="image/*" /> <input type="text" id="nimgurl" placeholder="o pega URL de imagen" value="${existing && existing.img && !existing.img.startsWith("data:") ? esc(existing.img) : ""}" /></div>
        <div class="frow"><label>Video:</label> <input type="text" id="nvid" placeholder="URL de YouTube o .mp4 (opcional)" value="${existing ? esc(existing.video || "") : ""}" /></div>
        <div class="mrow"><button class="btn" id="pub">${existing ? "GUARDAR" : "PUBLICAR"}</button><button class="btn ghost" id="cancel">CANCELAR</button></div>
        <div class="merr" id="err"></div>
      </div>`;
    document.body.appendChild(ov);
    let imgData = existing ? existing.img : "";
    const nb = ov.querySelector("#nb");
    ov.querySelectorAll(".rt-tools button").forEach((b) => {
      b.onmousedown = (e) => { e.preventDefault(); document.execCommand(b.dataset.cmd, false, null); nb.focus(); };
    });
    ov.querySelector("#nimg").onchange = async (e) => {
      const f = e.target.files[0];
      if (f) { imgData = await downscale(f); ov.querySelector("#nimgurl").value = ""; ov.querySelector("#err").textContent = "Imagen lista ✓"; }
    };
    const close = () => ov.remove();
    ov.querySelector("#cancel").onclick = close;
    ov.addEventListener("click", (e) => { if (e.target === ov) close(); });
    ov.addEventListener("keydown", (e) => { e.stopPropagation(); if (e.key === "Escape") close(); });
    ov.querySelector("#pub").onclick = () => {
      const title = ov.querySelector("#nt").value.trim();
      const html = nb.innerHTML.trim();
      if (!title) { ov.querySelector("#err").textContent = "Ponle un título"; return; }
      const urlImg = ov.querySelector("#nimgurl").value.trim();
      const img = urlImg || imgData || "";
      const video = ov.querySelector("#nvid").value.trim();
      if (existing) {
        store.updateNews(existing.id, { title, html, img, video });
        audio.beep(700, 0.06);
      } else {
        store.addNews({ id: uid(), title, html, img, video, ts: Date.now() });
        store.markSeen();
        audio.enterSfx();
        if (onPublish) onPublish(title);
      }
      close();
      render();
    };
  }

  render();
  store.markSeen(); // al abrir el canal, quedan vistas
  return () => { stage.innerHTML = ""; };
}
