import React, { useState } from 'react'
import assets from '../../assets/assets'
import Menu from './Menu'
import Navbar from './Navbar'

const Header = () => {
    const [showNav, setShowNav] = useState(false)
  return (
    <>
    <div className={`${showNav ? 'fixed inset-0 z-50 w-full': 'static' } flex justify-between p-[20px] md:p-[40px] bg-[#000222]`}>
        <div id="logo" className='md:w-[180px] w-[150px]'>
            <img src={assets.logo} alt="logo" />
        </div>
        <div id='menu'>
            <Menu 
            showNav={showNav}
            setShowNav={setShowNav}/>
        </div>
    </div>
            {showNav ? 
            <Navbar 
            showNav={showNav}
            setShowNav={setShowNav}/>:null}
    </>
    
  )
}

export default Header