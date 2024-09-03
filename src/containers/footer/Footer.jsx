import React from "react";
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="gpt3__footer-button">
        <p>Request Early Access</p>
      </div>
      
      <div className="gpt3__footer-content">
        <div className="gpt3__footer-content__logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-content__div">
          <h4>Links</h4>
          <p><a href="#home">Overans</a></p>
          <p><a href="#home">Social Media</a></p>
          <p><a href="#home">Counters</a></p>
          <p><a href="#home">Contact</a></p>
        </div>

        <div className="gpt3__footer-content__div">
          <h4>Company</h4>
          <p><a href="#home">Terms & Conditions</a></p>
          <p><a href="#home">Privacy Policy</a></p>
          <p><a href="#home">Contact</a></p>
        </div>  

        <div className="gpt3__footer-content__div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p><a href="#home">info@payme.net</a></p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;