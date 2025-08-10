import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import LoadingSpinner from "../Loading/Loading";
const Navbar = () => {
  const { user, logOut,loading } = useContext(AuthContext);
  const handleSIgnOut = () => {
    logOut().then(()=>{
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
    <NavLink
      to="/"
      className="transition-colors duration-300 hover:text-pink-500"
    >
      Home
    </NavLink>

    <NavLink
      to="/bookShelf"
      className="transition-colors duration-300 hover:text-pink-500"
    >
      Bookshelf
    </NavLink>
    <NavLink
      to="/faq"
      className="transition-colors duration-300 hover:text-pink-500"
    >
      FAQ
    </NavLink>

    
     {

      user && <>
      <NavLink
      to="/addBook"
      className="transition-colors duration-300 hover:text-pink-500"
    >
      Add Book
    </NavLink>
      <NavLink
      to="/myBooks"
      className="transition-colors duration-300 hover:text-pink-500"
    >
      My Books
    </NavLink>

    <NavLink
      to="/profile"
      className="transition-colors duration-300 hover:text-pink-500"
    >
      Profile
    </NavLink>
    </>
     }
    
  </>
);
const [theme, setTheme] = useState(
  localStorage.getItem("theme") === "light" ? "light" : "dark"
);
useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme);
  document.querySelector("html").setAttribute("data-theme", savedTheme);
}, [theme]);

const handleThemeChange = (event) => {
  const newTheme = event.target.checked ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
};
if (loading) {
    return <LoadingSpinner/>
  }

  return (
    <div className="navbar bg-white/10 backdrop-blur-xl shadow-sm px-5" >
      <div className="navbar-start">
        <div className="dropdown ">  
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden -ml-7"
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
          <p className="text-lg md:text-2xl bg-gradient-to-r from-white via-sky-100 to-gray-300 bg-clip-text text-transparent font-semibold hover:text-black transition-all duration-300">
  Smart <span className="-ml-1">Shelf</span>
</p>


        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 space-x-5 text-white text-lg">
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-1 lg:space-x-2">
        <input
  type="checkbox"
  value="dark"
  className="toggle theme-controller mr-6"
  checked={theme === "dark"}
  onChange={handleThemeChange}
/>;
        
        {user ? (<>
          <div className="bg-white rounded-full h-9 w-9 lg:h-10 lg:w-10 overflow-hidden"><img className="w-full h-full" src={user.photoURL} alt="" /></div>
          <button
            onClick={handleSIgnOut}
            className="btn btn-outline btn-secondary btn-sm lg:btn-md   border-blue-100 hover:bg-gray-300 text-pink-700 "
          >
            Signout
          </button>
          </>
        ) : (
          <>
          <div className="bg-white rounded-full h-9 w-9 lg:h-10 lg:w-10"><img src="https://i.ibb.co/qMCMB6Tq/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.png" alt="" /></div>
            <Link
              to="/login"
              className=" btn btn-sm btn-outline btn-secondary lg:btn-md  border-blue-100 hover:bg-gray-300 text-pink-700 "
            >
              Login
            </Link>
            <Link
              to="/signup"
              className=" btn btn-sm  btn-outline btn-secondary lg:btn-md text-pink-700  border-blue-100 hover:bg-gray-300 "
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
