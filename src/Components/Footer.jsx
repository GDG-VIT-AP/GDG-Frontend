// Purpose : Footer section in homepage
// Contributor : Aryan Puri (23BCE8560)


import React from "react";
import logo from "../assets/image1.svg";

const Footer = () => {
  return (
    <div className="p-5 bg-black text-white">
      <div className="flex flex-col gap-3 md:flex-row md:justify-between w-full">
        <div className="flex gap-3 items-center">
          <img src={logo} alt="GDG Logo" className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <h1 className="text-lg font-bold text-white">Google Developer Group</h1>
            <h2 className="text-md font-bold text-white">VIT-AP</h2>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-md"><a href="mailto:contact@gdgvitap.com" className="underline">contact@gdgvitap.com</a></p>
          <p className="text-md">© {new Date().getFullYear()} GDG VIT-AP. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

