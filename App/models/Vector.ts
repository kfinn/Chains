export default class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  rotateBy(radians: number): Vector {
    return new Vector(
      Math.cos(radians) * this.x - Math.sin(radians) * this.y,
      Math.sin(radians) * this.x + Math.cos(radians) * this.y
    )
  }

  add(vector: Vector): Vector {
    return new Vector(
      this.x + vector.x,
      this.y + vector.y
    )
  }

  toSvgPath(): string {
    return `${this.x} ${this.y}`
  }
}
