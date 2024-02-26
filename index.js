import * as THREE from "three";

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
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;

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
