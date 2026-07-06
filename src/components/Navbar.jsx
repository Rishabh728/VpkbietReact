import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Style from "../css/Navbar.module.css"

const Navbar = ({userName}) => {

  
  return (
    
    <>
      <nav>

        <div>
          <NavLink to="/" className={Style.navlink}>Home</NavLink>
        </div>

        <div>
          <NavLink to="/products" className={Style.navlink}>Products</NavLink>
        </div>

        <div>
          <NavLink to="/offers" className={Style.navlink}>Offers</NavLink>
        </div>

        <div>
          <NavLink to="/support" className={Style.navlink}>Support</NavLink>
        </div>

        <div>
          <NavLink to="/login" className={userName?Style.loginUser:Style.navlink}>{userName?userName:"Login" }</NavLink>
        </div>


      </nav>
    </>
  )
}

export default Navbar