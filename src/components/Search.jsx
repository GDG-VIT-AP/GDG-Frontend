// Search.jsx
// -----------------------------------------------
// This component renders a styled search bar with a hamburger icon on the left
// and a search icon on the right. It captures user input and calls the
// provided onSearch function when the search icon is clicked.
//
// Props:
//   - onSearch: function to handle the search query when triggered
// -----------------------------------------------

import { useState } from "react";
import Hamburger from "../assets/Hamburger.png"; // Hamburger menu icon
import search from "../assets/Search-icon.png";  // Search icon

const Search = ({ onSearch }) => {
  // State to store the current search query
  const [query, setQuery] = useState("");

  return (
    // Main container for the search bar
    <div className="flex items-center w-[790px] h-[42px] 
                    max-xl:w-[690px] max-lg:w-[600px] max-md:w-[500px] 
                    max-sm:w-[400px] max-[510px]:w-[300px] 
                    bg-white border-[2px] border-[#828FBB] 
                    rounded-full px-4 py-2 mt-[9px]">

      {/* Hamburger Icon */}
      <img src={Hamburger} alt="Menu" />

      {/* Input field for typing search query */}
      <input
        type="text"
        placeholder="Search events..."
        className="flex-1 outline-none px-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state on typing
      />

      {/* Search Icon */}
      <img
        src={search}
        alt="Search"
        className="cursor-pointer"
        onClick={() => onSearch(query)} // Trigger search when clicked
      />
    </div>
  );
};

export default Search;
