//purpose of the file:
// This component displays an event card with an event image, title, description, date, time, and event  rating.
// It has animation effects for card appearance and count update, and responsive behavior for different screen sizes.
// ---------------------------------------------------
//contributor: G.Lokesh(23BCE9813)
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function ProjectCard({ project }) {
  const [_, setAnimateCount] = useState(false);
  const count = 5; // Default rating 5

  // Trigger animation when count updates
  useEffect(() => {
    setAnimateCount(true);
    const timeout = setTimeout(() => setAnimateCount(false), 600);
    return () => clearTimeout(timeout); // Cleanup timeout
  }, [count]);

    console.log(project);
  return (
    <div
      className={`ProjectCard flex flex-row items-center bg-[#F6F9FF] max-md:flex-col max-md:w-full max-md:items-center
        p-3 rounded-2xl w-full max-w-[1087px] max-xl:w-[900px] max-lg:w-[800px] border-[2px] border-gray-300 
        transform transition-all duration-500 ease-in-out 
        animate-card-appear hover:scale-[1.02] hover:shadow-xl cursor-pointer`}
    >

      {/* Event Image */}
      <NavLink
        className="EventImage w-[477px] h-[268px] max-xl:w-[400px] max-lg:w-[300px] rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: `url(${project.imgURL[0]})` }} to={`/event/${project.eventID}`}
      ></NavLink>

      {/* Event Details */}
      <div className="EventDetails flex flex-col justify-between p-4 flex-grow h-full gap-[50px] max-xl:gap-[40px] max-lg:gap-[20px]">

        {/* Title and Description */}
        <div className="mt-[7px]">
          <h3 className="text-[40px] font-bold text-[#333]">{project.name}</h3>
          <p className="text-md text-gray-600 font-sans">{project.description.substr(0,75) + "....."}</p>
        </div>

        {/* Date and Time */}
        <div className="flex flex-row justify-between items-center mt-auto">
          
          {/* Event Date and Time */}
          <div>
            <p className="font-sans font-bold text-[22px] text-gray-600">
              📅 Live Since : {new Date(project.startDate).toLocaleDateString('en-GB')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
