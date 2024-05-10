import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

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
    <div className="navbar bg-base-100 ">
      <div className="navbar-start z-50">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            {user && (
              <li>
                <details>
                  <summary>Dashboard</summary>
                  <ul className="">
                    <li className="mb-1">
                      <NavLink> Add Service </NavLink>
                    </li>
                    <li className="mb-1">
                      <NavLink> Manage Service </NavLink>
                    </li>
                    <li className="mb-1">
                      <NavLink> Booked-Services </NavLink>
                    </li>
                    <li>
                      <NavLink> Service-To-Do </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            )}
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img className="w-10 h-10" src="/logo11.png" alt="" />
        <Link className="text-2xl">RepairRovers</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/services'}>Services</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>

          {user && (
            <li className="z-10">
              <details>
                <summary>Dashboard</summary>
                <ul className="">
                  <li className="mb-1">
                    <NavLink> Add Service </NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink> Manage Service </NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink> Booked-Services </NavLink>
                  </li>
                  <li>
                    <NavLink> Service-To-Do </NavLink>
                  </li>
                </ul>
              </details>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
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
              className="btn lg:text-lg bg-[#fc1414d6] border-none text-white"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="btn lg:text-lg bg-[#01EEFF] border-none">
              LogIn
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
