// Purpose of the file:
// This file defines the main "Page" component which composes the layout of the GDG team display page.
// It includes decorative emoji images, renders the head of GDG, search bar, team selection buttons,
// team cards based on selected department, and the footer component.
//-------------------------------------------------------------------
//contributors:V.Tarun Kumar(23BCE9867)
import React from 'react';
import { useState } from 'react';

import Buttons from '../components/Buttons';
import HeadOfGdg from '../AggregateComponents/HeadOfGdg';
import Search from '../components/Search';
import Footer from '../components/Fotter';
import TeamCard from '../components/TeamCard';

// Decorative emoji images
import smilingface from "../assets/smiling-face-with-sunglasses.png";
import faceemoji from "../assets/face-with-tears-of-joy.png";
import celebrate from "../assets/celebrate.png";
import happyEnlarge from "../assets/happy-face-with-enlarged-eyes.png";

function Page() {
  // State to track which department/team is selected
  const [selectDepartment, onSelectDepartment] = useState("Design Team");

  return (
    <>
      {/* Background decorative emojis */}
      <img className="absolute top-[176px] z-[-1]" src={smilingface} />
      <img className="absolute top-[220px] right-[0px] z-[-1]" src={faceemoji} />
      <img className="absolute top-[1020px] left-[87px]" src={celebrate} />
      <img className="absolute top-[2674px] left-[20px]" src={happyEnlarge} />

      {/* Main content container */}
      <div className="flex flex-col justify-center items-center gap-[60px]">
        <HeadOfGdg /> {/* Component showing the head of GDG */}
        <Search /> {/* Search bar component */}
        <Buttons selectTeam={onSelectDepartment} /> {/* Buttons to choose team/department */}
        <TeamCard displayTeam={selectDepartment} /> {/* Team cards shown based on selected department */}
        <Footer /> {/* Footer section */}
      </div>
    </>
  );
}

export default Page;
