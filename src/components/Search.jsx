import Hamburger from "../assets/Hamburger.png"
import search from '../assets/Search-icon.png'
const Search = () => {
  return (
    <div className="flex items-center w-[790px] h-[42px] bg-white border-[2px] border-[#828FBB] rounded-full px-4 py-2 mt-[225px]">
     <img src={Hamburger}/>
      <input
        type="text"
        placeholder="Search events..."
        className="flex-1 outline-none px-2"
      />
     
      <img src={search}/>
    </div>
  );
};

export default Search;
