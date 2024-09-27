import React from 'react';
import faceRecognitionImage from '../assets/images/face.jpg'; // Replace with your image path

const ProjectFaceRecognition = () => {
  return (
    <div className="project-details">
      <h1>Face Recognition System</h1>
      <img 
        src={faceRecognitionImage} 
        alt="Face Recognition System" 
        className="project-image" 
      />
      
      <section className="project-explanation">
        <h2>Project Overview</h2>
        <p>
          The Face Recognition System project aims to develop a real-time application that identifies and recognizes faces in images and video streams. This project showcases the application of computer vision techniques and neural networks to enable secure and efficient face identification.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Real-Time Face Detection: Capture and recognize faces using a webcam or uploaded images.</li>
          <li>Face Database: Store known faces for comparison and recognition.</li>
          <li>User-Friendly Interface: Simple interface for easy interaction and usage.</li>
          <li>Accuracy and Performance: Utilizes advanced algorithms to ensure high accuracy in face recognition.</li>
        </ul>

        <h2>Technology Stack</h2>
        <ul>
          <li>Frontend: React.js</li>
          <li>Backend: Python with OpenCV and face_recognition libraries</li>
          <li>Database: MongoDB for storing user face data</li>
          <li>Deployment: Docker for containerization</li>
        </ul>

        <h2>Implementation Steps</h2>
        <p>
          Key implementation steps include setting up the user interface in React, integrating the backend face recognition logic using Python, managing a database to store face encodings, and testing the application for usability and performance.
        </p>

        <h2>Potential Applications</h2>
        <ul>
          <li>Security systems for access control in buildings and restricted areas.</li>
          <li>Attendance systems in educational institutions for tracking student presence.</li>
          <li>Personalized experiences in retail and hospitality by recognizing customers.</li>
        </ul>
      </section>
    </div>
  );
};

export default ProjectFaceRecognition;
