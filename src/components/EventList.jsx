//purpose of the file:
// This component fetches and displays a list of events (past or upcoming).
// It also filters the events based on a search query.
//
// Props:
//   - events: boolean (true for past events, false for upcoming events)
//   - searchQuery: string to filter the event titles
// ---------------------------------------------------
//contributor: G.Lokesh(23BCE9813)

// import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

function EventList({ events , searchQuery, type="events" }) {

  const filteredEvents = events.filter((event) =>
  {
    if(type == "projects"){
      return event.name.toLowerCase().includes(searchQuery.toLowerCase())
    }else{
      return event.title.toLowerCase().includes(searchQuery.toLowerCase())
    }
  }
  );
  console.log(filteredEvents)
  return (
    <div className="EventListContainer flex flex-col gap-6">
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <EventCard key={event.eventID} event={event} />
        ))
      ) : (
        <p className="NoEventsMessage text-center font-bold text-lg">
          No Events Found
        </p>
      )}
    </div>
  );
}

export default EventList;
