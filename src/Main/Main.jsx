import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
// import Spinner from "../Components/Spinner";

const Main = () => {
  return (
    <div>
  
      <Header />
      {/* min-h-[calc(100vh-306px)] */}
      <div className=" max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
