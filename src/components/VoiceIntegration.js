// VoiceIntegrationApp.js
import React from 'react';
import voiceIntegrationImage from '../assets/images/voice.jpg'; // Replace with your image path

const VoiceIntegrationApp = () => {
  return (
    <div className="voice-integration-project">
      <h1>Voice Integration in Python Applications</h1>
      <img src={voiceIntegrationImage} alt="Voice Integration" className="voice-integration-image" />
      
      <section className="voice-integration-description">
        <h2>Project Overview</h2>
        <p>
          The Voice Integration project focuses on enhancing user interaction within Python applications by implementing voice recognition capabilities. This allows users to control the application and input commands using their voice, making the interaction more intuitive and accessible.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Voice Command Recognition: Users can issue commands using natural language.</li>
          <li>Speech-to-Text Conversion: Converts spoken words into text input for the application.</li>
          <li>Feedback Mechanism: The application can respond to user commands with voice feedback.</li>
          <li>Integration with Various Python Libraries: Supports integration with libraries like SpeechRecognition, Pyttsx3, and others for enhanced functionality.</li>
        </ul>

        <h2>Technology Stack</h2>
        <ul>
          <li>Frontend: HTML/CSS for the user interface</li>
          <li>Backend: Python with Flask or Django</li>
          <li>Voice Recognition: SpeechRecognition library</li>
          <li>Text-to-Speech: Pyttsx3 library</li>
        </ul>

        <h2>Implementation Steps</h2>
        <p>
          The implementation involves setting up the environment, installing necessary libraries, developing the voice recognition and feedback features, and integrating these into the existing Python application to ensure seamless user interaction.
        </p>

        <h2>Potential Applications</h2>
        <ul>
          <li>Accessibility features for users with disabilities.</li>
          <li>Voice-controlled automation in smart home applications.</li>
          <li>Interactive voice-based assistants for customer support.</li>
        </ul>
      </section>
    </div>
  );
};

export default VoiceIntegrationApp;
