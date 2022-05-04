import React from 'react';

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
    <div>
      <div></div>
    </div>
  );
};

export default Levelcards;
