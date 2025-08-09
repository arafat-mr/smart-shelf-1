import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSIgnOut = () => {
    logOut().then(res=>{
       Swal.fire({
                title: " Successfully logged Out",
                icon: "success",
                draggable: true,
              });
    }).catch(err=>{
       Swal.fire({
                title: `${err.message}`,
                icon: "err",
                draggable: true,
              });
    })
  };
  const links = (
    <>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/bookShelf">Bookshelf</NavLink>
      <NavLink to="/addBook">Add Book</NavLink>

      <NavLink to="/myBooks">My Books </NavLink>
      <NavLink to="/profile">Profile </NavLink>
    </>
  );
  return (
    <div className="navbar bg-transparent shadow-sm">
      <div className="navbar-start">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden -ml-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="indigo"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="  text-center text-lg menu menu-sm dropdown-content rounded-box z-1 mt-2 w-32   p-2 shadow bg-base-300 text-indigo-500"
          >
            {links}
          </ul>
        </div>
        <div className="flex justify-center items-center -ml-4 md:px-4">
          <img
            className=" w-8 md:w-10 "
            src="https://i.ibb.co/ymbFQTnC/1-2eb8e33a-removebg-preview.png"
            alt=""
          />
          <p className=" text-lg md:text-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-semibold">
            Smart <span className="-ml-1">Shelf</span>{" "}
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 space-x-5 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent text-lg">
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-1 lg:space-x-2">
        {/* {user ? (
          <button
            onClick={handleSIgnOut}
            className="btn btn-outline btn-secondary hidden lg:flex"
          >
            Signout
          </button>
        ) : (
          <>
            {" "}
            <Link
              to="/login"
              className="btn btn-outline btn-secondary hidden lg:flex"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn btn-outline btn-secondary hidden lg:flex"
            >
              SignUp
            </Link>
          </>
        )} */}
        {user ? (<>
          <div className="bg-white rounded-full h-9 w-9 lg:h-10 lg:w-10 overflow-hidden"><img className="w-full h-full" src={user.photoURL} alt="" /></div>
          <button
            onClick={handleSIgnOut}
            className="btn btn-outline btn-secondary btn-sm lg:btn-md  "
          >
            Signout
          </button>
          </>
        ) : (
          <>
          <div className="bg-white rounded-full h-9 w-9 lg:h-10 lg:w-10"><img src="https://i.ibb.co/fzJPDZJt/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" /></div>
            <Link
              to="/login"
              className=" btn btn-sm btn-outline btn-secondary lg:btn-md  "
            >
              Login
            </Link>
            <Link
              to="/signup"
              className=" btn btn-sm  btn-outline btn-secondary lg:btn-md "
            >
              SignUp
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
