import React from "react";
import buttonArrowBlack from "../../assets/logos/arrow-black.svg";
import "./HomeDetailsSection.scss";

const HomeDetailsSection = () => {
  return (
    <article className="home-details">
      <section className="home-details__section">
        <div className="home-details__blank-box"></div>
        <section className="home-details__text">
          <h2>Beautiful stories every time</h2>
          <p>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <button className="home-details__button-arrow">
            View the stories
            <img src={buttonArrowBlack} alt="arrow black" />
          </button>
        </section>
      </section>
      <section className="home-details__section">
        <div className="home-details__blank-box home-details__blank-box--left"></div>
        <section className="home-details__text">
          <h2>DESIGNED FOR EVERYONE</h2>
          <p>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <button className="home-details__button-arrow">
            View the stories
            <img src={buttonArrowBlack} alt="arrow black" />
          </button>
        </section>
        <div className="home-details__blank-box home-details__blank-box--right"></div>
      </section>
    </article>
  );
};

export default HomeDetailsSection;
