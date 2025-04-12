{/* Purpose : Handles user authentication for login. Accepts user credentials. 
    Contributor : Daksh asati(REG: 23BEC7195) */}


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import InputField from "../../Components/InputField/InputField.jsx"; 
import DesignElements from "../../Components/DesignElements/DesignElements.jsx";
import Show_Password_icon from "../../assets/Elements/Show_Password_icon.svg";
import Sign_with_google from "../../assets/Elements/sign in with google button.svg";
import GDGLogo from "../../Components/GDGLogo/GDGLogo.jsx";
import { checkZoom } from "../../Components/CheckZoom/CheckZoom.js";


function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

 {/* Zoom in and out function imported from CheckZoom file from components */}
checkZoom();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 font-product">
      <div className="bg-white rounded-xl overflow-hidden max-w-4xl border-black border-2 w-full flex flex-col md:flex-row">

        {/* Left Column - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-left text-black mb-5">Login</h2>

          {/* Email Input */}
          <InputField 
            label="Email ID" 
            id="email" 
            placeholder="gdg@gmail.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />

          {/* Password Input */}
          <div className="mb-4 relative">
          <InputField 
              label="Password" 
              type={showPassword ? "text" : "password"} 
              id="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="pr-12 w-full"  
              />

               {/*Password Icon*/}

            <img
                src={Show_Password_icon}
                className="h-5 w-5 absolute top-10 right-3 cursor-pointer"  
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

          {/* Sign in with Google */}
          <div className="text-gray-800 text-sm text-center mb-2">Or</div>
          <div className="flex justify-center mb-4">
            <img
              src={Sign_with_google}
              alt="Sign in with Google"
              className="w-[200px] md:w-[250px] object-contain max-w-full"
            />
          </div>

          {/* Signup Link */}
          <div className="text-center">
            <NavLink
              to="/Signup"
              className="text-blue-500 underline hover:text-blue-700 text-sm"
            >
              Create a New Account
            </NavLink>
          </div>
        </div>

        {/*  Design Elements present in left and right side */}
        <DesignElements />

        {/* GDG Logo */}
        <GDGLogo />

      </div>
    </div>
  );
}

export default Login;
