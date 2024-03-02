import * as THREE from "three";

import { DoorModel, WindowModel } from "./models";
import { BasicModel } from "@/shared";

export class HomeModel extends BasicModel {
  private wallColor = new THREE.MeshMatcapMaterial({
    color: 0xffcc39,
    transparent: true,
    opacity: 1,
    depthWrite: true,
    depthTest: true,
  });

  private roofColor = new THREE.MeshMatcapMaterial({
    color: 0x996633,
    transparent: true,
    opacity: 1,
    depthWrite: true,
    depthTest: true,
  });

  private doorColor = new THREE.MeshMatcapMaterial({
    color: 0x663300,
    transparent: true,
    opacity: 1,
    depthWrite: true,
    depthTest: true,
  });

  private doorFrameColor = new THREE.MeshMatcapMaterial({
    color: 0x996633,
    transparent: true,
    opacity: 1,
    depthWrite: true,
    depthTest: true,
  });

  private doorModel = new DoorModel({
    frameMaterial: this.doorFrameColor,
    doorMaterial: this.doorColor,
  });
  private windowLeftModel = new WindowModel();
  private windowRightModel = new WindowModel();

  private createFrontWall() {
    const frontWallGeometry = new THREE.BoxGeometry(
      this.dm(8),
      this.dm(10),
      this.dm(0.025)
    );

    const frontWallModel = new THREE.Mesh(frontWallGeometry, this.wallColor);
    frontWallModel.position.set(0, 0, 0);

    return frontWallModel;
  }

  private createBackWall() {
    const backWallGeometry = new THREE.BoxGeometry(
      this.dm(8),
      this.dm(10),
      this.dm(0.025)
    );
    const backWallModel = new THREE.Mesh(backWallGeometry, this.wallColor);
    backWallModel.position.set(0, 0, this.dm(-8));

    return backWallModel;
  }

  private createSideWall() {
    const sideWallGeometry = new THREE.BoxGeometry(
      this.dm(0.025),
      this.dm(10),
      this.dm(8)
    );
    const sideWallModel = new THREE.Mesh(sideWallGeometry, this.wallColor);

    return sideWallModel;
  }

  private createLeftSideWall() {
    const leftSideWallModel = this.createSideWall();
    leftSideWallModel.position.set(this.dm(-4), 0, this.dm(-4));

    return leftSideWallModel;
  }

  private createRightSideWall() {
    const rightSideWallModel = this.createSideWall();
    rightSideWallModel.position.set(this.dm(4), 0, this.dm(-4));

    return rightSideWallModel;
  }

  private createRoofCone() {
    const roofConeGeometry = new THREE.ConeGeometry(
      this.dm(6.8),
      this.dm(2),
      4
    );
    const roofConeModel = new THREE.Mesh(roofConeGeometry, this.roofColor);
    roofConeModel.position.set(0, this.dm(6), this.dm(-4));
    roofConeModel.rotation.y = Math.PI / 4;

    return roofConeModel;
  }

  private createFloor() {
    const floorGeometry = new THREE.BoxGeometry(
      this.dm(8),
      this.dm(0.025),
      this.dm(8)
    );
    const floorModel = new THREE.Mesh(floorGeometry, this.material);
    floorModel.position.set(0, this.dm(-5), this.dm(-4));

    return floorModel;
  }

  private createRoof() {
    const roofGeometry = new THREE.BoxGeometry(
      this.dm(8),
      this.dm(0.025),
      this.dm(8)
    );
    const roofModel = new THREE.Mesh(roofGeometry, this.material);
    roofModel.position.set(0, this.dm(5), this.dm(-4));

    return roofModel;
  }

  private createDoor() {
    const door = this.doorModel.getModel();
    door.position.set(0, this.dm(-3), this.dm(0.025));
    return door;
  }

  private createWindowLeft() {
    const windowLeft = this.windowLeftModel.getModel();
    windowLeft.position.set(this.dm(-3.25), this.dm(1.5), this.dm(0.05));

    return windowLeft;
  }

  private createWindowRight() {
    const windowRight = this.windowRightModel.getModel();
    windowRight.position.set(this.dm(1.25), this.dm(1.5), this.dm(0.05));

    return windowRight;
  }

  public getModel() {
    this.model.add(this.createFrontWall());
    this.model.add(this.createBackWall());
    this.model.add(this.createRoofCone());
    this.model.add(this.createFloor());
    this.model.add(this.createRoof());
    this.model.add(this.createDoor());
    this.model.add(this.createWindowLeft());
    this.model.add(this.createWindowRight());
    this.model.add(this.createLeftSideWall());
    this.model.add(this.createRightSideWall());
    this.model.position.set(0, 0, 0);

    return this.model;
  }
}
