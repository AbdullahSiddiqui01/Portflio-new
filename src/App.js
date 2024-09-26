import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import CarGame from './components/CarGame';
import './styles/App.css';
import Login from './components/Login';
import Register from './components/Register';
import Project1 from './components/Project1'; // Import the Project1 component
import ThreeDAnimation from './components/ThreeDProject';
import ScrollImages from './components/ScrollImages'; 
import QrCodePage from './components/QrCodePage';
import SpotifyClone from './components/SpotifyClone';
import EcommercePage from './components/EcommercePage';
import ZomatoClone from './components/ZomatoClone';
import JarvisProject from './components/Jarvis';
import VoiceIntegration from './components/VoiceIntegration';
import YouTubeClone from './components/Youtube';
import WebScrapingTool from './components/WebScrapingTool';
import TextRecognitionSystem from './components/TextRecognitionSystem';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/1" element={<Project1 />} /> {/* Add route for Project1 */}
        <Route path="/about" element={<About />} />
        <Route path="/projects/3d" element={<ThreeDAnimation />} />
        <Route path="/game" element={<CarGame />} /> 
        <Route path="/projects/3d" element={<ScrollImages/>} /> 
        <Route path="/login" element={<Login />} /> {/* Update to lowercase for consistency */}
        <Route path="/register" element={<Register />} /> 
        <Route path="projects/2" element={< EcommercePage/>} />
        <Route path="projects/11" element={<QrCodePage />} />
        <Route path="projects/3" element={<ZomatoClone/>} />
        <Route path="projects/12" element={<VoiceIntegration />} />
        <Route path="projects/14" element={<JarvisProject/>} />
        <Route path="projects/7" element={<YouTubeClone/>} />
        <Route path="projects/10" element={<WebScrapingTool/>} />
        <Route path="projects/13" element={<TextRecognitionSystem/>} />
        <Route path="projects/9" element={<SpotifyClone />}

        />{/* Update to lowercase for consistency */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
