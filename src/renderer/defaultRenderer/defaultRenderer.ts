import * as THREE from "three";

// create a renderer
const renderer = new THREE.WebGLRenderer();

// options
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// size
renderer.setSize(window.innerWidth, window.innerHeight);

// append to dom
document.body.appendChild(renderer.domElement);

export const defaultRenderer = renderer;
