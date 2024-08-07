import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import logo from "../assets/home_repire.png";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // dark and light mode
  const handleChangeTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  // log out
  const handleLogOut = () => {
    logOut()
      .then((reslut) => {
        console.log(reslut);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <div className="px-10  navbar bg-base-100 ">
        <div className=" navbar-start z-50">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-xl menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/services"}>Services</NavLink>
              </li>
              {/* <li>
              <NavLink to={"/register"}>Register</NavLink>
            </li> */}

              {user && (
                <li className="z-10">
                  <details>
                    <summary>Dashboard</summary>
                    <ul className="w-[10rem]">
                      <li className="mb-1">
                        <NavLink to={"/addService"}> Add Service </NavLink>
                      </li>
                      <li className="mb-1">
                        <NavLink to={"/manageService"}>
                          {" "}
                          Manage Service{" "}
                        </NavLink>
                      </li>
                      <li className="mb-1">
                        <NavLink to={"/bookedServices"}>
                          {" "}
                          Booked-Services{" "}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/serviceToDo"}> Service-To-Do </NavLink>
                      </li>
                    </ul>
                  </details>
                </li>
              )}
            </ul>
          </div>

          <Link className="text-2xl font-bold">
            <img className="w-20 h-20 -mb-6" src={logo} alt="" />
            <span className="pl-3">
              Home <span className="text-[#3ACF87]">Repair</span>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            {/* <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li> */}

            {user && (
              <li className="z-10">
                <details>
                  <summary>Dashboard</summary>
                  <ul className="w-[15rem]">
                    <li className="mb-1">
                      <NavLink to={"/addService"}> Add Service </NavLink>
                    </li>
                    <li className="mb-1">
                      <NavLink to={"/manageService"}> Manage Service </NavLink>
                    </li>
                    <li className="mb-1">
                      <NavLink to={"/bookedServices"}>
                        {" "}
                        Booked-Services{" "}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/serviceToDo"}> Service-To-Do </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <label className="swap swap-rotate  pr-6">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                checked={theme === "light" ? false : true}
                onChange={handleChangeTheme}
                className="hidden"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {user ? (
            <>
              <div
                className="tooltip tooltip-bottom pr-4 z-10"
                data-tip={user?.displayName || "Name not found"}
              >
                <img
                  className="w-10 h-10 rounded-full cursor-pointer "
                  src={user?.photoURL || ""}
                  alt=""
                />
              </div>

              <button
                onClick={handleLogOut}
                className="btn lg:text-lg bg-orange-400 border-none text-white"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link to={"/login"}>
              <button className="btn lg:text-lg bg-[#3ACF87] text-white border-none">
                LogIn
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
