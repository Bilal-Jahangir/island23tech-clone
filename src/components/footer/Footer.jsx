import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill } from '@remixicon/react';
import assets from '../../assets/assets'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 md:px-20">
      <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-2   items-center">
        {/* Logo and Contact Info Section */}
        <div className="flex flex-col space-y-1 text-center md:text-left">
          {/*
            Replace this with your logo component or an <img> tag.
            Using a placeholder image for now.
          */}
          <img
            src={assets.logo}
            alt="Island 23 Technologies Logo"
            className="h-[80px] w-[170px] m-auto md:m-4"
          />
          <p>island23tech@gmail.com</p>
          <p>Calgary, AB</p>
          <p>403-990-3876</p>
        </div>

        {/* Follow Us On Section */}
        <div className="text-center md:text-left md:ml-29 mt-3 md:mt-0">
          <h3 className="text-2xl font-semibold mb-4 text-[#333333]">Follow Us On</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* LinkedIn Icon */}
            <a href="#" className="text-white hover:text-[#00799B] transition-colors duration-300">
              <RiLinkedinFill/>
            </a>
            {/* Facebook Icon */}
            <a href="#" className="text-white hover:text-[#00799B] transition-colors duration-300">
                <RiFacebookFill/>
            </a>
            {/* Instagram Icon */}
            <a href="#" className="text-white hover:text-[#00799B] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            {/* Twitter Icon */}
            <a href="#" className="text-white hover:text-[#00799B] transition-colors duration-300">
                <RiTwitterFill/>
            </a>
          </div>
        </div>

        {/* Empty column for spacing/alignment on larger screens, adjust as needed */}
        <div></div>
      </div>

      {/* Copyright Section */}
      <div className="text-center md:text-left pt-10  text-sm text-[#a3a3a3]">
        <p>&copy; {new Date().getFullYear()} Clout Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer