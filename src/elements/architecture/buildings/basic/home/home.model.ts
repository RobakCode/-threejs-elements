import * as THREE from "three";

import { defaultMeasure } from "../../../../../settings/defaultMeasure";
import { HomeModelProps } from "./home.types";

import { DoorModel, WindowModel } from "./models";

export const homeModel = (props: HomeModelProps) => {
  const { defaultMeasure: defaultDM = defaultMeasure } = props || {};
  const dm = (value: number) => defaultDM * value;

  const homeGroup = new THREE.Group();
  const doorModel = new DoorModel();
  const windowLeftModel = new WindowModel();
  const windowRightModel = new WindowModel();

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
   */
  const door = doorModel.getModel();
  door.position.set(0, dm(-3), dm(0.025));
  homeGroup.add(door);

  /**
   * Windows
   */
  const windowLeft = windowLeftModel.getModel();
  const windowRight = windowRightModel.getModel();
  windowLeft.position.set(dm(-2.5), dm(2.5), dm(0.05));
  windowRight.position.set(dm(2.5), dm(2.5), dm(0.05));
  homeGroup.add(windowLeft);
  homeGroup.add(windowRight);

  return homeGroup;
};
