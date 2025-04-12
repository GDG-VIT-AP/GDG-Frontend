import './App.css'
import { EventsPage } from './pages/EventsPageMerge'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/event/:id" element={<EventsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
