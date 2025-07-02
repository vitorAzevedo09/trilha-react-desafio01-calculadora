"use client";

import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';

const Content = () => {
  const [currentNumber, setCurrentNumber] = useState('');

  const handleAddNumber = (number: string) => {
    setCurrentNumber(prev => `${prev}${number}`);
  };

  const handleOnClear = () => {
    setCurrentNumber('');
  };

  const handleSumNumbers = () => {
    // Implementation needed
  };

  const handleMinusNumbers = () => {
    // Implementation needed
  };

  const handleEquals = () => {
    // Implementation needed
  };

  return (
    <div className="w-full h-screen bg-[#CACACA] flex items-center justify-center">
      <div className="bg-white w-[400px] p-4 rounded-lg shadow-lg flex flex-col gap-4">
        <Input
          value={currentNumber}
          onChange={setCurrentNumber}
          placeholder="0"
        />
        <div className="flex flex-row justify-between items-center">
          <Button label="x" />
          <Button label="/" />
          <Button label="c" onClick={handleOnClear} />
          <Button label="." />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </div>
      </div>
    </div>
  );
}

export default Content;
