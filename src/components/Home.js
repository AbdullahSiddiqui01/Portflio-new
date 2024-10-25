import React, { useState } from 'react';
import "../styles/Home.css";
import profileImage from '../assets/images/abdog.jpg';
import aliImage from '../assets/images/muhamad-ali.webp';
import ronaldoImage from '../assets/images/cr7.jpg';
import plasticIndustryImage from '../assets/images/granuels.jpg';
import electronicVentureImage from '../assets/images/mboile.jpeg';
import animatedCartoon from "../assets/images/male0001.png";
import Projects from './Projects';
import Modal from './Modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PieChart from './PieChart';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image animated-image"
            onClick={() => setIsModalOpen(true)}
          />
          <h1 className="hero-title animated-title">Welcome to Abdullah's Portfolio!</h1>
          <p className="hero-description animated-description">
            Hi! I'm Abdullah Siddiqui, a passionate problem solver with extensive knowledge across various fields. 
            I specialize in web development, seamlessly integrating Python and machine learning to tackle real-world challenges. 
            My deep understanding of data structures allows me to optimize solutions effectively, ensuring code reusability and efficiency, which contributes to cost-saving measures. 
            I have a proven ability to expand a company’s reach with the guidance of key individuals, fostering a creative mindset that drives innovation and growth. 
            With a keen ability to grasp complex concepts in my field, I strive for excellence in every endeavor. After all, "Second is the first loser."
          </p>
          <a href="#projects" className="cta-button animated-button">View My Projects</a>
        </div>
        <div className="cartoon-container">
          <img src={animatedCartoon} alt="Animated Cartoon" className="animated-cartoon" />
        </div>
      </header>

      <section id="projects" className="projects-section fade-in">
        <Projects />
      </section>

      <section className="pie-chart-section fade-in">
        <PieChart />
      </section>

      <section className="industry-experience-section">
        <h2 className="section-title fade-in">Industry Experience</h2>
        <div className="industry-list">
          <div className="industry-item fade-in">
            <img src={plasticIndustryImage} alt="Plastic Industry" className="industry-image" />
            <p className="industry-description">Selling of Granules, Import and Export in the plastic manufacturing sector.</p>
          </div>
          <div className="industry-item fade-in">
            <img src={electronicVentureImage} alt="Electronics Venture" className="industry-image" />
            <p className="industry-description">Co CEO: Involved in electronic item ventures and innovations.</p>
          </div>
        </div>
      </section>

      <section className="role-model-section">
        <h2 className="section-title fade-in">Role Model, Not Idol</h2>
        <blockquote className="quote">
          "Idolism is the worship of false gods; I seek role models whose dedication inspires."
        </blockquote>

        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          className="role-model-carousel fade-in"
        >
          <div className="role-model">
            <div className="role-model-image-container">
              <img src={aliImage} alt="Muhammad Ali" className="role-model-image" />
            </div>
            <div className="role-model-text">
              <h3>Muhammad Ali</h3>
              <p className="role-model-description">
                Muhammad Ali, known as "The Greatest," dedicated his life to the sport of boxing and social justice.
                His relentless work ethic, exemplified through rigorous training and self-discipline, is a testament to his success.
              </p>
            </div>
          </div>
          <div className="role-model">
            <div className="role-model-image-container">
              <img src={ronaldoImage} alt="Cristiano Ronaldo" className="role-model-image" />
            </div>
            <div className="role-model-text">
              <h3>Cristiano Ronaldo</h3>
              <p className="role-model-description">
                Similarly, Cristiano Ronaldo, one of the most celebrated footballers in history, embodies dedication and hard work.
              </p>
            </div>
          </div>
        </Carousel>
      </section>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
