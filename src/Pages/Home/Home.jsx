import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import { useState } from "react";
import PopularService from "./PopularService";

const Home = () => {

  return (
    <div>
      <Hero />
      <PopularService />
    </div>
  );
};

export default Home;
