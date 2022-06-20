import * as React from "react";
import "./Header.css";

export function Header(props) {
  return (
    <header className="header">
      <h1 className="title "> {props.info}</h1>
      <h4 className="tagline"> {props.tagg} </h4>
      <p className="description"> {props.des}</p>
    </header>
  );
}

export default Header;
