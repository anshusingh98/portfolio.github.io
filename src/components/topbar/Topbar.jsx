import React from "react";
import "./topbar.scss";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
           porfolio
          </a>
    
        </div>

        <div className="right">
          <div className="navbar">
            <ul>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#projects">Project</a>
        </li>
        <li>
          <a href="#contacts">Contact</a>
        </li>
        </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
