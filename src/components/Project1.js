import React from 'react';
import handwrittenDigitImage from '../assets/images/handwritten.png'; 

const Project1 = () => {
  return (
    <div className="project-details">
      <h1>Handwritten Digit Recognition with Voice Integration</h1>
      <img src={handwrittenDigitImage} alt="Handwritten Digit Recognition" className="project-image" />
      
      <section className="project-explanation">
        <h2>Project Overview</h2>
        <p>
          The Handwritten Digit Recognition project aims to create a system capable of identifying handwritten digits from images using machine learning techniques. This project not only demonstrates the application of neural networks in computer vision but also integrates voice commands to enhance user interaction.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Image Input: Users can upload images containing handwritten digits.</li>
          <li>Voice Integration: The system listens for voice commands to perform actions, making it more accessible and user-friendly.</li>
          <li>Digit Recognition: Utilizing a pre-trained Convolutional Neural Network (CNN) model, the system analyzes the input image and predicts the digit (0-9).</li>
          <li>Real-Time Feedback: Users receive instant feedback through both visual and audio responses based on the recognition results.</li>
        </ul>

        <h2>Technology Stack</h2>
        <ul>
          <li>Frontend: React.js</li>
          <li>Backend: Python with TensorFlow or PyTorch</li>
          <li>Computer Vision: OpenCV (cv2)</li>
          <li>Voice Recognition: Web Speech API</li>
        </ul>

        <h2>Implementation Steps</h2>
        <p>
          Data preparation, model training, voice command integration, UI development, and testing are crucial steps in building this project. Each step ensures the system is efficient and user-friendly.
        </p>

        <h2>Potential Applications</h2>
        <ul>
          <li>Educational tools for teaching handwriting recognition.</li>
          <li>Accessibility features for visually impaired users.</li>
          <li>Automated form processing in various applications.</li>
        </ul>
      </section>
    </div>
  );
};

export default Project1;
