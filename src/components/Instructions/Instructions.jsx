import * as React from "react";
import "./Instructions.css";

export function Instructions(props) {
  return (
    <aside className="instructions">
      <p> {props.struct.start}</p>
    </aside>
  );
}

export default Instructions;
