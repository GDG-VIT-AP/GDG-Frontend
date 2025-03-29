import React from 'react'
import Google_developrs_footer from "file:///C:/Users/asati/GDG-Frontend/src/assets/Google_developrs_footer.svg"
import { NavLink } from 'react-router-dom';
import Facebook_icon from "file:///C:/Users/asati/GDG-Frontend/src/assets/Facebook_icon.svg"
import Instagram_icon from "file:///C:/Users/asati/GDG-Frontend/src/assets/Instagram_icon.svg"

function Footer(props) {
  return (
    <footer className="bg-black text-white p-5 relative h-110">
      <div className="flex justify-between items-center">
        {/* Left Side: Logo and Text */}
        <div className="flex items-center gap-2">
          <img src={Google_developrs_footer} alt="GDG Logo" className="h-7" />
        </div>

        {/* Right Side: Services and Feedback Page */}
        <div className="relative md:absolute md:right-120">
          <p className="text-gray-400 text-xs">Services</p>
          <p>
            <NavLink to="/FeedBack" className="text-xs text-center">
              Feedback Page
            </NavLink>
          </p>
        </div>

        <div className="relative md:absolute md:right-50 md:top-5">
          <p className="text-gray-400 text-xs">Info</p>
          <p>
            <NavLink to="/About" className="text-xs text-center">
              About us
            </NavLink>
          </p>
          <p>
            <NavLink to="/Team" className="text-xs text-center">
              Our Team
            </NavLink>
          </p>
          <p>
            <NavLink to="/Event" className="text-xs text-center">
              Event
            </NavLink>
          </p>
          <p>
            <NavLink to="/Home" className="text-xs text-center">
              Home
            </NavLink>
          </p>
        </div>
      </div>

      <div className="relative md:absolute md:bottom-4 md:right-4">
        <p className="text-sm text-gray-400">©-2025 Copyright</p>
      </div>

      <div className="relative md:absolute md:bottom-4 md:left-4n flex flex-col">
        <a href="" target="blank">
          <img src={Facebook_icon} alt="Facebook" className="h-8" />
        </a>
      </div>

      <div className="relative md:absolute md:bottom-4 md:left-15 flex flex-col">
        <a href="https://www.instagram.com/gdgoncampus.vitap/" target="_blank">
          <img src={Instagram_icon} alt="Instagram" className="h-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
