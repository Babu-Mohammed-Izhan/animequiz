import React from 'react';
import Link from 'next/link';

interface levelTypes {
  name: string;
  colors: {
    from: string;
    to: string;
  };
  route: string;
  level: string;
}

const Levelcards = ({ name, colors, route, level }: levelTypes) => {
  return (
    <Link href={`${route}`} passHref>
      <div
        className={`bg-gradient-to-tr ${colors.from} ${colors.to} rounded-3xl pl-5 pr-44 pt-12 pb-5 w-full mt-16`}
      >
        <h4 className="text-gray-50 font-Quicksand text-lg">level {level}</h4>
        <h1 className="text-white font-Quicksand text-4xl">{name}</h1>
      </div>
    </Link>
  );
};

export default Levelcards;
