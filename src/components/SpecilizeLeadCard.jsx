// Purpose of the file:
// This component renders a card displaying information about a specialized team lead,
// including their name, department, role, and social media icons (Instagram and GitHub).

import React from 'react';
import instagram from "../assets/instagramIcon.png";

export default function SpecilizeLeadCard({lead}) {
  return (
    <div className="SpecalizedLeadCard flex flex-col items-center w-[300px] h-[320.18px] gap-6 bg-[#F1F1F1] rounded-[23px] shadow-[0px_15px_50px_0px_rgba(0,0,0,0.20)] border-[1px] border-[#4889F433]">
      
      {/* Profile image */}
      <img 
        className="w-[221px] h-[221px] rounded-full shadow-[2px_15px_50px_0px_rgba(0,0,0,0.25)] mt-[-110.5px] border-[1px] border-[#00000033]" 
        src={lead.profPic} 
        alt="Lead profile"
      />
    
      {/* Lead details */}
      <div className='flex flex-col items-center text-center'>
        <div className='font-sans font-bold text-[24px]'>{lead.name}</div>
        <div className='font-sans font-normal text-[20px]'>{lead.departmentId}</div>
        <div className='font-sans font-normal text-[20px]'>{lead.departmentRole}</div>
      </div>

      {/* Social media icons */}
      <div className='flex flex-row gap-4'>
        <a href={lead.snsLink1} aria-label="Instagram Profile">
          <img src={instagram} alt="Instagram icon" />
        </a>
        {/* <a href="#" aria-label="GitHub Profile">
          <img src={github} alt="GitHub icon" />
        </a> */}
      </div>
    </div>
  );
}
