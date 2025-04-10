import React, { useState } from 'react';
import { Search, UserPlus, Menu } from 'lucide-react';
import adminlogo from '../assets/adminsheild.png';

const Main = () => {
  const [admins, setAdmins] = useState([
      { email: 'jhon@gmail.com', name: 'Jhon Smith', status: 'Active', lastActive: '2/18/2025' },
      { email: 'jhon@gmail.com', name: 'Jhon Smith', status: 'Active', lastActive: '2/18/2025' },
      { email: 'jhon@gmail.com', name: 'Jhon Smith', status: 'Active', lastActive: '2/18/2025' },
      { email: 'jhon@gmail.com', name: 'Jhon Smith', status: 'Active', lastActive: '2/18/2025' },
      { email: 'jhon@gmail.com', name: 'Jhon Smith', status: 'Active', lastActive: '2/18/2025' },
      { email: 'jhon@gmail.com', name: 'Jhon Smith', status: 'Active', lastActive: '2/18/2025' },
      { email: 'jhon@gmail.com', name: 'Jhon Smith', status: 'Active', lastActive: '2/18/2025' },
    ]);

  const handleRevoke = (index) => {
    setAdmins(prevAdmins => prevAdmins.filter((_, i) => i !== index));
  };

  return (
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
              <th className="py-3 px-4 text-left">Select</th>
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
                <td className="py-3 px-4 text-center">
                  <input type="radio" name="adminSelect" className="h-4 w-4" />
                </td>
                <td className="py-3 px-4">{admin.email}</td>
                <td className="py-3 px-4">{admin.name}</td>
                <td className="py-3 px-4">{admin.status}</td>
                <td className="py-3 px-4">{admin.lastActive}</td>
                <td className="py-3 px-4">
                  <button 
                    className="bg-red-500 text-white px-4 py-1 rounded-2xl hover:bg-red-600"
                    onClick={() => handleRevoke(index)}
                  >
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
  );
};

export default Main;
