/**
 * Purpose: Provides a search bar for filtering admin users.
 * Contributor: Sathvik Sesha (23BCE9627)
 */

import React from 'react';
import { Menu, Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center my-[30px]">
      <div className="relative">
        <Menu className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" size={20} />
        <input
          type="text"
          placeholder="Search admin..."
          className="w-175 pl-10 pr-10 py-2 border-2 border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-black" size={20} />
      </div>
    </div>
  );
};

export default SearchBar;
