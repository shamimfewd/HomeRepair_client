import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Main/Main";
import Register from "../Pages/Rgister/Register";
import LogIn from "../Pages/LogIn/LogIn";
import AddService from "../Pages/AddServices/AddService";
import Services from "../Pages/Services/Services";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import ManageService from "../Pages/ManageServices/ManageService";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookingPage from "../Pages/BookingPage/BookingPage";
import BookedServices from "../Pages/BookedServices/BookedServices";
import ServiceTodo from "../Pages/ServiceToDo/ServiceTodo";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
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
      {
        path: "/manageService",
        element: (
          <PrivateRoute>
            <ManageService />
          </PrivateRoute>
        ),
      },
      {
        path: "/updatePage/:id",
        element: (
          <PrivateRoute>
            <UpdatePage />
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(`http://localhost:5000/updateItem/${params.id}`),
      },
      {
        path: "/bookingPage/:id",
        element: (
          <PrivateRoute>
            <BookingPage />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/service"),
      },
      {
        path: "/bookedServices",
        element: (
          <PrivateRoute>
            <BookedServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/serviceToDo",
        element: (
          <PrivateRoute>
            <ServiceTodo />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
