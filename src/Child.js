import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ toChild, color }) {
  function childColorChange() {
    toChild(getRandomColor(), getRandomColor())
  }


  return <div className="child" onClick={childColorChange} style={{ backgroundColor: color }} />;
}

export default Child;
