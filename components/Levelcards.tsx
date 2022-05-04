import React from 'react';
import Link from 'next/link';

interface levelTypes {
  name: string;
  colors: {
    from: string;
    to: string;
  };
  route: string;
}

const Levelcards = ({ name, colors, route }: levelTypes) => {
  return (
    <Link href={`${route}`} passHref>
      <div className={`bg-gradient-to-tr from-${colors.from} to-${colors.to}`}>
        <h1>{name}</h1>
      </div>
    </Link>
  );
};

export default Levelcards;
