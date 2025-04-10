import './App.css';
import { useState } from 'react';
import Search from './components/Search';
import EventList from './components/EventList';
import ToggleEvents from './components/ToggleEvents';
import Footer from './components/Fotter';
import Events from './pages/Events';
function App() {
  
  const [getPastEvents,setPastEvents]= useState(true)
  const [searchQuery, setSearchQuery] = useState(""); // ✅ State for search query

function toggleEvents(toggle){
setPastEvents(toggle)
}
  return (
    <div className='totalCodeOfPage flex  flex-col justify-center items-center gap-4'>


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
