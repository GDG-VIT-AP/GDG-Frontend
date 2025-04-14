/**
 * UserProfile.jsx
 * 
 * Purpose of the file:
 * This component serves as the main user profile page. It fetches and displays
 * user details, allows users to update their profile information, manage password,
 * view events registered, and delete their account. It also includes a logout button.
 */
//-----------------------------------------------------------------
//contributors:G.Lokesh(23BCE9813)

import React, { useState, useEffect } from "react";
import UserDetails from "./UserDetails";
import PassWord from "./PassWord";
import EventsRegistered from "./EventsRegistered";
import AccountDeletion from "./AccountDeletion";

const UserProfile = () => {
  const [userData, setUserData] = useState(null); // Holds the user information fetched from the backend
  const TOKEN = import.meta.env.VITE_AUTH_TOKEN;  // Auth token from environment variables

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://backend.kunwar1234singh1234.workers.dev/api/v1/user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${TOKEN}`,
          },
        });

        const result = await response.json();
        setUserData(result.data); // Save user details to state
      
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex justify-center items-center mb-[40px]">
      <div className="w-[1220px] max-[1250px]:w-[1000px] max-[1050px]:w-[900px] max-[950px]:w-[800px] max-[850px]:w-[700px] max-[700px]:w-[600px] bg-[#F6F9FF] mt-[90px] flex flex-col p-[25px] rounded-[5px] border-[#828FBB33] border-[2px]">
        
        {/* Placeholder circle behind the profile image */}
        <div className="w-[250px] h-[250px] rounded-[125px] bg-[#F6F9FF] mt-[-100px] ml-[10px] z-[-1] border-[#828FBB33] border-[2px]"></div>

        {/* User details and password update */}
        <div>
          <UserDetails Details={userData} token={TOKEN} />
          <PassWord token={TOKEN} />
        </div>

        {/* Events registered, account deletion, and logout section */}
        <div className="flex flex-col justify-center items-center">
          <EventsRegistered />
          <AccountDeletion token={TOKEN} />
          
          {/* Logout button - functionality to be implemented */}
          <button className="bg-[#4889F4] w-[324px] h-[78.72px] font-sans font-normal text-[48px] text-white border-[black] border-[2px] rounded-[40px] flex items-center justify-center mt-[100px] mb-[80px]">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
