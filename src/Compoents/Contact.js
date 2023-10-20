import React, { useRef } from "react";
import "../style/Contact.css";
import locationimg from "../images/location.png";
import gmail from "../images/mail.png";
import call from "../images/call.png";
import icon from "../images/asset 28.png";
import axios from "axios";
const Contact = () => {
  const name = useRef();
  const email = useRef();
  const location = useRef();
  const message = useRef();
  const number = useRef();

  const sendReq = async (e) => {
    e.preventDefault();

    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const date = now.getDate();
    const readyDate = await `${date}/${month}/${year}`;
    console.log(readyDate);
    const MessageData = {
      date: readyDate,
      name: name.current.value,
      email: email.current.value,
      message: message.current.value,
      number: number.current.value,
      location: location.current.value,
    };

    try {
      const response = await axios.post(
        "https://wallet-lrnh.onrender.com/movies",
        MessageData,
        {
          timeout: 10000,
        }
      );
      alert(response.data.message);
      window.location.reload();
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      } else {
        alert("unknown error! try again later. ");
      }
      return;
    }
  };

  return (
    <section id="contact">
      <div className="contact_container">
        <div className="contactInfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <img src={locationimg} alt="fusion fervor location " />
                </span>
                <span>
                  Butwal, Nayagaun
                  <br />
                  Rupandehi <br />
                </span>
              </li>
              <li>
                <span>
                  <img src={call} alt="fusion fervor number" />
                </span>
                <span>+977 9816417742</span>
              </li>
              <li>
                <span>
                  <img src={gmail} alt="fusion fervor email " />
                </span>
                <span>agexdigital@gmail.com</span>
              </li>
            </ul>
          </div>
          <ul className="sci">
            <a href="https://www.facebook.com/AgexDigital">
              <img src={icon} alt="icon" />

              <p style={{}}>Agex Digital</p>
            </a>
          </ul>
        </div>
        <div className="contactForm">
          <h2>Send a message</h2>

          <form onSubmit={sendReq}>
            <div className="formBox">
              <div className="inputBox w50">
                <input type="text" required ref={name} />
                <span>Name</span>
              </div>
              <div className="inputBox w50">
                <input type="text" required ref={location} />
                <span>Location</span>
              </div>

              <div className="inputBox w50">
                <input type="text" required ref={email} />
                <span>Email Address</span>
              </div>

              <div className="inputBox w50">
                <input type="number" required ref={number} />
                <span>Mobile Number </span>
              </div>

              <div className="inputBox w100">
                {/* <input type='text' required /> */}
                <textarea required ref={message}></textarea>
                <span>Write your message here...</span>
              </div>

              <div className="inputBox w100">
                <button type="submit" value="Send">
                  Send{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
