import React from "react";
import buttonArrow from "../../assets/logos/arrow.svg";
import "./GetInviteButton.scss";

const GetInviteButton = () => {
  return (
    <button className="get-invite-button">
      Get an invite
      <img src={buttonArrow} alt="arrow" />
    </button>
  );
};

export default GetInviteButton;
