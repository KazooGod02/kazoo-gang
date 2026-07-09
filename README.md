# Kazoo Gang · Kazoo TV

La web para fans de Kazoo: arranque con el logo **K en 3D** + efecto **CRT** que cae a un
**menú de televisión antigua** con estática, scanlines y letras en rosa-morado. Se navega
como control remoto (flechas / clic).

## Canales
- **01 · En vivo** — tu directo de Twitch (`kazoogod02`).
- **02 · Kazoo Cinema** — tus videos de YouTube 24/7, en una sala de cine.
- **03 · Noticias y Anuncios** — con ticker de última hora.
- **04 · Kazoo Gang** — la comunidad / Discord.
- **05 · Minijuegos** — Flappy Gata, Snake, Gato (3 en raya) vs IA, y Kazoo Runner.
- **06 · Más Kazoo** — links a todas tus redes.

## Correr en local
```bash
npm install
npm run dev
```
Abre http://localhost:5178

## Publicar GRATIS (Netlify / Vercel / GitHub Pages)
```bash
npm run build     # genera la carpeta dist/
```
Sube la carpeta `dist/` a Netlify o Vercel (arrastrar y soltar, plan gratis). El embed de
Twitch usa tu dominio automáticamente (`location.hostname`), así que funciona en cualquier host.

## Personaliza (todo en `src/config.js`)
- **Foto de tu gata** para Flappy/Runner: pon el archivo en `public/gata.png` y cambia
  `catImage: "/gata.png"`. (Ahora usa el logo como placeholder.)
- **Discord**: pega tu invitación en `discordInvite`.
- **Noticias**: edita el arreglo `announcements`.
- **Redes**: edita `socials`.

## Stack
Vite + Three.js (para la K en 3D). Sitio 100% estático → **$0 de hosting**. Los videos y el
directo son embeds de YouTube/Twitch (sin costo de ancho de banda).
