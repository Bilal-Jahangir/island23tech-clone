// HoverButton.jsx
import React, { useState } from 'react';

const Button = ({ icon, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="flex items-center justify-center gap-2 p-4 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        {icon}
      </div>
      <span
        className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
          isHovered ? 'max-w-xs' : 'max-w-0'
        }`}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;