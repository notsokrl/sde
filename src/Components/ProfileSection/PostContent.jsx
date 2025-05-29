import React from 'react';
import './PostContent.css';
import { PhoneIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { Venus, Cake } from "lucide-react";
import { UserCircleIcon, LinkIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const PostContent = ({ profileData }) => {
  // Destructure profileData to use in JSX
  const {
    fullName,
    courseYear,
    birthday,
    gender,
    socialLink,
    contactNumber,
    profileImage,
  } = profileData || {};

  return (
    <main className="postContent">
      <section className="contentSection">
        <div className="contentColumns">

          {/* About Section */}
          <div className="column">
            <div className="aboutContainer">
              <div className="aboutColumns">

                {/* Main About Info */}
                <div className="aboutMainColumn">
                  <div className="aboutContent">
                    <h2 className="sectionTitle">About</h2>
                    <div className="personalInfo">

                      <div className="infoItem">
                        <div className="infoRow">
                          <AcademicCapIcon className="icon" />
                          <div>
                            <h3 className="infoLabel">Course & Year Level</h3>
                            <p className="infoValue">{courseYear || 'Not provided'}</p>
                          </div>
                        </div>
                      </div>

                      <div className="infoItem">
                        <div className="infoRow">
                          <Cake className="icon" />
                          <div>
                            <h3 className="infoLabel">Birthday</h3>
                            <p className="infoValue">{birthday || 'Not provided'}</p>
                          </div>
                        </div>
                      </div>

                      <div className="infoItem">
                        <div className="infoRow">
                          <Venus className="icon" />
                          <div>
                            <h3 className="infoLabel">Gender</h3>
                            <p className="infoValue">{gender || 'Not provided'}</p>
                          </div>
                        </div>
                      </div>

                      <div className="infoItem">
                        <div className="infoRow">
                          <LinkIcon className="icon" />
                          <div>
                            <h3 className="infoLabel">Social Link</h3>
                            {socialLink ? (
                              <a
                                href={socialLink}
                                className="socialLink"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {socialLink}
                              </a>
                            ) : (
                              <p className="infoValue">Not provided</p>
                            )}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="contactColumn">
                  <div className="contactInfo">
                    <div className="infoRow">
                      <PhoneIcon className="icon" />
                      <div>
                        <h3 className="infoLabel">Contact Information</h3>
                        <p className="infoValue">{contactNumber || 'Not provided'}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Posts Section */}
          <div className="postsColumn">
            <div className="postsContainer">
              <h2 className="sectionTitle">Posts</h2>

              <div className="postItem">
                <div className="notificationOutline">
                  <UserCircleIcon className="postIcon" />
                  <p className="postNotification">
                    You posted in <strong>Rental.</strong>{" "}
                    <Link to="/post/1" className="viewPostLink">View Post here.</Link>
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Optional: show profile image and full name on top */}
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        {profileImage && (
          <img src={profileImage} alt={`${fullName}'s profile`} width={150} style={{ borderRadius: '50%' }} />
        )}
      </div>
    </main>
  );
};

export default PostContent;