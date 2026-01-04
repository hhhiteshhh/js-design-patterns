import { useState } from "react";
import {
  type Circle as CircleClass,
  type Rectangle as RectangleClass,
  ShapeInstance,
  ShapeTypes,
} from "./Shapes";

const Circle = ({ shape }: { shape: CircleClass }) => {
  const { radius } = shape;
  const diameter = radius * 2;
  return (
    <div
      className={`circle rounded-full bg-red-500`}
      style={{
        width: diameter,
        height: diameter,
      }}
    ></div>
  );
};

const Rectangle = ({ shape }: { shape: RectangleClass }) => {
  const { width, height } = shape;
  return (
    <div
      className={`rectangle bg-blue-500`}
      style={{
        width,
        height,
      }}
    ></div>
  );
};

const Shape = ({ shape }: { shape: ShapeInstance }) => {
  const [rotationEnabled, setRotationEnabled] = useState(shape.rotationEnabled);
  return (
    <div
      className={`shape ${rotationEnabled ? "shape--rotate" : ""}`}
      onClick={() => {
        const newRotationVal = shape.toggleRotation();
        setRotationEnabled(newRotationVal);
        if ("logInfo" in shape && typeof shape.logInfo === "function") {
          shape.logInfo();
        }
      }}
    >
      {shape.name === ShapeTypes.CIRCLE ? (
        <Circle shape={shape as CircleClass} />
      ) : (
        <Rectangle shape={shape as RectangleClass} />
      )}
    </div>
  );
};

export default Shape;
