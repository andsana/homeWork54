import React from 'react';

interface Props {
  hasItem: boolean;
  onClick: () => void;
}

const Cell: React.FC<Props> = ({hasItem, onClick}) => {

  const cellStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };

  return (
    <div style={cellStyle} onClick={onClick}>
      {hasItem ? <span>0</span> : null}
    </div>
  );
};

export default Cell;