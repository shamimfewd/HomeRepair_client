import { Helmet } from "react-helmet";
import Hero from "./Hero";

import PopularService from "./PopularService";
import CounderPage from "./CounderPage";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
// import Review from "./Review";
import About from "../About/About";
import OurService from "../../Components/OurService";
import OurTeam from "../../Components/OurTeam";

const Home = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-red-600"></span>
        ;
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>RepairRovers - Home</title>
      </Helmet>
      <Hero />
      <OurService />
      <About />
      <PopularService />
      <CounderPage />
      <OurTeam />
      {/* <Review /> */}
    </div>
  );
};

export default Home;
