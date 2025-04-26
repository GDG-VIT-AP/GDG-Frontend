// Purpose of  the file: This component, `TeamMatesCards`, is responsible for displaying a list of team members.
// It takes in a `data` prop, which contains information about team members. The component displays
// a subset of team members (defaulting to 8) and includes functionality to toggle between showing
// a limited number or all team members. It also includes a "Show More/Show Less" button to change 
// the visibility of the team members.
//-------------------------------------------------------------------
//contributors:V.Tarun Kumar(23BCE9867)
import React, { useState } from 'react'
import TeamMateCard from './TeamMateCard'

export default function TeamMatesCards({ data }) {
  // State to track whether all team members should be shown
  const [showAll, setShowAll] = useState(false)

  // If `showAll` is true, display all data; otherwise, display only the first 8
  const visibleData = showAll ? data : data.slice(0, 8)

  return (
    <>
      {/* Render the team member cards */}
      <div className='flex flex-wrap flex-row mt-[160px] gap-x-10 gap-y-[100px] justify-center'>
        {visibleData.map((member) => (
          // For each team member, render a `TeamMateCard` component
          <TeamMateCard key={member.memberID} member={member} />
        ))}
      </div>

      {/* "Show More" / "Show Less" Button */}
      <div className='flex flex-row justify-center'>
        <button
          // Toggle the visibility of all team members when clicked
          onClick={() => setShowAll(prev => !prev)}
          className="mt-[60px] mb-[60px] px-6 py-3 bg-[#458aff] text-white text-[20px] 
                     rounded-full border-[1px] border-[#00000033] 
                     flex justify-center items-center w-[200px] shadow-sm"
          // Accessibility: Provide a descriptive aria-label for screen readers
          aria-label={showAll ? 'Show less team members' : 'Show more team members'}
        >
          {/* Button label changes based on the state */}
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </>
  )
}
