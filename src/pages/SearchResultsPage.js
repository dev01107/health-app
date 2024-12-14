// SearchResultsPage.js
import React from "react";
import { useSearchParams } from "react-router-dom";
import HealthInfo from "../components/HealthInfo";
import HospitalCard from "../components/HospitalCard";
import DoctorCard from "../components/DoctorCard";
import healthData from "../data/healthData";
import { translations } from "../data/translations";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const lang = searchParams.get("lang") || "en";
  const results = query ? healthData.healthIssues[query] : null;

  return (
    <div className="container">
      <h2 className="section-title">
        {translations[lang].searchResults}: {query}
      </h2>
      {results ? (
        <>
          <HealthInfo data={results} lang={lang} />
          
          <h3 className="section-title">{translations[lang].medications}</h3>
          <ul className="medication-list">
            {results.medications.map(medication => (
              <li key={medication.id} className="medication-item">
                💊 {medication.name}
              </li>
            ))}
          </ul>

          <h3 className="section-title">{translations[lang].reports}</h3>
          <ul className="report-list">
            {results.reports.map(report => (
              <li key={report.id} className="report-item">
                <div>
                  <span className="report-name">📋 {report.name}</span>
                  <div className="fee-container">
                    <span className="fee-label">{translations[lang].testCost}:</span>
                    <span className="fee-amount">₹{report.cost}</span>
                  </div>
                </div>
                <div className="cost-badge">
                  {translations[lang].bookTest}
                </div>
              </li>
            ))}
          </ul>

          <section className="hospitals-section">
            <h2 className="section-title">{translations[lang].hospitals}</h2>
            <div className="cards-grid">
              {results.hospitals.map(hospital => (
                <HospitalCard key={hospital.id} hospital={hospital} lang={lang} />
              ))}
            </div>
          </section>

          <section className="doctors-section">
            <h2 className="section-title">{translations[lang].doctors}</h2>
            <div className="cards-grid">
              {results.doctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} lang={lang} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <p>{translations[lang].noResults} "{query}". {translations[lang].trySearching}</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
