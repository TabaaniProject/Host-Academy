import React, { useState } from "react";

const QCM = ({ quiz, onSubmitAnswer }) => {
  const { question, option1, option2, option3, option4 } = quiz;

  // State to keep track of the selected options
  const [selectedOptions, setSelectedOptions] = useState({});

  // Function to handle the toggle of options
  const handleToggle = (option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option], // Toggle the option state
    }));
  };

  // Function to handle the submission of selected options
  const handleSubmit = () => {
    const selectedOptionsArray = Object.entries(selectedOptions)
      .filter(([_, value]) => value === true) // Filter only selected options
      .map(([key, _]) => key); // Get the option keys

    // Call the onSubmitAnswer function to submit the selected options and the quiz ID
    onSubmitAnswer(selectedOptionsArray, quiz.id);
  };

  // const handleNextPage = () => {
   
  // };

  return (
    <div>
      <div className="question-QCM">{question}</div>
      <div className="answer">
        {/* Render options in lines with toggle buttons */}
        <div className="options-container">
          {/* Render the options with toggle buttons */}
          {/* For each option, handleToggle will be called on click to update the selectedOptions state */}
          <div
            className={`option-line ${selectedOptions["option1"] ? "selected" : ""}`}
            onClick={() => handleToggle("option1")}
          >
            <span>{option1}</span>
            <label className="relative inline-block w-14 h-7 ml-3 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={selectedOptions["option1"]}
                onChange={() => handleToggle("option1")}
              />
              <div className={`w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-customBlue `}></div>
            </label>
          </div>
          <div
            className={`option-line ${selectedOptions["option2"] ? "selected" : ""}`}
            onClick={() => handleToggle("option2")}
          >
            <span>{option2}</span>
            <label className="relative inline-block w-14 h-7 ml-3 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={selectedOptions["option2"]}
                onChange={() => handleToggle("option2")}
              />
              <div className={`w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-customBlue `}></div>
            </label>
          </div>
          <div
            className={`option-line ${selectedOptions["option3"] ? "selected" : ""}`}
            onClick={() => handleToggle("option3")}
          >
            <span>{option3}</span>
            <label className="relative inline-block w-14 h-7 ml-3 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={selectedOptions["option3"]}
                onChange={() => handleToggle("option3")}
              />
              <div className={`w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-customBlue `}></div>
            </label>
          </div>
          <div
            className={`option-line ${selectedOptions["option4"] ? "selected" : ""}`}
            onClick={() => handleToggle("option4")}
          >
            <span>{option4}</span>
            <label className="relative inline-block w-14 h-7 ml-3 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={selectedOptions["option4"]}
                onChange={() => handleToggle("option4")}
              />
              <div className={`w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-customBlue `}></div>
            </label>
          </div>
        </div>
      </div>

      {/* "Submit" button to submit selected options */}
      <div className="flex justify-center mt-4 mb-4">
  <button
    onClick={handleSubmit}
    className="bg-blackTheme hover:bg-gray-700 text-white text-sm py-3 px-8 rounded-xl pt-4 pb-4"
  >
    Submit
  </button>
</div>

    </div>
  );
};

export default QCM;
