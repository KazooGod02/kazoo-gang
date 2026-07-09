// ─────────────────────────────────────────────────────────────
// Arranque tipo boot de OS viejo: logo K en 3D girando + CRT.
// Al hacer clic ("PULSA PARA ENTRAR") desbloquea el audio y pasa al menú.
// ─────────────────────────────────────────────────────────────
import * as THREE from "three";
import { CONFIG } from "./config.js";

export function runBoot(root, onEnter) {
  const boot = document.createElement("div");
  boot.className = "boot poweron";
  root.appendChild(boot);

  const vw = () => boot.clientWidth || window.innerWidth || 800;
  const vh = () => boot.clientHeight || window.innerHeight || 600;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, vw() / vh(), 0.1, 100);
  camera.position.z = 4.2;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(vw(), vh());
  boot.appendChild(renderer.domElement);

  const group = new THREE.Group();
  group.scale.setScalar(0.56); // logo más chico, que no abarque toda la pantalla
  scene.add(group);

  // Tarjeta / "moneda" con canto neón magenta
  const card = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 0.28),
    new THREE.MeshBasicMaterial({ color: 0x0a0510 })
  );
  group.add(card);
  const rim = new THREE.LineSegments(
    new THREE.EdgesGeometry(card.geometry),
    new THREE.LineBasicMaterial({ color: 0xfa4dd5 })
  );
  group.add(rim);

  // Logo en las dos caras
  const tex = new THREE.TextureLoader().load(CONFIG.logoImage);
  tex.colorSpace = THREE.SRGBColorSpace;
  const planeGeo = new THREE.PlaneGeometry(1.7, 1.7);
  const front = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({ map: tex, transparent: true }));
  front.position.z = 0.151;
  group.add(front);
  const back = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({ map: tex, transparent: true }));
  back.position.z = -0.151;
  back.rotation.y = Math.PI;
  group.add(back);

  let raf = 0;
  function loop() {
    group.rotation.y += 0.022;
    group.rotation.x = Math.sin(Date.now() * 0.0006) * 0.12;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(loop);
  }
  loop();

  function onResize() {
    camera.aspect = vw() / vh();
    camera.updateProjectionMatrix();
    renderer.setSize(vw(), vh());
  }
  window.addEventListener("resize", onResize);
  requestAnimationFrame(onResize);
  setTimeout(onResize, 120);

  const ov = document.createElement("div");
  ov.className = "boot-ov";
  ov.innerHTML =
    '<div class="bt">KAZOO GANG</div><div class="bs">K A Z O O   T V</div><div class="enter-prompt">▶ PULSA PARA ENTRAR</div>';
  boot.appendChild(ov);

  const sl = document.createElement("div");
  sl.className = "scanlines";
  boot.appendChild(sl);
  const vg = document.createElement("div");
  vg.className = "vignette";
  boot.appendChild(vg);

  function enter() {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
    boot.removeEventListener("click", enter);
    renderer.dispose();
    if (boot.parentNode) boot.parentNode.removeChild(boot);
    onEnter();
  }
  boot.addEventListener("click", enter);
}
