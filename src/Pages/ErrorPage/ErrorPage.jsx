import { Link } from "react-router-dom";

import { FiChevronLeft } from "react-icons/fi";


const ErrorPage = () => {
  return (
    <div>
    <div className="text-center flex justify-center items-center h-[100vh]">
      <div>
        <img
          className="w-[300px] h-[250px]"
          src="https://www.ecommerce-nation.com/wp-content/uploads/2018/10/404-error.jpg.webp"
          alt=""
        />
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <Link to={"/"} className="mt-4 btn bg-[#01EEFF] flex items-center ">
          <FiChevronLeft
           /> <span>Go Home </span>{" "}
        </Link>
      </div>
    </div>
  </div>
  );
};

export default ErrorPage;
