import React, { useEffect } from 'react';
import './StarBackground.scss';

const StarBackground = () => {
  useEffect(() => {
    const container = document.querySelector('.stars-container');

    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.setProperty('--star-index', i); 
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      container.appendChild(star);
    }
  }, []);

  return <div className="stars-container"></div>;
};

export default StarBackground;
