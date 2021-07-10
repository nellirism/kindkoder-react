import React from "react";
import "./style.css";

function Contact() {
  return (
    <div>
      <div className="container">
        <div className="wrapper animated bounceInLeft">
          <div className="company-info text-dark">
            <img src="./images/kindk.png" alt="" className="center"></img>

            <ul>
              <li>
                <i className="fa fa-road"></i> 99 Crimson Sunbird St.,
                Reykjavik, IS
              </li>
              <li>
                <i className="fa fa-phone"></i> (999) 999-9989
              </li>
              <li>
                <i className="fa fa-envelope"></i>eliadmanner@mail.com
              </li>
            </ul>
          </div>

          <div className="contact_form">
            <h2 className="contact_form__title">Contact Me</h2>
            <form method="POST" action="/api/support/sendemail">
              <div className="contact_form__inputGroup">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Please enter your name"
                />
              </div>
              <div className="contact_form__inputGroup">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Please enter your company"
                />
              </div>
              <div className="contact_form__inputGroup">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Please enter your email"
                />
              </div>
              <div className="contact_form__inputGroup">
                <label>Message</label>
                <input
                  type="text"
                  name="message"
                  placeholder="Please provide a short message here"
                />
              </div>
              <button
                className="contact_form__submitBtn btn mt-2"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
