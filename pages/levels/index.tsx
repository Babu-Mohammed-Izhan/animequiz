/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Levelcards from '../../components/Levelcards';

const StartPage = () => {
  return (
    <div className="flex items-start justify-start flex-col min-h-screen w-11/12 mx-auto py-20">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-700 to-violet-500">
        Let's Play
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 w-11/12 mx-auto">
        <Levelcards
          name="Basic"
          colors={{ from: 'from-blue-500', to: 'to-blue-400' }}
          route="/levels/basic"
          level="1"
        />
        <Levelcards
          name="Basic"
          colors={{ from: 'from-blue-500', to: 'to-blue-400' }}
          route="/levels/basic"
          level="2"
        />
        <Levelcards
          name="Basic"
          colors={{ from: 'from-blue-500', to: 'to-blue-400' }}
          route="/levels/basic"
          level="3"
        />
        <Levelcards
          name="Basic"
          colors={{ from: 'from-blue-500', to: 'to-blue-400' }}
          route="/levels/basic"
          level="4"
        />
      </div>
    </div>
  );
};

export default StartPage;
