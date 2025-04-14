/**
 * PassWord.jsx
 * 
 * Purpose:
 * This component provides a secure UI for users to change their password.
 * It opens a modal popup where users enter their old and new password.
 * Upon submission, a PATCH request is made to the backend API to update the password.
 */
//-----------------------------------------------------------------
//contributors:G.Lokesh(23BCE9813)


import React, { useState } from 'react';

export default function PassWord(props) {
  // State for showing the password change modal
  const [showPopup, setShowPopup] = useState(false);

  // States for user input
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // State for feedback message
  const [message, setMessage] = useState('');

  // Function to handle password update via PATCH request
  const handlePasswordChange = async () => {
    const payload = {
      password: {
        old: oldPassword,
        new: newPassword,
      },
    };

    try {
      const response = await fetch('https://backend.kunwar1234singh1234.workers.dev/api/v1/user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${props.token}`
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setMessage('✅ Password updated successfully!');
        setShowPopup(false);
        setOldPassword('');
        setNewPassword('');
      } else {
        setMessage('❌ Password update failed!');
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ An error occurred!');
    }
  };

  return (
    <div className="PasswordBlock ml-[35px] mt-[100px]">
      {/* Header */}
      <div className="font-sans font-[700] text-[36px]">Password</div>

      {/* Button to trigger modal */}
      <div className="ChangePasswordBlock flex flex-row gap-[35px] items-center">
        <div className="ChangePassword font-sans text-[36px] font-[400]">ChangePassword</div>
        <button
          onClick={() => setShowPopup(true)}
          className="bg-[#4889F4] border-[1px] border-[#2C2C2C] rounded-[5px] p-[4px] w-[99px] h-[50px] text-white"
        >
          Change
        </button>
      </div>

      {/* Feedback message */}
      {message && <div className="mt-4 text-green-600 font-semibold">{message}</div>}

      {/* Modal popup for password input */}
      {showPopup && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/40 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-[350px] shadow-lg">
            <h2 className="text-[24px] font-bold mb-4">Change Password</h2>

            {/* Old Password Field */}
            <input
              type="password"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />

            {/* New Password Field */}
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />

            {/* Modal Buttons */}
            <div className="flex justify-between">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordChange}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
