// ─────────────────────────────────────────────────────────────
// Almacenamiento COMPARTIDO vía Supabase (noticias, graffiti, eventos).
// Caché en memoria sincronizada + tiempo real: todos los fans ven lo mismo.
// La API (store.news(), store.addNews()…) se mantiene para los canales;
// las lecturas son de la caché (sync) y las escrituras van a Supabase.
// "Visto" y el id de dueño siguen en localStorage (preferencia por navegador).
// ─────────────────────────────────────────────────────────────
import { supabase } from "./supabase.js";

const K_SEEN = "kg_seen_news";
const K_OWNER = "kg_owner";
const readLS = (k, def) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? def : v; } catch { return def; } };
const writeLS = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
export const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

let cache = { news: [], graffiti: [], events: [] };
const listeners = new Set();
const notify = () => listeners.forEach((f) => { try { f(); } catch {} });
export function onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); }

const rowToNews = (r) => ({ id: r.id, title: r.title, html: r.html || "", img: r.img || "", video: r.video || "", ts: Number(r.ts) });
const newsRow = (n) => ({ id: n.id, title: n.title, html: n.html || "", img: n.img || "", video: n.video || "", ts: n.ts });
const rowToEvent = (r) => ({ id: r.id, title: r.title, date: r.date, desc: r.descr || "", thumb: r.thumb || "", buttonText: r.button_text || "", buttonUrl: r.button_url || "" });
const eventRow = (e) => ({ id: e.id, title: e.title, date: e.date, descr: e.desc || "", thumb: e.thumb || "", button_text: e.buttonText || "", button_url: e.buttonUrl || "" });

async function reloadNews() { try { const { data } = await supabase.from("news").select("*").order("ts", { ascending: false }); if (data) { cache.news = data.map(rowToNews); notify(); } } catch {} }
async function reloadGraffiti() { try { const { data } = await supabase.from("graffiti").select("*").order("ts", { ascending: true }); if (data) { cache.graffiti = data.map((r) => r.data); notify(); } } catch {} }
async function reloadEvents() { try { const { data } = await supabase.from("events").select("*"); if (data) { cache.events = data.map(rowToEvent); notify(); } } catch {} }

let started = false;
export async function initStore() {
  if (started) return;
  started = true;
  await Promise.allSettled([reloadNews(), reloadGraffiti(), reloadEvents()]);
  try {
    supabase.channel("kg-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "news" }, reloadNews)
      .on("postgres_changes", { event: "*", schema: "public", table: "graffiti" }, reloadGraffiti)
      .on("postgres_changes", { event: "*", schema: "public", table: "events" }, reloadEvents)
      .subscribe();
  } catch {}
}
// Compat: antes sembraba noticias locales; ahora no hace falta.
export function seedIfEmpty() {}

export function ownerId() {
  let id = localStorage.getItem(K_OWNER);
  if (!id) { id = uid(); localStorage.setItem(K_OWNER, id); }
  return id;
}

export const store = {
  // ── Noticias ──
  news: () => cache.news,
  latestNewsTs: () => (cache.news[0]?.ts ?? 0),
  async addNews(item) { cache.news = [item, ...cache.news]; notify(); try { await supabase.from("news").insert(newsRow(item)); } catch {} },
  async updateNews(id, patch) {
    cache.news = cache.news.map((x) => (x.id === id ? { ...x, ...patch } : x)); notify();
    const it = cache.news.find((x) => x.id === id); if (it) { const { id: _i, ...row } = newsRow(it); try { await supabase.from("news").update(row).eq("id", id); } catch {} }
  },
  async deleteNews(id) { cache.news = cache.news.filter((x) => x.id !== id); notify(); try { await supabase.from("news").delete().eq("id", id); } catch {} },

  // ── Vistas (local) ──
  lastSeen: () => readLS(K_SEEN, 0),
  markSeen: () => writeLS(K_SEEN, store.latestNewsTs()),
  hasUnseen: () => store.latestNewsTs() > store.lastSeen(),

  // ── Graffiti ──
  graffiti: () => cache.graffiti,
  async addGraffiti(g) { cache.graffiti = [...cache.graffiti, g]; notify(); try { await supabase.from("graffiti").insert({ id: g.id, data: g, owner: g.owner || "", ts: g.ts }); } catch {} },
  async updateGraffiti(id, patch) {
    cache.graffiti = cache.graffiti.map((x) => (x.id === id ? { ...x, ...patch } : x)); notify();
    const it = cache.graffiti.find((x) => x.id === id); if (it) { try { await supabase.from("graffiti").update({ data: it }).eq("id", id); } catch {} }
  },
  async deleteGraffiti(id) { cache.graffiti = cache.graffiti.filter((x) => x.id !== id); notify(); try { await supabase.from("graffiti").delete().eq("id", id); } catch {} },

  // ── Eventos ──
  events: () => cache.events,
  async addEvent(e) { cache.events = [...cache.events, e]; notify(); try { await supabase.from("events").insert(eventRow(e)); } catch {} },
  async updateEvent(id, patch) {
    cache.events = cache.events.map((x) => (x.id === id ? { ...x, ...patch } : x)); notify();
    const it = cache.events.find((x) => x.id === id); if (it) { const { id: _i, ...row } = eventRow(it); try { await supabase.from("events").update(row).eq("id", id); } catch {} }
  },
  async deleteEvent(id) { cache.events = cache.events.filter((x) => x.id !== id); notify(); try { await supabase.from("events").delete().eq("id", id); } catch {} },
};
