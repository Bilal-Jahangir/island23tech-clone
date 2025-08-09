import React, { useState } from 'react';

const Menu = ({showNav,setShowNav}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = ()=>{
    setIsOpen(!isOpen)
    setShowNav(!showNav)
  }

  return (
    <button
      onClick={handleClick}
      className="relative flex flex-col justify-between w-8 h-6 transition-all duration-300 transform cursor-pointer"
    >
      <span
        className={`bg-white h-1 rounded-full transition-all duration-300 transform ${
          isOpen ? 'rotate-45 translate-y-2.5' : ''
        }`}
      ></span>
      <span
        className={`bg-white h-1 rounded-full transition-all duration-300 transform ${
          isOpen ? 'opacity-0' : ''
        }`}
      ></span>
      <span
        className={`bg-white h-1 rounded-full transition-all duration-300 transform ${
          isOpen ? '-rotate-45 -translate-y-2.5' : ''
        }`}
      ></span>
    </button>
  );
};

export default Menu;