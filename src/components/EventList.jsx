import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';

function EventList(props) {
  const [events, setEvents] = useState([]);

  // ✅ Fetch Events from API
  const fetchEvents = async () => {
    try {
      const apiUrl = props.events
        ? 'https://backend.kunwar1234singh1234.workers.dev/api/v1/event/getPastEvents'
        : 'https://backend.kunwar1234singh1234.workers.dev/api/v1/event/getUpcomingEvents';

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      if (data.success) {
        setEvents(data.data);  // ✅ Set events in state
      }
    } catch (error) {
      console.error('Failed to fetch events:', error);
    }
  };

  // ✅ Fetch events when toggle changes
  useEffect(() => {
    fetchEvents();
  }, [props.events]);

  return (
    <>
      <div className="event-list flex flex-col gap-6">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard key={event.eventID} event={event} />
          ))
        ) : (
          <p className="text-center font-bold text-lg">No Events Found</p>
        )}
      </div>
    </>
  );
}

export default EventList;
