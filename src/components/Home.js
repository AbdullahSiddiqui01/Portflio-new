import React, { useState } from 'react';
import "../styles/Home.css";
import profileImage from '../assets/images/abdog.jpg'; 
import aliImage from '../assets/images/muhamad-ali.webp'; 
import ronaldoImage from '../assets/images/cr7.jpg'; 
import plasticIndustryImage from '../assets/images/granuels.jpg';
import electronicVentureImage from '../assets/images/mboile.jpeg';
import Projects from './Projects'; 
import Modal from './Modal';
import PieChart from './PieChart'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import testimonialImage1 from '../assets/images/james.jpg';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!'); 
  };

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
          <h1>Welcome to Abdullah Siddiqui's Portfolio</h1>
          <p className="hero-description animated-description">
            Hi! I'm Abdullah Siddiqui, a passionate problem solver with extensive knowledge across various fields. 
            I specialize in web development, seamlessly integrating Python and machine learning to tackle real-world challenges. 
            My deep understanding of data structures allows me to optimize solutions effectively, ensuring code reusability and efficiency, which contributes to cost-saving measures. 
            I have a proven ability to expand a company’s reach with the guidance of key individuals, fostering a creative mindset that drives innovation and growth. 
            With a keen ability to grasp complex concepts in my field, I strive for excellence in every endeavor. After all, "Second is the first loser."
            "In the ever-evolving landscape of technology, loyalty to one’s craft and a commitment to continuous learning are the cornerstones of success."
          </p>
          <a href="#projects" className="cta-button animated-button">View My Projects</a>
        </div>

        <section className="social-media-section">
          <div className="social-media">
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/abdullah-shamshuddin-siddiqui-4469701b4" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://www.instagram.com/Abdullahsidd01" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://github.com/Abdullah321222" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
          </div>
        </section>
      </header>

      <section id="projects" className="projects-section">
        <Projects />
      </section>

      <section className="pie-chart-section">
        <PieChart /> 
      </section>

      <section className="industry-experience-section">
        <h2>Industry Experience</h2>
        <div className="industry-list">
          <div className="industry-item">
            <img src={plasticIndustryImage} alt="Plastic Industry" />
            <p className="industry-description">Selling of Granules, Import and Export in the plastic manufacturing sector.</p>
          </div>
          <div className="industry-item">
            <img src={electronicVentureImage} alt="Electronics Venture" />
            <p className="industry-description">Co CEO: Involved in electronic item ventures and innovations.</p>
          </div>
        </div>
      </section>

      <section className="role-model-section">
        <h2>Role Model, Not Idol</h2>
        <blockquote className="quote">
          "Idolism is the worship of false gods; I seek role models whose dedication inspires." 
        </blockquote>
        
        <div className="role-models">
          <div className="role-model">
            <img src={aliImage} alt="Muhammad Ali" className="role-model-image" />
            <p className="role-model-description">
              Muhammad Ali, known as "The Greatest," dedicated his life to the sport of boxing and social justice. 
              His relentless work ethic, exemplified through rigorous training and self-discipline, is a testament to his success. 
              Ali once said, "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'"
              This approach reflects the Greek philosophy of resilience and dedication—virtues that lead to greatness.
            </p>
          </div>
          
          <div className="role-model">
            <img src={ronaldoImage} alt="Cristiano Ronaldo" className="role-model-image" />
            <p className="role-model-description">
              Similarly, Cristiano Ronaldo, one of the most celebrated footballers in history, embodies dedication and hard work. 
              Ronaldo's relentless pursuit of excellence, paired with a disciplined lifestyle, has set him apart in the world of sports. 
              He emphasizes that "Talent without working hard is nothing." This principle aligns with the teachings of ancient wisdom that stress the importance of discipline and commitment to achieve success.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <img src={testimonialImage1} alt="Client A" className="testimonial-image" />
            <p>"Abdullah's work ethic and innovative solutions have greatly benefited our team. His dedication to excellence is unmatched!"</p>
            <h4>- Client A</h4>
          </div>
        </div>
      </section>


      <footer className="footer">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </footer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
