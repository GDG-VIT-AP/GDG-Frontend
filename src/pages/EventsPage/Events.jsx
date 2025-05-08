// purpose of the file: all comonents are imported here which were created in components folder
// ---------------------------------------------------
//contributor: G.Lokesh(23BCE9813)
import React from "react";
import { useState, useEffect } from "react";
import {HeadingDots} from "../../components/HeadingDots";
import Search from "../../components/Search";
import EventList from "../../components/EventList";
import ToggleEvents from "../../components/ToggleEvents";
import Footer from "../../components/Fotter";
import { getData } from "@/utils/api";
export default function Events() {
  const [getPastEvents, setPastEvents] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ State for search query
  const [events, setEvents] = useState({ upcoming: [], past: [] });

  useEffect(() => {
    const getEventsData = async () => {
      const upcomingEvents = await getData("event/getUpcomingEvents");
      const pastEvents = await getData("event/getPastEvents");
      setEvents({
        past: pastEvents?.data || [],
        upcoming: upcomingEvents?.data || [],
      });
    };
    getEventsData();
  }, []);

  function toggleEvents(toggle) {
    setPastEvents(toggle);
  }
  return (
    <>
      <div className="totalCodeOfPage flex  flex-col justify-center items-center gap-4">
        <HeadingDots title="Events" />
        <Search onSearch={setSearchQuery} />
        <ToggleEvents toggle={toggleEvents} />
        {/* ✅ Pass searchQuery to EventList Component */}
        <EventList
          events={getPastEvents ? events.past : events.upcoming}
          searchQuery={searchQuery}
        />
      </div>
    </>
  );
}
