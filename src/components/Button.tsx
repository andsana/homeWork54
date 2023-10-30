import React from 'react';

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = ({onClick}) => {
  const buttonStyle: React.CSSProperties = {
    marginTop: '15px',
  };

  return <button style={buttonStyle} onClick={onClick}>Reset</button>;
};
export default Button;
