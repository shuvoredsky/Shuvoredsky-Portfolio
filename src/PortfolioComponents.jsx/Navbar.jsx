import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaProjectDiagram,
  FaPhone,
  FaDownload,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import ShinyText from "../PortfolioComponents.jsx/effect/ShinyText";
import resume from "../assets/Resume of Shuvo-Chakrabarti (MERN Developer).pdf";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = (
    <>
      <li className="lg:text-primary">
        <a href="#about" className="flex items-center gap-1 text-primary">
          <FaUser /> About Me
        </a>
      </li>
      <li className="lg:text-primary">
        <a href="#project" className="flex items-center gap-1 text-primary">
          <FaProjectDiagram /> Projects
        </a>
      </li>
      <li className="lg:text-primary">
        <a href="#contact" className="flex items-center gap-1 text-primary">
          <FaPhone /> Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar mx-auto w-[60%] rounded-full px-4 py-2 backdrop-blur-md bg-opacity-50 shadow-md">
        {/* Logo */}
        <div className="flex-1">
          <a
            href="#home"
            className="text-xl font-bold btn btn-ghost normal-case"
          >
            <ShinyText text="ShuvoRedSky" speed={4} />
          </a>
        </div>

        {/* Mobile View Dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-circle btn-ghost text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 right-2 z-[1] p-4 shadow bg-base-200 rounded-box w-52"
          >
            {navLinks}
            <li>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-primary"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
            <li>
              <a
                href={resume}
                download
                className="flex items-center gap-2 text-primary"
              >
                <FaDownload /> Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex gap-4 items-center">
          <ul className="menu menu-horizontal gap-2">{navLinks}</ul>
          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-circle btn-outline text-primary"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <a href={resume} download className="btn btn-sm btn-primary gap-2">
            <FaDownload /> Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
