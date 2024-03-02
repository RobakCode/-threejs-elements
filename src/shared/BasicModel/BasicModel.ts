export class BasicModel {
  defaultMeasure: number = 1;

  constructor(options: { defaultMeasure: number }) {
    this.defaultMeasure = options.defaultMeasure;
  }

  public dm(value: number) {
    return this.defaultMeasure * value;
  }
}
