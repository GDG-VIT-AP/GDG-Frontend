// Purpose of the file:
// This component renders a card for each team member, displaying their profile image,
// name, department, role, and social media icons (Instagram and GitHub).

import React from 'react';
import img from '../assets/image.jpg';  // Profile image
import instagram from "../assets/instagramIcon.png";  // Instagram icon
import github from "../assets/GitHub.png";  // GitHub icon

export default function TeamMateCard(props) {
  return (
    <>
      {/* Card container for a team member */}
      <div className="SpecalizedLeadCard flex flex-col items-center w-[215.69px] h-[230.19px] gap-3 bg-[#F1F1F1] rounded-[23px] shadow-[0px_15px_50px_0px_rgba(0,0,0,0.20)] border-[1px] border-[#00000033]">

        {/* Profile Image with Perfect Circle */}
        <img 
          className="w-[170.23px] h-[170.23px] rounded-full shadow-[0px_15px_50px_0px_rgba(0,0,0,0.25)] mt-[-85.12px]" 
          src={img} 
          alt="Profile"
        />

        {/* Name, Designation, and Department */}
        <div className='flex flex-col items-center'>
          <div className='font-sans font-bold text-[20px]'>
            {props.member.name}
          </div>
          <div className='font-sans font-normal text-[16px]'>
            {props.member.department.name}
          </div>
          <div className='font-sans font-normal text-[16px]'>
            {props.member.departmentRole}
          </div>
        </div>

        {/* Social Media Icons */}
        <div className='flex flex-row gap-4'>
          <a href={props.member.instagram} target="_blank" rel="noopener noreferrer">
            <img className="w-[31.85px] h-[31.85px] cursor-pointer" src={instagram} alt="Instagram" />
          </a>
          <a href={props.member.github} target="_blank" rel="noopener noreferrer">
            <img className="w-[31.85px] h-[31.85px] cursor-pointer" src={github} alt="GitHub" />
          </a>
        </div>

      </div>
    </>
  );
}
