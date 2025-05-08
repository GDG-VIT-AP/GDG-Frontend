// Projects List Page, Adapted from Events Page
// ---------------------------------------------------
//contributor: Kunwar Singh Bhatia(22BCE8568)
import React from "react";
import { useState, useEffect } from "react";
import {HeadingDots} from "@/components/HeadingDots";
import Search from "@/components/Search";
import EventList from "@/components/EventList";
import ToggleEvents from "@/components/ToggleEvents";
import Footer from "@/components/Fotter";
import { getData } from "@/utils/api";
import ProjectList from "@/components/ProjectsList";
import ToggleProjects from "@/components/ToggleProjects";
export default function ProjectsPage() {
  const [getPastProjects, setPastProjects] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ State for search query
  const [projects, setProjects] = useState({ upcoming: [], past: [] });

  useEffect(() => {
    const getProjectsData = async () => {
      const upcomingProjects = await getData("project/getUpcomingProjects");
      const pastProjects = await getData("project/getPastProjects");
      setProjects({
        past: pastProjects?.data || [],
        upcoming: upcomingProjects?.data || [],
      });
    };
    getProjectsData();
  }, []);

  function toggleEvents(toggle) {
    setPastProjects(toggle);
  }
  return (
    <>
      <div className="totalCodeOfPage flex  flex-col justify-center items-center gap-4">
        <HeadingDots title="Projects" />
        <Search onSearch={setSearchQuery} />
        <ToggleProjects toggle={toggleEvents} />
        {/* ✅ Pass searchQuery to EventList Component */}
        <ProjectList
          projects={getPastProjects ? projects.past : projects.upcoming}
          searchQuery={searchQuery} 
        />
      </div>
    </>
  );
}
