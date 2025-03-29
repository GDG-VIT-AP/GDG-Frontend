import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Design_elements_right from "file:///C:/Users/asati/GDG-Frontend/src/assets/Design_elements-right.svg";
import Design_elements_left from "file:///C:/Users/asati/GDG-Frontend/src/assets/Design_elements-left.svg";
import GDG_Logo from "file:///C:/Users/asati/GDG-Frontend/src/assets/image.svg";
import Show_Password_icon from "file:///C:/Users/asati/GDG-Frontend/src/assets/Show_Password_icon.svg";
import Google_login_logo from "file:///C:/Users/asati/GDG-Frontend/src/assets/Google_login_logo.svg";

function Signup(props) {
  // Separate states for each password field
  const [showPassword, setShowPassword] = useState(false);
  const [showRepassword, setShowRepassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="bg-white rounded-xl overflow-hidden max-w-4xl border-black border-2 w-full flex flex-col md:flex-row">
        
        {/* Signup Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-left text-black mb-5">
            Signup
          </h2>

          
          {/* Username Code */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-black text-base mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Jhon"
              className="border-2 border-black bg-gray-200 w-full rounded-lg px-4 py-2
                         focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            </div>

          
          {/* Email Code */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-black text-base mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="gdg@gmail.com"
              className="border-2 border-black bg-gray-200 w-full rounded-lg px-4 py-2
                         focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          
          {/* Password Code */}
          <div className="relative mt-6 mb-4">
            <label htmlFor="password" className="block text-black text-base mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="border-2 border-black bg-gray-200 w-full rounded-lg px-4 py-2 pr-10
                         focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />


            {/* Toggle button for Password */}
            <img
              src={Show_Password_icon}
              alt="Show Password"
              className="h-5 w-5 absolute inset-y-0 right-3 my-auto cursor-pointer top-[35%]"
              onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          
          {/* Re-Enter Password Group */}
          <div className="relative mb-4">
            <label htmlFor="repassword" className="block text-black text-base mb-1">
              Re Enter Password
            </label>
            <input
              type={showRepassword ? "text" : "password"}
              id="repassword"
              placeholder="Password"
              className="border-2 border-black bg-gray-200 w-full rounded-lg px-4 py-2 pr-10
                         focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            {/* Toggle Button for Re-Enter Password */}
            <img
              src={Show_Password_icon}
              alt="Show Password"
              className="h-5 w-5 absolute inset-y-0 right-3 my-auto cursor-pointer top-[39%]"
              onClick={() => setShowRepassword(!showRepassword)}
              />
            </div>

          
          {/* Login Link */}
            <div className="mt-6 text-center pb-4">
            <NavLink
              to="/"
              className="text-blue-500 underline hover:text-blue-700 text-sm"
            >
              Already have Account? Login Here
            </NavLink>
            </div>

          
          {/* Signup Button */}
          <div className="mb-2 flex justify-center md:justify-end">
            <button className="bg-blue-500 text-white border-2 border-black px-8 py-2 rounded-full
                               hover:bg-blue-600 transition-all w-full md:w-auto">
              Signup
            </button>
          </div>
          </div>

          {/* Right Design element */}
        
               <img
                 src={Design_elements_right}
                 alt="Design Elements"
                 className="hidden lg:block absolute bottom-[80px] -right-1 w-[25%]"
               />

               {/* Left Design Element */}
               <img
                 src={Design_elements_left}
                 alt="Design Elements"
                 className="hidden lg:block absolute bottom-[60px] right-[910px] w-[25%]"
               />
        
            
          <div className="hidden md:flex md:w-1/2 relative items-center justify-center">
         
          {/* Main GDG Logo */}
          <img
            src={GDG_Logo}
            alt="GDG Logo"
            className="w-3/3 left-7 h-auto relative z-10"
          />

          {/*  Vertical Line */}
          <div className="absolute inset-y-0 left-[10%] bg-black w-[1px]" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
