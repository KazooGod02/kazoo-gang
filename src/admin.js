// ─────────────────────────────────────────────────────────────
// Admin REAL con Supabase Auth (email + contraseña). Solo tú (el usuario
// admin que creaste en Supabase) puede publicar noticias/eventos y moderar.
// La seguridad de verdad la imponen las reglas (RLS) del backend.
// ─────────────────────────────────────────────────────────────
import { supabase } from "./supabase.js";

let _admin = false;
const subs = new Set();
function emit() { subs.forEach((f) => { try { f(_admin); } catch {} }); }

supabase.auth.getSession().then(({ data }) => { _admin = !!data.session; emit(); });
supabase.auth.onAuthStateChange((_e, session) => { _admin = !!session; emit(); });

export function isAdmin() { return _admin; }
export function onAdminChange(fn) { subs.add(fn); }

export function toggleAdmin() {
  if (_admin) supabase.auth.signOut();
  else openLogin();
}

function openLogin() {
  const ov = document.createElement("div");
  ov.className = "modal-ov";
  ov.innerHTML = `<div class="modal"><h3>🔒 ACCESO ADMIN</h3><input type="email" id="em" placeholder="tu email" /><input type="password" id="pw" placeholder="contraseña" /><div class="mrow"><button class="btn" id="ok">ENTRAR</button><button class="btn ghost" id="cancel">CANCELAR</button></div><div class="merr" id="err"></div></div>`;
  document.body.appendChild(ov);
  const em = ov.querySelector("#em");
  const pw = ov.querySelector("#pw");
  setTimeout(() => em.focus(), 30);
  const close = () => ov.remove();
  const submit = async () => {
    ov.querySelector("#err").textContent = "Entrando…";
    const { error } = await supabase.auth.signInWithPassword({ email: em.value.trim(), password: pw.value });
    if (error) ov.querySelector("#err").textContent = "Email o contraseña incorrectos.";
    else close();
  };
  ov.querySelector("#ok").onclick = submit;
  ov.querySelector("#cancel").onclick = close;
  [em, pw].forEach((el) => el.addEventListener("keydown", (e) => { e.stopPropagation(); if (e.key === "Enter") submit(); if (e.key === "Escape") close(); }));
  ov.addEventListener("click", (e) => { if (e.target === ov) close(); });
}
