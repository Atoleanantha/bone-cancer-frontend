// src/components/ProjectInfo.jsx
import React from 'react';
import '../App.css'; // Import the CSS file

const ProjectInfo = () => {
  return (
    <div className="project-container">
      <div className="project-card">
        <h2 className="project-title">Bone Cancer Detection Project</h2>
        <p className="project-text">
          This project uses deep learning to assist in the early detection of bone cancer using X-ray images.
          The system accepts an image input and uses a trained convolutional neural network model to predict
          whether signs of bone cancer are present.
        </p>
        <p className="project-text">
          <strong>The key features include:</strong>
        </p>
        <ul className="project-list">
          <li>Upload and analyze X-ray images</li>
          <li>Display real-time prediction results</li>
          <li>Generate and download patient reports</li>
        </ul>
        <p className="project-text">
          The application is built using React for the frontend, Axios for API calls, and a backend model trained using TensorFlow/Keras.
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
