import * as React from "react";
import "./Chip.css";

export function Chip({ label = "", isActive = false }) {
  let buttonClassName = "";
  if (isActive == true) {
    buttonClassName = "chip active";
  }
  if (isActive == false) {
    buttonClassName = "chip";
  }

  return (
    <button className={buttonClassName}>
      {/* i added */}
      {/* <button onClick={doSomething}>Do something</button>; */}
      {/* end of me */}
      <p className="label"> {label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  );
}

export default Chip;
