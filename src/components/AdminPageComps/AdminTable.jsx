/**
 * Purpose: Renders the admin user table with all admin data.
 * Contributor: Sathvik Sesha (23BCE9627)
 */

import React from 'react';
import AdminTableRow from './AdminTableRow';

const AdminTable = ({ admins, handleRevoke }) => {
  return (
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
            <AdminTableRow
              key={index}
              index={index}
              admin={admin}
              handleRevoke={handleRevoke}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
