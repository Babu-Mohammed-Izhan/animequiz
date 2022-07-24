/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Levelcards from '../../components/Levelcards';
import { useRouter } from 'next/router';
import data from '../../example-data';
import { Levels } from '../../types';

interface LevelsType {
  leveldata: Levels[];
}

const StartPage = ({ leveldata }: LevelsType) => {
  const router = useRouter();
  return (
    <div className="flex items-start justify-start flex-col min-h-screen w-11/12 mx-auto py-20">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-700 to-violet-500">
          Let's Play
        </h1>
        <button
          onClick={() => router.push('/')}
          className="rounded-full px-2 py-[6px] mt-3 md:py-[2px] md:text-2xl bg-transparent border-2 border-purple-500"
        >
          <i className="fa-solid fa-xmark h-5 w-5 text-purple-500"></i>
        </button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 w-full mx-auto mt-10">
        {leveldata &&
          leveldata.map((data: Levels) => {
            return (
              <Levelcards
                name={data.name}
                colors={data.colors}
                route={data.route}
                level={data.level}
                key={data.name}
                imagelink={data.imglink}
              />
            );
          })}
      </div>
    </div>
  );
};

export async function getServerSideProps(_context: any) {
  // const data = await axios.get('');
  return {
    props: {
      leveldata: data.levelData,
    }, // will be passed to the page component as props
  };
}

export default StartPage;
