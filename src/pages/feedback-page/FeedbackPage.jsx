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
