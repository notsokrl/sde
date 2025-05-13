import React, { useState, useEffect } from 'react';
import './Profile.css';
import { PencilSquareIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from 'react-router-dom';
import EditProfileModal from './EditProfileModal';

const Profile = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Karla Salem',
    course: '',
    birthday: '',
    gender: '',
    socialLink: '',
    contact: '',
  });

  useEffect(() => {
    const stored = localStorage.getItem('profileData');
    if (stored) setProfileData(JSON.parse(stored));
  }, []);

  const handleSave = (data) => {
    setProfileData(data);
    localStorage.setItem('profileData', JSON.stringify(data));
    setIsModalOpen(false);
  };

  const activeTab = (() => {
    switch (location.pathname) {
      case '/profile': return 'post';
      case '/earnings': return 'earnings';
      default: return '';
    }
  })();

  return (
    <main className='profile'>
      <section className="profile-section">
        <div className="profile-background">
          <div className="profile-header" />

          <div className="profile-name-container">
            <div className="icon-and-name-wrapper">
              <UserCircleIcon className='profile-userIcon' />
              <button onClick={() => setIsModalOpen(true)} className="profile-edit-profile-button">
                <PencilSquareIcon className='profile-editIcon' />
              </button>
              <h1 className="profile-name">{profileData.name}</h1>
            </div>
            <div className="profile-verificationWrapper">
              <p className="profile-verificationStatus">Unverified</p>
            </div>
          </div>
        </div>

        <nav className="profile-profileNavigation">
          <ul className="profile-nav-items">
            <li>
              <Link to="/profile" className={`profile-navItem ${activeTab === 'post' ? 'active' :''}`} >
                Post
              </Link>
              {activeTab === 'post'}
            </li>
            <li>
              <Link to="/earnings" className={`profile-navItem ${activeTab === 'earnings' ? 'active' :''}`} >
                Earnings
              </Link>
              {activeTab === 'earnings'}
            </li>
          </ul>
        </nav>
      </section>

      {isModalOpen && (
        <EditProfileModal
          profileData={profileData}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </main>
  );
};

export default Profile;