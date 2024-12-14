// components/HospitalCard.js
import React from "react";

const HospitalCard = ({ hospital }) => {
  return (
    <div className="hospital-card">
      <h4 className="card-header">{hospital.name}</h4>
      <p className="card-info">📍 {hospital.address}</p>
      <p className="card-info">📞 {hospital.contact}</p>
      <p className="card-info">🏥 {hospital.type}</p>
      <p className="card-info">⭐ {hospital.rating} ({hospital.reviews} reviews)</p>
      <p className="card-info">🕒 {hospital.emergency ? "24/7 Emergency" : "Regular Hours"}</p>
      <p className="card-info">🛏️ {hospital.beds} beds available</p>
      <div className="cost-badge">
        Cost: ${hospital.cost}
      </div>
    </div>
  );
};

export default HospitalCard;
