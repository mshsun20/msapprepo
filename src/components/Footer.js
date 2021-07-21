import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <div>
            <footer className="container py-5">
            <div className="row">
                <div className="col-12 col-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
                <small className="d-block mb-3 text-muted">&copy; 2017–2021</small>
                </div>
                <div className="col-6 col-md">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                    <li><NavLink className="link-secondary" to="#">Cool stuff</NavLink></li>
                    <li><NavLink className="link-secondary" to="#">Random feature</NavLink></li>
                    <li><NavLink className="link-secondary" to="#">Team feature</NavLink></li>
                    <li><NavLink className="link-secondary" to="#">Stuff for developers</NavLink></li>
                    <li><NavLink className="link-secondary" to="#">Another one</NavLink></li>
                    <li><NavLink className="link-secondary" to="#">Last time</NavLink></li>
                </ul>
                </div>
                <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                    <li><NavLink className="link-secondary" to="#">Resource name</NavLink></li>
                    <li><NavLink className="link-secondary" to="#">Resource</NavLink></li>
                    <li><NavLink className="link-secondary" to="#">Another resource</NavLink></li>
                    <li><NavLink className="link-secondary" to="#">Final resource</NavLink></li>
                </ul>
                </div>
                <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                    <li><NavLink className="link-secondary" to="#">Business</NavLink></li>
                    <li><NavLink className="link-secondary" to="#">Education</NavLink></li>
                    <li><NavLink className="link-secondary" to="#">Government</NavLink></li>
                    <li><NavLink className="link-secondary" to="#">Gaming</NavLink></li>
                </ul>
                </div>
                <div className="col-6 col-md">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                    <li><NavLink className="link-secondary" to="#">Team</NavLink></li>
                    <li><NavLink className="link-secondary" to="#">Locations</NavLink></li>
                    <li><NavLink className="link-secondary" to="#">Privacy</NavLink></li>
                    <li><NavLink className="link-secondary" to="#">Terms</NavLink></li>
                </ul>
                </div>
            </div>
            </footer>
        </div>
        </>
    )
}

export default Footer
