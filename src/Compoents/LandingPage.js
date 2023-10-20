import React from "react";
import "../style/landing.css";
import right from "../images/Group.png";
import light from "../images/bulb.png";
import fusionLogo from "../images/miniLogo.png"
import rating from "../images/rating.png"
// import code from "../images/code.png"
import ai from "../images/ai.png"
import digi from "../images/digital-marketing.png"
const LandingPage = () => {
  return (
    <>
      <div className="landing_container" id="home">
        <div className="landing_review">

          <div className="review_profile">
            <img className="review_profile_img" src={fusionLogo} alt="" />
            <span className="review_name">Fusion Fervor</span>
          </div>

          <div className="review_rating_div">
            <img className="review_rating_img" src={rating} alt="" />
          <span> 5.0</span> 
          </div>

          <h4 className="review_header">Website & Facebook Page Setup</h4>
          <p className="review_dec">Agex is  great digital agency in Nepal. It provides latest digital services and best suggestion for scaling business. Highly Recommended for your Business.</p>

        </div>
        <div className="landing_light">
          <img src={light} alt="" />
        </div>
        <div className="landing_grow_icon">
          {/* <img src={grow} alt="" /> */}
        </div>
        {/* <div className="landing_service"> */}
        <div className="landing_service">
          <div className="services">
          <div className="automation">
            <img src={digi} alt="" />
            <div style={{marginTop: "-10px"}}>
            <h3>Digital Marketing</h3>
            <button className="smm">SMM</button>
            <button className="sem">SEM</button>
            <button className="seo">SEO</button>
            </div>
          </div>
          <div className="digital_marketing">
          <img src={ai} alt="" />
            <div style={{marginTop: "-10px"}}>
            <h3>AI/Marketing Automation</h3>
            <button className="chatbot">AI Chatbot</button>
            <button className="sem">A-Email Marketing</button>

            </div>
          </div>
          </div>

</div>
    
        <div className="text_div">
          <div className="landing_header">
            <h1>
              Advanced Marketing, Automation for{" "}
              <span className="simple">SCALING </span> your business
            </h1>
            <p>
              We harness the latest technologies to develop cutting-edge digital
              solutions for modern business requirements
            </p>
            <a href="#contact"><div className="landing_button">
              <span> Get a Quote</span>
              <img src={right} alt="" />
            </div>
            </a>
            <div className="result">
              <div className="worked_clients">
                <span className="num">1900+</span>
                <span className="txt"> Customer Served</span>
              </div>
              <div className="project_done" >
                <span className="num">16</span>
                <span className="txt"> Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
