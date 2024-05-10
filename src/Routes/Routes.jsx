import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

import Main from "../Main/Main";
import Register from "../Pages/Rgister/Register";
import LogIn from "../Pages/LogIn/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
]);

export default router;
