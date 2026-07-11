import "./style.css";
import { runBoot } from "./boot.js";
import { runMenu } from "./menu.js";
import { initAudio } from "./audio.js";
import { initStore } from "./store.js";

initStore(); // carga noticias/graffiti/eventos compartidos desde Supabase
const app = document.getElementById("app");

runBoot(app, () => {
  initAudio();
  runMenu(app);
});
