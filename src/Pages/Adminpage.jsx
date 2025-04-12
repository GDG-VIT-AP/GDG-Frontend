/**
 * Purpose: Admin Page for viewing, managing and revoking admin users.
 * Contributor: Sathvik Sesha (23BCE9627)
 */


import React, { useState } from 'react';
import adminlogo from '../assets/adminsheild.png';
import { UserPlus } from 'lucide-react';
import AdminTable from '../components/AdminPageComps/AdminTable';
import SearchBar from '../components/AdminPageComps/Searchbar';

const AdminPage = () => {
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

        <SearchBar />
        <AdminTable admins={admins} handleRevoke={handleRevoke} />

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

export default AdminPage;
