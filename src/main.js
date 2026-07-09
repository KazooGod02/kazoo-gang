import "./style.css";
import { runBoot } from "./boot.js";
import { runMenu } from "./menu.js";
import { initAudio } from "./audio.js";

const app = document.getElementById("app");

runBoot(app, () => {
  initAudio();
  runMenu(app);
});
