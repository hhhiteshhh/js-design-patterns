"use client";

import { useState } from "react";
import Shape from "./Shape";
import {
  Circle,
  Rectangle,
  Square,
  ShapeTypes,
  type ShapeType,
  ShapeInstance,
} from "./Shapes";

function LiveExample() {
  const [shapes, setShapes] = useState<ShapeInstance[]>([]);

  const addShape = (shapeType: ShapeType) => {
    setShapes((prev) => {
      switch (shapeType) {
        case ShapeTypes.CIRCLE:
          return [...prev, new Circle(30)];

        case ShapeTypes.RECTANGLE:
          return [...prev, new Rectangle(60, 30)];

        case ShapeTypes.SQUARE:
          return [...prev, new Square(60)];

        default: {
          // Exhaustive check (TypeScript safety)
          const _exhaustive: never = shapeType;
          return prev;
        }
      }
    });
  };
  console.log(shapes);
  return (
    <div className="flex flex-col p-2">
      <div className="flex gap-2 flex-wrap items-center">
        {shapes.map((shape, index) => (
          <Shape key={index} shape={shape} />
        ))}
      </div>

      <div className="flex gap-4 m-auto mt-4">
        <button
          className="shadow-md rounded-md py-1.5 px-3 hover:bg-indigo-700 hover:text-white"
          onClick={() => addShape(ShapeTypes.CIRCLE)}
        >
          Add Circle
        </button>

        <button
          className="shadow-md rounded-md py-1.5 px-3 hover:bg-indigo-700 hover:text-white"
          onClick={() => addShape(ShapeTypes.SQUARE)}
        >
          Add Square
        </button>

        <button
          className="shadow-md rounded-md py-1.5 px-3 hover:bg-indigo-700 hover:text-white"
          onClick={() => addShape(ShapeTypes.RECTANGLE)}
        >
          Add Rectangle
        </button>
      </div>
    </div>
  );
}

export default LiveExample;
