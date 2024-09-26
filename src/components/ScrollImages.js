// ScrollImages.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const generateImagePaths = (num) => {
  const paths = [];
  for (let i = 1; i <= num; i++) {
    const formattedNumber = String(i).padStart(5, '0');
    paths.push(`../assets/images/3d/male${formattedNumber}.jpg`);
  }
  return paths;
};

const ScrollImages = () => {
  const imageRefs = useRef([]);
  const images = generateImagePaths(300);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      imageRefs.current.forEach((image, index) => {
        const movement = scrollPos * 0.5;
        gsap.to(image, {
          y: movement + index * 50,
          duration: 0.2,
          ease: 'power1.out',
        });
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '300vh' }}>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Scroll to Move Images</h1>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {images.map((src, index) => (
          <img
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            src={src}
            alt={`Image ${index + 1}`}
            style={{
              position: 'absolute',
              width: '100%',
              height: 'auto',
              top: `${index * 50}px`,
              left: 0,
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollImages; // Ensure this line is present
