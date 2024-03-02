import * as THREE from "three";

import { BasicModel } from "@/shared/BasicModel/BasicModel";

export class WindowModel extends BasicModel {
  private createWindowFrameShape() {
    const windowFrameShape = new THREE.Shape();
    windowFrameShape.moveTo(0, 0);
    windowFrameShape.lineTo(this.dm(2), 0);
    windowFrameShape.lineTo(this.dm(2), this.dm(2));
    windowFrameShape.lineTo(0, this.dm(2));
    windowFrameShape.lineTo(0, 0);

    return windowFrameShape;
  }

  private createWindowHole() {
    const windowGlassHole = new THREE.Path();
    windowGlassHole.moveTo(this.dm(0.1), this.dm(0.1));
    windowGlassHole.lineTo(this.dm(1.9), this.dm(0.1));
    windowGlassHole.lineTo(this.dm(1.9), this.dm(1.9));
    windowGlassHole.lineTo(this.dm(0.1), this.dm(1.9));
    windowGlassHole.lineTo(this.dm(0.1), this.dm(0.1));

    return windowGlassHole;
  }

  private createWindowGlass() {
    const windowGlassShape = new THREE.Shape();
    windowGlassShape.moveTo(this.dm(0.1), this.dm(0.1));
    windowGlassShape.lineTo(this.dm(1.9), this.dm(0.1));
    windowGlassShape.lineTo(this.dm(1.9), this.dm(1.9));
    windowGlassShape.lineTo(this.dm(0.1), this.dm(1.9));
    windowGlassShape.lineTo(this.dm(0.1), this.dm(0.1));

    const windowGlassGeometry = new THREE.ExtrudeGeometry(windowGlassShape, {
      depth: this.dm(0.05),
      bevelEnabled: false,
    });

    const windowGlassModel = new THREE.Mesh(windowGlassGeometry, this.material);
    windowGlassModel.position.set(0, 0, this.dm(0.025));

    return windowGlassModel;
  }

  private createWindow() {
    const windowFrame = this.createWindowFrameShape();
    const windowHole = this.createWindowHole();
    const windowGlass = this.createWindowGlass();

    windowFrame.holes.push(windowHole);

    const windowGeometry = new THREE.ExtrudeGeometry(windowFrame, {
      depth: this.dm(0.1),
      bevelEnabled: false,
    });

    const windowModel = new THREE.Mesh(windowGeometry, this.material);
    windowModel.add(windowGlass);
    windowModel.position.set(0, 0, 0);

    return windowModel;
  }

  public getModel(): THREE.Group {
    this.model.add(this.createWindow());

    return this.model;
  }
}
