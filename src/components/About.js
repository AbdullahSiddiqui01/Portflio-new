import React from 'react';
import "../styles/About.css";
import avatarImage from '../assets/images/avtar2.png'; // Replace with your avatar image path

const hobbyImages = {
  Cricket: require('../assets/images/cricket.jpg'),
  Swimming: require('../assets/images/swimming.webp'),
  Karate: require('../assets/images/Karate.jpg'),
  Carrom: require('../assets/images/carrom.jpg'),
  Entrepreneurship: require('../assets/images/entrepreneur.jpg'),
  ProblemSolving: require('../assets/images/probelm.png'),
  ElectronicRepairs: require('../assets/images/electronic repair.jpg'),
  Football: require('../assets/images/football.webp'),
  TableTennis: require('../assets/images/tt.jpg'),
  Badminton: require('../assets/images/bd.webp'),
  Volleyball: require('../assets/images/voleyball.webp'),
  Kites: require('../assets/images/kites.jpg'),
  GreekBooks: require('../assets/images/Greece.webp'),
  Shayari: require('../assets/images/shayri.jpg'),
  Quotes: require('../assets/images/frnechquotes.jpg'),
  Reading: require('../assets/images/books.webp')
};

// Descriptions for each hobby
const hobbyDescriptions = {
  Cricket: "Engaging in cricket cultivates camaraderie and enhances physical fitness while honing strategic acumen.",
  Swimming: "Swimming offers a comprehensive workout that fortifies cardiovascular health and alleviates stress.",
  Karate: "Practicing karate instills discipline, augments self-defense proficiency, and fosters mental clarity.",
  Carrom: "Carrom refines focus and hand-eye coordination, serving as an enjoyable medium for social interaction.",
  Entrepreneurship: "Delving into entrepreneurship nurtures creativity, sharpens critical thinking, and promotes financial literacy.",
  ProblemSolving: "Developing problem-solving skills cultivates analytical prowess, preparing one for real-world complexities.",
  ElectronicRepairs: "Acquiring electronic repair skills enhances technical proficiency and sharpens troubleshooting abilities.",
  Football: "Participating in football fosters teamwork, boosts cardiovascular health, and develops tactical insights.",
  TableTennis: "Table tennis enhances reflexes, coordination, and concentration, providing a delightful recreational experience.",
  Badminton: "Badminton augments agility and overall fitness while promoting spirited competition.",
  Volleyball: "Volleyball encourages teamwork and physical vigor, strengthening social bonds and communication skills.",
  Kites: "Flying kites stimulates creativity and outdoor enjoyment, offering a soothing escape from routine.",
  GreekBooks: "Exploring Greek literature enriches cultural awareness and enhances linguistic capabilities.",
  Shayari: "Crafting and appreciating Shayari elevates emotional expression and fosters creative exploration.",
  Quotes: "Curating inspiring quotes serves as a catalyst for personal growth and self-reflection.",
  Reading: "Engaging with literature broadens knowledge, enhances vocabulary, and sharpens critical thinking while providing an immersive escape."
};

const hobbies = Object.keys(hobbyImages); // Get hobby names

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <img src={avatarImage} alt="Avatar" className="avatar" />
        <h2>About Me</h2>
        <p className="about-text">
          I am a dedicated and passionate web designer and data analyst, continuously seeking to 
          enhance my skills and knowledge in both fields. My journey in web designing began with 
          a fascination for creating visually stunning and user-friendly websites that provide 
          an exceptional user experience. With a keen eye for detail and a strong foundation in 
          design principles, I strive to bring creative concepts to life.
        </p>
        <p className="about-text">
          In addition to my design skills, I have a strong inclination towards data analytics. 
          I love diving into data to uncover insights that can drive decision-making and 
          improve business outcomes. My analytical mindset enables me to approach problems 
          methodically and develop effective solutions.
        </p>
        <p className="about-text">
          I believe that the combination of web design and data analysis empowers me to 
          create impactful digital experiences while leveraging data to inform design choices. 
          I am always eager to learn and grow, taking on challenges that enhance my problem-solving 
          abilities. Let's connect and explore how we can create meaningful solutions together!
        </p>
      

        <div className="hobbies-section">
          <h3>Hobbies</h3>
          <div className="hobbies-container">
            {hobbies.map((hobby, index) => (
              <div key={index} className="hobby-card">
                <img src={hobbyImages[hobby]} alt={hobby} className="hobby-image" />
                <h4>{hobby}</h4>
                <p className="hobby-description">{hobbyDescriptions[hobby]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
