import React from 'react';

interface Props {
  hasItem: boolean;
  onClick: () => void;
  clicked: boolean;
}

const Cell: React.FC<Props> = ({hasItem, onClick, clicked}) => {

  const cellStyle: React.CSSProperties = {
    width: '60px',
    height: '60px',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxSizing: 'border-box',
    background: hasItem && clicked ? 'white' : 'lightcoral',
  };

  return (
    <div style={cellStyle} onClick={onClick}>
      {clicked && hasItem && 'O'}
    </div>
  );
};

export default Cell;