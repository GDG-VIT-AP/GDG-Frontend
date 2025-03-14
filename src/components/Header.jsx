import React from 'react';
import { Menu } from 'lucide-react';
import gdgLogo from '../assets/gdg.jpg';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="h-8 w-8">
                <img src={gdgLogo} alt="GDG Logo" />
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium">Google Developer Group</p>
                <p className="text-xs text-gray-500">VIT-AP</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Events</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Project</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Our Team</a>
            </nav>

            <button className="bg-blue-500 text-dark px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
              Login
            </button>

            <button className="text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;