import React, { EventHandler, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Question } from '../types';
import RadialProgressbar from '../components/radialProgressbar';
import OptionsButton from '../components/OptionsButton';
import questiondata from '../example-data';

const Game = () => {
  const router = useRouter();

  const [options, setOptions] = useState<string[]>([]);
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
      setQues(questiondata);
      randomizeans(questiondata[0]);
      setVisible(true);
    };
    getData();
  }, []);

  const randomizeans = (question: Question) => {
    const answers = [question.op1, question.op2, question.op3, question.op4];
    answers.sort(() => 0.5 - Math.random());
    setOptions(answers);
  };

  const handleAnswerOptionClick = (option: string) => {
    const chosenAns = option;
    const correct = ques[number].ans;

    //Incrementing the question number and going to the next question
    if (questionnum < 10) {
      //Setting the score
      if (chosenAns === correct) {
        setScore(score + 1);
        setAlert('success');
      }

      if (chosenAns !== correct) {
        setHealth((prev) => prev - 1);
      }

      setTimeout(() => {
        setNumber(number + 1);
        setQuestionnum(questionnum + 1);
        randomizeans(ques[number + 1]);
      }, 3000);
    } else {
      router.push('/end');
      // handleScore(score);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-blue-600 to-blue-400 h-screen text-white">
      <div className="w-10/12 mx-auto flex flex-col justify-between h-full py-10">
        <nav className="flex justify-between items-center">
          <button
            onClick={() => router.push('/levels')}
            className="rounded-full px-2 py-[6px] bg-transparent border-2"
          >
            <i className="fa-solid fa-xmark h-5 w-5"></i>
          </button>
          <RadialProgressbar
            sqSize={50}
            percentage={questionnum}
            strokeWidth={5}
          />
          <p className="rounded-full px-2 py-[6px] bg-transparent border-2">
            <i className="fa-solid fa-heart h-5 w-5"></i>
            {health}
          </p>
        </nav>
        <div>
          <h4 className="text-xl">question {questionnum} of 10</h4>
          <h1 className="text-5xl">{ques[number]?.q}</h1>
        </div>
        <div className="pb-5">
          {options.map((o: string) => {
            return (
              <OptionsButton
                handleAnswerOptionClick={handleAnswerOptionClick}
                option={o}
                answer={ques[number]?.ans}
                key={o}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Game;
