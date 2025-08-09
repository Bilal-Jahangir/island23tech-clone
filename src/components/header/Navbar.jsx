import React, { useState } from 'react';
import { RiLinkedinFill } from '@remixicon/react';
import assets from '../../assets/assets';
assets
const Navbar = () => {
  const [isHover, setIsHover] = useState(false)
   const backgroundStyle = {
      backgroundImage: `url(${assets.navbar})`,
      backgroundSize: '50%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode:'screen',
      height: '100vh',
    };
  return (
    <div style={backgroundStyle} className=" fixed z-50 inset-y-45  flex flex-col md:flex-row bg-[#000222] items-start  overflow-hidden w-full h-screen mx-auto font-sans text-white">
      <div className="hidden md:flex flex-col  p-8 md:px-12 md:py-17 space-y-7 md:w-[600px] w-full items-start bg-opacity-20 text-white">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="text-xl">Calgary, Ab</p>
        <p className="text-xl">island23tech@gmail.com</p>
        <p className="text-xl">403-990-3875</p>
        <div className="pt-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-block p-2 rounded-full bg-blue-500 bg-opacity-75 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/50">
            <RiLinkedinFill  size={32} className="text-white" />
          </a>
        </div>
      </div>
      <div className='hidden md:block h-[400px] w-[2px] bg-blue-400'></div>
      <div className=" flex-1 flex w-full items-start md:items-center justify-between p-8 md:p-16">
        <nav className="w-full">
          <ul className="space-y-8">
            <li className="group">
              <a href="#" className=" flex items-start justify-between text-2xl md:text-3xl lg:text-4xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                <span>Home</span>
                <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-2">→</span>
              </a>
            </li>
            <li className="group"
            onMouseEnter={()=>setIsHover(!isHover)}>
              <a href="#" 
              className="flex items-center justify-between text-2xl md:text-3xl lg:text-4xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                <span
                >About Us</span>
                <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-2">→</span>
              </a>
            </li>
            <li className={`group ${isHover? 'block' : 'hidden'}`}>
              <a href="#" className="flex items-center justify-between text-lg md:text-xl  font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                <span>How we work</span>
              </a>
            </li>
            <li className="group">
              <a href="#" className="flex items-center justify-between text-2xl md:text-3xl lg:text-4xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                <span>Services</span>
                <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-2">→</span>
              </a>
            </li>
            <li className="group">
              <a href="#" className="flex items-center justify-between text-2xl md:text-3xl lg:text-4xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                <span>Contact Us</span>
                <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-2">→</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;