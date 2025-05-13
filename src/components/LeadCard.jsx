// Purpose of the file:
// This file defines the LeadCard component that visually presents the GDG Club Lead's information.
// It includes a profile picture with a gradient border, the lead’s name, role, bio, and contact icons (Instagram and Email).

import React from 'react';
import instagram from '../assets/instagramIcon.png';

export default function LeadCard({leadData}) {
  leadData = leadData.leadData
  return (
    <>
      <div className="mainbox flex flex-row w-[558.4px] h-[171px] bg-[#EFEFEF] items-center rounded-[20px] mt-[50px] ml-[50px]">
        
        {/* Profile image inside gradient border */}
        <div
          className="h-[204.02px] w-[204.02px] rounded-full p-[4px] ml-[-46px]"
          style={{
            backgroundImage: 'linear-gradient(90deg, #FF00D5, #C300FF, #005DFF)',
            borderRadius: '50%',
            padding: '4px',
          }}
        >
          <img
            className="h-full w-full rounded-full object-cover"
            src={leadData.profPic}
            alt="Lead Profile"
          />
        </div>

        {/* Lead Info Section */}
        <div className="right-section ml-5 text-black w-[400px]">
          <h3 className="font-sans font-bold text-[29px] tracking-[0px]">{leadData.name}</h3>
          <p className="font-sans font-normal text-[24px] tracking-[0px]">GDG VIT-AP Club Lead</p>
          
          {/* Bio and Contact Icons */}
          <div className="flex flex-row justify-between gap-[20px]">
            <p className="w-1/2 font-sans font-normal text-[19px] tracking-[0px]">Student at VIT-AP</p>

            <div className="w-1/2 flex flex-row gap-[6px] mr-[-80px]">
              <a href={leadData.snsLink1} aria-label="LinkedIn">
                <img className="w-[46.6px] h-[46.6px]" src={instagram} alt="Instagram Icon" />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
