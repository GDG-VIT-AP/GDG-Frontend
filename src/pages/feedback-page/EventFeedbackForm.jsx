import React, { useState } from 'react';
import starIcon from '../assets/Star.svg';  // Add this import

const EventFeedbackForm = () => {
  const [contentRating, setContentRating] = useState(0);
  const [speakerRating, setSpeakerRating] = useState(0);
  const [venueRating, setVenueRating] = useState(0);
  
  // Function to handle star rating selection
  const handleRatingChange = (rating, setRatingFunction) => {
    setRatingFunction(rating);
  };
  
  // Star rating component
  const StarRating = ({ rating, onRatingChange }) => {
    return (
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onRatingChange(star)}
            className="focus:outline-none"
          >
            <img
              src={starIcon}
              alt="star"
              width="40"
              height="40"
              className={`w-10 h-10 ${star <= rating ? 'brightness-100' : 'brightness-50'}`}
            />
          </button>
        ))}
      </div>
    );
  };

  // Check if rating has a value
  const isRated = (rating) => rating > 0;

  // Get all ratings in array
  const getRatings = () => [contentRating, speakerRating, venueRating];

  // Calculate progress percentage based on completed ratings
  const calculateProgress = () => {
    const ratings = getRatings();
    return (ratings.filter(rating => rating > 0).length / ratings.length) * 100;
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 py-16 px-8">
      <div className="w-full max-w-7xl mx-auto bg-gray-50 p-12 rounded-2xl shadow-xl">
        <div className="text-center mb-16 w-full">
          <h1 className="text-6xl font-bold mb-6">Feedback Section</h1>
          <h2 className="text-4xl mb-10">Event Name</h2>
          
          {/* Progress bar with reduced width */}
          <div className="w-3/4 mx-auto bg-gray-200 rounded-full h-8 mb-12">
            <div 
              className="bg-[#4889f4] h-6 rounded-full transition-all duration-300 " 
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
        </div>
        
        <div className="bg-white w-full p-16 rounded-2xl shadow-lg space-y-16">
          <h2 className="text-4xl font-bold mb-10">Content & Speakers</h2>
          
          <div className="mb-16">
            <p className="text-2xl mb-6">How relevant and useful was the content presented? (1 - Not useful, 5 - Extremely useful)</p>
            <StarRating 
              rating={contentRating} 
              onRatingChange={(rating) => handleRatingChange(rating, setContentRating)} 
            />
          </div>
          
          <div className="mb-16">
            <p className="text-2xl mb-6">How would you rate the speakers/presenters? (1 - Not effective, 5 - Very effective)</p>
            <StarRating 
              rating={speakerRating} 
              onRatingChange={(rating) => handleRatingChange(rating, setSpeakerRating)} 
            />
          </div>
          
          <div className="mb-16">
            <p className="text-2xl mb-6">How would you rate the event venue and setup? (1 - Poor, 5 - Excellent)</p>
            <StarRating 
              rating={venueRating} 
              onRatingChange={(rating) => handleRatingChange(rating, setVenueRating)} 
            />
          </div>
          
          <div className="flex justify-end mt-12">
            <button className="bg-blue-500 text-white px-12 py-4 text-xl rounded-full font-semibold hover:bg-blue-600 transition-colors">
              Next »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventFeedbackForm;