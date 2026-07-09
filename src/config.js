// ─────────────────────────────────────────────────────────────
// Configuración de Kazoo Gang — edita aquí sin tocar el código.
// ─────────────────────────────────────────────────────────────
const B = import.meta.env.BASE_URL;

export const CONFIG = {
  // Canal 01 · EN VIVO (tu usuario de Twitch)
  twitchChannel: "kazoogod02",

  // Canal 02 · KAZOO CINEMA — SOLO videos largos (sin shorts).
  // Regenera esta lista con: node scripts/refresh-cinema.mjs  (necesita YOUTUBE_API_KEY)
  cinemaVideos: [
    "w7v7KXlr-9M", "R4cWGN4XXPc", "qKMRPzzEylQ", "c-WdEiRFMvA",
    "65wACOvY4Po", "mqu18Wcu-Ag", "-NGDwnlUIGo", "wJ6gSFacwoE",
    "xf-XgGCLClk", "OR5IlwdlN5Y", "q2TOWK6_cRI", "-YhyG3WpRfs",
    "cJnUMnW9Wmc", "YKzxFLxfW0M",
  ],

  // Canal 04 · KAZOO GANG (invitación de Discord)
  discordInvite: "https://discord.gg/uCMbcCzVJM",

  // Contraseña de ADMIN (para publicar noticias, eventos y moderar el muro).
  // OJO: es un candado suave (visible en el código). Cámbiala por la tuya.
  adminPassword: "kazoo0209",

  // Canal 05 · MINIJUEGOS — foto de tu gata (ponla en public/gata.png)
  catImage: B + "gata.png",
  logoImage: B + "logo.png",

  // Noticias iniciales (solo se cargan la 1ª vez; luego mandas tú desde el panel admin)
  seedNews: [
    { title: "¡Bienvenidos a Kazoo TV!", html: "Sintoniza el canal y quédate — esto apenas empieza. 🔥" },
    { title: "Colab sorpresa este finde", html: "Se viene algo <b>bien cañón</b> el sábado. Estén al pendiente." },
  ],

  // Canal 06 · MÁS KAZOO (tus redes)
  socials: [
    { name: "TWITCH", url: "https://twitch.tv/kazoogod02", color: "#9146ff" },
    { name: "YOUTUBE", url: "https://youtube.com/@KazooGod02", color: "#ff0000" },
    { name: "TIKTOK", url: "https://tiktok.com/@KazooGod02", color: "#69C9D0" },
    { name: "INSTAGRAM", url: "https://instagram.com/KazooGod02", color: "#E1306C" },
    { name: "X", url: "https://x.com/KazooGod02", color: "#e6e6e6" },
  ],
};
