/*Purpose: The FeedbackPage.jsx serves as the main container layout component for the feedback functionality in the GDG Frontend application. 
It implements a standard page structure with a fixed header, centered main content area containing the feedback form (FeedbackSection), and a footer. 
The component uses Tailwind CSS for responsive styling, ensuring a full-height layout (min-h-screen) with proper content spacing and maximum width constraints (max-w-3xl). 
This component creates a consistent layout wrapper that maintains the application's visual hierarchy and responsive design while hosting the feedback collection interface.*/

/*Contributor: Arpit Makkar (23BCE7565)*/ 
import React from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FeedbackSection from "./FeedbackSection";
import "../../styles/FeedbackPage.css"; 

const FeedbackPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 mt-[100px] mb-[200px]">
        <FeedbackSection />
      </main>
      <Footer />
    </div>
  )
}

export default FeedbackPage
