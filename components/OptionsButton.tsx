import { useState, useEffect } from 'react';
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
  const [color, setColor] = useState('bg-white');

  const handleColor = (opt: string): void => {
    if (opt === answer) {
      setColor('bg-green-500');
    } else {
      setColor('bg-red-500');
    }
  };

  useEffect(() => {
    setColor('bg-white');
  }, [option, answer]);
  return (
    <button
      key={option}
      className={`${color} rounded-2xl w-full mx-auto py-3 shadow-xl my-2 active:animate-press`}
      onClick={() => {
        handleColor(option);
        handleAnswerOptionClick(option);
      }}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-teal-500 font-bold text-2xl">
        {option}
      </span>
    </button>
  );
};

export default OptionsButton;
