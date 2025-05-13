import React, { useState } from 'react';
import './AdminNavbar.css';
import logo from '../Assets/logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import {
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

const AdminNavbar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const getActiveMenu = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'dashboard';
      case '/account-confirmation':
        return 'accountConfirmation';
      case '/verified-accounts':
        return 'verifiedAccounts';
      case '/denied-accounts':
        return 'deniedAccounts';
      default:
        return '';
    }
  };

  const activeMenu = getActiveMenu();

  const confirmLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <section className='admin-navbar'>
      <div className='admin-nav-logo'>
        <img src={logo} alt="Logo" className='admin-navbar-img' />
      </div>
     
       <ul className='admin-nav-menu'>
  <li>
    <Link className='admin-nav-link' to="/dashboard">Dashboard</Link>
    {activeMenu === "dashboard"}
  </li>
  <li>
    <Link className='admin-nav-link' to="/account-confirmation">Account Confirmation</Link>
    {activeMenu === "accountConfirmation" }
  </li>
  <li>
    <Link className='admin-nav-link' to="/user-management">User Management</Link>
    {activeMenu === "user-management" }
  </li>


        <div className='admin-iconGroup'>
          <button className='admin-iconButton' aria-label="Logout" onClick={() => setShowLogoutModal(true)}>
            <ArrowLeftEndOnRectangleIcon className='admin-heroIcon' />
          </button>
        </div>
      </ul>

      {/* 🔐 Logout Modal */}
      {showLogoutModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to log out?</p>
            <div className="admin-modal-buttons">
              <button onClick={confirmLogout} className="admin-confirm-btn">Logout</button>
              <button onClick={cancelLogout} className="admin-cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminNavbar;