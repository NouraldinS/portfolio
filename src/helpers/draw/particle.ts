import DynamicVector, { VectorFunction } from './dynamicVector';
import Position from './position';
import Vector from './vector';

type GeneralParticleProperties = {
  radius: number;
  opacity: number;
}

export default class Particle {
  position: Position = new Position(0, 0);

  vector: Vector | DynamicVector = new DynamicVector(() => [0, 0]);

  properties: GeneralParticleProperties = {
    radius: 0,
    opacity: 1,
  };

  constructor(x: number, y: number, speedOrFunction: number | VectorFunction, direction?: number) {
    this.position = new Position(x, y);
    if (typeof speedOrFunction === 'number') {
      this.vector = new Vector(speedOrFunction, direction as number);
    } else {
      this.vector = new DynamicVector(speedOrFunction);
    }
  }

  setProperties = (properties: GeneralParticleProperties) => {
    this.properties = properties;
  };

  setProperty = (
    property: keyof GeneralParticleProperties,
    value: GeneralParticleProperties[keyof GeneralParticleProperties],
  ) => {
    this.properties[property] = value;
  };

  update(bounds?: { x1: number; x2: number; y1: number; y2: number }) {
    if ((this.vector as DynamicVector).isDynamic) {
      (this.vector as DynamicVector).update();
    }

    this.position.shiftBy(this.vector.xv, this.vector.yv);
    if (bounds) {
      if (this.position.x > bounds.x2) this.position.x = bounds.x1;
      else if (this.position.x < bounds.x1) this.position.x = bounds.x2;
      if (this.position.y > bounds.y2) this.position.y = bounds.y1;
      else if (this.position.y < bounds.y1) this.position.y = bounds.y2;
    }
  }
}
