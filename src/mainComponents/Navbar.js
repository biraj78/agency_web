import React, { useState } from "react";
import "../style/MainPage.css"
import menu from "../images/menu.png"
import close from "../images/close.png"
import logo from "../images/Agex.png"
const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [position, setPosition] = useState('');

  const [clicked, setClicked] = useState(false)
 
  const navItems = ["Home", "About us", "Services"];

  const handleItemClick = (index) => {
    setSelectedItem(index);
    if(index === 0) {
      setPosition('home');
    } else if (index === 1) {
      setPosition('aboutUs');
    } else {
      setPosition('services');
    }
  };



  return (
    <>
      <div
        className="nav_container"
      >
        <div className="nav_items">
          <div className="main_logo">
            <img src={logo} alt="Agex Digital marketing agency logo" />
          </div>
          <div className="right_item" >
            <ul style={{
            display: window.innerWidth < 820 && clicked === false ? "none" : "flex"
          }}>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${
                    selectedItem === index ? "selected" : ""
                  }`}
                  onClick={() => 
                      handleItemClick(index)
                   }
                   >
                 <a href={`#${position}`}> {item}</a>

                </li>
              ))}
<div>
  <img src={close} alt="" style={{
    display: window.innerWidth < 820 && clicked ? "block" : "none",
    height:"20px",
 padding: "5px"
  }}
  onClick={() => {
    setClicked(false)
  }}
  />
  </div>

            </ul>


            <div className="menu" onClick={() => {
              setClicked(true)
            }}>
                  <img src={menu} alt="menu icon" />
                 </div>

          <a href="#contact">  <button>Contact Us</button></a>
       
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
