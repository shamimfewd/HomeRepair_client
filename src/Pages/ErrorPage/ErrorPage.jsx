import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl">Page Not Found</h2>
        <Link to={"/"}>Go Back</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
