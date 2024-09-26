import React from 'react';
import jarvisImage from '../assets/images/jarvis.png'; // Make sure to replace this with the actual image path

const JarvisProject = () => {
  return (
    <div className="project-details">
      <h1>Jarvis - AI Chatbot</h1>
      <img src={jarvisImage} alt="Jarvis AI Chatbot" className="project-image" />
      
      <section className="project-explanation">
        <h2>Project Overview</h2>
        <p>
          The Jarvis AI Chatbot project aims to create an intelligent virtual assistant capable of engaging users in natural language conversations. Utilizing advanced natural language processing (NLP) and machine learning algorithms, Jarvis can respond to a variety of user inquiries and assist with tasks, making it a versatile digital assistant.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Conversational Interface: Users can interact with Jarvis through text or voice commands, facilitating a more engaging experience.</li>
          <li>Intelligent Responses: Powered by NLP, Jarvis understands user intent and provides relevant answers or actions.</li>
          <li>Task Automation: Jarvis can perform tasks such as setting reminders, providing weather updates, and answering queries across different domains.</li>
          <li>Learning Capabilities: The chatbot can learn from interactions, improving its responses over time.</li>
        </ul>

        <h2>Technology Stack</h2>
        <ul>
          <li>Frontend: React.js</li>
          <li>Backend: Node.js with Express.js</li>
          <li>NLP: Dialogflow or Microsoft Bot Framework</li>
          <li>Voice Recognition: Web Speech API or SpeechRecognition library</li>
        </ul>

        <h2>Implementation Steps</h2>
        <p>
          Key steps include designing the user interface, integrating NLP services for understanding user queries, setting up a backend to handle requests and responses, and continuously training the model to improve its accuracy and capabilities.
        </p>

        <h2>Potential Applications</h2>
        <ul>
          <li>Personal digital assistant for everyday tasks.</li>
          <li>Customer support for businesses, handling user inquiries efficiently.</li>
          <li>Educational tool for language learning and interactive study.</li>
        </ul>
      </section>
    </div>
  );
};

export default JarvisProject;
