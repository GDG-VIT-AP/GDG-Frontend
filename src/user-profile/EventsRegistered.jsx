
/**
 * EventsRegistered Component
 * purpose of the file:
 * This component serves as a wrapper for viewing events that a user has registered for.
 * It includes a toggle switch (via the `ToggleEvents` component) to switch between
 * viewing past and upcoming events, and it renders the relevant events using the 
 * `ListOfEvents` component.
 */
//-----------------------------------------------------------------
//contributors:G.Lokesh(23BCE9813)


import React, { useState } from 'react';
import ToggleEvents from './ToggleEvents';
import ListOfEvents from './ListOfEvents';
export default function EventsRegistered() {
  // State to determine whether to show past events or upcoming ones
  const [getPastEvents, setPastEvents] = useState(true);

  // Callback function to be passed to ToggleEvents for toggling event view
  function toggleEvents(toggle) {
    setPastEvents(toggle);
  }

  return (
    <>
      {/* Heading */}
      <div className='font-sans font-[700] text-[48px] mt-[90px] mb-[40px]'>
        Events Registered
      </div>

      {/* Toggle component to switch between Past and Upcoming events */}
      <ToggleEvents toggle={toggleEvents} />

      {/* List of Events filtered based on current selection (past/upcoming) */}
      <ListOfEvents isPast={getPastEvents} />
    </>
  );
}
