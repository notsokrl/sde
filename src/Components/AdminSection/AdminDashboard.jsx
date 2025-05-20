import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import calculator from '../Assets/calculator.jpg';
import marcos from '../Assets/marcos.jpg';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { UserGroupIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import axios from 'axios';

const transactions = [
  { image: 'calculator.jpg', name: 'Calculator', date: 'May 5, 2025', price: '100.00' },
  { image: 'calculator.jpg', name: 'Calculator', date: 'May 4, 2025', price: '100.00' },
  { image: 'calculator.jpg', name: 'Calculator', date: 'May 4, 2025', price: '100.00' },
  { image: 'calculator.jpg', name: 'Calculator', date: 'May 4, 2025', price: '100.00' },
];

const recentActivity = [
  { profileImage: 'marcos.jpg', renterName: 'John Doe', itemTitle: 'Calculator', datePosted: 'May 9, 2025' },
  { profileImage: 'marcos.jpg', renterName: 'Jane Smith', itemTitle: 'Lab gown', datePosted: 'May 8, 2025' },
  { profileImage: 'marcos.jpg', renterName: 'Alice Johnson', itemTitle: 'Calculus Book', datePosted: 'May 7, 2025' },
  { profileImage: 'marcos.jpg', renterName: 'Bob Brown', itemTitle: 'Arnis Stick', datePosted: 'May 6, 2025' },
];

const AdminDashboard = () => {
  const [earnings, setEarnings] = useState({
    totalEarnings: 0,
    thisWeek: 0,
    totalRevenue: 0,
    thisMonth: 0,
  });

  const [users, setUsers] = useState({
    total: 0,
    thisWeek: 0,
    thisMonth: 0,
  });

  useEffect(() => {
    const fetchEarnings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/earnings');
        setEarnings({
          totalEarnings: response.data.totalEarningsThisWeek,
          totalRevenue: response.data.totalRevenueThisMonth,
          thisWeek: 0,
          thisMonth: 0,
        });
      } catch (error) {
        console.error('Error fetching earnings:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/stats/users');
        setUsers({
          total: response.data.total,
          thisWeek: response.data.thisWeek,
          thisMonth: response.data.thisMonth,
        });
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchEarnings();
    fetchUsers();
  }, []);

  return (
    <div className="admin-cardGrid">
      {/* Earnings Card */}
      <article className="admin-card">
        <div className="admin-cardContent">
          <div className="admin-column2">
            <div className="admin-statContainer">
              <div className="admin-statHeader">
                <div className="admin-iconAndTitle">
                  <CurrencyDollarIcon className="admin-earningIcon" />
                  <h2 className="admin-earnings">Earnings Overview</h2>
                </div>
              </div>
              <div className="admin-statBodyGrid">
                <div className="admin-statGroup">
                  <span className="admin-subtitle">Total Earnings</span>
                  <p className="admin-statValue">₱{earnings.totalEarnings.toLocaleString()}</p>
                </div>
                <div className="admin-statGroup">
                  <span className="admin-subtitle">Total Revenue</span>
                  <p className="admin-statValue">₱{earnings.totalRevenue.toLocaleString()}</p>
                </div>
                <div className="admin-statGroup">
                  <span className="admin-subtitle">This Week</span>
                  <p className="admin-statValue">₱{earnings.thisWeek.toLocaleString()}</p>
                </div>
                <div className="admin-statGroup">
                  <span className="admin-subtitle">This Month</span>
                  <p className="admin-statValue">₱{earnings.thisMonth.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Users Card */}
      <article className="admin-card">
        <div className="admin-cardContent">
          <div className="admin-column2">
            <div className="admin-statContainer">
              <div className="admin-statHeader">
                <div className="admin-iconAndTitle">
                  <UserGroupIcon className="admin-earningIcon" />
                  <h2 className="admin-earnings">Users</h2>
                </div>
              </div>
              <div className="admin-statBodyUsers">
                <div className="admin-statGroup">
                  <span className="admin-subtitle">Total Users</span>
                  <p className="admin-statValue">{users.total}</p>
                </div>
                <div className="admin-statGroup">
                  <span className="admin-subtitle">This Week</span>
                  <p className="admin-statValue">{users.thisWeek}</p>
                </div>
                <div className="admin-statGroup">
                  <span className="admin-subtitle">This Month</span>
                  <p className="admin-statValue">{users.thisMonth}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Transaction History */}
      <article className="admin-card">
        <div className="admin-cardContent">
          <h2 className="admin-earnings">Transaction History</h2>
          <div className="transactionList">
            {transactions.map((txn, index) => (
              <div className="transactionItem" key={index}>
                <img src={calculator} alt={txn.name} className="transactionImage" />
                <div className="transactionDetails">
                  <span className="transactionName">{txn.name}</span>
                  <span className="transactionDate">{txn.date}</span>
                </div>
                <p className="transactionPrice">₱{txn.price}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Recent Activity */}
      <article className="admin-card">
        <div className="admin-cardContent">
          <h2 className="admin-earnings">Recent Activity</h2>
          <div className="activityList">
            {recentActivity.map((activity, index) => (
              <div className="activityItem" key={index}>
                <img
                  src={require(`../Assets/${activity.profileImage}`)}
                  alt={activity.renterName}
                  className="activityProfileImage"
                />
                <div className="activityDetails">
                  <p className="activityMessage">
                    <strong>{activity.renterName}</strong> posted a new item: <em>{activity.itemTitle}</em>
                  </p>
                  <div className="activityMeta">
                    <span className="activityDate">{activity.datePosted}</span>
                    <Link to={`rental-post${activity.id}`} className="seeMoreLink">
                      See more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default AdminDashboard;