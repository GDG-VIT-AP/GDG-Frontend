import { useState } from "react";

const ToggleEvents = (props) => {
  const [activeTab, setActiveTab] = useState("past");

  return (
    <div className="flex bg-[#F6F9FF] rounded-full w-[1087px] h-[63px] p-1 border-[2px] border-black mb-[20px]">
      <button
        className={`flex-1 py-2 rounded-full  text-center font-semibold ${
          activeTab === "upcoming"
            ? "bg-[#4889F4] text-white border-[2px] border-black"
            : "text-gray-500"
        }`}
        onClick={() => {
          setActiveTab("upcoming")
          props.toggle(false)

        }}
      >
        Up Coming Events
      </button>
      <button
        className={`flex-1 py-2 rounded-full text-center font-semibold ${
          activeTab === "past"
            ? "bg-[#4889F4] text-white border-[2px] border-black"
            : "text-gray-500"
        }`}
        onClick={() => {
          setActiveTab("past")
          props.toggle(true)
        }}
      >
        Past Events
      </button>
    </div>
  );
};

export default ToggleEvents;
