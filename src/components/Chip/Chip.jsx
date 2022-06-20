import * as React from "react";
import "./Chip.css";

export function Chip({ label = "", isActive = false, clicky = () => {} }) {
  let buttonClassName = "";
  if (isActive == true) {
    buttonClassName = "chip active";
  }
  if (isActive == false) {
    buttonClassName = "chip";
  }
  //if state = same category
  return (
    <button className={isActive ? "chip active" : "chip"} onClick={clicky}>
      {/* i added */}
      {/* <button onClick={doSomething}>Do something</button>; */}
      {/* end of me */}
      <p className="label"> {label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  );
}

export default Chip;
