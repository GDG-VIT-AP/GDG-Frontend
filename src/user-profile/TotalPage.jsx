

/**
 * TotalPage Component
 * purpose of the file:
 * This is the main user profile page that brings together various sub-components:
 * - Displays the "User Profile" heading.
 * - Renders user-specific information using the UserProfile component.
 * - Appends a footer at the bottom using the Footer component.
 */
//-----------------------------------------------------------------
//contributors:G.Lokesh(23BCE9813)
import React from 'react';
import Footer from './Fotter';
import UserProfile from './UserProfile';
export default function TotalPage() {
  return (
    <div className='flex flex-col items-center justify-center mt-[100px]'>
      {/* Page Heading */}
      <div className='font-[700] font-sans text-[48px]'>User Profile</div>
      
      {/* User Profile Details */}
      <UserProfile />

      {/* Page Footer */}
      <Footer />
    </div>
  );
}
