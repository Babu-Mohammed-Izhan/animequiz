import React from 'react';
import { useRouter } from 'next/router';

const Levels = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <div>{name}</div>
    </div>
  );
};

export default Levels;
