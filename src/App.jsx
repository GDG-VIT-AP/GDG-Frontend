import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import SignupwithVerify from "./Pages/SignupwithVerify/SignupwithVerify.jsx";
import "../src/App.css";
import Footer from "./Components/Footer/Footer.jsx";
import NavBar from "./Components/Navbar/NavBar.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/SignupwithVerify" element={<SignupwithVerify />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
