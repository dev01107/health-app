import React, { useState } from "react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    location: "New York",
    phone: "+1 234 567 8900",
    bloodGroup: "O+",
    age: "28",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">👤</div>
        <h1 className="profile-title">My Profile</h1>
      </div>
      
      <div className="profile-card">
        <form className="profile-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="profile-input"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="profile-input"
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="profile-input"
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleChange}
              className="profile-input"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Blood Group</label>
              <input
                type="text"
                name="bloodGroup"
                value={profile.bloodGroup}
                onChange={handleChange}
                className="profile-input"
              />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                type="text"
                name="age"
                value={profile.age}
                onChange={handleChange}
                className="profile-input"
              />
            </div>
          </div>

          <button type="button" className="profile-save-btn">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
