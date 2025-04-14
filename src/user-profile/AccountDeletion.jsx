/**
 * AccountDeletion Component
 * purpose of the file:
 * This component allows the user to delete their account. It shows a confirmation popup 
 * where the user is prompted to enter their password for account deletion. On successful 
 * deletion, a message is displayed confirming the action.
 * 
 * Props:
 * - token: User's authentication token used for account verification during deletion
 */
//-----------------------------------------------------------------
//contributors:G.Lokesh(23BCE9813)

import React, { useState } from 'react';
export default function AccountDeletion(props) {
  // State variables for handling popup visibility, password input, and response messages
  const [showPopup, setShowPopup] = useState(false);  // Controls the popup visibility
  const [password, setPassword] = useState('');       // Stores the user's entered password
  const [message, setMessage] = useState('');         // Stores the status message (success/error)

  // Handles account deletion by making a DELETE request to the backend API
  const handleDelete = async () => {
    try {
      // Sends a DELETE request to the API with the password and authorization token
      const response = await fetch('https://backend.kunwar1234singh1234.workers.dev/api/v1/user', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${props.token}` // Passes the token for authorization
        },
        body: JSON.stringify({ password }), // Sends the password to verify the deletion request
      });

      // Converts the response to JSON
      const result = await response.json();

      // Checks if deletion was successful and sets the appropriate message
      if (result.success) {
        setMessage('✅ Account deleted successfully!');
        setShowPopup(false); // Closes the popup upon successful deletion
        // Optional: redirect to login or homepage (commented out)
        // window.location.href = '/login';
      } else {
        setMessage('❌ ' + (result.message || 'Account deletion failed!')); // Displays failure message
      }
    } catch (error) {
      console.error(error);
      setMessage('❌ An error occurred during deletion.'); // Displays error message in case of failure
    }
  };

  return (
    <div className='AccountDeleteSection flex flex-col ml-[-270px] max-[1050px]:ml-[-100px] max-[850px]:ml-[0px] mt-[100px]'>
      <div className='AccountDelete font-sans font-[700] text-[36px] '>Account Deletion</div>
      <div className='DeleteAccount flex flex-row gap-[40px]'>
        <div className='font-sans font-[400] text-[36px]'>Want to delete the account?</div>
        {/* Button to trigger the account deletion confirmation popup */}
        <button
          className='font-sans text-[20px] text-[#F5F5F5] border-[#2C2C2C] rounded-[10px] bg-[red] p-[2px] border-[1px] w-[194px] h-[50px]'
          onClick={() => setShowPopup(true)}
        >
          Delete Account
        </button>
      </div>

      {/* Displays a message if there is any (success or error message) */}
      {message && <div className='mt-4 text-red-600 font-semibold'>{message}</div>}

      {/* Confirmation popup when the user clicks "Delete Account" */}
      {showPopup && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/40 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-[350px] shadow-lg">
            <h2 className="text-[24px] font-bold mb-4">Confirm Account Deletion</h2>
            {/* Password input for confirming the deletion */}
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Updates password state
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-between">
              {/* Cancel button to close the popup */}
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              {/* Confirm button to trigger the account deletion */}
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
