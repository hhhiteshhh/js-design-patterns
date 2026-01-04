export const ShapeTypes = {
  CIRCLE: "circle",
  SQUARE: "square",
  RECTANGLE: "rectangle",
} as const;

export type ShapeType = (typeof ShapeTypes)[keyof typeof ShapeTypes];

export class Shape {
  name: ShapeType;
  rotationEnabled: boolean;

  constructor(name: ShapeType) {
    this.name = name;
    this.rotationEnabled = false;
  }

  toggleRotation(): boolean {
    this.rotationEnabled = !this.rotationEnabled;
    return this.rotationEnabled;
  }
}
export class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super(ShapeTypes.CIRCLE);
    this.radius = radius;
  }
}
export class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super(width === height ? ShapeTypes.SQUARE : ShapeTypes.RECTANGLE);

    this.width = width;
    this.height = height;
  }

  logInfo(): void {
    console.log(this);
  }
}
export class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }
}
export type ShapeInstance = Circle | Rectangle | Square;
