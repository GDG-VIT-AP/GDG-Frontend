import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Show_Password_icon from "file:///C:/Users/asati/GDG-Frontend/src/assets/Show_Password_icon.svg";
import Design_elements_right from "file:///C:/Users/asati/GDG-Frontend/src/assets/Design_elements-right.svg";
import Design_elements_left from "file:///C:/Users/asati/GDG-Frontend/src/assets/Design_elements-left.svg";
import GDG_Logo from "file:///C:/Users/asati/GDG-Frontend/src/assets/image.svg";
import Google_login_logo from "file:///C:/Users/asati/GDG-Frontend/src/assets/Google_login_logo.svg";
import Sign_with_google from "file:///C:/Users/asati/GDG-Frontend/src/assets/sign%20in%20with%20google%20button.svg";

function Login(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 font-product">
  <div className="bg-white rounded-xl overflow-hidden max-w-4xl border-black border-2 w-full flex flex-col md:flex-row">

    {/* Left Column - Login Form */}
    <div className="w-full md:w-1/2 p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-left text-black mb-5">
        Login
      </h2>

      {/* Email Id Code*/}
      <div className="mb-4 relative">
        <label htmlFor="email" className="block text-black text-base mb-1">
          Email ID
        </label>
        <input
          type="text"
          id="email"
          placeholder="gdg@gmail.com"
          className="border-2 border-black bg-gray-200 w-full rounded-lg px-4 py-2 
                     focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Password Code */}
      <div className="mb-4 relative">
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
        {/* Password icon */}
        <img
          src={Show_Password_icon}
          className="h-5 w-5 absolute top-10 right-4 cursor-pointer"
          alt="Show Password"
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>

      {/* Login Button */}
      <div className="mb-4 flex justify-center md:justify-end">
        <button className="bg-blue-500 text-white border-2 border-black px-8 py-2 rounded-full 
                           hover:bg-blue-600 transition-all w-full md:w-auto">
          Login
        </button>
      </div>

      {/*Sign with Google Button */}
      <div className="text-gray-800 text-sm text-center mb-2">Or</div>
      <div className="flex justify-center mb-4">
        <img
          src={Sign_with_google}
          alt="Sign in with Google"
          className="w-[200px] md:w-[250px] object-contain max-w-full"
        />
      </div>

      {/* Creating a new account Link */}
      <div className="text-center">
        <NavLink
          to="/Signup"
          className="text-blue-500 underline hover:text-blue-700 text-sm"
        >
          Create a New Account
        </NavLink>
      </div>
    </div>

    {/* Right Design Element*/}
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

    {/* Right Column - Logo and Decorative Elements */}
    <div className="hidden md:flex md:w-1/2 relative">
      {/* Main GDG Logo */}
      <img
        src={GDG_Logo}
        alt="GDG Logo"
        className="w-3/3 left-10 h-auto relative z-10"
      />

      {/* Vertical Line */}
      <div 
        className="absolute inset-y-0 left-[10%] bg-black w-[1px]"
      />
    </div>
  </div>
</div>

  );
}

export default Login;
