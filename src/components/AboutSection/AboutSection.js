import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutSection.scss';

const AboutSection = () => {
  const { t } = useTranslation();
  
  const [positions, setPositions] = useState({
    HTML: { x: 0, y: 0 },
    CSS: { x: 0, y: 0 },
    JavaScript: { x: 0, y: 0 },
    React: { x: 0, y: 0 },
    Node: { x: 0, y: 0 },
    Git: { x: 0, y: 0 },
    API: { x: 0, y: 0 },
    UX: { x: 0, y: 0 },
  });

  const handleMouseDown = (event, tech) => {
    const startX = event.clientX - positions[tech].x;
    const startY = event.clientY - positions[tech].y;

    const handleMouseMove = (moveEvent) => {
      const newX = moveEvent.clientX - startX;
      const newY = moveEvent.clientY - startY;
      setPositions((prevPositions) => ({
        ...prevPositions,
        [tech]: { x: newX, y: newY },
      }));
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Настройки для анимации появления при скролле
  const { ref: descriptionRef1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: descriptionRef2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: descriptionRef3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: descriptionRef4, inView: inView4 } = useInView({ triggerOnce: true });

  return (
    <div className="about-section">
      <h2 className="about-section__title">
        {t('aboutSection.titlePart1')} <span className="highlight">{t('aboutSection.titlePart2')}</span>
      </h2>
      <div className="about-section__content">
        <div className="about-section__text">
          <motion.p
            ref={descriptionRef1}
            className="about-section__description"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={inView1 ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {t('aboutSection.description1')}
          </motion.p>
          <motion.p
            ref={descriptionRef2}
            className="about-section__description"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={inView2 ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          >
            {t('aboutSection.description2')} <span className="highlight italic">{t('aboutSection.HTML_CSS_JS')}</span>.
          </motion.p>
          <motion.p
            ref={descriptionRef3}
            className="about-section__description"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={inView3 ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
          >
            {t('aboutSection.description3')} <span className="highlight">{t('aboutSection.webApplications')}</span>.
          </motion.p>
          <motion.p
            ref={descriptionRef4}
            className="about-section__description"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={inView4 ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
          >
            {t('aboutSection.description4')} <span className="highlight">{t('aboutSection.node')}</span> {t('aboutSection.and')} <span className="highlight">{t('aboutSection.react')}</span>.
          </motion.p>
        </div>
        <div className="about-section__cloud">
          {Object.keys(positions).map((tech) => (
            <span
              key={tech}
              className={`tech tech--${tech.toLowerCase()}`}
              style={{
                transform: `translate(${positions[tech].x}px, ${positions[tech].y}px)`,
                cursor: 'grab',
              }}
              onMouseDown={(e) => handleMouseDown(e, tech)}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
