
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 text-white font-semibold w-[80px] h-[60px] rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button;
