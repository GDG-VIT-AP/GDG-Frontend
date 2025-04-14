/*Purpose: The Footer.jsx component implements a dynamic dual-state footer for the GDG Frontend application. It features a responsive design 
that switches between a minimal fixed footer (showing only logo and social icons) and a comprehensive static footer based on scroll position. 
The full footer includes the GDG logo, service links, information sections, social media integration (Facebook, Twitter, LinkedIn, Instagram), 
contact information, and copyright details. Using React's useState and useEffect hooks, it manages scroll-based visibility transitions and provides 
interactive elements styled with Tailwind CSS, ensuring a consistent and professional appearance across the application.*/

/*Contributor: Arpit Makkar (23BCE7565)*/
import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import blacklogo from "../assets/gdgblacklogo.png";

const Footer = () => {
  const [showFullFooter, setShowFullFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      // Adjust the threshold (e.g., 100px from the bottom)
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setShowFullFooter(true);
      } else {
        setShowFullFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once to check initial position (in case the page is short)
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Partial footer (fixed) */}
      <div
        className={`fixed bottom-0 w-full bg-black text-white px-4 py-2 flex justify-between items-center transition-all duration-300
        ${showFullFooter ? "hidden" : "block"}`}
      >
        {/* Left side (Logo) */}
        <div className="flex items-center space-x-2">
          <img className="blacklogo" src={blacklogo}/>
        </div>

        {/* Right side (Social Icons) */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Full footer (static) */}
      {showFullFooter && (
        <footer className="bg-black text-gray-200 py-10">
          <div className="max-w-7xl mx-auto px-4">
            {/* Add Logo at top left */}
            <div className="mb-8">
              <img className="blacklogo-static" src={blacklogo} alt="GDG VIT AP Logo" />
            </div>
            
            <div className="empty-space"></div>
            
            {/* Footer Column 1 - Services */}
            <div className="col-span-1">
              <h2 className="text-sm font-bold mb-2">Services</h2>
              <ul className="space-y-1 text-base">
                <li><a href="#" className="hover:underline">Feedback Page</a></li>
              </ul>
            </div>

            {/* Footer Column 2 - Info */}
            <div className="col-span-1">
              <h2 className="text-sm font-bold mb-2">Info</h2>
              <ul className="space-y-1 text-base">
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">Our Team</a></li>
                <li><a href="#" className="hover:underline">Events</a></li>
                <li><a href="#" className="hover:underline">Home</a></li>
              </ul>
            </div>

            {/* Social Media Icons */}
            <div className="absolute bottom-0 left-0 flex space-x-4 text-xl">
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-blue-600 transition-colors">
                <FaLinkedin />
              </a>
            </div>

            {/* Contact Info */}
            <div className="contact-info flex flex-col items-center space-y-1">
              <a href="tel:+910000000000">+91 00000 00000</a>
              <a href="mailto:gdgvitap@gmail.com">gdgvitap@gmail.com</a>
            </div>

            {/* Copyright text */}
            <div className="copyright">
              © 2025-Copyright GDG VIT-AP
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
