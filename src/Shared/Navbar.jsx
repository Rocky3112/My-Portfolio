/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'

const Navbar = () => {

    const navTabs = <>
        <li> <Link to='/home'>Home</Link> </li>
        <li> <a href='#aboutMe'>About Me</a> </li>
        <li> <a href='#projects'>Projects</a> </li>
        <li> <Link to='/blog'>Blog</Link> </li>
        <li> <a href='#contactMe'>Contact Me</a> </li>
    </>
  return (
    <div>
      <div className="navbar fixed bg-opacity-30 z-10 text-white bg-black max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navTabs}
            </ul>
          </div>
          <div className="btn btn-ghost text-2xl">
            <img className=" w-8  rounded-full" src={logo} />
          Rocky's <span className=" text-orange-500"> Portfolio</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navTabs}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
