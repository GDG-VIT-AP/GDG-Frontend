//purpose of the file:
// This component displays an event card with an event image, title, description, date, time, and event  rating.
// It has animation effects for card appearance and count update, and responsive behavior for different screen sizes.
// ---------------------------------------------------
//contributor: G.Lokesh(23BCE9813)
import React, { useEffect, useState } from "react";
import vector from '../assets/vector.png';
import rectangle from '../assets/Rectangle.png';
import { NavLink } from "react-router-dom";

function EventCard({ event }) {
  const [_, setAnimateCount] = useState(false);
  const count = 5; // Default rating 5

  // Trigger animation when count updates
  useEffect(() => {
    setAnimateCount(true);
    const timeout = setTimeout(() => setAnimateCount(false), 600);
    return () => clearTimeout(timeout); // Cleanup timeout
  }, [count]);

  return (
    <div
      className={`EventCard flex flex-row items-center bg-[#F6F9FF] max-md:flex-col max-md:w-full max-md:items-center
        p-3 rounded-2xl w-full max-w-[1087px] max-xl:w-[900px] max-lg:w-[800px] border-[2px] border-gray-300 
        transform transition-all duration-500 ease-in-out 
        animate-card-appear hover:scale-[1.02] hover:shadow-xl cursor-pointer`}
    >

      {/* Event Image */}
      <NavLink
        className="EventImage w-[477px] h-[268px] max-xl:w-[400px] max-lg:w-[300px] rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: `url(${event.bannerUrl})` }} to={`/event/${event.eventId}`}
      ></NavLink>

      {/* Event Details */}
      <div className="EventDetails flex flex-col justify-between p-4 flex-grow h-full gap-[50px] max-xl:gap-[40px] max-lg:gap-[20px]">

        {/* Title and Description */}
        <div className="mt-[7px]">
          <h3 className="text-[40px] font-bold text-[#333]">{event.title}</h3>
          <p className="text-md text-gray-600 font-sans">{event.description.substr(0,75) + "....."}</p>
        </div>

        {/* Date and Time */}
        <div className="flex flex-row justify-between items-center mt-auto">
          
          {/* Event Date and Time */}
          <div>
            <p className="font-sans font-bold text-[22px] text-gray-600">
              📅 Date: {new Date(event.eventDate).toLocaleDateString('en-GB')}
            </p>
            <p className="font-sans font-bold text-[22px] text-gray-600">
              ⏱ Time: {new Date(event.startTime).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
              })}
            </p>
          </div>

          {/* Participant Rating Stars Counter */}
          <div className={`ParticipantRating flex flex-row gap-2 items-center bg-[#4889F4]  
            h-[59px] rounded-full px-3 border-black border-[2px]`}
          >

            {/* Dynamic Rating Stars Icons */}
            {Array.from({ length: Math.min(count, 5) }).map((_, index) => (
              <img
                key={index}
                className="StarIcon w-[30.94px] h-[30.94px] max-xl:w-[24px] max-xl:h-[24px]"
                src={vector}
                alt={`Participant ${index + 1}`}
              />
            ))}

            {/* Rating Count */}
            <img className="RectangleBackground h-[30.94px] ml-1" src={rectangle} alt="Rectangle Background" />
            <p className="font-inter font-bold text-[34px] text-[#FFFFFF]">{count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
