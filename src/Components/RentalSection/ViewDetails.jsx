import React from 'react';
import './ViewDetails.css';
import calculatorImage from '../Assets/calculator.jpg'; // Ensure to have the image in assets
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';



const ViewDetails = ({ onClose }) => {
  

  return (
    <div className="view-details-page">
      <section className="view-item-details">
        <div className="view-back-container">
          <ArrowLeftIcon className='view-back-btn' onClick={onClose}/>
        </div>

        <div className="item-info-container">
          <div className="view-img-container">
            <div className="view-item-image">
              <img src={calculatorImage} alt="Calculator" />
            </div>
          </div>

          <div className="item-details-text">
            <div className="view-post-name">
              <div className="view-icon-frame">
                <UserCircleIcon className="view-profile-icon" />
              </div>
              <p className="owner-name">Karla Salem</p>
            </div>

            <div className="view-item-name">
              <h2>Calculator</h2>
            </div>
          
            <div className="view-item-price">
              <p className="price">₱100.00</p>
            </div>

            <div className="info-grid">
              <span className="label">Rental Duration</span>
              <span className= "info-input">Within this day</span>
              <span className="label">Pickup Location</span>
              <span className= "info-input">GYM LOBBY</span>
              <span className="label">Contact Information</span>
              <span className= "info-input">09090960428</span>
              <span className="label">Message (optional)</span>
              <span className= "info-input">You can message din me po thru FB/ MESSENGER: KARLA SALEM</span>
            </div>

            <Link to="/checkout">
  <button className="rent-now-btn">Rent Now</button>
</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewDetails;
