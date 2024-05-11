import { Helmet } from "react-helmet";
import Hero from "./Hero";

import PopularService from "./PopularService";

const Home = () => {

  return (
    <div>
        <Helmet>
          <title>RepairRovers - Home</title>
        </Helmet>
      <Hero />
      <PopularService />
    </div>
  );
};

export default Home;
