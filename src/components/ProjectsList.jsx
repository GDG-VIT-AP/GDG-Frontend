//purpose of the file:
// This component fetches and displays a list of projects (past or upcoming).
// It also filters the projects based on a search query.
//
// Props:
//   - projects: boolean (true for past projects, false for upcoming projects)
//   - searchQuery: string to filter the project titles
// ---------------------------------------------------
//contributor: G.Lokesh(23BCE9813)

// import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({projects , searchQuery }) {
    console.log(projects);
  const filteredProjects = projects.filter((project) =>
  {
      return project.name.toLowerCase().includes(searchQuery.toLowerCase())
  });
  console.log(filteredProjects)
  return (
    <div className="projectListContainer flex flex-col gap-6">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <ProjectCard key={project.projectID} project={project} />
        ))
      ) : (
        <p className="NoprojectsMessage text-center font-bold text-lg">
          No projects Found
        </p>
      )}
    </div>
  );
}

export default ProjectList;
