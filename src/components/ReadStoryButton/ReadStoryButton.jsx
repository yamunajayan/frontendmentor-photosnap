import React from "react";
import arrow from "../../assets/logos/arrow.svg";
import "./ReadStoryButton.scss";

const ReadStoryButton = () => {
  return (
    <button className="read-story-button">
      <span className="read-story-button__text">Read Story</span>
      <img src={arrow} alt="arrow" />
    </button>
  );
};

export default ReadStoryButton;
