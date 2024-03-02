import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { defaultRenderer } from "./src/renderer";

import { HomeModel } from "@/elements/architecture/buildings/basic";

/**
 * Default scene
 */
const scene = new THREE.Scene();

/**
 * Default camera
 */
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.5,
  2000
);

/**
 * Mousemove camera controls
 */
const controls = new OrbitControls(camera, defaultRenderer.domElement);
camera.position.set(0, 5, 10);
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
const light = new THREE.SpotLight(0xffffff, 1);
light.position.set(0, 1000, 0);
light.castShadow = true;
scene.add(light);

/**
 * Create helper for light
 */
const helper = new THREE.CameraHelper(light.shadow.camera);
scene.add(helper);

/**
 * Background
 */
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("./assets/background/0_bg.png");

scene.background = new THREE.Color(0x003300);

/**
 * Display imported model
 */
const homeModel = new HomeModel();
scene.add(homeModel.getModel());

defaultRenderer.render(scene, camera);
