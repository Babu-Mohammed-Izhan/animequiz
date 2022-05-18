import React from 'react';

interface OptionsButtonType {
  option: string;
  answer: string;
  handleAnswerOptionClick: (s: string) => void;
}

const OptionsButton = ({
  option,
  answer,
  handleAnswerOptionClick,
}: OptionsButtonType) => {
  return (
    <button
      key={option}
      className="bg-white rounded-3xl w-full mx-auto py-5 shadow-xl my-2"
      onClick={() => handleAnswerOptionClick(option)}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-teal-500 font-bold text-2xl">
        {option}
      </span>
    </button>
  );
};

export default OptionsButton;
