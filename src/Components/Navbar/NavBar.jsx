import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import google_developers_group from "file:///C:/Users/asati/GDG-Frontend/src/assets/Google_developrs_header.svg";
import ProfilePhoto from "../../Pages/ProfilePhoto/Profile"; // Adjust the path as needed

function NavBar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Determine button text and its link based on current page.
  let buttonText = "Login";
  let buttonLink = "/";

  if (location.pathname === "/") {
    buttonText = "Signup";
    buttonLink = "/Signup";
  } else if (location.pathname === "/signup") {
    buttonText = "Login";
    buttonLink = "/";
  }

  // Dummy user object. In a real scenario, replace with your user state.
  const user = {
    name: "",
    avatar: ""
  };

  return (
    <>
      <nav className="relative w-full flex justify-between items-center p-2 bg-white md:flex-row flex-col gap-4">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-4">
          <img
            src={google_developers_group}
            alt="Google Developer Group VIT-AP"
            className="h-10"
          />
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="absolute left-4 top-1 md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-600 text-2xl"
          >
            ☰
          </button>
        </div>

        {/*Navigation */}
        <div className="hidden md:flex ml-auto items-center gap-4">
          <ul className="flex space-x-8 text-md font-medium">
            <li>
              <NavLink
                to="/Home"
                className="hover:text-blue-500 md:text-xl font-[PT Sans]"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-blue-500 md:text-xl">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className="hover:text-blue-500 md:text-xl">
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className="hover:text-blue-500 md:text-xl">
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" className="hover:text-blue-500 md:text-xl">
                Our Team
              </NavLink>
            </li>
          </ul>
          <NavLink
            to={buttonLink}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all border border-black"
          >
            {buttonText}
          </NavLink>
          {/* Profile Section, to the right of the Login/Signup button */}
          <ProfilePhoto user={user} />
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 text-2xl mb-4"
            aria-label="Close Menu"
          >
            &times;
          </button>
          <ul className="flex flex-col space-y-4 text-md font-medium">
            <li>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/Home"
                className="hover:text-blue-500"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/about"
                className="hover:text-blue-500"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/events"
                className="hover:text-blue-500"
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/project"
                className="hover:text-blue-500"
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/team"
                className="hover:text-blue-500"
              >
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to={buttonLink}
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all border border-black"
              >
                {buttonText}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default NavBar;
