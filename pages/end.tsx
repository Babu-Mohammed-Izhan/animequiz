import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const End = () => {
  const router = useRouter();
  const { score } = router.query;

  return (
    <div className="bg-gradient-to-tr from-blue-600 to-blue-400 h-screen text-white">
      <div className="w-10/12 mx-auto flex flex-col justify-between h-full py-10">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-2xl md:text-4xl">Thanks for playing!</h1>
          <h1 className="text-2xl md:text-4xl">Your final score is:</h1>
          <h1 className="text-2xl md:text-4xl py-20">{score}/10</h1>
          <button className="text-xl font-medium py-3 font-Quicksand w-52 bg-white rounded-3xl my-3 shadow-lg active:animate-press">
            <Link href="/levels" passHref>
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-blue-500">
                Go to Levels
              </span>
            </Link>
          </button>
          <button className="text-xl font-medium py-3 font-Quicksand w-52 bg-white rounded-3xl my-3 shadow-lg active:animate-press">
            <Link href="/" passHref>
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-blue-500">
                Go to Start
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
