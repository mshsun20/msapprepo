import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Navbar = () => {
    const [menuState, setmenuState] = useState(false)

    return (
        <>
        <div className="navcntnr">
            <div className="navbr">
                <div className="navhd">
                    <div><span>ms</span> app</div>
                </div>
                <div className="nvmnugrp">
                    <div className="navmnu">
                        <NavLink className="nvlnk" to='/'><Button className="nvbtn">Home</Button></NavLink>
                        <NavLink className="nvlnk" to='/todo'><Button className="nvbtn">Todo Services</Button></NavLink>
                        <NavLink className="nvlnk" to='/about'><Button className="nvbtn">AboutUS</Button></NavLink>
                        <NavLink className="nvlnk" to='/contact'><Button className="nvbtn">ContactUS</Button></NavLink>
                    </div>
                    <div className="hmbrgmnu"><MenuIcon className="hmbrgicn" onClick={() => setmenuState(!menuState)} /></div>
                </div>
                <div className='navsocm'>
                    <a href="https://www.facebook.com/mshsunny/" rel="noreferrer" target="_blank"><FacebookIcon className='nvsclnk' style={{color: '#1778F2' }} /></a>
                    <a href="https://twitter.com/mshsun20" rel="noreferrer" target="_blank"><TwitterIcon className='nvsclnk' style={{color: '#1DA1F2' }} /></a>
                    <a href="https://www.instagram.com/legendsunny65/" rel="noreferrer" target="_blank"><InstagramIcon className='nvsclnk' style={{color: '#F44747' }} /></a>
                    <a href="https://www.linkedin.com/in/mriganka-halder-5347679a/" rel="noreferrer" target="_blank"><LinkedInIcon className='nvsclnk' style={{color: '#0077B5' }} /></a>
                </div>
            </div>
            <div className={ menuState ? "mobile-navgrp" : "nonavmnu" }>
                <div className="mb-navmnu">
                    <NavLink className="nvlnk" to='/' onClick={() => setmenuState(!menuState)}><Button className="nvbtn">Home</Button></NavLink>
                    <NavLink className="nvlnk" to='/todo' onClick={() => setmenuState(!menuState)}><Button className="nvbtn">Todo Services</Button></NavLink>
                    <NavLink className="nvlnk" to='/about' onClick={() => setmenuState(!menuState)}><Button className="nvbtn">AboutUS</Button></NavLink>
                    <NavLink className="nvlnk" to='/contact' onClick={() => setmenuState(!menuState)}><Button className="nvbtn">ContactUS</Button></NavLink>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
