import * as THREE from "three";

export class BasicModel {
  public model: THREE.Group = new THREE.Group();
  private measure: number = 1;
  public material = new THREE.MeshMatcapMaterial({
    color: "white",
    transparent: true,
    opacity: 1,
    depthWrite: true,
    depthTest: true,
  });

  constructor(options: { defaultMeasure: number } = { defaultMeasure: 1 }) {
    this.measure = options.defaultMeasure;
  }

  public dm(value: number) {
    return this.measure * value;
  }
}
