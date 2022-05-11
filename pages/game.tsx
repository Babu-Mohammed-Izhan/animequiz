import React, { EventHandler, useEffect, useState } from 'react';
import axios from 'axios';
import { Question } from '../types';

const Game = () => {
  const [options, setOptions] = useState<String[]>([]);
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(false);
  const [ques, setques] = useState([]);
  const [questionnum, setQuestionnum] = useState(1);
  const [redirectboard, setredirectboard] = useState(false);
  const [alert, setAlert] = useState('');

  const randomizeans = (question: Question, num) => {
    const answers = [question.op1, question.op2, question.op3, question.op4];
    answers.sort(() => 0.5 - Math.random());
    setOptions(answers);
  };

  const handleAnswerOptionClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosenAns = e.target.value;
    const correct = ques[number].correct_answer;

    //Incrementing the question number and going to the next question
    if (number <= 8) {
      //Setting the score
      if (chosenAns === correct) {
        setScore(score + 1);
        setAlert('success');
      }

      if (chosenAns !== correct) {
        setAlert('danger');
      }

      setTimeout(() => {
        setNumber(number + 1);
        setQuestionnum(questionnum + 1);
        randomizeans(ques, number + 1);
      }, 3000);
    } else {
      // handleScore(score);
      setredirectboard(true);
    }
  };

  return (
    <div>
      <h4>question {questionnum} of 10</h4>
      <div>
        <button onClick={() => handleAnswerOptionClick(options[0])}>
          {options[0]}
        </button>
        <button onClick={() => handleAnswerOptionClick(options[1])}>
          {options[1]}
        </button>
        <button onClick={() => handleAnswerOptionClick(options[2])}>
          {options[2]}
        </button>
        <button onClick={() => handleAnswerOptionClick(options[3])}>
          {options[3]}
        </button>
      </div>
    </div>
  );
};

export default Game;
