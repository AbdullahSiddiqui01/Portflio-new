import React, { useEffect, useState } from 'react';
import "../styles/CarGame.css"; 
import carImage from '../assets/images/car.png'; // Add your car image here

const CarGame = () => {
  const [carPosition, setCarPosition] = useState(50);
  const [isGameOver, setIsGameOver] = useState(false);
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(10); // Increased initial speed
  const [gameInterval, setGameInterval] = useState(null);
  const [obstacleInterval, setObstacleInterval] = useState(null);

  // Key event listener for car movement
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft' && carPosition > 0) {
        setCarPosition(prev => Math.max(prev - 10, 0));
      } else if (event.key === 'ArrowRight' && carPosition < 90) {
        setCarPosition(prev => Math.min(prev + 10, 90));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [carPosition]);

  // Generate new obstacles
  const generateObstacle = () => {
    const newObstacle = {
      id: Math.random(),
      position: Math.floor(Math.random() * 90), // Random horizontal position
      top: 0
    };
    setObstacles((prev) => [...prev, newObstacle]);
  };

  // Move obstacles and check for collisions
  const moveObstacles = () => {
    setObstacles((prev) => {
      return prev.map(obstacle => ({
        ...obstacle, 
        top: obstacle.top + speed // Move obstacle down
      })).filter(obstacle => obstacle.top < 600); // Keep within the view
    });
  };

  // Check for collision with the car
  const checkCollision = () => {
    obstacles.forEach(obstacle => {
      if (obstacle.top >= 550 && Math.abs(obstacle.position - carPosition) < 10) {
        setIsGameOver(true);
        clearInterval(gameInterval);
        clearInterval(obstacleInterval);
      }
    });
  };

  // Start the game
  const startGame = () => {
    setIsGameOver(false);
    setScore(0);
    setObstacles([]);
    clearInterval(gameInterval);
    clearInterval(obstacleInterval);

    const newInterval = setInterval(() => {
      moveObstacles();
      checkCollision();
      setScore((prev) => prev + 1); // Increment score
      setSpeed((prev) => Math.min(prev + 0.1, 30)); // Gradually increase speed
    }, 100);

    setGameInterval(newInterval);
    generateObstacle();
    const newObstacleInterval = setInterval(generateObstacle, 1500); // More frequent obstacles
    setObstacleInterval(newObstacleInterval);
  };

  // Clear intervals if the game is over
  useEffect(() => {
    if (isGameOver) {
      clearInterval(gameInterval);
      clearInterval(obstacleInterval);
    }
  }, [isGameOver, gameInterval, obstacleInterval]);

  return (
    <div className="game-container">
      <h1>Car Game</h1>
      <h2>Score: {score}</h2>
      {isGameOver ? (
        <div className="game-over">
          <h2>Game Over!</h2>
          <p>Your score: {score}</p>
          <button onClick={startGame}>Restart</button>
        </div>
      ) : (
        <>
          <div className="road">
            <img src={carImage} alt="Car" className="car" style={{ left: `${carPosition}%` }} />
            {obstacles.map(obstacle => (
              <div 
                key={obstacle.id} 
                className="obstacle" 
                style={{ left: `${obstacle.position}%`, top: `${obstacle.top}px`, backgroundColor: 'red' }} // Changed color to red for visibility
              ></div>
            ))}
            <div className="road-sign" style={{ left: '20%', top: '200px' }}>🚧</div>
            <div className="road-sign" style={{ left: '70%', top: '400px' }}>🚦</div>
          </div>
          <button className="start-button" onClick={startGame}>Start Game</button>
        </>
      )}
    </div>
  );
};

export default CarGame;
