// Gato (3 en raya) contra la IA — minimax, imbatible. Tú eres X.
export function mountGato(container, audio) {
  const wrap = document.createElement("div");
  wrap.style.cssText = "text-align:center;color:#fff;font-family:inherit;";
  wrap.innerHTML = `<div style="margin-bottom:14px;color:#b9a7c9" id="msg"></div><div id="board" style="display:grid;grid-template-columns:repeat(3,84px);gap:6px;justify-content:center"></div><button class="btn ghost" id="rst" style="margin-top:16px">REINICIAR</button>`;
  container.appendChild(wrap);
  const boardEl = wrap.querySelector("#board");
  const msg = wrap.querySelector("#msg");
  const cells = [];
  let b, over;

  const WINS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  function winner(bd) {
    for (const w of WINS) if (bd[w[0]] && bd[w[0]] === bd[w[1]] && bd[w[1]] === bd[w[2]]) return bd[w[0]];
    return bd.every((x) => x) ? "draw" : null;
  }
  function best(bd, player) {
    const r = winner(bd);
    if (r === "O") return { s: 1 };
    if (r === "X") return { s: -1 };
    if (r === "draw") return { s: 0 };
    let move = null;
    for (let i = 0; i < 9; i++) {
      if (!bd[i]) {
        bd[i] = player;
        const s = best(bd, player === "O" ? "X" : "O").s;
        bd[i] = "";
        if (move == null || (player === "O" ? s > move.s : s < move.s)) move = { i, s };
      }
    }
    return move;
  }

  function reset() {
    b = Array(9).fill(""); over = false;
    msg.innerHTML = 'Tú eres <b style="color:#fa4dd5">X</b> · toca una casilla';
    cells.forEach((c) => { c.textContent = ""; c.style.color = "#fa4dd5"; });
  }
  function end(r) {
    over = true;
    msg.innerHTML = r === "draw" ? "🤝 Empate" : r === "X" ? "🎉 ¡Ganaste!" : "🤖 Ganó la IA";
    if (r === "X") audio.beep(880, 0.14); else audio.staticBurst(0.12);
  }
  function play(i) {
    if (over || b[i]) return;
    b[i] = "X"; cells[i].textContent = "X"; audio.beep(520, 0.05);
    let r = winner(b);
    if (r) return end(r);
    const m = best(b, "O").i;
    if (m != null) { b[m] = "O"; cells[m].textContent = "O"; cells[m].style.color = "#4dd5fa"; audio.beep(360, 0.05); }
    r = winner(b);
    if (r) end(r);
  }

  for (let i = 0; i < 9; i++) {
    const d = document.createElement("button");
    d.style.cssText = "width:84px;height:84px;font:bold 42px 'Courier New';background:#0a0710;border:2px solid #6e1a5c;color:#fa4dd5;cursor:pointer";
    d.onclick = () => play(i);
    boardEl.appendChild(d);
    cells.push(d);
  }
  wrap.querySelector("#rst").onclick = () => { audio.blip(); reset(); };
  reset();

  return () => { container.innerHTML = ""; };
}
