import React from "react";
import logo from "../../assets/logos/logo-white.svg";
import facebookLogo from "../../assets/images/shared/desktop/facebook.svg";
import youtubeLogo from "../../assets/images/shared/desktop/youtube.svg";
import twitterLogo from "../../assets/images/shared/desktop/twitter.svg";
import pinterestLogo from "../../assets/images/shared/desktop/pinterest.svg";
import instagramLogo from "../../assets/images/shared/desktop/instagram.svg";
import GetInviteButton from "../GetInviteButton/GetInviteButton";
import "./Footer.scss";

const navLinks = ["HOME", "STORIES", "FEATURES", "PRICING"];
const socialIcons = [
  { src: facebookLogo, alt: "Facebook" },
  { src: youtubeLogo, alt: "YouTube" },
  { src: twitterLogo, alt: "Twitter" },
  { src: pinterestLogo, alt: "Pinterest" },
  { src: instagramLogo, alt: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__container">
          <div className="footer__logo-container">
            <div>
              {/* Logo */}
              <img src={logo} alt="logo" className="footer__logo" />
              {/* Nav links — one block only */}
              <div className="footer__links footer__links--tablet">
                {navLinks.map((link) => (
                  <p className="footer__text" key={link}>
                    {link}
                  </p>
                ))}
              </div>
            </div>
            <ul className="footer__list">
              {socialIcons.map(({ src, alt }, index) => (
                <li key={index}>
                  <img src={src} alt={`${alt} icon`} className="footer__icon" />
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__links">
            {navLinks.map((link) => (
              <p className="footer__text" key={link}>
                {link}
              </p>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <GetInviteButton />
          <p className="footer__copyright">
            Copyright 2019. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
