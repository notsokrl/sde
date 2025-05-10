import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();


  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent immediate close
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <section className="login-navbar" ref={menuRef}>
      <div className="login-menu">
        <Bars3Icon className="login-menu-btn" onClick={toggleMenu} />
      </div>
      <div className="login-nav-logo">
        <img src={logo} alt="Logo" className="login-img" />
      </div>

      <ul className={`login-nav-menu ${menuOpen ? 'active' : ''}`}>
      <li>
        <Link className={`login-nav-link ${location.pathname === '/' ? 'active' : ''}`}
        to="/">Rent Now</Link>
      </li>
  <li>
    <Link
      className={`login-nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}
      to="/about-us"
    >
      About Us
    </Link>
  </li>
  <li>
    <Link
      className={`login-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
      to="/contact"
    >
      Contact
    </Link>
  </li>
</ul>

      <div className="login-nav-buttons">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
