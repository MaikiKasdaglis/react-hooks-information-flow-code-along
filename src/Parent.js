import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");

function toChild(color, newChildColor) {
  console.log(`from kids phone`, color)
  setColor(color)
  setChildrenColor(newChildColor)
}

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child toChild={toChild} color={childrenColor}/>
      <Child toChild={toChild} color={childrenColor}/>
    </div>
  );
}

export default Parent;
