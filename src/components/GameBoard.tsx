import React from 'react';
import Cell from './Cell.tsx';

interface Props {
  items: {hasItem: boolean; clicked: boolean}[];
  onClick: (index: number) => void;
}

const GameBoard: React.FC<Props> = ({items, onClick}) => {

  const gameBoardStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '360px',
    boxSizing: 'border-box',
    margin: '0 auto 15px auto',

  };

  return (
    <div style={gameBoardStyle}>
      {items.map((item, index) => (
        <Cell
          key={index}
          hasItem={item.hasItem}
          clicked={item.clicked}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
