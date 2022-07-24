import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface levelTypes {
  name: string;
  colors: {
    from: string;
    to: string;
  };
  route: string;
  level: string;
  imagelink: string | undefined;
}

const Levelcards = ({ name, colors, route, level, imagelink }: levelTypes) => {
  return (
    <Link href={`${route}`} passHref>
      <div
        className={`bg-gradient-to-tr ${colors.from} ${colors.to} rounded-[30px] pl-5 py-6 w-full sm:mt-16 mt-10 active:animate-press shadow-xl cursor-pointer`}
      >
        <button className="border-2 border-white text-white md:rounded-3xl rounded-2xl px-4 pt-3 pb-2 sm:mb-4 mb-2">
          <i className="fa-solid fa-play sm:text-3xl text-xl"></i>
        </button>
        <h4 className="text-gray-50 font-Quicksand sm:text-2xl text-xl">
          level {level}
        </h4>
        <h1 className="text-white font-Quicksand sm:text-5xl text-4xl">
          {name}
        </h1>
        {imagelink && <Image src={imagelink} alt="" width={500} height={500} />}
      </div>
    </Link>
  );
};

export default Levelcards;
