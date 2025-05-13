{/* Purpose : Allows new users to register an account by entering their details. 
    Contributor : Daksh asati(REG: 23BEC7195) */}



import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import InputField from "../../Components/InputField/InputField.jsx";
import Show_Password_icon from "../../assets/Elements/Show_Password_icon.svg";
import GDGLogo from "../../Components/GDGLogo/GDGLogo.jsx"; 
import DesignElements from "../../Components/DesignElements/DesignElements.jsx";
import { checkZoom } from "../../Components/CheckZoom/CheckZoom.jsx";
import {getData, postData} from "../../utils/api.js"
import { useNavigate } from 'react-router-dom';



function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [webtoken, setToken] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepassword, setShowRepassword] = useState(false);
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [emailSent, setemailSent] = useState(false);
  const token = new URLSearchParams(window.location.search).get("token");
  const navigate = useNavigate();
  {/* For signup Button */}


  const handleSignup = async (e) => {
    e.preventDefault();
    const body = {
      "username": username,
      "email" : email
    }
    const data = await postData('auth/signup',  body);
    console.log(data)
    if (data.success) {
      alert('Signup successful!');
      navigate("/")
    } else {
      alert(data.message || 'Signup failed');
    }
  };

  const handleSignupVerifed = async (e) => {
    e.preventDefault();
    const body = {
      "token": webtoken,
      "password" : password
    }
    const data = await postData('auth/signup/verified',  body);
    console.log(data)
    if (data.success) {
      // alert('Signup successful!');
      setemailSent(true);
      localStorage.setItem('token', data.token);

      // Navigate or open OTP verification
    } else {
      alert(data.message || 'Signup failed');
    }
  };


 {/* Zoom in and out function imported from CheckZoom file from components */}
  checkZoom();


  useEffect(() =>{
    if(token != null){
      const verifyToken = async () =>{
        const route =  "auth/signup?token=" + token;
        const data = await getData(route);
        console.log(data);
        if (data.success) {
          console.log(data);
          setemailSent(false);
          setUsername(data.data.username)
          setEmail(data.data.email)
          setToken(data.token)
          setIsVerified(true);
          // Navigate or open OTP verification
        } else {
          alert(data.message || 'Signup failed');
        }
      }
      verifyToken();
    }
  }, [token])

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="bg-white rounded-xl overflow-hidden max-w-4xl border-black border-2 w-full flex flex-col md:flex-row">
        
        {/* Signup Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-left text-black mb-5">Signup</h2>

          {/* Dynamic Verified Message  */}
          {isVerified && (
            <p className="text-blue-500 font-medium text-lg mb-2">
              Your Account is verified! 👌
            </p>
          )}
          {emailSent && (
            <p className="text-blue-500 font-medium text-lg mb-2">
              Sent Verification Email, Check your inbox!
            </p>
          )}

          <InputField 
            label="Username" 
            id="username" 
            placeholder="John" 
            value={username} 
            disabled={isVerified}
            onChange={(e) => setUsername(e.target.value)} 
          />

          <InputField 
            label="Email" 
            type="email" 
            id="email" 
            placeholder="gdg@gmail.com" 
            value={email} 
            disabled={isVerified}
            onChange={(e) => setEmail(e.target.value)} 
          />
          {
           
          }
          {
            isVerified ? (
              <div>
              <div className="relative mt-6 mb-4">
              <InputField 
                label="Password" 
                type={showPassword ? "text" : "password"} 
                id="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <img
                src={Show_Password_icon}
                alt="Show Password"
                className="h-5 w-5 absolute inset-y-0 right-3 my-auto cursor-pointer top-[35%]"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
  
            <div className="relative mb-4">
              <InputField 
                label="Re-enter Password" 
                type={showRepassword ? "text" : "password"} 
                id="repassword" 
                placeholder="Password" 
                value={repassword} 
                onChange={(e) => setRepassword(e.target.value)} 
              />
              <img
                src={Show_Password_icon}
                alt="Show Password"
                className="h-5 w-5 absolute inset-y-0 right-3 my-auto cursor-pointer top-[39%]"
                onClick={() => setShowRepassword(!showRepassword)}
              />
            </div>
            </div>
            ) : 
            (null)
          }

          {/* Login Link */}
          <div className="mt-6 text-center pb-4">
            <NavLink to="/login" className="text-blue-500 underline hover:text-blue-700 text-sm">
              Already have an account? Login Here
            </NavLink>
          </div>

          {/* Signup Button */}
          <div className="mb-2 flex justify-center md:justify-end">
            <button className="bg-blue-500 text-white border-2 border-black px-8 py-2 rounded-full 
                               hover:bg-blue-600 transition-all w-full md:w-auto"
                               onClick={isVerified ? handleSignupVerifed : handleSignup}>
              Signup
            </button>
          </div>
        </div>

        {/* Design elements present in left and right side */}
        <DesignElements />

        {/* GDG Logo */}
        <GDGLogo />

      </div>
    </div>
  );
}

export default Signup;
