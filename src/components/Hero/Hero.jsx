import React from "react";
import heroImage from "../../assets/images/home/mobile/create-and-share.jpg";
import hero from "../../assets/images/home/desktop/create-and-share.jpg";

const Hero = () => {
  return (
    <article>
      <section>
        <img src={heroImage} alt="hero image" className="hero-image" />
      </section>
    </article>
  );
};

export default Hero;
