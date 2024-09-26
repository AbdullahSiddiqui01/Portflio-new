import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Function to generate the image paths dynamically
const generateImagePaths = (num) => {
  const paths = [];
  for (let i = 1; i <= num; i++) {
    // Format the image number to match the naming convention
    const formattedNumber = String(i).padStart(5, '0'); // Pad with zeros to 5 digits
    paths.push(`../assets/images/3d/male${formattedNumber}.jpg`); // Adjust path according to your structure
  }
  return paths;
};

const ScrollImages = () => {
  const imageRefs = useRef([]);
  const images = generateImagePaths(300); // Generate paths for 300 images

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      imageRefs.current.forEach((image, index) => {
        // Change the speed and direction of the images based on scroll position
        const movement = scrollPos * 0.5; // Adjust speed here
        gsap.to(image, {
          y: movement + index * 50, // Adjust this value to change the offset per image
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '300vh' }}> {/* Create enough height for scrolling */}
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
              top: `${index * 50}px`, // Initial offset for each image
              left: 0,
              pointerEvents: 'none', // Prevent mouse events on images
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollImages;
