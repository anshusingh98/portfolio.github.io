import React from "react";
import "./intro.scss";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import img from "../assets/img.png"
function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="main_container">
        <div className="maincontent">
        <div className="text">
               <p>Hey There</p>
               <h1>I am Anshu Singh</h1>
               <p>Web Developer</p>
                    <div className="itemcontainer">
                    <span className="icons">
                      <FaWhatsapp />
                    </span>
                    <span className="icons">
                      <FaInstagram />
                    </span>
                    <span className="icons">
                      <FaGithub />
                    </span>
                    <span className="icons">
                      <FaLinkedin />
                    </span>
                    </div>
                    <div className="buttons">
                      <button>See My Work</button>
                      <button>Contact Details</button>
                    </div>
          </div>
          </div>
          <div className="mainimage">
            <img src={img} alt="my profile" />
          </div>
      </div>
    </div>
  );
}

export default Intro;
