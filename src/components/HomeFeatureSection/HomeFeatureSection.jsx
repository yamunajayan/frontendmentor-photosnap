import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import "./HomeFeatureSection.scss";
import { features } from "../../data/featuresData";

const HomeFeatureSection = () => {
  return (
    <article className="home-features">
      {features.slice(0, 3).map((feature) => (
        <FeatureCard
          key={feature.id}
          image={feature.image}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </article>
  );
};

export default HomeFeatureSection;
