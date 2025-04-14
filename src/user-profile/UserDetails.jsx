/**
 * UserDetails.jsx
 * 
 * Purpose of the file:
 * This component is part of the user profile page. It displays the user's name,
 * email, and profile image. It also provides functionality to update the user's
 * name or email via PATCH requests to the backend.
 */
//-----------------------------------------------------------------
//contributors:G.Lokesh(23BCE9813)


import React, { useEffect, useState } from 'react';
import virat from '../assestsOfUserProfile/virat.jpg'; // default fallback image (not used here but could be useful)

export default function UserDetails(props) {
  // State to display current user info
  const [userName, setUserName] = useState('virat');
  const [userGmail, setUserGmail] = useState('gembali.lo04@gmail.com');

  // State for editing fields
  const [newUserName, setNewUserName] = useState('');
  const [newUserGmail, setNewUserGmail] = useState('');

  // Update state when new props arrive
  useEffect(() => {
    if (props.Details) {
      setUserName(props.Details?.name || 'virat');
      setUserGmail(props.Details?.email || 'gembali.lo04@gmail.com');
    }
  }, [props.Details]);

  // Handler for editing username
  const handleNameEdit = async () => {
    if (newUserName.trim() !== '') {
      const payload = {
        name: newUserName,
        email: userGmail, // keep current email
      };

      const response = await fetch('https://backend.kunwar1234singh1234.workers.dev/api/v1/user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${props.token}`
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setUserName(newUserName);     // Update UI
        setNewUserName('');           // Clear input
      }
    }
  };

  // Handler for editing Gmail
  const handleGmailEdit = async () => {
    if (newUserGmail.trim() !== '') {
      const payload = {
        name: userName,             // keep current name
        email: newUserGmail,
      };

      const response = await fetch('https://backend.kunwar1234singh1234.workers.dev/api/v1/user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${props.token}`
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log(result);
      if (result.success) {
        setUserGmail(newUserGmail);   // Update UI
        setNewUserGmail('');          // Clear input
      }
    }
  };

  return (
    <>
      {/* Profile photo and basic user info */}
      <div className='flex flex-row items-center mt-[-225px] ml-[30px] gap-[25px]'>
        <div className='ProfilePhoto'>
          <img 
            src={props.Details?.imageURL} 
            alt="Profile" 
            className='w-[212px] h-[212px] rounded-[106px]' 
          />
        </div>
        <div className='UserDetails flex flex-col'>
          <div className='UserName font-sans font-[700] text-[48px] leading-[100%] mb-[10px]'>{userName}</div>
          <div className='UserGmail font-sans font-[400] text-[20px] leading-[100%]'>{userGmail}</div>
        </div>
      </div>

      {/* Editable fields for name and email */}
      <div className='EditDetails w-[793px] h-[303px] flex flex-col bg-[#FFFFFF] border-[1px] rounded-[18px] pl-[30px] pt-[30px] mt-[40px]'>

        {/* Edit Username Block */}
        <div className='UserNameBlock flex flex-col mb-8'>
          <div className='UserName font-sans font-[700] text-[32px]'>User name</div>
          <div className='UserNameInputAndEdit flex flex-row gap-[40px]'>
            <input 
              type="text" 
              placeholder="User_name" 
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              className="w-[482px] h-[50px] border-[1px] rounded-[5px] bg-[#F6F9FF] pl-[30px]" 
            />
            <button 
              onClick={handleNameEdit} 
              className="bg-[#4889F4] text-white px-6 py-2 rounded-lg w-[99px] h-[50px]"
            >
              Edit
            </button>
          </div>
        </div>

        {/* Edit Gmail Block */}
        <div className='UserNameBlock flex flex-col'>
          <div className='UserName font-sans font-[700] text-[32px]'>Gmail</div>
          <div className='UserNameInputAndEdit flex flex-row gap-[40px]'>
            <input 
              type="text" 
              placeholder="Gmail" 
              value={newUserGmail}
              onChange={(e) => setNewUserGmail(e.target.value)}
              className="w-[482px] h-[50px] border-[1px] rounded-[5px] bg-[#F6F9FF] pl-[30px]" 
            />
            <button 
              onClick={handleGmailEdit} 
              className="bg-[#4889F4] text-white px-6 py-2 rounded-lg w-[99px] h-[50px]"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
