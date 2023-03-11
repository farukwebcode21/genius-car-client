import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import OurTeam from "../OurTeam/OurTeam";
import Products from "../Products/Products";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Products />
      <OurTeam />
      <CoreFeatures />
    </div>
  );
};

export default Home;
