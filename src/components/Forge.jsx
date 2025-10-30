import React, { useState, useEffect } from 'react';

export default function Forge() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [fontSize, setFontSize] = useState('4rem');
  const [subtitleFontSize, setSubtitleFontSize] = useState('1.5rem');

  useEffect(() => {
    // Trigger the fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Handle responsive font size
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setFontSize('2rem');
        setSubtitleFontSize('1rem');
      } else if (window.innerWidth <= 768) {
        setFontSize('3rem');
        setSubtitleFontSize('1.25rem');
      } else {
        setFontSize('4rem');
        setSubtitleFontSize('1.5rem');
      }
    };
    
    // Set initial font size
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyle = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    backgroundImage: 'url("/Archeforge_flat.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1
  };

  const welcomeTextStyle = {
    position: 'relative',
    zIndex: 2,
    color: 'white',
    fontSize: fontSize,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 1.5s ease-in-out, transform 0.3s ease',
    fontFamily: "'Montserrat', 'Bebas Neue', Arial, sans-serif",
    cursor: 'pointer',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    animation: 'none'
  };

  const subtitleStyle = {
    position: 'relative',
    zIndex: 2,
    color: 'white',
    fontSize: subtitleFontSize,
    fontWeight: 'normal',
    textAlign: 'center',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 1.5s ease-in-out',
    fontFamily: "'Montserrat', 'Bebas Neue', Arial, sans-serif",
    marginTop: '1rem'
  };

  const handleClick = () => {
    setIsClicked(true);
    // Reset the animation after it completes
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  return (
    <div style={containerStyle} role="img" aria-label="Forge background image">
      <div style={overlayStyle}></div>
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <h1
          style={welcomeTextStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          Welcome to the Forge
        </h1>
        <p style={subtitleStyle}>
          Application coming soon
        </p>
      </div>
    </div>
  );
}