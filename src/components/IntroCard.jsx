// src/components/IntroCard.jsx
import React from 'react';
import '../App.css'; // Import the CSS file
import anantha from "../assets/anantha.jpg"
import saurabh from "../assets/saurabh.jpg"
import pratik from "../assets/pratik.jpg"


const IntroCard = () => {
  const profileData = [
    {profile:anantha, name: "Anantha D. Atole", rollno: "4107" }, 
    {profile:pratik, name: "Pratik A. Avhad", rollno: "4108" }, 
    {profile:anantha, name: "Tushar K. Bendre", rollno: "4115" }, 
    {profile:saurabh, name: "Saurabh D. Kotkar", rollno: "4161" }]

  return (
    <div className="intro-container">
      {profileData.map((item) => {

        return <div className="intro-card">
          <img src={item.profile} alt="Profile" className="profile-image" />
          <h2 className="intro-title">{item.name}</h2>
          <p className="intro-text">
            <strong>Roll Number:</strong> {item.rollno}<br />
            <strong>Department:</strong> Computer Engineering
          </p>
        </div>
      })}
    </div>
  );
};

export default IntroCard;
