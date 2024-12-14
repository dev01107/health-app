import React from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const HomePage = ({ suggestions }) => {
  const features = [
    {
      icon: "🏥",
      title: "Find Hospitals",
      description: "Locate the nearest hospitals and medical centers"
    },
    {
      icon: "👨‍⚕️",
      title: "Expert Doctors",
      description: "Connect with specialized healthcare professionals"
    },
    {
      icon: "💊",
      title: "Medications",
      description: "Get information about prescribed medications"
    },
    {
      icon: "📋",
      title: "Health Reports",
      description: "Access and manage your medical reports"
    }
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Your Health, Our Priority</h1>
        <p className="hero-description">
          Get instant access to medical information, find doctors, and manage your healthcare journey
        </p>
        <SearchBar suggestions={suggestions} />
      </div>

      <div className="features-section">
        <h2 className="features-title">Our Services</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h2 className="cta-title">Ready to Take Control of Your Health?</h2>
        <p className="cta-description">
          Create your profile to get personalized health recommendations
        </p>
        <Link to="/profile" className="cta-button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
