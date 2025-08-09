import React, { useState } from 'react'
import assets from '../../assets/assets'
import Menu from './Menu'
import Navbar from './Navbar'

const Header = () => {
    const [showNav, setShowNav] = useState(false)
  return (
    <>
    <div className={`${showNav ? 'fixed inset-0 z-50 w-full': 'static' } flex justify-between p-[50px] bg-[#000222]`}>
        <div id="logo" className='w-[200px]'>
            <img src={assets.logo} alt="logo" />
        </div>
        <div id='menu'>
            <Menu 
            showNav={showNav}
            setShowNav={setShowNav}/>
        </div>
    </div>
            {showNav ? <Navbar/>:null}
    </>
    
  )
}

export default Header