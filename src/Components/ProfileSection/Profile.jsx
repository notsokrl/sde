import React, { useState, useEffect } from 'react';
import './Profile.css';
import { PencilSquareIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from 'react-router-dom';
import EditProfileModal from './EditProfileModal';
import StudentVerificationModal from './StudentVerificationModal';
import PostContent from './PostContent'; // ✅ Import PostContent
import EarningsContent from './EarningsSection'; // <-- Import this component (create if you don't have it)

const Profile = () => {
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVerificationClicked, setIsVerificationClicked] = useState(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

  const [profileData, setProfileData] = useState({
    fullName: '',
    courseYear: '',
    birthday: '',
    gender: '',
    socialLink: '',
    contactNumber: '',
    profileImage: null,
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

  const handleCloseVerificationModal = () => {
    setIsVerificationClicked(false);
    setIsVerificationModalOpen(false);
  };

  const handleUpload = (file) => {
    console.log("Uploaded file:", file);
    alert(`File uploaded: ${file.name}`);
    setIsVerificationModalOpen(false);
    setIsVerificationClicked(false);
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
            <button
              onClick={() => setIsModalOpen(true)}
              className="profile-edit-profile-button"
            >
              <PencilSquareIcon className='profile-editIcon' />
            </button>

            <div className="icon-and-name-wrapper">
              {profileData.profileImage ? (
                <img
                  src={profileData.profileImage}
                  alt="Profile"
                  className="profile-userImage"
                />
              ) : (
                <UserCircleIcon className="profile-userIcon" />
              )}

              <div className="name-verification-row">
                <h1 className="profile-name">{profileData.fullName || "Your Name"}</h1>
                <p
                  className={`profile-verificationStatus ${isVerificationClicked ? 'clicked' : ''}`}
                  onClick={() => {
                    setIsVerificationClicked(true);
                    setIsVerificationModalOpen(true);
                  }}
                >
                  *Unverified
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav className="profile-profileNavigation">
          <ul className="profile-nav-items">
            <li>
              <Link to="/profile" className={`profile-navItem ${activeTab === 'post' ? 'active' : ''}`}>
                Post
              </Link>
            </li>
            <li>
              <Link to="/earnings" className={`profile-navItem ${activeTab === 'earnings' ? 'active' : ''}`}>
                Earnings
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    

      {/* Modals */}
      {isModalOpen && (
        <EditProfileModal
          profileData={profileData}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}

      {isVerificationModalOpen && (
        <StudentVerificationModal
          onClose={handleCloseVerificationModal}
          onUpload={handleUpload}
        />
      )}
    </main>
  );
};

export default Profile;