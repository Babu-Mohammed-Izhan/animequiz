import type { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';

const Rules: NextPage = () => {
  const router = useRouter();

  return (
    <div className="flex items-start justify-start flex-col min-h-screen py-20 md:w-10/12 w-11/12 mx-auto">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-tr from-indigo-700 to-violet-500">
          Rules
        </h1>
        <div className="rounded-full bg-gradient-to-tr from-indigo-700 to-violet-500 p-[2px]">
          <button
            onClick={() => router.push('/')}
            className="rounded-full px-2 py-[2px] bg-white"
          >
            <i className="fa-solid fa-xmark h-3 w-3"></i>
          </button>
        </div>
      </div>

      <ul className="py-10 ">
        <li className="py-4 font-Quicksand font-bold md:text-4xl text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-indigo-700 to-violet-500">
          <span className="md:text-5xl text-3xl">T</span>here are 10 questions
          in every quiz.
        </li>
        <li className="py-4 font-Quicksand font-bold md:text-4xl text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-indigo-700 to-violet-500">
          <span className="md:text-5xl text-3xl">A</span>nswer the questions one
          by one.
        </li>
        <li className="py-4 font-Quicksand font-bold md:text-4xl text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-indigo-700 to-violet-500">
          <span className="md:text-5xl text-3xl">T</span>he points will be shown
          at the end of the quiz.
        </li>
        <li className="py-4 font-Quicksand font-bold md:text-4xl text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-indigo-700 to-violet-500">
          <span className="md:text-5xl text-3xl">A</span>nd Lastly,Have Fun!
        </li>
      </ul>
    </div>
  );
};

export default Rules;
