import * as THREE from "three";

const homeGroup = new THREE.Group();

const defaultMaterial = new THREE.MeshMatcapMaterial({
  color: "white",
  transparent: true,
  opacity: 1,
  depthWrite: true,
  depthTest: true,
});

/**
 * Front and back walls
 */
const frontWallGeometry = new THREE.BoxGeometry(8, 10, 0.025);
const frontWallModel = new THREE.Mesh(frontWallGeometry, defaultMaterial);
frontWallModel.position.set(0, 0, 0);
homeGroup.add(frontWallModel);

const backWallModel = new THREE.Mesh(frontWallGeometry, defaultMaterial);
backWallModel.position.set(0, 0, -8);
homeGroup.add(backWallModel);

/**
 * Side walls
 */
const sideWallGeometry = new THREE.BoxGeometry(0.025, 10, 8);
const leftSideWallModel = new THREE.Mesh(sideWallGeometry, defaultMaterial);
leftSideWallModel.position.set(-4, 0, -4);
homeGroup.add(leftSideWallModel);

const rightSideWallModel = new THREE.Mesh(sideWallGeometry, defaultMaterial);
rightSideWallModel.position.set(4, 0, -4);
homeGroup.add(rightSideWallModel);

/**
 * Roof and floor
 */
const floorGeometry = new THREE.BoxGeometry(8, 0.025, 8);
const floorModel = new THREE.Mesh(floorGeometry, defaultMaterial);
floorModel.position.set(0, -5, -4);
homeGroup.add(floorModel);

const roofGeometry = new THREE.BoxGeometry(8, 0.025, 8);
const roofModel = new THREE.Mesh(roofGeometry, defaultMaterial);
roofModel.position.set(0, 5, -4);
homeGroup.add(roofModel);

/**
 * Roof cone
 */
const roofConeGeometry = new THREE.ConeGeometry(6.8, 2, 4);
const roofConeModel = new THREE.Mesh(roofConeGeometry, defaultMaterial);
roofConeModel.position.set(0, 6, -4);
roofConeModel.rotation.y = Math.PI / 4;
homeGroup.add(roofConeModel);

/**
 * Door
 * right top and left top corner are rounded
 */
const doorFrame = new THREE.Shape();
doorFrame.moveTo(-1, 1.5);
doorFrame.lineTo(-1, -2);
doorFrame.lineTo(1, -2);
doorFrame.lineTo(1, 1.5);
doorFrame.quadraticCurveTo(1, 2, 0.5, 2);
doorFrame.lineTo(-0.5, 2);
doorFrame.quadraticCurveTo(-1, 2, -1, 1.5);

const doorFrameHole = new THREE.Path();
doorFrameHole.moveTo(-0.7, -2);
doorFrameHole.lineTo(-0.7, 1.4);
doorFrameHole.quadraticCurveTo(-0.7, 1.7, -0.5, 1.7);
doorFrameHole.lineTo(0.5, 1.7);
doorFrameHole.quadraticCurveTo(0.7, 1.7, 0.7, 1.4);
doorFrameHole.lineTo(0.7, -2);
doorFrame.holes.push(doorFrameHole);

const doorFrameExtrudeSettings = {
  steps: 2,
  depth: 0.025,
  bevelEnabled: false,
};

const doorFrameGeometry = new THREE.ExtrudeGeometry(
  doorFrame,
  doorFrameExtrudeSettings
);
const doorFrameMaterial = new THREE.MeshMatcapMaterial({
  color: "brown",
  transparent: true,
  opacity: 1,
  depthWrite: true,
  depthTest: true,
});
const doorFrameModel = new THREE.Mesh(doorFrameGeometry, doorFrameMaterial);
doorFrameModel.position.set(0, -3, 0.025);
homeGroup.add(doorFrameModel);

/**
 * Door
 */
const door = new THREE.Shape();
door.moveTo(-0.7, -2);
door.lineTo(-0.7, 1.4);
door.quadraticCurveTo(-0.7, 1.7, -0.5, 1.7);
door.lineTo(0.5, 1.7);
door.quadraticCurveTo(0.7, 1.7, 0.7, 1.4);
door.lineTo(0.7, -2);

const doorExtrudeSettings = {
  steps: 2,
  depth: 0.05,
  bevelEnabled: false,
};

const doorGeometry = new THREE.ExtrudeGeometry(door, doorExtrudeSettings);
const doorMaterial = new THREE.MeshMatcapMaterial({
  color: "black",
  transparent: true,
  opacity: 1,
  depthWrite: true,
  depthTest: true,
});
const doorModel = new THREE.Mesh(doorGeometry, doorMaterial);
doorModel.position.set(0, -3, 0.025);
homeGroup.add(doorModel);

/**
 * Windows
 */
const windowGeometry = new THREE.BoxGeometry(2, 2, 0.025);
const windowMaterial = new THREE.MeshMatcapMaterial({
  color: "lightblue",
  transparent: true,
  opacity: 1,
  depthWrite: true,
  depthTest: true,
});
const leftWindowModel = new THREE.Mesh(windowGeometry, windowMaterial);
leftWindowModel.position.set(-2.5, 2.5, 0.025);
homeGroup.add(leftWindowModel);

const rightWindowModel = new THREE.Mesh(windowGeometry, windowMaterial);
rightWindowModel.position.set(2.5, 2.5, 0.025);
homeGroup.add(rightWindowModel);

export const homeModel = homeGroup;
