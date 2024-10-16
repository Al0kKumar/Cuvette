import React from 'react';

interface ButtonProps {
  name: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ name, onClick, type = 'button' }) => {
  return (
    <div className='p-2 flex justify-center'>
      <button
        className='bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition duration-200' // Changed width to full to match input boxes
        onClick={onClick}
        type={type}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
