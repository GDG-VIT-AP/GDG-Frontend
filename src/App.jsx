{
  /* Purpose : Serves as the main entry point of the application, handling routing and layout structure.
    Contributor : Daksh asati(REG: 23BEC7195) */
}

import React from "react";
import AdminPage from "./Pages/Adminpage";
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import "../src/App.css";
import Footer from "./Components/Footer.jsx";
import NavBar from "./Components/Navbar1.jsx";
import "./App.css";
import Events from "./pages/EventsPage/Events.jsx";
import { EventsPage } from "./pages/EventsPageMerge.jsx";
import HomePage from "./pages/Homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamsPage from "./pages/TeamsPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/SignupwithVerify" element={<SignupwithVerify />} /> */}
          <Route path="/event/:id" element={<EventsPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/admins" element={<AdminPage />} />
          <Route path="/team" element={<TeamsPage />} />
          <Route path="/project" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
