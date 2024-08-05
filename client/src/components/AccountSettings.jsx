// src/components/AccountSettings.js
import React from 'react';
import './AccountSettings.css';

const AccountSettings = () => {
  return (
    <div className="account-settings card shadow-lg p-4">
      <h3 className="section-title">Notification Settings</h3>
      <div className="setting-item">
        <label>Email Notifications</label>
        <input type="checkbox" defaultChecked />
      </div>
      <div className="setting-item">
        <label>SMS Notifications</label>
        <input type="checkbox" />
      </div>
      
      <h3 className="section-title">Privacy Settings</h3>
      <div className="setting-item">
        <label>Profile Visibility</label>
        <select>
          <option>Public</option>
          <option>Private</option>
          <option>Friends Only</option>
        </select>
      </div>
      <div className="setting-item">
        <label>Search Visibility</label>
        <select>
          <option>Everyone</option>
          <option>Friends</option>
          <option>No One</option>
        </select>
      </div>

      <h3 className="section-title">Linked Accounts</h3>
      <div className="setting-item">
        <label>Google</label>
        <button className="btn-link">Link/Unlink</button>
      </div>
      <div className="setting-item">
        <label>Facebook</label>
        <button className="btn-link">Link/Unlink</button>
      </div>
    </div>
  );
};

export default AccountSettings;
