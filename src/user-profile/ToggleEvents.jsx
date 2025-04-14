//purpose of the file:
// This component renders two toggle buttons: "Upcoming Events" and "Past Events".
// Clicking a button highlights it and triggers the `toggle` function from props
// to inform the parent component which type of events to show.
//
// Props:
//   - toggle: function that accepts a boolean. 
//             true => show past events
//             false => show upcoming events
// ---------------------------------------------------
//contributor: G.Lokesh(23BCE9813)

import { useState } from "react";

const ToggleEvents = (props) => {
  const [activeTab, setActiveTab] = useState("past");

  return (
    <div className="ToggleEventsContainer flex bg-[#F6F9FF] rounded-full w-[923px] h-[63px] max-[1250px]:w-[800px] max-[950px]:w-[700px] max-[850px]:w-[620px] max-[700px]:w-[500px] p-1 border-[2px] border-black mb-[20px]">
      
      {/* Button for Upcoming Events */}
      <button
        className={`ToggleUpcomingButton flex-1 py-2 rounded-full text-center font-semibold ${
          activeTab === "upcoming"
            ? "bg-[#4889F4] text-white border-[2px] border-black"
            : "text-gray-500"
        }`}
        onClick={() => {
          setActiveTab("upcoming"); // Set active tab
          props.toggle(false);   // Tell parent to show upcoming events
        }}
      >
        Up Coming Events
      </button>

      {/* Button for Past Events */}
      <button
        className={`TogglePastButton flex-1 py-2 rounded-full text-center font-semibold ${
          activeTab === "past"
            ? "bg-[#4889F4] text-white border-[2px] border-black"
            : "text-gray-500"
        }`}
        onClick={() => {
          setActiveTab("past");
          props.toggle(true);  // Tell parent to show past events
        }}
      >
        Past Events
      </button>

    </div>
  );
};

export default ToggleEvents;
