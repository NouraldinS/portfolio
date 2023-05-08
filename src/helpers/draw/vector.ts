import { getVectorLength, horizontalComponent, verticalComponent } from '.';

export default class Vector {
  xv = 0;

  yv = 0;

  magnitude = 0;

  direction = 0;

  constructor(magnitude: number, direction: number) {
    this.magnitude = magnitude;
    this.direction = direction;
    this.#deduceComponents();
  }

  #deduceComponents() {
    this.xv = horizontalComponent(this.magnitude, this.direction);
    this.yv = verticalComponent(this.magnitude, this.direction);
  }

  getLength() {
    return getVectorLength(this.xv, this.yv);
  }

  setVector(magnitude: number, direction: number) {
    this.magnitude = magnitude;
    this.direction = direction;
    this.#deduceComponents();
  }

  setMagnitude(magnitude: number) {
    this.magnitude = magnitude;
    this.#deduceComponents();
  }

  setDirection(direction: number) {
    this.direction = direction;
    this.#deduceComponents();
  }
}
