import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
      <>
        <div className='flex flex-column justify-center align-center mt-10 mb-5' >
            <span className='inline-block uppercase mx-auto'>
              <p className='text-6xl '>LanderDot</p>
              <p className='text-right font-medium tracking-widest'>Photography</p>
            </span>
          </div>
          <div className='hidden md:flex flex-column justify-center'>
            <nav className='flex justify-center py-4 w-4/5 border-t border-b border-gray-900'>
              <ul className='flex flex-row uppercase space-x-24  text-2xl'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav> 
          </div>
       </>
    )
}

export default Navbar;