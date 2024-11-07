import React, { useEffect } from 'react';
import './StarBackground.scss';

const StarBackground = () => {
  useEffect(() => {
    const container = document.querySelector('.stars-container');

    // Создание звезд
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.setProperty('--star-index', i); 
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      container.appendChild(star);
    }

    // Обработчик для отслеживания положения мыши
    const handleMouseMove = (event) => {
      const screenWidth = window.innerWidth;
      const mouseX = event.clientX;

      // Определяем направление: -1 для левой части экрана, 1 для правой
      const direction = mouseX < screenWidth / 2 ? -1 : 1;
      document.documentElement.style.setProperty('--star-direction', direction);
    };

    // Добавляем слушатель события
    window.addEventListener('mousemove', handleMouseMove);

    // Удаляем слушатель при размонтировании компонента
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div className="stars-container"></div>;
};

export default StarBackground;
