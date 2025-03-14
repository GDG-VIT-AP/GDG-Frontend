import React, { useState } from 'react';
import { Shield, Search, UserPlus, Menu } from 'lucide-react';
import gdgLogo from './assets/gdg.jpg';
import adminlogo from './assets/adminsheild.png';
import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';

function App() {
  const [admins] = useState([
    { email: 'jhon@gmail.com', name: 'Jhon Smith', status: 'Active', lastActive: '2/17/2025' },
    { email: 'jhon@gmail.com', name: 'Jhon Smith', status: 'Active', lastActive: '2/17/2025' },
    { email: 'jhon@gmail.com', name: 'Jhon Smith', status: 'Active', lastActive: '2/17/2025' },
    { email: 'jhon@gmail.com', name: 'Jhon Smith', status: 'Active', lastActive: '2/17/2025' },
    { email: 'jhon@gmail.com', name: 'Jhon Smith', status: 'Active', lastActive: '2/17/2025' },
    { email: 'jhon@gmail.com', name: 'Jhon Smith', status: 'Active', lastActive: '2/17/2025' },
    { email: 'jhon@gmail.com', name: 'Jhon Smith', status: 'Active', lastActive: '2/17/2025' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      {/* Moved the nav section to align before login */}
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


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center mb-12">Admin Management</h1>
        <div className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center gap-2 mb-6">
          <img src={adminlogo} alt="Admin Logo" className="h-16 w-16" />
          <h2 className="text-2xl font-bold">Admin User List</h2>
        </div>


      {/* Search Bar */}
      <div className="flex justify-center items-center my-[30px]">
  <div className="relative">
    <Menu className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" size={20} />
    <input
      type="text"
      className="w-175 pl-10 pr-10 py-2 border-2 border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-black" size={20} />
    </div>
    </div>


      {/* Admin Table */}
<div className="overflow-x-auto">
  <table className="w-full rounded-2xl overflow-hidden shadow-md">
    <thead>
      <tr className="bg-blue-500 text-white">
        <th className="w-8 py-3 px-4 text-left">
          <label className="block cursor-pointer">
            <input type="checkbox" className="hidden peer" />
            <span className="block h-4 w-4 rounded-full border-2 border-gray-400 bg-white ring-2 ring-gray-300"></span>
          </label>
        </th>
        <th className="py-3 px-4 text-left">Email</th>
        <th className="py-3 px-4 text-left">Name</th>
        <th className="py-3 px-4 text-left">Status</th>
        <th className="py-3 px-4 text-left">Last Active</th>
        <th className="py-3 px-4 text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      {admins.map((admin, index) => (
        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
          <td className="py-3 px-4">
            <label className="block cursor-pointer">
              <input type="checkbox" className="hidden peer" />
              <span className="block h-4 w-4 rounded-full border-2 border-gray-400 bg-white ring-2 ring-gray-300 peer-checked:bg-blue-500"></span>
            </label>
          </td>
          <td className="py-3 px-4">{admin.email}</td>
          <td className="py-3 px-4">{admin.name}</td>
          <td className="py-3 px-4">{admin.status}</td>
          <td className="py-3 px-4">{admin.lastActive}</td>
          <td className="py-3 px-4">
            <button className="bg-red-500 text-white px-4 py-1 rounded-2xl hover:bg-red-600">
              Revoke
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>




      {/* Add New Admin Button */}
      <div className="mt-6 flex justify-center items-end">
  <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 inline-flex items-center gap-2 text-lg font-extrabold shadow-md transform hover:scale-105 transition-transform">
    <UserPlus size={22} />
    Add New Admin
  </button>
</div>
    </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-start gap-8">
      {/* Logo section on the left */}
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8">
          <img src={gdgLogo} alt="GDG Logo" />
        </div>
        <div>
          <p className="font-medium">Google Developer Group</p>
          <p className="text-sm text-gray-400">VIT-AP</p>
        </div>
      </div>

      {/* Services & Info sections on the right */}
      <div className="flex gap-16">
        <div>
          <h3 className="text-lg font-medium mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Feedback Page</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Info</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Our Team</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Events</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Footer bottom details */}
    <div className="mt-12 pt-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Facebook</span>
            <div className="h-8 w-5">
              <img src={facebook} alt="facebook" />
            </div>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Instagram</span>
            <div className="h-8 w-5">
              <img src={instagram} alt="instagram" />
            </div>
          </a>
        </div>
        <div className="text-gray-400 text-sm">
          <p>+91 00000 00000</p>
          <p>gdgvitap@gmail.com</p>
        </div>
        <div className="text-gray-400 text-sm mt-4 md:mt-0">
          © 2025 — Copyright
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;