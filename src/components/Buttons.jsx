// Purpose of the file:
// This file defines a Buttons component that displays a list of team names as buttons.
// It allows users to select a team, highlights the active selection, 
// and notifies the parent component about the selected team.

import React, { useState } from 'react';

export default function Buttons(props) {
  // Local state to track the currently selected team
  const [active, setActive] = useState('Design Team');

  // List of all team names
  const teams = [
    'Design Team',
    'Core Team',
    'Web Development Team',
    'Marketing Team',
    'Machine Learning Team'
  ];

  return (
    // Container for the buttons with spacing and styling
    <div className="flex flex-row flex-wrap gap-x-[80px] gap-y-[35px] justify-center p-4 w-[1087px]">
      {teams.map((team, index) => (
        <button
          key={index}
          onClick={() => {
            setActive(team);              // Update local active state
            props.selectTeam(team);       // Notify parent component
          }}
          className={`px-6 h-[70px] flex justify-center items-center rounded-full font-normal text-[32px] 
                      text-blue-500 border-2 border-blue-500 
                      transition-all duration-300 ${
                        active === team 
                          ? 'bg-blue-500 text-white'     // Active team styling
                          : 'bg-transparent hover:bg-blue-100'  // Hover effect
                      }`}
        >
          {team}
        </button>
      ))}
    </div>
  );
}
