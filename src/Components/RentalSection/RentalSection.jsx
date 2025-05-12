import React, { useState } from 'react';
import banner from '../Assets/banner.jpg';
import itemImage from '../Assets/calculator.jpg';
import './RentalSection.css';
import { EyeIcon } from "@heroicons/react/24/outline";
import ViewDetails from './ViewDetails'; // ✅ Make sure this is the correct path

const RentalSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const rentalItems = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    price: "₱100.00",
    name: "Name of the Material",
    image: itemImage
  }));

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="rentalSection">
      <section className="rental-section">
        <img src={banner} alt="Banner" className="rental-bannerImage" />
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
                <button className="rental-view-details-button" onClick={openModal}>
                  <span className="rental-eye-icon">
                    <EyeIcon />
                  </span>
                  <span className="rental-view-details-text">
                    View Details
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ✅ ViewDetails Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ViewDetails onClose={closeModal} />
          </div>
        </div>
      )}
    </main>
  );
};

export default RentalSection;
