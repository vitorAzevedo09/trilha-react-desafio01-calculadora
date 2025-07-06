'use client';
import React from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Input = ({ value, onChange, placeholder = "" }: InputProps) => {
  return (
    <input
      type="text"
      readOnly
      className="w-full h-[75px] bg-[#AAFFAA] border border-gray-300 text-black rounded-md px-4 text-right text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
