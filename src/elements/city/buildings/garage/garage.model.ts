import * as THREE from "three";

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const model = new THREE.Mesh(geometry, material);
model.receiveShadow = true;
model.castShadow = true;

export const garageModel = model;
