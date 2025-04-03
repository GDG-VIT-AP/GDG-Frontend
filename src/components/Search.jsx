import { useState } from "react";
import Hamburger from "../assets/Hamburger.png";
import search from "../assets/Search-icon.png";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center w-[790px] h-[42px] max-xl:w-[690px] max-lg:w-[600px] max-md:w-[500px] max-sm:w-[400px] max-[510px]:w-[300px] bg-white border-[2px] border-[#828FBB] rounded-full px-4 py-2 mt-[9px]">
      <img src={Hamburger} alt="Menu" />
      <input
        type="text"
        placeholder="Search events..."
        className="flex-1 outline-none px-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <img
        src={search}
        alt="Search"
        className="cursor-pointer"
        onClick={() => onSearch(query)}
      />
    </div>
  );
};

export default Search;
