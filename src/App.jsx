
{/* Purpose : Serves as the main entry point of the application, handling routing and layout structure.
    Contributor : Daksh asati(REG: 23BEC7195) */}

import React from 'react';
import AdminPage from './Pages/Adminpage';
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import SignupwithVerify from "./Pages/SignupwithVerify/SignupwithVerify.jsx";
import "../src/App.css";
import Footer from "./Components/Footer/Footer.jsx";
import NavBar from "./Components/NavBar1.jsx";
import './App.css';
import Events from './pages/Events';
import { EventsPage } from './pages/EventsPageMerge'
import HomePage from './pages/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
      <main className="flex-grow">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<HomePage />}/>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/SignupwithVerify" element={<SignupwithVerify />} />
          <Route path="/event/:id" element={<EventsPage />} />
          <Route path="/events" element={<Events/>}/>
          <Route path="/Admins" element={<AdminPage/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
