import React, { EventHandler, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Question } from '../types';

const Game = () => {
  const router = useRouter();

  const [options, setOptions] = useState<String[]>([]);
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(false);
  const [ques, setQues] = useState<Question[]>([]);
  const [questionnum, setQuestionnum] = useState(1);
  const [redirectboard, setredirectboard] = useState(false);
  const [alert, setAlert] = useState('');
  const [health, setHealth] = useState(3);

  useEffect(() => {
    const getData = async () => {
      // const data = await axios.get('');
      // setQues(data.data.results);
      // randomizeans(data.data.results[0]);
      setQues([
        {
          q: 'question',
          op1: 'op1',
          op2: 'op2',
          op3: 'op3',
          op4: 'op4',
          ans: 'ans',
        },
        {
          q: 'question',
          op1: 'op1',
          op2: 'op2',
          op3: 'op3',
          op4: 'op4',
          ans: 'ans',
        },
        {
          q: 'question',
          op1: 'op1',
          op2: 'op2',
          op3: 'op3',
          op4: 'op4',
          ans: 'ans',
        },
      ]);
      setVisible(true);
    };
    getData();
  }, []);

  const randomizeans = (question: Question) => {
    const answers = [question.op1, question.op2, question.op3, question.op4];
    answers.sort(() => 0.5 - Math.random());
    setOptions(answers);
  };

  const handleAnswerOptionClick = (option: String) => {
    const chosenAns = option;
    const correct = ques[number].ans;

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
        randomizeans(ques[number + 1]);
      }, 3000);
    } else {
      // handleScore(score);
      setredirectboard(true);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-blue-500 to-teal-400 h-screen">
      <nav>
        <button
          onClick={() => router.push('/')}
          className="rounded-full px-2 py-[2px] bg-white"
        >
          <i className="fa-solid fa-xmark h-3 w-3"></i>
        </button>
        <p>{questionnum}</p>
        <div>{health}</div>
      </nav>
      <h4>question {questionnum} of 10</h4>
      <h1>{ques[number]?.q}</h1>
      <div className="">
        <button
          className="bg-white rounded-3xl w-full mx-auto py-5 shadow-xl"
          onClick={() => handleAnswerOptionClick(options[0])}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-teal-500 font-bold text-3xl">
            {options[0]}
          </span>
        </button>
        <button
          className="bg-white rounded-3xl w-full mx-auto py-5 shadow-xl"
          onClick={() => handleAnswerOptionClick(options[1])}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-teal-500 font-bold text-3xl">
            {options[1]}
          </span>
        </button>
        <button
          className="bg-white rounded-3xl w-full mx-auto py-5 shadow-xl"
          onClick={() => handleAnswerOptionClick(options[2])}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-teal-500 font-bold text-3xl">
            {options[2]}
          </span>
        </button>
        <button
          className="bg-white rounded-3xl w-full mx-auto py-5 shadow-xl"
          onClick={() => handleAnswerOptionClick(options[3])}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-teal-500 font-bold text-3xl">
            {options[3]}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Game;
