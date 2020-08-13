import React from "react";
import "../../styles/contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contacttitle">Contact Me</h1>
      <div className="center">
        <form className="contactform" netlify>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
