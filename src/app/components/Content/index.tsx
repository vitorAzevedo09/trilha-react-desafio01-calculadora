"use client";

import { useState } from 'react';
import ButtonGrid from '../ButtonGrid';
import Input from '../Input';
import { calculate } from '../../utils/calculate';

const Content = () => {
  const [currentNumber, setCurrentNumber] = useState('');

  const handleInputValue = (number: string) => {
    setCurrentNumber((prev) => prev.concat(number));
  };

  const handleOnClear = () => {
    setCurrentNumber('');
  };


  const handleEquals = () => {
    setCurrentNumber((expression: string): string => calculate(expression));
  };

  return (
    <div className="w-full h-screen bg-[#CACACA] flex items-center justify-center">
      <div className="bg-white w-[400px] p-4 rounded-lg shadow-lg flex flex-col gap-4">
        <Input
          value={currentNumber}
          onChange={setCurrentNumber}
          placeholder="0"
        />
        <ButtonGrid
          onInput={handleInputValue}
          onClear={handleOnClear}
          onEquals={handleEquals}
        />
      </div>
    </div>
  );
}

export default Content;
