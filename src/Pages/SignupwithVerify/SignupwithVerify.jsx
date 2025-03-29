import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Design_elements_right from "file:///C:/Users/asati/GDG-Frontend/src/assets/Design_elements-right.svg";
import Design_elements_left from "file:///C:/Users/asati/GDG-Frontend/src/assets/Design_elements-left.svg";
import GDG_Logo from "file:///C:/Users/asati/GDG-Frontend/src/assets/image.svg";
import Show_Password_icon from "file:///C:/Users/asati/GDG-Frontend/src/assets/Show_Password_icon.svg";
import Google_login_logo from "file:///C:/Users/asati/GDG-Frontend/src/assets/Google_login_logo.svg";

function SignupwithVerify(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="bg-white rounded-xl overflow-hidden max-w-4xl border-black border-2 w-full flex flex-col md:flex-row">
        

        {/* Signup Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-left text-black mb-5">
            Sign Up
          </h2>


          {/* Username Code*/}
          <div className="mb-4">
            <label htmlFor="Username" className="block text-black text-base mb-1">
              Username
            </label>
            <input
              type="username"
              id="text"
              placeholder="Jhon"
              className="border-2 border-black bg-gray-200 w-full rounded-lg px-4 py-2 
                         focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            </div>


            {/* Email Code*/ }
          <div className="mb-4">
            <label htmlFor="Email" className="block text-black text-base mb-1">
              Email
            </label>
            <input
              id="Email"
              placeholder="gdg@gmail.com"
              className="border-2 border-black bg-gray-200 w-full rounded-lg px-4 py-2 
                         focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            </div>

          
          {/* Verify Our Account Button*/}
            <div className="mb-4">
            <button className="bg-blue-500 text-black border-2 border-black px-12 py-2 rounded-full 
                      hover:bg-blue-600 transition-all w-full">
              Verify Our account
            </button>
            </div>


            {/* Already have account link*/}
          
            <div className="text-center">
            <NavLink
              to="/"
              className="text-blue-500 underline hover:text-blue-700 text-sm">
              Already have Account? Login here
            </NavLink>
            </div>
            </div>

            {/* Right Design Element*/}
            <img
            src={Design_elements_right}
            alt="Design Elements"
            className="hidden lg:block absolute bottom-[80px] -right-1 w-[25%]"
            />

            {/*Left Design Element*/}
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

          
          {/* Vertical Line */}
          <div className="absolute inset-y-0 left-[10%] bg-black w-[1px]" />
        </div>
      </div>
    </div>
  );
}

export default SignupwithVerify;
