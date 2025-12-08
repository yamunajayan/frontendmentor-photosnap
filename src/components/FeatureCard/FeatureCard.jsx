import React from "react";
import "./FeatureCard.scss";

const FeatureCard = ({ image, title, description }) => {
  return (
    <article className="feature-card">
      <img src={image} alt="" className="feature-card__image" />
      <div className="feature-card__text">
        <h3 className="feature-card__title">{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
