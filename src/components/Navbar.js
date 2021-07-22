import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

// export var mnustat = 'FALSE'

const Navbar = () => {
    const [menuState, setmenuState] = useState(false)

    // const chngmnustat = () => {
    //     setmenuState(!menuState)
    //     if (menuState) {
    //         mnustat = 'TRUE'
    //     }
    //     else {
    //         mnustat = 'FALSE'
    //     }
    // }

    // useEffect(() => {
    //     chngmnustat()
    // }, [])

    return (
        <>
        <div className="navcntnr">
            <div className="navbr">
                <div className="navhd">
                    <div><span>ms</span> app</div>
                </div>
                <div className="nvmnugrp">
                    <div className="navmnu">
                        <NavLink className="nvlnk" to='/'><Button>Home</Button></NavLink>
                        <NavLink className="nvlnk" to='#'><Button>Services</Button></NavLink>
                        <NavLink className="nvlnk" to='/about'><Button>AboutUS</Button></NavLink>
                        <NavLink className="nvlnk" to='/contact'><Button>ContactUS</Button></NavLink>
                    </div>
                    <div className="hmbrgmnu" onClick={() => setmenuState(!menuState)}><MenuIcon /></div>
                </div>
                <div className='navsocm'>
                    <a href="https://www.facebook.com/mshsunny/" rel="noreferrer" target="_blank"><FacebookIcon className='nvsclnk' /></a>
                    <a href="https://twitter.com/mshsun20" rel="noreferrer" target="_blank"><TwitterIcon className='nvsclnk' /></a>
                    <a href="https://www.instagram.com/legendsunny65/" rel="noreferrer" target="_blank"><InstagramIcon className='nvsclnk' /></a>
                    <a href="https://www.linkedin.com/in/mriganka-halder-5347679a/" rel="noreferrer" target="_blank"><LinkedInIcon className='nvsclnk' /></a>
                </div>
            </div>
            <div className={ menuState ? "mobile-navgrp" : "nonavmnu" }>
                <div className="mb-navmnu">
                    <NavLink className="nvlnk" to='/'><Button className="nvbtn">Home</Button></NavLink>
                    <NavLink className="nvlnk" to='#'><Button className="nvbtn">Services</Button></NavLink>
                    <NavLink className="nvlnk" to='/about'><Button className="nvbtn">AboutUS</Button></NavLink>
                    <NavLink className="nvlnk" to='/contact'><Button className="nvbtn">ContactUS</Button></NavLink>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
