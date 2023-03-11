import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import OurTeam from "../OurTeam/OurTeam";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Teams from "../Teams/Teams";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Products />
      <OurTeam />
    </div>
  );
};

export default Home;
