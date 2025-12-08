import React from "react";
import "./PhotoCard.scss";
import ReadStoryButton from "../ReadStoryButton/ReadStoryButton";

const PhotoCard = ({ image, title, photographer }) => {
  return (
    <article
      className="photo-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <h3 className="photo-card__title">{title}</h3>
        <p className="photo-card__text">by {photographer}</p>
      </div>
      <div className="photo-card__line"></div>
      <ReadStoryButton />
    </article>
  );
};

export default PhotoCard;
