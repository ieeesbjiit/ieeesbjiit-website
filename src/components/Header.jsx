import React from "react";
import ieeeLogo from "../assets/ieee_logo.png";
import jiitLogo from "../assets/jiit.png";
import { Link } from "react-router-dom";

const Header = ({active}) => {
  return (
    <div className="navbar bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <img src={ieeeLogo} className="h-8 lg:h-12" />
        </div>
      </div>
      <div className="navbar-center">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
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
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className={`${active === "home" && 'bg-primary'}`}>
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={`${active === "team" && 'bg-primary'}`}>
              <Link to="/team">
                <a>Team</a>
              </Link>
            </li>
            <li className={`${active === "events" && 'bg-primary'}`}>
              <Link to="/events">
                <a>Events</a>
              </Link>
            </li>
          </ul>
        </div>
        <ul class="menu menu-horizontal p-0 hidden lg:flex lg:text-xl">
          <li className={`${active === "home" && 'bg-primary rounded-lg text-white'}`}>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={`${active === "team" && 'bg-primary rounded-lg text-white'}`}>
            <Link to="/team">
              <a>Team</a>
            </Link>
          </li>
          <li className={`${active === "events" && 'bg-primary rounded-lg text-white'}`}>
            <Link to="/events">
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <img src={jiitLogo} className="h-20 lg:h-24" />
      </div>
    </div>
  );
};

export default Header;
