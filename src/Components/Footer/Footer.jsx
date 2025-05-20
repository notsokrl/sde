import React from 'react'
import logo from '../Assets/logo.png'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-sections">
            <div className="footer-logo">
                <img src={logo} alt="" className='footer-img'/>
                <div className="footer-description">
                    <p>Making student life easier through community sharing and support.</p>
                </div>
            </div>    
            <div className="footer-section">
                <h4>HULAM-E</h4>
                <div className="footer-subtitle">
                    <ul className="footer-links">
                    <li>Home</li>
                    </ul>
                </div>
            </div>

            <div className="footer-section">
                <h4>COMPANY</h4>
                <div className="footer-subtitle">
                    <ul className="footer-links">
                     <Link to="/about-us">
                    <li>About</li>
                    </Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    
                    </ul>
                </div>
            </div>

            <div className="footer-section">
                <h4>PRIVACY POLICY</h4>
                <div className="footer-subtitle">
                    <ul className="footer-links">
                    <Link to="/terms-and-conditions"><li>Terms and Conditions</li></Link>
                    <Link to="/privacy-and-security"><li>Privacy and Security</li></Link>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright">
            {`© ${new Date().getFullYear()} All rights reserved.`}
        </div>
    </div>

  )
}

export default Footer