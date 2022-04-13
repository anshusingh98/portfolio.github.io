import React from "react";
import "./naavbar.scss";

function Navbar() {
  return (
    <div className="naavbar">
      <ul>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
