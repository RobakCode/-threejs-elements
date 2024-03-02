import * as THREE from "three";

import { defaultMeasure } from "../../../../../settings/defaultMeasure";
import { HomeModelProps } from "./home.types";

export const homeModel = (props: HomeModelProps) => {
  const { defaultMeasure: defaultDM = defaultMeasure } = props || {};
  const dm = (value: number) => defaultDM * value;

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
  const frontWallGeometry = new THREE.BoxGeometry(dm(8), dm(10), dm(0.025));
  const frontWallModel = new THREE.Mesh(frontWallGeometry, defaultMaterial);
  frontWallModel.position.set(0, 0, 0);
  homeGroup.add(frontWallModel);

  const backWallModel = new THREE.Mesh(frontWallGeometry, defaultMaterial);
  backWallModel.position.set(0, 0, dm(-8));
  homeGroup.add(backWallModel);

  /**
   * Side walls
   */
  const sideWallGeometry = new THREE.BoxGeometry(dm(0.025), dm(10), dm(8));
  const leftSideWallModel = new THREE.Mesh(sideWallGeometry, defaultMaterial);
  leftSideWallModel.position.set(dm(-4), 0, dm(-4));
  homeGroup.add(leftSideWallModel);

  const rightSideWallModel = new THREE.Mesh(sideWallGeometry, defaultMaterial);
  rightSideWallModel.position.set(dm(4), 0, dm(-4));
  homeGroup.add(rightSideWallModel);

  /**
   * Roof and floor
   */
  const floorGeometry = new THREE.BoxGeometry(dm(8), dm(0.025), dm(8));
  const floorModel = new THREE.Mesh(floorGeometry, defaultMaterial);
  floorModel.position.set(0, dm(-5), dm(-4));
  homeGroup.add(floorModel);

  const roofGeometry = new THREE.BoxGeometry(dm(8), dm(0.025), dm(8));
  const roofModel = new THREE.Mesh(roofGeometry, defaultMaterial);
  roofModel.position.set(0, dm(5), dm(-4));
  homeGroup.add(roofModel);

  /**
   * Roof cone
   */
  const roofConeGeometry = new THREE.ConeGeometry(dm(6.8), dm(2), 4);
  const roofConeModel = new THREE.Mesh(roofConeGeometry, defaultMaterial);
  roofConeModel.position.set(0, dm(6), dm(-4));
  roofConeModel.rotation.y = Math.PI / 4;
  homeGroup.add(roofConeModel);

  /**
   * Door
   * right top and left top corner are rounded
   */
  const doorFrame = new THREE.Shape();
  doorFrame.moveTo(dm(-1), dm(1.5));
  doorFrame.lineTo(dm(-1), dm(-2));
  doorFrame.lineTo(dm(1), dm(-2));
  doorFrame.lineTo(dm(1), dm(1.5));
  doorFrame.quadraticCurveTo(dm(1), dm(2), dm(0.5), dm(2));
  doorFrame.lineTo(dm(-0.5), dm(2));
  doorFrame.quadraticCurveTo(dm(-1), dm(2), dm(-1), dm(1.5));

  const doorFrameHole = new THREE.Path();
  doorFrameHole.moveTo(dm(-0.7), dm(-2));
  doorFrameHole.lineTo(dm(-0.7), dm(1.4));
  doorFrameHole.quadraticCurveTo(dm(-0.7), dm(1.7), dm(-0.5), dm(1.7));
  doorFrameHole.lineTo(dm(0.5), dm(1.7));
  doorFrameHole.quadraticCurveTo(dm(0.7), dm(1.7), dm(0.7), dm(1.4));
  doorFrameHole.lineTo(dm(0.7), dm(-2));
  doorFrame.holes.push(doorFrameHole);

  const doorFrameExtrudeSettings = {
    steps: dm(2),
    depth: dm(0.025),
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
  doorFrameModel.position.set(0, dm(-3), dm(0.025));
  homeGroup.add(doorFrameModel);

  /**
   * Door
   */
  const door = new THREE.Shape();
  door.moveTo(dm(-0.7), dm(-2));
  door.lineTo(dm(-0.7), dm(1.4));
  door.quadraticCurveTo(dm(-0.7), dm(1.7), dm(-0.5), dm(1.7));
  door.lineTo(dm(0.5), dm(1.7));
  door.quadraticCurveTo(dm(0.7), dm(1.7), dm(0.7), dm(1.4));
  door.lineTo(dm(0.7), dm(-2));

  const doorExtrudeSettings = {
    steps: dm(2),
    depth: dm(0.05),
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
  doorModel.position.set(0, dm(-3), dm(0.025));
  homeGroup.add(doorModel);

  /**
   * Windows
   */
  const windowGeometry = new THREE.BoxGeometry(dm(2), dm(2), dm(0.025));
  const windowMaterial = new THREE.MeshMatcapMaterial({
    color: "lightblue",
    transparent: true,
    opacity: 1,
    depthWrite: true,
    depthTest: true,
  });
  const leftWindowModel = new THREE.Mesh(windowGeometry, windowMaterial);
  leftWindowModel.position.set(dm(-2.5), dm(2.5), dm(0.025));
  homeGroup.add(leftWindowModel);

  const rightWindowModel = new THREE.Mesh(windowGeometry, windowMaterial);
  rightWindowModel.position.set(dm(2.5), dm(2.5), dm(0.025));
  homeGroup.add(rightWindowModel);

  return homeGroup;
};
