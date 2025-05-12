import React from 'react';
import './ViewDetails.css';
import calculatorImage from '../Assets/calculator.jpg'
import { ArrowLeftIcon } from '@heroicons/react/24/solid';


const ViewDetails = () => {
  return (
    <main className="view-details-page">
      <section className="view-item-details">
        <div className="view-back-container">
          <ArrowLeftIcon className="view-back-btn" />
        </div>

        <div className="item-info-container">
          <div className="view-img-container">
            <div className="item-image">
              <img src={calculatorImage} alt="Calculator" />
            </div>
          </div>
          

          <div className="item-details-text">
            <p className="owner-name">👤 Karla Salem</p>
            <h2>Calculator</h2>
            <p className="price">₱100.00</p>

            <div className="info-grid">
              <span className="label">Rental Duration</span>
              <span>Within this day</span>
              <span className="label">Pickup Location</span>
              <span>GYM LOBBY</span>
              <span className="label">Contact Information</span>
              <span>09090960428</span>
              <span className="label">Message (optional)</span>
              <span>You can message din me po thru FB/ MESSENGER: KARLA SALEM</span>
            </div>

            <button className="rent-now-btn">Rent Now ↩</button>
          </div>
        </div>
      </section>

     
    </main>
  );
};

export default ViewDetails;