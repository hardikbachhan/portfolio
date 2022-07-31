import React, { useRef, useState, useContext } from "react";
import { ThemeContext } from "../../context";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const clearFormInputs = () => {
    const form = document.querySelector(".submit-form");
    form.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "personal_website",
        "email_service_pw",
        formRef.current,
        "b-D4ma1HWOI_vDJQW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          clearFormInputs();
          setTimeout(() => {
            setDone(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your Project.</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="/img/email.png" alt="email" className="c-icon" />
              <p>hardikbachhan99@gmail.com</p>
            </div>
            <div className="c-info-item">
              <img src="/img/address.png" alt="address" className="c-icon" />
              <p>New Delhi, India</p>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <strong>What's your story?</strong> Get in touch. Always up for
            freelancing if the right project comes along. Me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="submit-form">
            <input
              style={{
                backgroundColor: darkMode ? "#333" : "#fff",
                borderBottom: darkMode && "1px solid #fff",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode ? "#333" : "#fff",
                borderBottom: darkMode && "1px solid #fff",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: darkMode ? "#333" : "#fff",
                borderBottom: darkMode && "1px solid #fff",
              }}
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: darkMode ? "#333" : "#fff",
                borderBottom: darkMode && "1px solid #fff",
              }}
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button>Submit</button>
            {done && <h1 className="response">Thank you!!!</h1>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
