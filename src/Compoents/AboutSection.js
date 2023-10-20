import React from "react";
import "../style/aboutSection.css";
import cube from "../images/cube.png"
import lines from "../images/lines.png"
import clock from "../images/clock.png"
const AboutSection = () => {
  return (
    <div id="aboutUs">
    <div className="about_container">
      <div className="aboutSec">
        <div className="aboutTitle">
          <h3>About Agex</h3>
        </div>
        <div className="aboutDec">

          <p>
            At Agex Digital, We believe in a systematic approach for any project be
            it complex or simple. We are a group of individuals with a various
            set of skill set varies from Digital Marketing to Ai Automation
            solutions. We ensure
            top-notch quality, on-time delivery, and agility for your project.
          </p>
        </div>
        <div className="aboutCard">
            <div className="cardLayout first">
                <img src={cube} alt="" />
            <h4>Cutting Edge Technology</h4>
            <p>Take the advantage of our cutting-edge solutions to increase your Return of Investment on IT.</p>
            </div>
            <div className="cardLayout second">
            <img className="lines" src={lines} alt="" />
            <h4>Cross Device Compatibility</h4>
            <p>Multi-device compatibility ensures that creating, viewing and providing quick and easy in every devices.</p>
            </div>
            <div className="cardLayout third">
            <img src={clock} alt="" />
            <h4>Tailer Mode Development</h4>
            <p>Scalable and dynamic systems with the ever-changing trends to meet your dynamic business needs</p>
            </div>
        </div>
      </div>

    </div>
    <div className="hrLine"></div>
    </div>
  );
};

export default AboutSection;
