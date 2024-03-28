import React, { useState } from "react"
import "./Navbar.css"
import {Link} from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

function Navbar () {
   const [click,setClick]=useState(false);

   const handleClick=() =>setClick(!click);
   const closeMobileMenu =() => setClick(false);
   return(
    <>
     <nav className="navbar">
        
       <div className="navbar-container">
       
      <img className='navbar-logo'src="./images/zoop.png" alt=""/> 
       <div className='menu-icon' onClick={handleClick}>
          {click ? <ImCross /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active':'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
             <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                </Link>
            </li>
             <li className='nav-item'>
                <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                    Blog
                </Link>
            </li>
             <li className='nav-item'>
                <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
                    About us
                </Link>
            </li>
           
             
        </ul>
        
        </div>
      </nav>
    </>
  )
}
export default Navbar