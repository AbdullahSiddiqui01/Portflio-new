import React from 'react';
import textRecognitionImage from '../assets/images/text-recognition.png'; // Placeholder for the project image

const TextRecognitionSystem = () => {
  return (
    <div className="text-recognition-project">
      <h1>Text Recognition System</h1>
      <img src={textRecognitionImage} alt="Text Recognition System" className="text-recognition-image" />

      <section className="text-recognition-overview">
        <h2>Project Overview</h2>
        <p>
          The Text Recognition System project aims to develop an application that can extract and recognize text from images using Optical Character Recognition (OCR) technology. This project showcases the integration of machine learning techniques to enable users to digitize printed or handwritten text effortlessly.
        </p>

        <h2>Key Features</h2>
        <ul className="text-recognition-features">
          <li>Image Upload: Users can upload images containing printed or handwritten text.</li>
          <li>Text Extraction: The system utilizes OCR algorithms to extract text from the uploaded images.</li>
          <li>Real-Time Feedback: Users receive instant feedback with the recognized text displayed on the screen.</li>
          <li>Multi-Language Support: The system can recognize text in multiple languages, enhancing accessibility.</li>
        </ul>

        <h2>Technology Stack</h2>
        <ul className="text-recognition-tech-stack">
          <li>Frontend: React.js</li>
          <li>Backend: Python with Flask or Django for processing requests</li>
          <li>OCR: Tesseract.js or other OCR libraries for text recognition</li>
          <li>State Management: React hooks for managing component states</li>
        </ul>

        <h2>Implementation Steps</h2>
        <p>
          The implementation involves several steps: setting up the frontend interface, integrating OCR functionality, handling image uploads, and displaying the extracted text. Testing for accuracy and optimizing performance are critical to ensure a seamless user experience.
        </p>

        <h2>Potential Applications</h2>
        <ul className="text-recognition-applications">
          <li>Document digitization for archiving and easy access.</li>
          <li>Data entry automation from printed forms.</li>
          <li>Accessibility tools for visually impaired users to read printed text.</li>
        </ul>
      </section>
    </div>
  );
};

export default TextRecognitionSystem;
