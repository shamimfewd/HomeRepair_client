import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
// import Spinner from "../Components/Spinner";

const Main = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          {/* min-h-[calc(100vh-306px)] */}
          <div className="">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
     
      ;
    </div>
  );
};

export default Main;
