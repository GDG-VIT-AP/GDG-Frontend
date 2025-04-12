import './App.css';
import Events from './pages/Events';
import { EventsPage } from './pages/EventsPageMerge'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/event/:id" element={<EventsPage />} />
        <Route path="/events" element={<Events/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
