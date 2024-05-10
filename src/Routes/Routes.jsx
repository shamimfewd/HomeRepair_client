import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Main/Main";
import Register from "../Pages/Rgister/Register";
import LogIn from "../Pages/LogIn/LogIn";
import AddService from "../Pages/AddServices/AddService";
import Services from "../Pages/Services/Services";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/service"),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/service"),
      },
    ],
  },
]);

export default router;
