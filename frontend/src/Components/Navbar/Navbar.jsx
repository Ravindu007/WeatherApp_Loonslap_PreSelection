import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {motion as m} from 'framer-motion'
import { UseLogout } from '../../hooks/UseLogout'
import { useAuthContext } from '../../hooks/UseAuthContext'
import useTextAnimation from '../../hooks/UseTextAnnimation'

const Navbar = () => {

  // text annimation - for search here
  const brandText = useTextAnimation(['Mickey Arther'], 300, 300);

  const {logout} = UseLogout()
  const {user} = useAuthContext()


  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  

  const [menu, setMenu]= useState(false)

  const showMenu = () => {
      setMenu(!menu)
  }

  const handleClick = () => {
    logout()
  }

  return (
  <>
   <nav className='hidden md:flex md:justify-between md:items-center md:mx-auto md:px-2 md:py-2 md:w-full bg-slate-300 px-4'>
    <div>
      {/* brand */}
      <span className='text-black text-2xl'>
        {user && (
          user.email == 'mickeyarthur@gmail.com' ? <p className=' h-7'>{brandText}</p> : <p className='h-7'></p>
        )}
      </span>
    </div>
    <div className=''>
      {/* items */}
      <ul className='flex md:flex-row flex-col items-center gap-[4vw]'>
        {!user && (
            <li className='text-xl hover:text-black hover:underline hover:scale-110 transition-transform duration-200 hover:underline-offset-8'><Link to="/login">Login</Link></li>
        )}
        {user && (
          <li className='text-xl hover:text-black hover:underline hover:scale-110 transition-transform duration-200 hover:underline-offset-8'><Link onClick={handleClick}>Logout</Link></li>
        )}
      </ul>
    </div>
   </nav>

  <div className="absolute w-full left-0 pl-2 visible md:hidden z-50 justify-self-start">
   {/* burger icon */}
    {!menu && (<img src="./assets/icons/menu1.svg" width={50} height={50} alt="" className='text-blue-600' onClick={showMenu}/>)}
    {menu && (<img src="./assets/icons/close.svg" width={50} height={50} alt="" onClick={showMenu}/>)}
      {menu && ( 
        <m.nav
          animate={menu ? "open" : "closed"}
          variants={variants}
        >
          <div className="w-full h-screen flex  justify-center items-center bg-white text-black rounded-[20px] p-2 z-50">
            <ul className='flex flex-col gap-3'>
              {!user && (
                <Link to="/login" className='hover:bg-primaryColor hover:text-black rounded-[20px] px-2'> Login </Link>
              )}
              {user && (
                <Link className='hover:bg-primaryColor hover:text-black rounded-[20px] px-2'> Logout </Link>
              )}
            </ul>
          </div>
        </m.nav>
        )}
  </div> 
 </>
  )
}

export default Navbar