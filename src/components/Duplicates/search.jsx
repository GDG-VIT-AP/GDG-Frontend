// Purpose of the file:
// This component renders a styled search bar with a hamburger menu icon on the left and a search icon on the right.
// It is intended to be used for filtering/searching functionality within the GDG VIT-AP Club UI.

import Hamburger from "../assets/Hamburger.png";
import search from '../assets/Search.png';

const Search = () => {
  return (
    <div className="flex items-center w-[1053px] h-[56px] bg-[#F2F1F1] border-[2px] border-[#828FBB] rounded-full px-4 py-2">
      
      {/* Hamburger Menu Icon */}
      <img src={Hamburger} alt="Hamburger Icon" />
      
      {/* Search Input Field */}
      <input
        type="text"
        placeholder="Search here..."
        className="flex-1 outline-none px-2 bg-transparent"
      />
      
      {/* Search Icon */}
      <img src={search} alt="Search Icon" />
    </div>
  );
};

export default Search;
