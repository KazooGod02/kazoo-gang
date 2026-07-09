// ─────────────────────────────────────────────────────────────
// Sesión de admin (candado suave con contraseña de config.js).
// Solo tú (admin) puedes publicar noticias y moderar el graffiti.
// ─────────────────────────────────────────────────────────────
import { CONFIG } from "./config.js";

const K = "kg_admin";
let _admin = sessionStorage.getItem(K) === "1";
const subs = new Set();

export function isAdmin() { return _admin; }
export function onAdminChange(fn) { subs.add(fn); }
function emit() { subs.forEach((f) => f(_admin)); }

function setAdmin(v) {
  _admin = v;
  if (v) sessionStorage.setItem(K, "1");
  else sessionStorage.removeItem(K);
  emit();
}

export function toggleAdmin() {
  if (_admin) setAdmin(false);
  else openLogin();
}

function openLogin() {
  const ov = document.createElement("div");
  ov.className = "modal-ov";
  ov.innerHTML = `<div class="modal"><h3>🔒 ACCESO ADMIN</h3><input type="password" id="pw" placeholder="contraseña" /><div class="mrow"><button class="btn" id="ok">ENTRAR</button><button class="btn ghost" id="cancel">CANCELAR</button></div><div class="merr" id="err"></div></div>`;
  document.body.appendChild(ov);
  const pw = ov.querySelector("#pw");
  setTimeout(() => pw.focus(), 30);
  const close = () => ov.remove();
  const submit = () => {
    if (pw.value === CONFIG.adminPassword) { setAdmin(true); close(); }
    else ov.querySelector("#err").textContent = "Contraseña incorrecta";
  };
  ov.querySelector("#ok").onclick = submit;
  ov.querySelector("#cancel").onclick = close;
  pw.addEventListener("keydown", (e) => {
    e.stopPropagation();
    if (e.key === "Enter") submit();
    if (e.key === "Escape") close();
  });
  ov.addEventListener("click", (e) => { if (e.target === ov) close(); });
}
