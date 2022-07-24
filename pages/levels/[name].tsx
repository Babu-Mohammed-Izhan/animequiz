import React from 'react';
import { useRouter } from 'next/router';

interface gameType {
  name: string;
  level: string;
}

const Levels = ({ name, level }: gameType) => {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-tr from-blue-600 to-teal-500 h-screen font-Quicksand">
      <div className="flex flex-col items-start justify-between h-full md:w-1/2 w-10/12 mx-auto pt-20 pb-48">
        <button
          onClick={() => router.back()}
          className="rounded-full px-2 py-[6px] bg-transparent border-2 text-white"
        >
          <i className="fa-solid fa-xmark h-5 w-5"></i>
        </button>
        <div className="w-full">
          <h3 className="text-white text-3xl">level {level}</h3>
          <h1 className="text-white text-6xl mb-40 capitalize">{name}</h1>
          <button className="bg-white rounded-3xl w-full mx-auto py-5 shadow-xl active:animate-press">
            <span
              className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-teal-500 font-bold text-3xl"
              onClick={() =>
                router.push({ pathname: '/game', query: { game: name } })
              }
            >
              Game
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  console.log(context.query);
  return {
    props: {
      name: context.query.name,
      level: context.query.level,
    }, // will be passed to the page component as props
  };
}

export default Levels;
