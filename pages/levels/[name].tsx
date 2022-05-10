import React from 'react';

interface gameType {
  name: string;
}

const Levels = ({ name }: gameType) => {
  return (
    <div>
      <div>{name}</div>
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
