import React, { useState } from 'react';

// Define the feedback structure
const feedbackPages = [
  {
    title: 'General Event Feedback',
    questions: [
      {
        category: 'content',
        question: 'How would you rate your overall experience at the event? (1 - Poor, 5 - Excellent)',
        type: 'star'
      },
      {
        category: 'speakers',
        question: 'How engaging and interactive did you find the event? (1 - Not engaging, 5 - Very engaging)',
        type: 'star'
      },
      {
        category: 'planning',
        question: 'How satisfied are you with the event\'s organization and planning? (1 - Poor, 5 - Excellent)',
        type: 'star'
      }
    ]
  },
  {
    title: 'Content & Speakers',
    questions: [
      {
        category: 'materials',
        question: 'How relevant and useful was the content presented? (1 - Not useful, 5 - Extremely useful)',
        type: 'star'
      },
      {
        category: 'presenters',
        question: 'How would you rate the speakers/presenters? (1 - Not effective, 5 - Very effective)',
        type: 'star'
      },
      {
        category: 'setup',
        question: 'How would you rate the event venue and setup? (1 - Poor, 5 - Excellent)',
        type: 'star'
      }
    ]
  },
  {
    title: 'Additional Feedback',
    questions: [
      {
        category: 'feedback1',
        question: 'What did you like the most about the event? (Open-ended response)',
        type: 'text'
      },
      {
        category: 'feedback2',
        question: 'What areas do you think need improvement? (Open-ended response)',
        type: 'text'
      },
      {
        category: 'recommendation',
        question: 'Would you attend future events organized by our club? (Yes / No / Maybe)',
        type: 'radio',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'maybe', label: 'Maybe' }
        ]
      }
    ]
  }
];

const FeedbackSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allRatings, setAllRatings] = useState(
    feedbackPages.reduce((acc, _, index) => {
      acc[`page${index + 1}`] = {};
      return acc;
    }, {})
  );

  const handleInputChange = (category, value, type = 'star') => {
    setAllRatings(prev => ({
      ...prev,
      [`page${currentPage}`]: {
        ...prev[`page${currentPage}`],
        [category]: value
      }
    }));
  };

  const renderStars = (category) => {
    const stars = [];
    const currentRatings = allRatings[`page${currentPage}`];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
          key={i}
          className={`text-3xl cursor-pointer ${
            currentRatings[category] >= i 
              ? 'text-blue-500 [text-shadow:-1px_0_black,0_1px_black,1px_0_black,0_-1px_black]' 
              : 'text-gray-300 [text-shadow:-1px_0_black,0_1px_black,1px_0_black,0_-1px_black]'
          }`}
          onClick={() => handleInputChange(category, i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const renderTextArea = (category) => (
    <div className="w-full">
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        maxLength={500}
        rows={2}  // Changed from rows={4} to rows={2} to halve the height
        style={{ resize: 'none' }}  // Added to prevent manual resizing
        placeholder="Please provide your feedback (max 500 characters)"
        value={allRatings[`page${currentPage}`][category]}
        onChange={(e) => handleInputChange(category, e.target.value, 'text')}
      />
      <p className="text-sm text-gray-500 mt-1">
        {500 - (allRatings[`page${currentPage}`][category]?.length || 0)} characters remaining
      </p>
    </div>
  );

  const renderRadioButtons = (category, options) => (
    <div className="flex flex-row gap-6"> {/* Changed from flex-col to flex-row and increased gap */}
      {options.map((option, i) => (
        <label key={i} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={category}
            value={option.value}
            checked={allRatings[`page${currentPage}`][category] === option.value}
            onChange={(e) => handleInputChange(category, e.target.value, 'radio')}
            className="w-4 h-4 cursor-pointer appearance-none border-2 border-gray-300 rounded-full checked:border-[#4285f4] checked:bg-[#4285f4] relative
              before:content-[''] before:block before:w-1.5 before:h-1.5 before:rounded-full before:absolute before:top-1/2 before:left-1/2 
              before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:opacity-0 checked:before:opacity-100"
          />
          <span className="text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );

  const renderQuestion = (question) => {
    switch (question.type) {
      case 'star':
        return renderStars(question.category);
      case 'text':
        return renderTextArea(question.category);
      case 'radio':
        return renderRadioButtons(question.category, question.options);
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mx-auto my-8 bg-[#F6F9FF] rounded-lg p-6 shadow-sm max-w-2x1 text-black border border-[#828FBB]">
        <h2 className="text-2xl font-bold text-center mb-2">Feedback Section</h2>
        <h4 className="text-xl text-center mb-6 font-bold">
          Event Name 
        </h4>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
          <div 
            className="bg-[#4285f4] h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${(currentPage / feedbackPages.length) * 100}%` }}
          ></div>
        </div>
        
        <div className="bg-white p-6 rounded-lg">
          <h4 className="text-lg mb-4 font-bold text-left">
            {feedbackPages[currentPage - 1].title}
          </h4>
          
          {feedbackPages[currentPage - 1].questions.map((question, index) => (
            <div key={index} className="mb-6 text-left">
              <p className="mb-2 text-left">{question.question}</p>
              <div className="flex gap-2">
                {renderQuestion(question)}
              </div>
            </div>
          ))}
          
          <div className="flex justify-between mt-8">
            {currentPage > 1 && (
              <button 
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md flex items-center transition-colors"
              >
                « Previous
              </button>
            )}
            <button 
              onClick={() => currentPage < feedbackPages.length ? setCurrentPage(prev => prev + 1) : console.log('Submit:', allRatings)}
              className="bg-[#4285f4] hover:bg-[#3367d6] text-white px-6 py-2 rounded-md flex items-center transition-colors ml-auto"
            >
              {currentPage === feedbackPages.length ? 'Submit »' : 'Next »'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;