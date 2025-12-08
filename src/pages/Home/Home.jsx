import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HomeDetailsSection from "../../components/HomeDetailsSection/HomeDetailsSection";
import HomeGallery from "../../components/HomeGallery/HomeGallery";
import HomeFeatureSection from "../../components/HomeFeatureSection/HomeFeatureSection";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HomeDetailsSection />
      <HomeGallery />
      <HomeFeatureSection />
    </div>
  );
};

export default Home;
