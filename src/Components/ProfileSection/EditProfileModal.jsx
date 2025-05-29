import React, { useState, useEffect } from 'react';
import './EditProfileModal.css';
import { XMarkIcon } from "@heroicons/react/24/outline";

const EditProfileModal = ({ onClose, profileData, onSave }) => {
  const [formData, setFormData] = useState({
    ...profileData,
    profileImage: profileData?.profileImage || null,
  });

  useEffect(() => {
    setFormData({
      ...profileData,
      profileImage: profileData?.profileImage || null,
    });
  }, [profileData]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      const file = files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          [name]: reader.result, // base64 string for upload, but no preview display
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={e => e.stopPropagation()}>
        <div className="modalHeader">
          <h2>Edit Profile</h2>
          <div className="tooltipWrapper">
            <button className="modalCloseBtn" onClick={onClose}>
              <XMarkIcon className="closeIcon" />
              <span className="tooltipText">Close</span>
            </button>
          </div>
        </div>

        <form className="editForm" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input name="fullName" type="text" value={formData.fullName} onChange={handleChange} />
          </label>
          <label>
            Course & Year Level
            <input name="courseYear" type="text" value={formData.courseYear} onChange={handleChange} />
          </label>
          <label>
            Birthday
            <input name="birthday" type="date" value={formData.birthday} onChange={handleChange} />
          </label>
          <label>
            Gender
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Social Link
            <input name="socialLink" type="url" value={formData.socialLink} onChange={handleChange} />
          </label>
          <label>
            Contact Number
            <input name="contactNumber" type="text" value={formData.contactNumber} onChange={handleChange} />
          </label>

          <label>
            Profile Image
            <input type="file" name="profileImage" accept="image/*" onChange={handleChange} />
          </label>

          <div className="modalButtons">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose} className="cancelBtn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;