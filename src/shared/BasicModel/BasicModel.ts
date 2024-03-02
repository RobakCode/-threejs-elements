import * as THREE from "three";

export class BasicModel {
  public model: THREE.Group = new THREE.Group();
  private defaultMeasure: number = 1;

  constructor(options: { defaultMeasure: number } = { defaultMeasure: 1 }) {
    this.defaultMeasure = options.defaultMeasure;
  }

  public dm(value: number) {
    return this.defaultMeasure * value;
  }
}
