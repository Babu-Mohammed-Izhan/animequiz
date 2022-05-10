import React from 'react';

interface gameType {
  name: string;
}

const Levels = ({ name }: gameType) => {
  return (
    <div className="bg-gradient-to-tr from-blue-600 to-teal-500 h-screen flex items-center justify-center">
      <h3>level 2</h3>
      <h1>{name}</h1>
      <button>Game</button>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  console.log(context.query.name);
  return {
    props: {
      name: context.query.name,
    }, // will be passed to the page component as props
  };
}

export default Levels;
