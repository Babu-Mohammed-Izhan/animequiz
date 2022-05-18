import React from 'react';
import { useRouter } from 'next/router';

const End = () => {
  const router = useRouter();
  const { score } = router.query;

  return (
    <div className="bg-gradient-to-tr from-blue-600 to-blue-400 h-screen text-white">
      <div className="w-10/12 mx-auto flex flex-col justify-between h-full py-10">
        <nav className="flex flex-col justify-center items-center h-full">
          <h1 className="text-2xl md:text-4xl">Thanks for playing!</h1>
          <h1 className="text-2xl md:text-4xl">Your final score is:</h1>
          <h1 className="text-2xl md:text-4xl">{score}/10</h1>
        </nav>
      </div>
    </div>
  );
};

export default End;
