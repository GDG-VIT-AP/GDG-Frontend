/**
 * Purpose: Displays a single row in the admin table with action controls.
 * Contributor: Sathvik Sesha (23BCE9627)
 */

import React from 'react';

const AdminTableRow = ({ admin, index, handleRevoke }) => {
  return (
    <tr className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
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
  );
};

export default AdminTableRow;
