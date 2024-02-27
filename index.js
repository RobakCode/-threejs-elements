import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { defaultRenderer } from "./src/renderer";
import { homeModel } from "./src/elements";

/**
 * Default scene
 */
const scene = new THREE.Scene();

/**
 * Default camera
 */
const camera = new THREE.PerspectiveCamera(
  130,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

/**
 * Mousemove camera controls
 */
const controls = new OrbitControls(camera, defaultRenderer.domElement);
camera.position.set(0, 0, 10);
window.addEventListener("mousemove", ({ which, pageX }) => {
  controls.update();
  defaultRenderer.render(scene, camera);

  document.querySelector(
    "#camera-position"
  ).innerHTML = `Camera position: ${camera.position.x}, ${camera.position.y}, ${camera.position.z}`;
});

/**
 * Default light
 */
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 0); //default; light shining from top
light.castShadow = true; // default false
scene.add(light);

/**
 * Create helper for light
 */
const helper = new THREE.CameraHelper(light.shadow.camera);
scene.add(helper);

/**
 * Display imported model
 */
scene.add(homeModel);

defaultRenderer.render(scene, camera);
