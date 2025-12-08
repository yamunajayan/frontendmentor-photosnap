import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import { stories } from "../../data/storiesData";
import "./HomeGallery.scss";

const HomeGallery = () => {
  return (
    <article className="home-gallery">
      {stories.slice(0, 4).map((story) => (
        <PhotoCard
          key={story.id}
          image={story.image.mobile}
          title={story.title}
          photographer={story.photographer}
        />
      ))}
    </article>
  );
};

export default HomeGallery;
