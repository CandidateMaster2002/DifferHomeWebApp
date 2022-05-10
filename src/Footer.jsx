import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className="footer" >
        <div className="footerContent" id='contactus'>
          <div className="about">
            <h2><a href="home_" > <img src='images/light DH logo.png' alt="logo" /></a>
              <strong>DifferHome</strong></h2>
            <p>Differhome is one stop solution to discover and<br />the perfect dream home for you.<br />
              Premium apartments, villas, bungalows and<br />much more are available in a single platform.</p>
            <h5>About Us<br />FAQs</h5>
          </div>
          <div className="explore">
            <h3>Explore</h3>
            <p>Apartments</p>
            <p>Villas / Bungalows</p>
            <p>Land / Plots</p>
            <p>Residential Properties</p>
            <p>Commercial Properties</p>
            <p>Ready to Move-In</p>
          </div>
          <div className="contact">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <span><FontAwesomeIcon icon={faEnvelope} /></span>
            <a href="mailto:info@differhome.com"> info@differhome.com</a>
          </div>
          <div className="contact-info">
            <span><FontAwesomeIcon icon={faPhone} /></span>
            <a href="tel:+919351822152"> (+91) 93518 22152 </a>
          </div>
          <div className="Footericons">
            <a href="#"><img src='images/Icon awesome-facebook.png' /></a>
            <a href="#"><img src='images/Icon feather-instagram.png' /></a>
            <a href="#"><img src='images/Icon awesome-twitter.png' /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright@ 2022. All Rights Reserved.</p>
      </div>
      </footer>
    </>
  )
}
export default Footer;