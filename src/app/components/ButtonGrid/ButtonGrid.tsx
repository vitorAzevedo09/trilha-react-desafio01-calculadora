import Row from '../Row';


import React from 'react';

interface ButtonGridProps {
  onInput: (value: string) => void;
  onClear: () => void;
  onEquals: () => void;
}

const ButtonGrid = ({ onInput, onClear, onEquals }: ButtonGridProps) => {
  return (
    <>
      <Row
        buttons={[
          { label: '*', onClick: () => onInput('*') },
          { label: '/', onClick: () => onInput('/') },
          { label: 'C', onClick: onClear },
          { label: '.', onClick: () => onInput('.') },
        ]}
      />
      <Row
        buttons={[
          { label: '7', onClick: () => onInput('7') },
          { label: '8', onClick: () => onInput('8') },
          { label: '9', onClick: () => onInput('9') },
          { label: '-', onClick: () => onInput('-') },
        ]}
      />
      <Row
        buttons={[
          { label: '4', onClick: () => onInput('4') },
          { label: '5', onClick: () => onInput('5') },
          { label: '6', onClick: () => onInput('6') },
          { label: '+', onClick: () => onInput('+') },
        ]}
      />
      <Row
        buttons={[
          { label: '1', onClick: () => onInput('1') },
          { label: '2', onClick: () => onInput('2') },
          { label: '3', onClick: () => onInput('3') },
          { label: '=', onClick: onEquals },
        ]}
      />
    </>
  );
};

export default ButtonGrid;

