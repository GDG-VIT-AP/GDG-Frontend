/**
 * ListOfEvents Component
 * purpose of the file:
 * This component displays a list of events, which can be filtered based on whether 
 * the events are past or upcoming. It also supports a "Show More" / "Show Less" 
 * feature to toggle the visibility of additional events.
 *
 * Props:
 * - isPast: Boolean to determine whether to show past events (true) or upcoming events (false)
 */
//-----------------------------------------------------------------
//contributors:G.Lokesh(23BCE9813)


import React, { useState } from 'react';
export default function ListOfEvents({ isPast }) {
  // State to toggle between showing all events or only the first 5
  const [showAll, setShowAll] = useState(false);

  // List of events with their names and statuses (upcoming/past)
  const events = [
    { name: "Hackathon 2025", status: "upcoming" },
    { name: "Tech Talk: Future of AI", status: "upcoming" },
    { name: "Web Development Bootcamp", status: "past" },
    { name: "Cloud Computing Workshop", status: "past" },
    { name: "Startup Pitch Event", status: "past" },
    { name: "Cybersecurity Seminar", status: "upcoming" },
    { name: "Data Science Challenge", status: "upcoming" },
    { name: "Design Thinking Workshop", status: "past" },
    { name: "Blockchain Basics", status: "past" },
    { name: "IoT Hands-on Lab", status: "upcoming" },
    { name: "Game Development Jam", status: "past" },
    { name: "AI Ethics Discussion", status: "past" },
    { name: "Machine Learning Workshop", status: "upcoming" },
    { name: "Open Source Contribution Camp", status: "past" },
    { name: "DevOps Bootcamp", status: "upcoming" },
    { name: "AR/VR Innovation Meet", status: "past" },
    { name: "Big Data Hackathon", status: "upcoming" },
    { name: "Quantum Computing Webinar", status: "upcoming" },
    { name: "Mobile App Development Sprint", status: "past" },
    { name: "Entrepreneurship Summit", status: "upcoming" },
    { name: "Cloud Native Meetup", status: "past" }
  ];

  // Filter events based on whether the user wants past or upcoming events
  const filteredEvents = events.filter((event) =>
    isPast ? event.status === "past" : event.status === "upcoming"
  );

  // Show only the first 5 events unless "Show All" is toggled
  const eventsToDisplay = showAll ? filteredEvents : filteredEvents.slice(0, 5);

  return (
    <>
      {/* List of events */}
      <ul className="space-y-4">
        {filteredEvents.length > 0 ? (
          eventsToDisplay.map((event, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition w-[949px] h-[108px] border-[1px] max-[1250px]:w-[800px] max-[950px]:w-[700px] max-[850px]:w-[600px] max-[700px]:w-[500px]"
            >
              <span className="text-[36px] font-sans font-[700] max-[700px]:text-[28px]">
                {event.name}
              </span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-[194px] h-[50px]">
                Provide Feedback
              </button>
            </li>
          ))
        ) : (
          // Display message if no events are found
          <p className="text-center text-gray-500">
            No {isPast ? "past" : "upcoming"} events found.
          </p>
        )}
      </ul>

      {/* Show More / Show Less button */}
      {filteredEvents.length > 5 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-[177px] h-[42.31px] flex items-center gap-2 bg-gradient-to-r from-[#F70BFB] to-[#0060FF] via-[#8304FA] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105 font-sans font-[400] text-[20px] mt-[70px]"
          >
            {showAll ? "Show Less" : "Show More"}
            {/* Arrow icon to indicate toggle action */}
            <svg
              className={`w-5 h-5 transform transition-transform ${showAll ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
