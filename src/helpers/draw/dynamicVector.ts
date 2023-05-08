import Vector from './vector';

export type VectorFunction = ((timestamp: number) => [xv: number, yv: number]);

export default class DynamicVector extends Vector {
  isDynamic = true;

  vectorFunction: VectorFunction | null = null;

  constructor(vectorFunction: VectorFunction, timestamp = (new Date()).getTime()) {
    const [xv, yv] = vectorFunction(timestamp);
    super(0, 0);
    super.xv = xv;
    super.yv = yv;
    this.vectorFunction = vectorFunction;
  }

  setVectorFunction(func: VectorFunction) {
    this.vectorFunction = func;
  }

  update(timestamp = (new Date()).getTime()) {
    if (!this.vectorFunction) throw new Error('"vectorFunction" must be set');

    const [xv, yv] = this.vectorFunction(timestamp);
    super.xv = xv;
    super.yv = yv;
  }
}
