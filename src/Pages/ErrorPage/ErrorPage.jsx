import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center  h-[100vh]" >
      <div className="text-center ">
        <img src="" alt="" />
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <Link to={"/"} className="btn bg-[#000000ec] text-white">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
