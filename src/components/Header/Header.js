import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full px-2 md:px-12 lg:px-20 bg-neutral text-white py-3 shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <h1 className="text-3xl font-semibold text-primary flex items-center gap-2">
              <span>Movie App</span>
              <span className="w-8 h-4 bg-gradient-to-tr from-primary to-secondary rounded-lg"></span>
            </h1>
          </Link>

          <NavLink to="/" className="hidden sm:block hover:text-secondary duration-300">
            Movies
          </NavLink>
          <NavLink to="/" className="hidden sm:block hover:text-secondary duration-300">
            TV Shows
          </NavLink>
          <NavLink to="/" className="hidden sm:block hover:text-secondary duration-300">
            Drama
          </NavLink>

        </div>

        <div className="flex items-center gap-4">
          <NavLink to="/" className="hidden sm:block hover:text-secondary duration-300">
            Join Us
          </NavLink>
          <NavLink to="/" className="hover:text-secondary duration-300">
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;