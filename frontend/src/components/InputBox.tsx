import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Import this if using FontAwesome icons

interface InputBoxProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: IconDefinition; // New prop for the icon
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder = 'Enter text...',
  type = 'text',
  value,
  onChange,
  icon
}) => {
  return (
    <div className='p-2 flex justify-center'>
      <div className='relative w-full'>
        {icon && (
          <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <FontAwesomeIcon icon={icon} className="text-slate-700" /> {/* Icon styling */}
          </span>
        )}
        <input
          className={`bg-slate-100 border border-gray-300 rounded-md p-2 w-full pl-10 placeholder-slate-600`} 
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default InputBox;
