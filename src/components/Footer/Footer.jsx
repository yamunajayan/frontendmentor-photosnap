import React from "react";
import logo from "../../assets/logos/logo-white.svg";
import facebookLogo from "../../assets/images/shared/desktop/facebook.svg";
import youtubeLogo from "../../assets/images/shared/desktop/youtube.svg";
import twitterLogo from "../../assets/images/shared/desktop/twitter.svg";
import pinterestLogo from "../../assets/images/shared/desktop/pinterest.svg";
import instagramLogo from "../../assets/images/shared/desktop/instagram.svg";
import GetInviteButton from "../GetInviteButton/GetInviteButton";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer__logo-container">
          <img src={logo} alt="logo" className="footer__logo" />
          <ul className="footer__list">
            <li>
              <img
                src={facebookLogo}
                alt="facebook logo"
                className="footer__icon"
              />
            </li>
            <li>
              <img
                src={youtubeLogo}
                alt="youtube logo"
                className="footer__icon"
              />
            </li>
            <li>
              <img
                src={twitterLogo}
                alt="twitter logo"
                className="footer__icon"
              />
            </li>
            <li>
              <img
                src={pinterestLogo}
                alt="pinterest logo"
                className="footer__icon"
              />
            </li>
            <li>
              <img
                src={instagramLogo}
                alt="instagram logo"
                className="footer__icon"
              />
            </li>
          </ul>
        </div>
        <div className="footer__links">
          <p className="footer__text">HOME</p>
          <p className="footer__text">STORIES</p>
          <p className="footer__text">FEATURES</p>
          <p className="footer__text">PRICING</p>
        </div>
      </div>
      <div className="footer__bottom">
        <GetInviteButton />
        <p className="footer__copyright">© 2020. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
