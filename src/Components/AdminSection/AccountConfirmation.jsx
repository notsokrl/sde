import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import './AccountConfirmation.css';

const AccountConfirmation = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsers([
          {
            id: 'U12345',
            name: 'Jane Doe',
            email: 'jane@example.com',
            date: '2025-05-20',
            profilePic: 'https://via.placeholder.com/50',
            proof: 'https://via.placeholder.com/300x200?text=Proof+Document',
            status: ''
          }
        ]);
      }
    };
    fetchUsers();
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const handleApprove = async (userId) => {
    try {
      await axios.post(`/api/users/${userId}/status`, {
        status: 'Approved'
      });
      setUsers((prev) =>
        prev.map((user) =>
          user.id === userId ? { ...user, status: 'Approved' } : user
        )
      );
      setNotification('Account approved.');
    } catch (error) {
      console.error('Error approving user:', error);
      setNotification('Failed to approve the account.');
    } finally {
      closeModal();
      setTimeout(() => setNotification(''), 3000);
    }
  };

  const handleDeny = async (userId) => {
    try {
      await axios.post(`/api/users/${userId}/status`, {
        status: 'Denied'
      });
      setUsers((prev) =>
        prev.map((user) =>
          user.id === userId ? { ...user, status: 'Denied' } : user
        )
      );
      setNotification('System Notification: Account denied.');
    } catch (error) {
      console.error('Error denying user:', error);
      setNotification('Failed to deny the account.');
    } finally {
      closeModal();
      setTimeout(() => setNotification(''), 3000);
    }
  };

  return (
    <div className="account-confirmation-admin">
      <div className="container">
        {notification && (
          <div className="system-notification">{notification}</div>
        )}

        <h1 className="page-title">Account Confirmation</h1>

        <div className="table-header">
          <div className="column-header name">Name</div>
          <div className="column-header">ID</div>
          <div className="column-header">Email</div>
          <div className="column-header">Date</div>
          <div className="column-header">Proof</div>
          <div className="column-header">Action</div>
        </div>

        {users.map((user) => (
          <div className="account-row" key={user.id}>
            <div className="account-name">
              <img src={user.profilePic} alt="Profile" className="profile-pic" />
              <span>{user.name}</span>
            </div>
            <div className="account-id">{user.id}</div>
            <div className="account-email">{user.email}</div>
            <div className="account-date">{user.date}</div>
            <div className="account-proof">
              <a href={user.proof} target="_blank" rel="noopener noreferrer">
                View Document
              </a>
            </div>
            <div className="approval-buttons">
              <button
                className="approve-button"
                onClick={() => openModal(user)}
              >
                <CheckCircleIcon className="icon"/>
              </button>
            </div>
            {user.status && (
              <div className="account-status">
                <span>Status: {user.status}</span>
              </div>
            )}
          </div>
        ))}

        {isModalOpen && selectedUser && (
          <div className="modal-overlay">
            <div className="modal">
              <button className="modal-close" onClick={closeModal}>&times;</button>
              <p>Approve or Deny the following proof:</p>
              <img src={selectedUser.proof} alt="Proof" className="proof-preview" />

              <div className="modal-actions">
                <button className="confirm-button" onClick={() => handleApprove(selectedUser.id)}>
                  Approve
                </button>
                <button className="deny-button" onClick={() => handleDeny(selectedUser.id)}>
                  Deny
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountConfirmation;