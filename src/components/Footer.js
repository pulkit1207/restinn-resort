import "../assets/css/Footer.css";

import React from "react";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>REST-INN</h3>
        <ul className="socials">
          <li>
            <a href="https://www.facebook.com/" className="social-media">
              <TiSocialFacebook />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" className="social-media">
              <TiSocialInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" className="social-media">
              <TiSocialTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" className="social-media">
              <TiSocialLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy;2022 Rest-In. designed by <span>pulkit</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
