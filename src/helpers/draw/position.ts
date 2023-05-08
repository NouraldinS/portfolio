export default class Position {
  x = 0;

  y = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  shiftBy(x: number, y: number) {
    this.x += x;
    this.y += y;
  }
}
