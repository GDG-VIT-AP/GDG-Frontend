import './App.css';
import { useState } from 'react';
import Search from './components/Search';
import EventList from './components/EventList';
import cloud from './assets/cloud.png'; // ✅ Import the image
import RedDot from './assets/RedDot.png';
import GreenDot from './assets/GreenDot.png'
import ToggleEvents from './components/ToggleEvents';
import cloud2 from './assets/cloud2.png';
import cloud3 from './assets/cloud3.png';
import Footer from './components/Fotter';
import Events from './pages/Events';
function App() {
  
  const [getPastEvents,setPastEvents]= useState(true)
  const [searchQuery, setSearchQuery] = useState(""); // ✅ State for search query

function toggleEvents(toggle){
setPastEvents(toggle)
}
  return (
    <div className='total flex  flex-col justify-center items-center gap-4'>


       <Events/>
       <Search onSearch={setSearchQuery}/>
      <ToggleEvents toggle={toggleEvents}/>
        {/* ✅ Pass searchQuery to EventList Component */}
      <EventList events={getPastEvents} searchQuery={searchQuery} />
      <Footer/>

      </div>
  );
}

export default App;
