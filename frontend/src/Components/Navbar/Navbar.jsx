import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {motion as m} from 'framer-motion'

const Navbar = () => {

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  

  const [menu, setMenu]= useState(false)

  const showMenu = () => {
      setMenu(!menu)
  }

  return (
  <>
   <nav className='hidden md:flex md:justify-between md:items-center md:mx-auto md:px-2 md:py-2 md:w-full bg-slate-300 px-4'>
    <div>
      {/* brand */}
      <span className='text-black text-2xl'>
        Mickey Arther
      </span>
    </div>
    <div className=''>
      {/* items */}
      <ul className='flex md:flex-row flex-col items-center gap-[4vw]'>
        <li className='text-xl hover:text-black hover:underline hover:scale-110 transition-transform duration-200 hover:underline-offset-8'><Link>Login</Link></li>
        <li className='text-xl hover:text-black hover:underline hover:scale-110 transition-transform duration-200 hover:underline-offset-8'><Link>Logout</Link></li>
      </ul>
    </div>
   </nav>

  <div className="absolute w-full left-0 pl-5 visible md:hidden z-50 justify-self-center">
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
              <Link className='hover:bg-primaryColor hover:text-black rounded-[20px] px-2'> Login </Link>
              <Link className='hover:bg-primaryColor hover:text-black rounded-[20px] px-2'> Logout </Link>
            </ul>
          </div>
        </m.nav>
        )}
  </div> 
 </>
  )
}

export default Navbar