// purpose of the file: all comonents are imported here which were created in components folder
// ---------------------------------------------------
//contributor: G.Lokesh(23BCE9813)
import React from 'react'
import { useState } from 'react';
import EventsBackGround from './EventsBackGround';
import Search from '../components/Search';
import EventList from '../components/EventList';
import ToggleEvents from '../components/ToggleEvents';
import Footer from '../components/Fotter';
export default function Events() {
      const [getPastEvents,setPastEvents]= useState(true)
      const [searchQuery, setSearchQuery] = useState(""); // ✅ State for search query
    
    function toggleEvents(toggle){
    setPastEvents(toggle)
    }
  return (
    <>
       <div className='totalCodeOfPage flex  flex-col justify-center items-center gap-4'>

<EventsBackGround/>
<Search onSearch={setSearchQuery}/>
<ToggleEvents toggle={toggleEvents}/>
 {/* ✅ Pass searchQuery to EventList Component */}
<EventList events={getPastEvents} searchQuery={searchQuery} />
<Footer/>

</div>
    </>
  ) 
}

