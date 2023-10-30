import React from 'react';

interface Props {
  attempts: number;
}

const AttemptCounter: React.FC<Props> = ({attempts}) => {
  return <div>Tries: {attempts}</div>;
};
export default AttemptCounter;
