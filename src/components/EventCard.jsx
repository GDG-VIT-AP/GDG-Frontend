import React, { useEffect, useState } from "react";
import vector from '../assets/vector.png'
import rectangle from '../assets/Rectangle.png'

function EventCard({ event }) {
  const [animateCount, setAnimateCount] = useState(false);
  const count = 5;  // Mock participant count (you can make it dynamic)

  // ✅ Trigger Animation when Count Updates
  useEffect(() => {
    setAnimateCount(true);
    setTimeout(() => setAnimateCount(false), 600);
  }, [count]);

  return (
    <div className={`event-card flex flex-row items-center bg-[#F6F9FF]  
      p-3 rounded-2xl w-[1087px] border-[2px] border-gray-300 
      transform transition-all duration-500 ease-in-out 
      animate-card-appear hover:scale-[1.02] hover:shadow-xl cursor-pointer`} 
    >

      {/* ✅ Event Image */}
      <div
        className="event-image w-[477px] h-[268px] rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: `url(${event.bannerUrl})` }}
      ></div>

      {/* ✅ Event Details */}
      <div className="EventDetails flex flex-col justify-between p-4 flex-grow h-full">
        
        {/* ✅ Title & Description */}
        <div className="mt-[7px]">
          <h3 className="text-[40px] font-bold text-[#333]">{event.title}</h3>
          <p className="text-[20px] text-gray-600 font-sans">{event.description}</p>
        </div>

        {/* ✅ Date & Time */}
        <div className="flex flex-row justify-between items-center mt-2">
          
          {/* ✅ Event Date */}
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

          {/* ✅ Participant Counter */}
          <div className={`flex flex-row gap-2 items-center bg-[#4889F4]  
            h-[59px] rounded-full px-3 border-black border-[2px] 
            transition-all duration-500 ease-in-out ${animateCount ? 'animate-bounce' : ''}`}>
            
            {/* ✅ Dynamic Participant Icons */}
            {count>0 && <img className="w-[30.94px] h-[30.94px]" src={vector}/>}
            {count>1 && <img className="w-[30.94px] h-[30.94px]" src={vector}/>}
            {count>2 && <img className="w-[30.94px] h-[30.94px]" src={vector}/>}
            {count>3 && <img className="w-[30.94px] h-[30.94px]" src={vector}/>}
            {count>4 && <img className="w-[30.94px] h-[30.94px]" src={vector}/>}
            
            {/* ✅ Count */}
            <img className="h-[30.94px] ml-1" src={rectangle}/>
            <p className="font-inter font-bold text-[34px] text-[#FFFFFF]">{count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
