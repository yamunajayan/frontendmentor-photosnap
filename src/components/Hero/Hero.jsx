import React from "react";
import heroImage from "../../assets/images/home/mobile/create-and-share.jpg";
import buttonArrow from "../../assets/logos/arrow.svg";
import heroImageTablet from "../../assets/images/home/tablet/create-and-share.jpg";
import heroImageDesktop from "../../assets/images/home/desktop/create-and-share.jpg";
import "./Hero.scss";

const Hero = () => {
  return (
    <article className="hero">
      <section className="hero__image-mobile">
        <img src={heroImage} alt="hero image" className="hero__image" />
      </section>
      <section className="hero__text-section">
        <h1>Create and share your photo stories. </h1>
        <p className="hero__text">
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
        <button className="hero__button-arrow">
          Get an invite
          <img src={buttonArrow} alt="arrow" />
        </button>
      </section>
      <section className="hero__image-tablet">
        <img src={heroImageTablet} alt="hero image" className="hero__image" />
      </section>
      <section className="hero__image-desktop">
        <img src={heroImageDesktop} alt="hero image" className="hero__image" />
      </section>
    </article>
  );
};

export default Hero;
