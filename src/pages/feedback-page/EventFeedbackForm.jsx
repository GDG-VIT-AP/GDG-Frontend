import React, { useState } from 'react';

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
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill={star <= rating ? "#000" : "none"}
              stroke="#000"
              strokeWidth="2"
              className="w-10 h-10"
            >
              <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.1-6.3-4.6-6.3 4.6 2.3-7.1-6-4.4h7.6z" />
            </svg>
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
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-gray-50 p-6 rounded-lg">
      <div className="text-center mb-8 w-full">
        <h1 className="text-4xl font-bold mb-2">Feedback Section</h1>
        <h2 className="text-2xl mb-6">Event Name</h2>
        
        {/* Progress bar using calculateProgress function */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
          <div 
            className="bg-blue-500 h-4 rounded-full" 
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
      </div>
      
      <div className="bg-white w-full p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Content & Speakers</h2>
        
        <div className="mb-8">
          <p className="mb-3">How relevant and useful was the content presented? (1 - Not useful, 5 - Extremely useful)</p>
          <StarRating 
            rating={contentRating} 
            onRatingChange={(rating) => handleRatingChange(rating, setContentRating)} 
          />
        </div>
        
        <div className="mb-8">
          <p className="mb-3">How would you rate the speakers/presenters? (1 - Not effective, 5 - Very effective)</p>
          <StarRating 
            rating={speakerRating} 
            onRatingChange={(rating) => handleRatingChange(rating, setSpeakerRating)} 
          />
        </div>
        
        <div className="mb-8">
          <p className="mb-3">How would you rate the event venue and setup? (1 - Poor, 5 - Excellent)</p>
          <StarRating 
            rating={venueRating} 
            onRatingChange={(rating) => handleRatingChange(rating, setVenueRating)} 
          />
        </div>
        
        <div className="flex justify-end mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors">
            Next »
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventFeedbackForm;