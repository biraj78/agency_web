import React from "react";
import "../style/footer.css";
// import logo from "../images/miniLogo.png";
import icon from "../images/asset 28.png"
const Footer = () => {
  return (
    <>
      {/* back to top */}
 
      {/* footer */}
      <div style={{ background: "rgb(37, 47, 61)" }}>
        <div class="footer">
          <div class="logo nav_logo">
            <img
              src={icon}
              class="amazon_logo logo_margin"
              alt="Agex Digital"
            />
          </div>
          <div class="copy_right">
          &copy; 2022-2024,&nbsp; agexdigital.tech
        </div>
          {/* <div class="logos">
          <img class="media_logo" src={icon} alt="FusionFervor facebook link" />
        </div> */}
        </div>
       
     
      </div>
    </>
  );
};

export default Footer;
