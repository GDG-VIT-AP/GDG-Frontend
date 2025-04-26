// Purpose of the file:
// This component renders a team card that displays information about a specific team,
// including the title, team lead details, team member cards, and a description of the team.

import React from 'react';
import Teamicon from "../assets/Teamicon.png";
import LeadsOfSpecilizedCards from '../AggregateComponents/LeadsOfSpecilizedCards';
import TeamMatesCards from './TeamMatesCards';
import AboutTeam from './AboutTeam';
import { data } from './details';

export default function TeamCard(props) {
  // Filter data based on the selected team
  const data1 = data;
  const filteredData = data1.filter(
    (member) => member.department.name.toLowerCase() === props.displayTeam.toLowerCase()
  );
  
  // Separate leads and members
  const leadsData = filteredData.filter(
    (member) => member.departmentRole.toLowerCase() === 'lead' || member.departmentRole.toLowerCase() === 'co-lead'
  );
  const membersData = filteredData.filter(
    (member) => member.departmentRole.toLowerCase() === 'member'
  );

  return (
    <div className='w-[1170px] flex flex-col bg-[#F6F9FF] rounded-[29px] p-5 border-[#00000033] border-[1px]'>
      
      {/* Team title and icon */}
      <div className='Title flex flex-row justify-center gap-2'>
        <div className='font-sans font-bold text-[48px]'>
          {props.displayTeam}
        </div>
        <img src={Teamicon} alt="Team Icon" />
      </div>
      
      {/* Team lead details */}
      <div className='TeamLeadDetails'>
        <LeadsOfSpecilizedCards data={leadsData} />
      </div>
      
      {/* Team member details */}
      <TeamMatesCards data={membersData} />
      
      {/* About Team Section */}
      <div className='flex flex-row justify-center'>
        <AboutTeam />
      </div>
    </div>
  );
}
