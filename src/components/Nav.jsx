import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <NavLink to ={"/"} className={({isActive})=>(isActive ? "active" : "")}>Home</NavLink>
        <NavLink to ={"/ProductsPage"}>Products</NavLink>
        <NavLink to ={"/AboutPage"}>About</NavLink>

    </nav>
  )
}

export default Nav