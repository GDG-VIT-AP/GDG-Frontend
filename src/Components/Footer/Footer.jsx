import React from 'react';
import Google_developrs_footer from "file:///C:/Users/asati/GDG-Frontend/src/assets/Google_developrs_footer.svg";
import { NavLink } from 'react-router-dom';
import Facebook_icon from "file:///C:/Users/asati/GDG-Frontend/src/assets/Facebook_icon.svg";
import Instagram_icon from "file:///C:/Users/asati/GDG-Frontend/src/assets/Instagram_icon.svg";

function Footer(props) {
  return (
    <footer className="bg-black text-white p-5 relative h-250">
      {/* Main Container */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-2">
          <img src={Google_developrs_footer} alt="GDG Logo" className="h-7" />
        </div>

        {/* Right Side: Services Section */}
       {/* Feedback Section */}
<div className="relative md:absolute md:right-120">
  <p className="text-gray-400 text-xs">Services</p>
  <p>
    <NavLink to="/FeedBack" className="text-xs text-center">
      Feedback Page
    </NavLink>
  </p>
</div>

{/* Info Section */}
<div className="relative md:absolute md:right-60 md:top-5">
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

      {/* Copyright Section */}
    {/* Social Media Links & Copyright Section */}
<div className="absolute flex flex-col bottom-200 left-0 right-0 items-center gap-4">
  <div className="flex gap-4">
    <a href=" " target="_blank">
      <img src={Facebook_icon} alt="Facebook" className="h-8" />
    </a>
    <a href="https://www.instagram.com/gdgoncampus.vitap/" target="_blank">
      <img src={Instagram_icon} alt="Instagram" className="h-8" />
    </a>
  </div>
  <div className="text-sm text-gray-400">
    © 2025 Copyright
  </div>


      </div>
    </footer>
  );
}

export default Footer;
