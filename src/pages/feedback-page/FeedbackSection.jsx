import React, { useState } from 'react';

const FeedbackSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allRatings, setAllRatings] = useState({
    page1: { content: 0, speakers: 0, planning: 0 },
    page2: { materials: 0, presenters: 0, setup: 0 },
    page3: { feedback1: '', feedback2: '', recommendation: '' }
  });

  const handleRatingChange = (category, value) => {
    setAllRatings(prev => ({
      ...prev,
      [`page${currentPage}`]: {
        ...prev[`page${currentPage}`],
        [category]: value
      }
    }));
  };

  // Add a new handler for text feedback
  const handleTextFeedback = (category, value) => {
    setAllRatings(prev => ({
      ...prev,
      page3: {
        ...prev.page3,
        [category]: value
      }
    }));
  };

  // Add handler for radio button selection
  const handleRadioChange = (value) => {
    setAllRatings(prev => ({
      ...prev,
      page3: {
        ...prev.page3,
        recommendation: value
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
          onClick={() => handleRatingChange(category, i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const handleNext = () => {
    if (currentPage < 3) {
      setCurrentPage(prev => prev + 1);
    } else {
      console.log('All feedback submitted:', allRatings);
      // Handle final submission here
    }
  };

  const page1Questions = [
    {
      category: 'content',
      question: 'How would you rate your overall experience at the event? (1 - Poor, 5 - Excellent)'
    },
    {
      category: 'speakers',
      question: 'How engaging and interactive did you find the event? (1 - Not engaging, 5 - Very engaging)'
    },
    {
        category: 'planning',
        question: 'How satisfied are you with the event`s organization and planning? (1 - Poor, 5 - Excellent)'
      }
  ];

  const page2Questions = [
    {
      category: 'materials',
      question: 'How relevant and useful was the content presented? (1 - Not useful, 5 - Extremely useful)'
    },
    {
      category: 'presenters',
      question: 'How would you rate the speakers/presenters? (1 - Not effective, 5 - Very effective)'
    },
    {
        category: 'setup',
        question: 'How would you the rate the event venue and setup? (1 - Poor, 5 - Excellent)'
      }
  ];

  const page3Questions = [
    {
      category: 'feedback1',
      question: 'What did you like the most about the event? (Open-ended response)',
      type: 'text'
    },
    {
      category: 'feedback2',
      question: 'What areas do you think need improvement?',
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
  ];

  const getCurrentQuestions = () => {
    switch(currentPage) {
      case 1:
        return page1Questions;
      case 2:
        return page2Questions;
      case 3:
        return page3Questions;
      default:
        return page1Questions;
    }
  };

  const currentQuestions = getCurrentQuestions();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mx-auto my-8 bg-[#E2E8F0]  rounded-lg p-6 shadow-sm max-w-2x1 text-black">
        <h2 className="text-2xl font-bold text-center mb-2">Feedback Section</h2>
        <h4 className="text-xl text-center mb-6 font-bold">Event Name - Page {currentPage}/3</h4>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
          <div 
            className="bg-[#4285f4] h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${(currentPage * 33.33)}%` }}
          ></div>
        </div>
        
        <div className="bg-white p-6 rounded-lg">
          <h4 className="text-lg mb-4 font-bold text-left">
            {currentPage === 2 ? 'Content & Speakers' : 'General Event Feedback'}
          </h4>
          
          {currentQuestions.map((q, index) => (
            <div key={index} className="mb-6 text-left">
              <p className="mb-2 text-left">{q.question}</p>
              <div className="flex gap-2">
                {q.type === 'text' ? (
                  <div className="w-full">
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      maxLength={500}
                      rows={2}  // Changed from rows={4} to rows={2} to halve the height
                      style={{ resize: 'none' }}  // Added to prevent manual resizing
                      placeholder="Please provide your feedback (max 500 characters)"
                      value={allRatings.page3[q.category]}
                      onChange={(e) => handleTextFeedback(q.category, e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {500 - (allRatings.page3[q.category]?.length || 0)} characters remaining
                    </p>
                  </div>
                ) : q.type === 'radio' ? (
                  <div className="flex flex-row gap-6"> {/* Changed from flex-col to flex-row and increased gap */}
                    {q.options.map((option, i) => (
                      <label key={i} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={q.category}
                          value={option.value}
                          checked={allRatings.page3.recommendation === option.value}
                          onChange={(e) => handleRadioChange(e.target.value)}
                          className="w-4 h-4 cursor-pointer appearance-none border-2 border-gray-300 rounded-full checked:border-[#4285f4] checked:bg-[#4285f4] relative
                            before:content-[''] before:block before:w-1.5 before:h-1.5 before:rounded-full before:absolute before:top-1/2 before:left-1/2 
                            before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:opacity-0 checked:before:opacity-100"
                        />
                        <span className="text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  renderStars(q.category)
                )}
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
              onClick={handleNext}
              className="bg-[#4285f4] hover:bg-[#3367d6] text-white px-6 py-2 rounded-md flex items-center transition-colors ml-auto"
            >
              {currentPage === 3 ? 'Submit »' : 'Next »'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;