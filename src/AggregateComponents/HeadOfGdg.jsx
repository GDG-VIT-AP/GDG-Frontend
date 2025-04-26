// Purpose: The `HeadOfGdg` component is designed to render the faculty member and the lead
// card on the page. It imports and displays `FacultyCard` and `LeadCard` components
// within a flex container, providing a layout for the GDG head section.

import React from 'react'
import FacultyCard from '../components/FacultyCard'
import LeadCard from '../components/LeadCard'

export default function HeadOfGdg() {
  return (
    <>
      {/* Main container for the Head of GDG section */}
      <div className="flex flex-col gap-[6px] mt-[300px]">
        
        {/* Render Faculty Card */}
        <FacultyCard/>

        {/* Render Lead Card */}
        <LeadCard/>
      </div>
    </>
  )
}
