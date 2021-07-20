import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>AboutUS</NavLink>
            <NavLink to='/contact'>ContactUS</NavLink>
        </div>
        </>
    )
}

export default Navbar
