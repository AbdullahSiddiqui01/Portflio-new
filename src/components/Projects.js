import React from 'react';
import "../styles/Projects.css";

import image1 from "../assets/images/handwritten.png"; 
import image2 from "../assets/images/ecommerce.jpg"; 
import image3 from "../assets/images/zomato.png";
import image4 from "../assets/images/3d.jpg"; 
import image5 from "../assets/images/cal.png"; 
import image6 from "../assets/images/face.jpg"; 
import image7 from "../assets/images/youtubeclone.jpg"; 
import image8 from "../assets/images/student.jpg"; 
import image9 from "../assets/images/spotify.jpg"; 
import image10 from "../assets/images/web.jpg"; 
import image11 from "../assets/images/qrcode.webp"; 
import image12 from "../assets/images/voice.jpg";
import image13 from "../assets/images/text-recognition.png"; 
import image14 from "../assets/images/jarvis.jpg"; 

const Projects = () => {
  const projects = [
    { id: 1, title: 'Handwritten Digit Recognition', description: 'A project that recognizes handwritten digits using machine learning techniques.', image: image1 },
    { id: 2, title: 'E-commerce Website', description: 'An online shopping platform for various products, featuring a user-friendly interface and secure payment options.', image: image2 },
    { id: 3, title: 'Zomato Clone', description: 'A restaurant discovery and food delivery service, allowing users to explore local eateries and order food online.', image: image3 },
    { id: 4, title: '3D Rendering Project', description: 'A project showcasing 3D rendering techniques and visual effects using advanced graphics software.', image: image4 },
    { id: 5, title: 'Simple Calculator', description: 'A basic calculator app for performing arithmetic operations with a simple and intuitive user interface.', image: image5 },
    { id: 6, title: 'Face Recognition System', description: 'A system that detects and recognizes faces using Python libraries and machine learning models.', image: image6 },
    { id: 7, title: 'YouTube/Netflix Clone', description: 'A clone application mimicking the functionalities of YouTube and Netflix, allowing users to stream and enjoy video content.', image: image7 },
    { id: 8, title: 'React Native Attendance App', description: 'An app built using React Native for tracking attendance with user-friendly features and real-time updates.', image: image8 },
    { id: 9, title: 'Spotify Clone', description: 'A music streaming application that replicates Spotify’s core features, enabling users to listen to their favorite tracks and playlists.', image: image9 },
    { id: 10, title: 'Web Scraping Tool', description: 'A Python-based application that extracts data from websites, enabling efficient data collection and analysis.', image: image10 },
    { id: 11, title: 'QR Code Scanner', description: 'An interactive tool built with React that allows users to scan QR codes and retrieve information seamlessly.', image: image11 },
    { id: 12, title: 'Voice Recognition Application', description: 'A cutting-edge app utilizing machine learning algorithms to recognize and respond to voice commands.', image: image12 },
    { id: 13, title: 'Text Recognition Software', description: 'A tool that converts images of text into editable and searchable data using OCR technology.', image: image13 },
    { id: 14, title: 'Jarvis AI Chatbot', description: 'A sophisticated chatbot that uses voice capabilities to interact with users, answer questions, and perform tasks like a personal assistant.', image: image14 },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projects.map((project) => (
          <div key={project.id} className="project-card" style={{ textAlign: 'center', margin: '20px' }}>
            <img src={project.image} alt={project.title} className="project-image" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.id === 4 ? "/projects/3d" : `/projects/${project.id}`} className="project-button" style={{
              display: 'inline-block', 
              marginTop: '12px', 
              padding: '10px 20px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              borderRadius: '5px', 
              textDecoration: 'none', 
              fontWeight: 'bold'
            }}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
