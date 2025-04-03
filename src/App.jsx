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
function App() {
  const count=3;
  const [getPastEvents,setPastEvents]= useState(true)
  const [searchQuery, setSearchQuery] = useState(""); // ✅ State for search query

function toggleEvents(toggle){
setPastEvents(toggle)
}
  return (
    <div className='total flex  flex-col justify-center items-center gap-4'>
      {/*events text */}
      <div 
        className="font-bold text-[#000000] text-[48px] flex flex-row items-center mt-[130px]" // Adjust size and position
        style={{ 
        
          backgroundSize: "contain", // ✅ Ensures full image is visible
          backgroundRepeat: "no-repeat" 
        }}>
          Events
      </div>
      {/* Left Cloud */}
      <div 
        className="h-[225px] w-[240px] absolute top-[116px] left-2 z-[-1]" // Adjust size and position
        style={{ 
          backgroundImage: `url(${cloud})`, 
          backgroundSize: "contain", // ✅ Ensures full image is visible
          backgroundRepeat: "no-repeat" 
        }}>
      </div>
      <div 
        className="h-[134.38px] w-[257.36px] absolute top-[800px] right-[-165px] z-[-1]" // Adjust size and position
        style={{ 
          backgroundImage: `url(${cloud2})`, 
          backgroundSize: "contain", // ✅ Ensures full image is visible
          backgroundRepeat: "no-repeat" 
        }}>
      </div>
      <div 
        className="h-[225px] w-[714px] absolute top-[1.5px] left-[369px] max-xl:left-[250px] z-[-1]" // Adjust size and position
        style={{ 
          backgroundImage: `url(${RedDot})`, 
          backgroundSize: "cover", // ✅ Ensures full image is visible
          backgroundRepeat: "no-repeat" 
        }}>
      </div>
      <div 
        className="h-[62.5px] w-[267.65px] absolute top-[127.5px] left-[368.5px] max-xl:left-[250px] z-[-1]" // Adjust size and position
        style={{ 
          backgroundImage: `url(${GreenDot})`, 
          backgroundSize: "cover", // ✅ Ensures full image is visible
          backgroundRepeat: "no-repeat" 
        }}>
      </div>
    { count>4 && <div 
        className="h-[134.38px] w-[257.36px] absolute top-[1518px] left-[0px] z-[-1]" // Adjust size and position
        style={{ 
          backgroundImage: `url(${cloud3})`, 
          backgroundSize: "contain", // ✅ Ensures full image is visible
          backgroundRepeat: "no-repeat" 
        }}>
      </div>
}

     
       <Search onSearch={setSearchQuery}/>
      <ToggleEvents toggle={toggleEvents}/>
        {/* ✅ Pass searchQuery to EventList Component */}
      <EventList events={getPastEvents} searchQuery={searchQuery} />
      <Footer/>

      </div>
  );
}

export default App;
