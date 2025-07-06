import React from 'react';
import Button from '../Button';

interface RowProps {
  buttons: Array<{ label: string; onClick: () => void }>;
}

const Row = ({ buttons }: RowProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      {buttons.map((button, index) => (
        <Button label={button.label} onClick={button.onClick} key={index} />
      ))}
    </div>
  );
};

export default Row;

