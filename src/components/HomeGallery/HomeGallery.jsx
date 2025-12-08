import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import photo from "../../assets/images/stories/mobile/mountains.jpg";

const HomeGallery = () => {
  return (
    <article>
      <PhotoCard
        image={photo}
        title="The Mountains"
        photographer="John Appleseed"
      />
    </article>
  );
};

export default HomeGallery;
