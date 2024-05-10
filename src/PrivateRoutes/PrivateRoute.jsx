import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-red-600"></span>
        ;
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={location?.pathname || "/"} />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
