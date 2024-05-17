import React, { useState } from 'react';
import './contact.css'
import locationIcon from './img/location.png';
import emailIcon from './img/email.png';
import phoneIcon from './img/phone.png';
import shapeImage from './img/shape.png';
function Contact() {
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  const handleFocus = (e) => {
    const fieldName = e.target.name;
    setFocus({ ...focus, [fieldName]: true });
  }

  const handleBlur = (e) => {
    const fieldName = e.target.name;
    if (e.target.value === '') {
      setFocus({ ...focus, [fieldName]: false });
    }
  }

  return (
    <div className="Ccontainer">
      <span className="big-circle"></span>
      <img src={shapeImage} className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            SmartDietBuddy is there for you
          </p>

          <div className="info">
            <div className="information">
              <img src={locationIcon} className="icon" alt="" />
              <p>LPU Near Phawara</p>
            </div>
            <div className="information">
              <img src={emailIcon} className="icon" alt="" />
              <p>prateeksinghk7.gmail.com</p>
            </div>
            <div className="information">
              <img src={phoneIcon} className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-iconss">
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://twitter.com/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
                              
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className={`input-container ${focus.name ? 'focus' : ''}`}>
              <input type="text" name="name" className="input" onFocus={handleFocus} onBlur={handleBlur} />
              <label>Username</label>
              <span>Username</span>
            </div>
            <div className={`input-container ${focus.email ? 'focus' : ''}`}>
              <input type="email" name="email" className="input" onFocus={handleFocus} onBlur={handleBlur} />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className={`input-container ${focus.phone ? 'focus' : ''}`}>
              <input type="tel" name="phone" className="input" onFocus={handleFocus} onBlur={handleBlur} />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className={`input-container textarea ${focus.message ? 'focus' : ''}`}>
              <textarea name="message" className="input" onFocus={handleFocus} onBlur={handleBlur}></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
