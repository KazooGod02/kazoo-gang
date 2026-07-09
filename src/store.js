// ─────────────────────────────────────────────────────────────
// Almacenamiento local (localStorage). Guarda noticias, graffiti y
// qué noticias ya viste. NOTA: es POR NAVEGADOR — para que TODOS los
// fans vean lo mismo hace falta un backend gratis (Supabase/Firebase);
// la capa está aislada aquí para conectarlo después sin tocar la UI.
// ─────────────────────────────────────────────────────────────
import { CONFIG } from "./config.js";

const K_NEWS = "kg_news";
const K_GRAF = "kg_graffiti";
const K_SEEN = "kg_seen_news";

function read(k, def) {
  try {
    const v = JSON.parse(localStorage.getItem(k));
    return v == null ? def : v;
  } catch {
    return def;
  }
}
function write(k, v) {
  try { localStorage.setItem(k, JSON.stringify(v)); } catch {}
}

export const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

export const store = {
  // ── Noticias ──
  news: () => read(K_NEWS, []),
  addNews(item) {
    const n = store.news();
    n.unshift(item);
    write(K_NEWS, n);
    return n;
  },
  updateNews(id, patch) {
    write(K_NEWS, store.news().map((x) => (x.id === id ? { ...x, ...patch } : x)));
    return store.news();
  },
  deleteNews(id) {
    write(K_NEWS, store.news().filter((x) => x.id !== id));
    return store.news();
  },
  latestNewsTs: () => (store.news()[0]?.ts ?? 0),

  // ── Vistas ──
  lastSeen: () => read(K_SEEN, 0),
  markSeen: () => write(K_SEEN, store.latestNewsTs()),
  hasUnseen: () => store.latestNewsTs() > store.lastSeen(),

  // ── Graffiti ──
  graffiti: () => read(K_GRAF, []),
  addGraffiti(g) {
    const a = store.graffiti();
    a.push(g);
    write(K_GRAF, a);
    return a;
  },
  updateGraffiti(id, patch) {
    write(K_GRAF, store.graffiti().map((x) => (x.id === id ? { ...x, ...patch } : x)));
    return store.graffiti();
  },
  deleteGraffiti(id) {
    write(K_GRAF, store.graffiti().filter((x) => x.id !== id));
    return store.graffiti();
  },
};

// Siembra las noticias iniciales solo la primera vez.
export function seedIfEmpty() {
  if (store.news().length === 0 && CONFIG.seedNews?.length) {
    let t = Date.now() - CONFIG.seedNews.length * 1000;
    const items = CONFIG.seedNews.map((s) => ({ id: uid(), title: s.title, html: s.html, img: "", video: "", ts: t++ }));
    // el más nuevo primero
    write(K_NEWS, items.reverse());
  }
}
