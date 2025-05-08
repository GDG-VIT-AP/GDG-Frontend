{/* Purpose : Displays important  links, contact information, and social media links.
    Contributor : Daksh asati(REG: 23BEC7195) */}



import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterLinks from "../FooterLink/FooterLink.jsx"; 
import Google_developrs_footer from "../../assets/Elements/Google_developrs_footer.svg";
import Facebook_icon from "../../assets/Elements/Facebook_icon.svg";
import Instagram_icon from "../../assets/Elements/Instagram_icon.svg";

function Footer() {
  return (
    <footer className="bg-black text-white p-5 relative h-50">

      {/* Main Container */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        
        {/* Left Side Logo */}
        <div className="flex items-center gap-2">
          <img src={Google_developrs_footer} alt="GDG Logo" className="h-7" />
        </div>

        {/* Right Side Services Section */}
        <div className="relative md:absolute md:right-120">
          <p className="text-gray-400 text-xs">Services</p>
          <p>
            <NavLink to="/FeedBack" className="text-xs text-center">
              Feedback Page
            </NavLink>
          </p>
        </div>

        {/* Info Section */}
        <FooterLinks 
          title="Info"
          links={[
            { path: "/About", label: "About us" },
            { path: "/Team", label: "Our Team" },
            { path: "/Event", label: "Event" },
            { path: "/Home", label: "Home" }
          ]}
        />
      </div>

{/* Social Media Links & Copyright Section */}
<div className="absolute flex flex-col bottom-175 left-0 right-0 items-center gap-3">
  <div className="flex gap-3 mt-1"> 

     {/* Facebook icon */}
    <a href=" " target="_blank">
      <img src={Facebook_icon} alt="Facebook" className="h-8" />
    </a>

     {/* Instagram Icon */}
    <a href="https://www.instagram.com/gdgoncampus.vitap/" target="_blank">
      <img src={Instagram_icon} alt="Instagram" className="h-8" />
    </a>
  </div>

  {/* Copyright section */}
  <div className="flex flex-col items-center mt-2"> 
    <div className="text-sm text-gray-400">
      © 2025 Copyright
    </div>

    {/* Blue Line & Contact Info */}
    <div className="flex flex-col items-center mt-1"> 
      <div className="w-20 h-1 bg-blue-500 rounded-full mt-0.5"></div> 
      <div className="text-sm text-gray-400 mt-2"> 
        +9190000000
      </div>
      <div className="text-sm text-gray-400 mt-1"> 
        gdgvitap@gmail.com
      </div>
    </div>
  </div>
</div>
<div>
</div>

</footer>
  );
}

export default Footer;
