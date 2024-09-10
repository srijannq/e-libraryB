import React, { useState } from "react";
import "./UserProfile.css";
import Dashboardpage from "../pages/DashboardPage";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "",
  });

  const [newProfilePicture, setNewProfilePicture] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user profile logic here
    console.log("Profile updated:", user, newProfilePicture);
  };

  return (
    <div className="user-profile">
      <div className="profile-picture-wrapper">
        <img
          src={newProfilePicture || user.profilePicture}
          alt="Profile"
          className="profile-picture"
        />
      </div>
      <form onSubmit={handleSubmit} className="user-profile-form">
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
