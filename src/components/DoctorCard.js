// components/DoctorCard.js
import React from "react";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <h4 className="card-header">{doctor.name}</h4>
      <p className="card-info">👨‍⚕️ {doctor.specialization}</p>
      <p className="card-info">📞 {doctor.contact}</p>
      <p className="card-info">🏥 {doctor.hospital}</p>
      <p className="card-info">⭐ {doctor.rating} ({doctor.reviews} reviews)</p>
      <p className="card-info">🕒 {doctor.availability}</p>
      <div className="fee-container">
        <span className="fee-label">Consultation Fee:</span>
        <span className="fee-amount">${doctor.fee}</span>
      </div>
      <div className="cost-badge">
        Book Appointment
      </div>
    </div>
  );
};

export default DoctorCard;
