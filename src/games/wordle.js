// Kazoo Wordle — adivina la palabra de 5 letras (español). 6 intentos.
// Verde = letra y posición correctas · Amarillo = está pero en otro lugar · Gris = no está.
const WORDS = `ABEJA ABRIR ACERO ACTOR AGUJA AHORA AJENO ALBUM ALDEA ALTAR AMIGO ANCHO ANDAR ANGEL ANTES APOYO ARENA ARROZ ASADO ATLAS AUTOR AYUDA BAILE BAJAR BALON BANCO BARBA BARCO BARRO BELLO BESOS BICHO BINGO BLUSA BOINA BOLAS BOLSA BOMBA BORDE BOTAS BRAVO BREVE BRISA BROMA BROTE BRUJA BUENO BURRO BUSCA CABRA CABLE CABOS CACAO CALOR CALMA CALVO CAMAS CAMPO CANAL CANOA CANTO CAPAZ CARRO CARTA CASAS CASCO CASPA CATAR CAUCE CAZAR CEBRA CEDRO CEJAS CELDA CELOS CENAS CERCA CERDO CERRO CESTA CHICO CHILE CHINA CHINO CHOZA CIELO CIFRA CINCO CINTA CIRCO CITAR CLASE CLAVO CLIMA COBRA COBRE COCER CODOS COFRE COJIN COLAS COLMO COLOR COMER COMIC CONDE COPAS COPIA CORAL CORTE COSAS COSTA COSER COSTE CREER CREMA CROMO CRUCE CRUDO CRUEL CUERO CUEVA CULPA CURAR CURSO CURVA DADOS DAMAS DARDO DATOS DEDOS DEJAR DELTA DENSO ENERO ENOJO ERROR ERIZO ETAPA EXTRA FALDA FALLO FALSO FAROL FASES FATAL FAVOR FECHA FELIZ FERIA FICHA FIDEO FIERA FIERO FIJAR FILAS FILME FINAL FINCA FIRMA FISCO FLACO FLETE FLOJA FLOJO FLORA FLUJO FOCAS FOLIO FONDO FORMA FORRO FOTOS FRASE FRENO FRESA FRITO FRUTA FUEGO FUERA FUERO FUGAS FUMAR FUNDA FURIA FUSIL GAFAS GAJOS GALLO GAMBA GANAR GANSO GARRA GASTO GATOS GEMIR GENIO GENTE GESTO GIRAR GLOBO GOLFO GOLPE GOMAS GORDO GORRA GORRO GOTAS GOZAR GRADA GRADO GRAMA GRANO GRASA GRAVE GRIFO GRIPE GRITO GRUPO GUAPO GUISO GUSTO HABER HABLA HACER HACIA HADAS HALAR HAMPA HARTO HASTA HEBRA HECHO HELAR HERIR HIELO HIGOS HIJAS HIJOS HILAR HILOS HIMNO HOGAR HOJAS HONDO HONOR HONRA HORAS HORNO HOYOS HUECO HUESO HUEVO HUMOR HUMOS HURTO IDEAL IDEAR IGUAL IMPAR INDIO INGLE ISLAS JABON JAMAS JAMON JARRA JAULA JEFES JOYAS JOVEN JUEGO JUGAR JUGOS JUNIO JUNTA JUNTO JURAR JUSTO KILOS LABIO LABOR LADOS LAGOS LAMER LANAS LANZA LAPIZ LARGO LATAS LATIR LATON LAVAR LECHO LECHE LEGAL LEJOS LEMAS LENTA LENTO LEONA LETRA LEYES LIBRA LIBRE LIBRO LICOR LIGAR LIGAS LIMAR LIMON LINDA LINDO LINEA LIRIO LISTA LISTO LITRO LLAMA LLANO LLAVE LLEGA LLENO LLORA LOBOS LOCAL LOCOS LOGRO LOMAS LOMOS LONJA LOROS LOSAS LOTES LUCHA LUEGO LUGAR LUJOS LUNAR LUNES LUPAS MACHO MADRE MAGIA MAGOS MALAS MALOS MAMAS MANDO MANGA MANGO MANOS MANTA MAPAS MARCA MARCO MARES MARZO MASAS MATES MATAR MAYOR MAZAS MECHA MEDIA MEDIO MEDIR MEJOR MELON MENOR MENOS MENTA MENTE MESAS METAL METER METRO MIEDO MIMOS MINAS MIRAR MISAS MISIL MISMO MITAD MITOS MOCOS MODAS MODOS MOJAR MOLDE MOLER MONJA MONJE MONOS MONTO MORAL MORIR MOROS MOSCA MOTEL MOTOR MOTOS MOVER MOVIL MOZOS MUCHO MUELA MUJER MULAS MULTA MUNDO MUROS MUSEO MUSGO NABOS NACER NADAR NADIE NAIPE NARIZ NATAS NAVES NECIO NEGAR NEGRO NEVAR NIDOS NIETA NIETO NIEVE NIVEL NOBLE NOCHE NOPAL NORIA NORMA NORTE NOTAR NOTAS NOVIA NOVIO NUBES NUDOS NUERA NUEVA NUEVO OBRAS OBVIO OCASO OESTE OIDOS OJERA OLIVO OLLAS OLMOS ONDAS OPACO OPERA ORDEN OREJA ORINA ORLAS OSADO OSTRA OTROS OVEJA PACTO PADRE PAGAR PAGOS PAJAR PAJAS PALAS PALCO PALMA PALMO PALOS PANAL PANDA PANES PAPAS PAPEL PARAR PARDO PARED PARES PARIR PARRA PARTE PASAR PASAS PASEO PASOS PASTA PASTO PATAS PATIO PATOS PAUSA PAVOS PECES PECHO PEDAL PEDIR PEGAR PEINE PELAR PELOS PENAL PENAS PERAS PEROS PERRO PESAR PESAS PESCA PESOS PEZON PICAR PICOS PIEZA PILAR PILAS PILLO PINOS PINTA PINZA PIPAS PIQUE PISAR PISOS PISTA PIZZA PLACA PLAGA PLANO PLATA PLATO PLAYA PLAZA PLAZO PLENO PLOMO PLUMA POBRE POCOS PODAR PODER POEMA POETA POLAR POLEA POLEN POLLO POLOS POLVO POMOS PONER POPAS PORTE POSAR POSTA POTRO POZOS PRADO PRESA PRESO PRIMO PRIMA PRISA PROSA PUBIS PUEDE PUJAR PULGA PULIR PULPO PULSO PUNTA PUNTO PUPAS PURGA QUEJA QUEMA QUIEN QUISO QUITA RABIA RABOS RACHA RADAR RADIO RAJAR RAMAS RAMOS RAMPA RANAS RANGO RAPAR RAPAZ RARAS RAROS RASGO RATAS RATOS RAYAS RAYOS RAZAS RAZON RECTO REDES REGAR REGLA REINA REINO REJAS RELOJ REMAR REMOS RENTA RESES RESTO RETAR RETOS REYES REZAR RICOS RIEGO RIGOR RIMAS RISAS RITMO RITOS RIVAL RIZOS ROBAR ROBOS ROBOT ROCAS RODAR RODEO ROJAS ROJOS ROLLO ROMBO ROMPE RONDA ROPAS ROSAL ROSAS ROSCA ROTAR ROTOS RUBIA RUBIO RUDOS RUEDA RUEGO RUGIR RUIDO RUINA RULOS RUMBO RUMOR RURAL SABER SABIO SABOR SACAR SACOS SAGAZ SALAS SALIR SALON SALSA SALTO SALUD SALVO SANAR SANAS SANOS SANTO SAPOS SAUCE SECAR SECOS SEDAS SEGAR SELVA SELLO SENDA SENOS SEPIA SERES SERIO SESOS SETAS SEXOS SIDRA SIEGA SIENA SIETE SIGNO SILBA SILLA SILOS SIMIO SISMO SITIO SOBAR SOBRA SOBRE SOCIO SOLAR SOLAS SONAR SONDA SOPAS SOPLO SORDO SUAVE SUBIR SUCIO SUDAR SUELA SUELO SUERO SUMAR SUMAS SUMOS SUPER SURCO SUSTO SUTIL TABLA TACOS TACTO TAJOS TALAR TALCO TALLO TALON TANDA TANGO TAPAS TAPIZ TAPON TARDE TAREA TAROT TARTA TASAS TAZAS TECHO TEJAS TEJER TELAR TELAS TEMAS TEMER TEMOR TENAZ TENER TENIS TENOR TENSA TENSO TERCO TESIS TEXTO TIARA TIBIA TIBIO TIGRE TIMON TINTA TINTE TIPOS TIRAS TIROS TITAN TIZAS TOCAR TODOS TOMAR TOMAS TONOS TONTO TOPAR TOPOS TORAX TORRE TORSO TORTA TOSCO TOTAL TRAER TRAJE TRAMA TRAPO TRATO TRAZO TRECE TRIBU TRIGO TRINO TRIPA TRONO TROPA TROZO TRUCO TUBOS TUMBA TUNEL TUNAS TURBA TURCO TURNO TUTOR UNION UNTAR UNICO USADO USUAL VACAS VACIO VAGAR VAGOS VAHOS VAINA VALES VALLA VALLE VALOR VAPOR VARAS VARON VASOS VELAS VELOS VELOZ VENAS VENIR VENTA VERAS VERBO VERDE VERJA VERSO VETAR VETAS VIBRA VICIO VIDAS VIDEO VIEJA VIEJO VIGAS VIGOR VILLA VINOS VIOLA VIRAR VIRUS VISAS VISOR VISTA VIUDA VIUDO VIVAS VIVIR VIVOS VOCAL VOLAR VOTAR VOTOS VOCES YEGUA YERBA YERNO YESOS YOGUR ZANJA ZARPA ZONAS ZORRO ZUMBA ZUMOS ZURDO`
  .split(/\s+/).filter((w) => w.length === 5);
const WORDSET = new Set(WORDS);
const ROWS = 6, LEN = 5;
const KB = ["QWERTYUIOP", "ASDFGHJKLÑ", "↵ZXCVBNM⌫"]; // ↵ ... ⌫

export function mountWordle(container, audio) {
  let answer, cur, row, done, msgT;
  const keyState = {}; // letra → estado (correct/present/absent) para el teclado

  container.innerHTML = `
    <div class="wordle">
      <div class="wd-grid" id="wdGrid"></div>
      <div class="wd-msg" id="wdMsg">Adivina la palabra de 5 letras</div>
      <div class="wd-kb" id="wdKb"></div>
    </div>`;
  const gridEl = container.querySelector("#wdGrid");
  const msgEl = container.querySelector("#wdMsg");
  const kbEl = container.querySelector("#wdKb");

  // grid
  for (let r = 0; r < ROWS; r++) {
    const rowEl = document.createElement("div"); rowEl.className = "wd-row";
    for (let ccol = 0; ccol < LEN; ccol++) { const t = document.createElement("div"); t.className = "wd-tile"; rowEl.appendChild(t); }
    gridEl.appendChild(rowEl);
  }
  // teclado
  KB.forEach((rowKeys) => {
    const rEl = document.createElement("div"); rEl.className = "wd-kbrow";
    [...rowKeys].forEach((k) => {
      const b = document.createElement("button");
      b.className = "wd-key" + (k === "↵" || k === "⌫" ? " wide" : "");
      b.textContent = k; b.dataset.k = k;
      b.onclick = () => handle(k === "↵" ? "Enter" : k === "⌫" ? "Backspace" : k);
      rEl.appendChild(b);
    });
    kbEl.appendChild(rEl);
  });

  function reset() {
    answer = WORDS[(Math.random() * WORDS.length) | 0];
    cur = ""; row = 0; done = false;
    for (const k in keyState) delete keyState[k];
    [...gridEl.querySelectorAll(".wd-tile")].forEach((t) => { t.textContent = ""; t.className = "wd-tile"; });
    kbEl.querySelectorAll(".wd-key").forEach((b) => (b.className = "wd-key" + (b.dataset.k === "↵" || b.dataset.k === "⌫" ? " wide" : "")));
    setMsg("Adivina la palabra de 5 letras");
  }
  function setMsg(t, flash) { msgEl.textContent = t; clearTimeout(msgT); if (flash) { msgEl.classList.add("flash"); msgT = setTimeout(() => msgEl.classList.remove("flash"), 600); } }

  function paintCurrent() {
    const tiles = gridEl.children[row].children;
    for (let i = 0; i < LEN; i++) { tiles[i].textContent = cur[i] || ""; tiles[i].classList.toggle("filled", !!cur[i]); }
  }

  function evaluate(guess) {
    const res = Array(LEN).fill("absent");
    const counts = {};
    for (const ch of answer) counts[ch] = (counts[ch] || 0) + 1;
    for (let i = 0; i < LEN; i++) if (guess[i] === answer[i]) { res[i] = "correct"; counts[guess[i]]--; }
    for (let i = 0; i < LEN; i++) if (res[i] !== "correct" && counts[guess[i]] > 0) { res[i] = "present"; counts[guess[i]]--; }
    return res;
  }

  function submit() {
    if (cur.length < LEN) { setMsg("Faltan letras", true); audio.beep(220, 0.05); return; }
    const res = evaluate(cur);
    const tiles = gridEl.children[row].children;
    for (let i = 0; i < LEN; i++) {
      const t = tiles[i], ch = cur[i];
      setTimeout(() => {
        t.className = "wd-tile filled reveal " + res[i];
        audio.beep(res[i] === "correct" ? 720 : res[i] === "present" ? 520 : 320, 0.03);
        const prev = keyState[ch];
        if (res[i] === "correct" || (res[i] === "present" && prev !== "correct") || (res[i] === "absent" && !prev)) { keyState[ch] = res[i]; const kb = kbEl.querySelector(`[data-k="${ch}"]`); if (kb) kb.className = "wd-key " + res[i]; }
      }, i * 260);
    }
    const win = res.every((r) => r === "correct");
    const guess = cur; cur = ""; row++;
    setTimeout(() => {
      if (win) { done = true; setMsg("¡GANASTE! 🎉 (Enter = otra)", true); audio.enterSfx(); }
      else if (row >= ROWS) { done = true; setMsg("Era: " + answer + " · Enter = otra", true); audio.staticBurst(0.1); }
    }, LEN * 260);
  }

  function handle(key) {
    if (done) { if (key === "Enter") reset(); return; }
    if (key === "Enter") { submit(); return; }
    if (key === "Backspace") { cur = cur.slice(0, -1); paintCurrent(); return; }
    if (cur.length >= LEN) return;
    const ch = key.toUpperCase();
    if (/^[A-ZÑ]$/.test(ch)) { cur += ch; paintCurrent(); audio.tick && audio.tick(); }
  }

  function key(e) {
    if (e.key === "Enter") { e.preventDefault(); handle("Enter"); }
    else if (e.key === "Backspace") { e.preventDefault(); handle("Backspace"); }
    else if (e.key.length === 1) handle(e.key);
  }
  window.addEventListener("keydown", key);

  reset();
  return () => { window.removeEventListener("keydown", key); clearTimeout(msgT); container.innerHTML = ""; };
}
