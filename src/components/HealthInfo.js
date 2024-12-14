// components/HealthInfo.js
import React from "react";
import { translations } from "../data/translations";

const HealthInfo = ({ data, lang }) => {
  return (
    <div className="health-info-card">
      <h3 className="section-title">{translations[lang].healthInfo}</h3>
      <p className="card-info">
        <strong>{translations[lang].symptoms}:</strong> {data.symptoms}
      </p>
      <p className="card-info">
        <strong>{translations[lang].diagnosis}:</strong> {data.diagnosis}
      </p>
      <p className="card-info">
        <strong>{translations[lang].treatment}:</strong> {data.treatment}
      </p>
    </div>
  );
};

export default HealthInfo;
