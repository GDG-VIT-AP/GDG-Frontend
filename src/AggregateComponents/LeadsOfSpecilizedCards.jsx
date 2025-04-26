// Purpose: The `LeadsOfSpecilizedCards` component is responsible for rendering a list
// of specialized lead cards based on the data passed via props. It maps through the 
// `leads` array and displays each lead in a `SpecilizeLeadCard` component.

import React from 'react'
import SpecilizeLeadCard from "../components/SpecilizeLeadCard"

export default function LeadsOfSpecilizedCards(props) {
  const leads = props.data;  // Get the leads data passed as props

  return (
    <div className='flex flex-row gap-[120px] mt-[160px] justify-center '>
      {/* Iterate over the leads data and render SpecilizeLeadCard for each lead */}
      {leads.map((lead) => (
        <SpecilizeLeadCard key={lead.memberID} lead={lead} />  
      ))}
    </div>
  )
}
