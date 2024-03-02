import * as THREE from "three";

import { BasicModel } from "@/shared/BasicModel/BasicModel";

export class WindowModel extends BasicModel {
  private createWindow() {
    const windowGeometry = new THREE.BoxGeometry(
      this.dm(2),
      this.dm(2),
      this.dm(0.025)
    );
    const windowModel = new THREE.Mesh(windowGeometry, this.material);
    windowModel.position.set(0, 0, 0);

    return windowModel;
  }

  public getModel(): THREE.Group {
    this.model.add(this.createWindow());

    return this.model;
  }
}
