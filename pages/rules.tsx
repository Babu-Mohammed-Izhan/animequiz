import type { NextPage } from 'next';
import React from 'react';

const Rules: NextPage = () => {
  return (
    <div className="flex items-start justify-start flex-col min-h-screen p-20">
      <h1 className="text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-tr from-indigo-700 to-violet-500">
        Rules
      </h1>
      <ul>
        <li>There are 10 questions in every quiz.</li>
        <li>Answer the questions one by one.</li>
        <li>The points will be shown at the end of the quiz.</li>
        <li>And Lastly,Have Fun!</li>
      </ul>
    </div>
  );
};

export default Rules;
