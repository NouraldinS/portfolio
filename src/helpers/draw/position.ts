export default class Position {
  x = 0;

  y = 0;

  z = 0;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  // Shift item's original positoin by x, y, z
  shiftBy(x: number = 0, y: number = 0, z: number = 0) {
    this.x += x;
    this.y += y;
    this.z += z;
    return this;
  }

  copy() { return new Position(this.x, this.y, this.z); }

  toArray() { return [this.x, this.y, this.z]; }
}
