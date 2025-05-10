import React from 'react'
import banner from '../Assets/banner.jpg'; 
import itemImage from '../Assets/calculator.jpg'; 
import './RentalSection.css'
import { EyeIcon } from "@heroicons/react/24/outline";


const RentalSection = () => {

  const rentalItems = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    price: "₱100.00",
    name: "Name of the Material",
    image: itemImage
  }));
  

  return (
    <main className="rentalSection">
      <section className="rental-section">
        <img
          src={banner}
          alt="Banner"
          className='rental-bannerImage'
        />
        <div className="rental-bannerContent">
          <p className="rental-bannerTitle">Rental Section</p>
          <p className="rental-bannerSubtitle">
            Affordable Learning Resources at Your Fingertips!
          </p>
        </div>

        <div className="rental-grid">
          {rentalItems.map((item) => (
            <article key={item.id} className="rental-card">
              <div className="rental-image-container">
                <img src={item.image} alt="Material" className="rental-image" />
              </div>

              <div className="rental-card-content">
                <p className="rental-price">{item.price}</p>
                <h3 className="rental-material-name">{item.name}</h3>
                <button className="rental-view-details-button">
                  <span className="rental-eye-icon">
                    <EyeIcon />
                  </span>
                  <span className="rental-view-details-text">View Details</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>

  )
}

export default RentalSection