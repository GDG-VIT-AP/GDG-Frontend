// EventList.jsx
// ---------------------------------------------------
// This component fetches and displays a list of events (past or upcoming).
// It also filters the events based on a search query.
//
// Props:
//   - events: boolean (true for past events, false for upcoming events)
//   - searchQuery: string to filter the event titles
// ---------------------------------------------------

import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

function EventList({ events, searchQuery }) {
  const [eventList, setEventList] = useState([]);

  // ✅ Fetch Events from API
  const fetchEvents = async () => {
    try {
      const apiUrl = events
        ? "https://backend.kunwar1234singh1234.workers.dev/api/v1/event/getPastEvents"
        : "https://backend.kunwar1234singh1234.workers.dev/api/v1/event/getUpcomingEvents";

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.success) {
        setEventList(data.data); // ✅ Store events
      }
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  // ✅ Fetch events when event type changes
  useEffect(() => {
    fetchEvents();
  }, [events]);

  // ✅ Filter events based on searchQuery
  const filteredEvents = eventList.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
