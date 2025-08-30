import React, { useState,useEffect } from 'react'
import assets from '../../assets/assets'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isEnquiry, setIsEnquiry] = useState(true);
  const {pathname} = useLocation();
    const [showNav, setShowNav] = useState(false)
      useEffect(() => {
    if (showNav) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset'; // or 'scroll'
    }
  }, [showNav]);
  return (
    <>
    <div className={`${showNav ? 'fixed inset-0 z-50 w-full': 'static' } h-[25vh] flex bg-transparent   justify-between p-[20px] md:py-[40px] md:px-[55px] `}>
        <div id="logo" className='w-[150px] h-[100px] z-50 flex  items-center justify-between'>
      <Link to="/">
            <img src={assets.logo} alt="logo" />
      </Link>
        </div>
        <div className='z-50 my-auto'>
            
            <button onClick={()=>setShowNav(!showNav)}>
              {
                showNav ? 
                <img src={assets.menuCross} alt="menu" className='w-7 cursor-pointer' />
                :
                <img src={assets.menu} alt="menu" className='w-9 cursor-pointer' />
              }
            </button>
              
        </div>
    </div>
            {showNav ? 
            <Navbar 
            showNav={showNav}
            setShowNav={setShowNav}/>:null}

               {/* Make an enquiry button*************/}
        {
          !showNav && pathname==='/' && (
        <button
          onClick={() => setIsEnquiry(!isEnquiry)}
          className={` overflow-hidden p-[5px] whitespace-nowrap  transition-all duration-500 ${isEnquiry ? 'w-37 p-1' : 'w-11'} flex justify-end fixed bottom-5 right-5 
            z-40   bg-gradient-to-r from-[#00aaff] to-40% bg-[#0211d9] rounded-full`}
        >
          {isEnquiry &&
          <span className=" text-[11px] p-2 text-white font-semibold">Make An Enquiry</span>
          }
          <span className="bg-[#ffffff] p-2 rounded-full ">
            <img src={isEnquiry ? assets.chat:assets.cross} alt="chat" className="h-5 w-5 " />
          </span>
        </button>
          )
        }
    

    </>
    
  )
}

export default Header