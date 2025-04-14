import React, { useState } from "react";
import avatar from "../assets/avatar.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import ot1 from "../assets/ot1.svg";
import ot2 from "../assets/ot2.svg";
import ot3 from "../assets/ot3.svg";
import ot4 from "../assets/ot4.svg";
import l2 from "../assets/l2.svg";
import rb from "../assets/rb.svg";
import bb from "../assets/bb.svg";
import rec1 from "../assets/rec1.svg";
import rec2 from "../assets/rec2.svg";
import da from "../assets/da.svg";


const teams = {
  "Machine Learning Team": [
    { name: "Alice Doe", role: "ML Engineer", img: avatar, team: "Machine Learning" },
    { name: "Bob Smith", role: "AI Researcher", img: avatar, team: "Machine Learning" },
    { name: "Alice Doe", role: "ML Engineer", img: avatar, team: "Machine Learning" },
    { name: "Bob Smith", role: "AI Researcher", img: avatar, team: "Machine Learning" }
  ],
  "Core Team": [
    { name: "Charlie Brown", role: "Team Lead", img: avatar, team: "Core Team" },
    { name: "Diana Prince", role: "Project Manager", img: avatar, team: "Core Team" },
    { name: "Charlie Brown", role: "Team Lead", img: avatar, team: "Core Team" },
    { name: "Diana Prince", role: "Project Manager", img: avatar, team: "Core Team" }
  ],
  "Web Development Team": [
    { name: "Jhon Smith", role: "Web Dev Team Leader", img: avatar, team: "Web Development" },
    { name: "Emma Watson", role: "Frontend Engineer", img: avatar, team: "Web Development" },
    { name: "Jhon Smith", role: "Web Dev Team Leader", img: avatar, team: "Web Development" },
    { name: "Emma Watson", role: "Frontend Engineer", img: avatar, team: "Web Development" }
  ],
  "Design Team": [
    { name: "Oliver Twist", role: "UI/UX Designer", img: avatar, team: "Design" },
    { name: "Sophia Loren", role: "Graphic Designer", img: avatar, team: "Design" },
    { name: "Oliver Twist", role: "UI/UX Designer", img: avatar, team: "Design" },
    { name: "Sophia Loren", role: "Graphic Designer", img: avatar, team: "Design" }
  ],
  "Marketing Team": [
    { name: "Henry Ford", role: "Marketing Strategist", img: avatar, team: "Marketing" },
    { name: "Lisa Ray", role: "SEO Specialist", img: avatar, team: "Marketing" },
    { name: "Henry Ford", role: "Marketing Strategist", img: avatar, team: "Marketing" },
    { name: "Lisa Ray", role: "SEO Specialist", img: avatar, team: "Marketing" }
  ],
};

const Team = () => {
  const [selectedTeam, setSelectedTeam] = useState("Machine Learning Team");

  return (
    <div className="relative my-32 md:my-60 p-8">
      <h2 className="text-3xl text-black mb-8 md:mb-8 lg:mb-8 text-center font-bold">
        Our Team
      </h2>
      <img src={ot1} alt="img" className="hidden lg:block absolute xl:top-8 xl:left-160 lg:top-0 lg:left-90 w-12" />
      <img src={ot2} alt="img" className="hidden lg:block absolute xl:top-0 xl:left-210 lg:top-10 lg:left-150 w-10" />
      <img src={ot3} alt="img" className="hidden xl:block absolute top-90 left-0 w-47" />
      <img src={rec2} alt="img" className="hidden xl:block absolute top-137 left-8 w-10" />
      <img src={rb} alt="img" className="hidden xl:block absolute top-100 left-28" />
      <img src={ot4} alt="img" className="hidden xl:block absolute top-3 right-0 w-60" />
      <img src={bb} alt="img" className="hidden xl:block absolute top-45 right-51 w-8" />
      <img src={da} alt="img" className="hidden xl:block absolute top-40 right-43" />
      <img src={l2} alt="img" className="hidden xl:block absolute bottom-0 right-0 w-46" />
      <img src={rec1} alt="img" className="hidden xl:block absolute bottom-10 right-20 w-8" />
      <p className="text-center text-black text-2xl font-medium mb-10">
        Explore the specialized teams driving innovation and creativity at GDG VIT AP
      </p>

      {/* Team category buttons */}
      <div className="flex justify-center gap-5 mt-4 mb-16 flex-wrap">
        {Object.keys(teams).map((team) => (
          <button
            key={team}
            onClick={() => setSelectedTeam(team)}
            className={`px-4 py-2 border-2 font-semibold rounded-xl cursor-pointer hover:bg-blue-300 hover:text-black hover:border-black ${
              selectedTeam === team
                ? "bg-blue-500 text-black font-bold"
                : "bg-white text-blue-500 border-blue-500"
            } transition duration-300 ease-in-out`}
          >
            {team}
          </button>
        ))}
      </div>

      {/* Team Members */}
      <div className="mt-6 pr-15 pl-15 pt-15 pb-5 border-2 border-black rounded-4xl shadow-lg flex flex-wrap justify-center gap-16 max-w-6xl mx-auto">
        {teams[selectedTeam].map((member, index) => (
          <div
            key={index}
            className="relative p-4 mt-10 bg-gray-100 shadow-md rounded-2xl w-48 text-center"
          >
            <div className="rounded-full w-32 mx-auto bg-white">
            <img
              src={member.img}
              alt={member.name}
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 rounded-full w-32 mx-auto mb-2 p-1"
            />
            </div>
            <div className="mt-16">
            <h3 className="font-bold">{member.name}</h3>
            <p className="text-gray-600">{member.team}</p>
            <p className="text-gray-600">{member.role}</p>
            <div className="flex gap-2 justify-center mt-2">
              <img src={linkedin} alt="linkedin" className="h-8 border-2 border-black rounded-4xl cursor-pointer hover:bg-gray-300" />
              <img src={github} alt="github" className="h-8 border-2 border-black rounded-4xl cursor-pointer hover:bg-gray-300" />
            </div>
            </div>
          </div>
        ))}
        <div className="w-full md:block text-center mt-4">
        <a href="#" className="text-blue-500 font-medium text-md hover:text-blue-600">
          see more
        </a>
      </div>
      </div>

      
    </div>
  );
};

export default Team;
