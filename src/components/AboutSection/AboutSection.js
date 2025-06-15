import React, { useState, useCallback, memo, useMemo, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutSection.scss';

const DescriptionBase = forwardRef(function Description({ inView, delay, children }, ref) {
  return (
    <motion.p
      ref={ref}
      className="about-section__description"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeInOut" }}
      style={{ marginBottom: '20px' }}
    >
      {children}
    </motion.p>
  );
});
const Description = memo(DescriptionBase);

const TechCloud = memo(({ positions, onMouseDown }) => (
  <div className="about-section__cloud">
    {Object.keys(positions).map((tech) => (
      <span
        key={tech}
        className={`tech tech--${tech.toLowerCase()}`}
        style={{
          transform: `translate(${positions[tech].x}px, ${positions[tech].y}px)`,
          cursor: 'grab',
        }}
        onMouseDown={(e) => onMouseDown(e, tech)}
      >
        {tech}
      </span>
    ))}
  </div>
));

const AboutSection = () => {
  const { t } = useTranslation();
  
  const initialPositions = useMemo(() => ({
    HTML: { x: 0, y: 0 },
    CSS: { x: 0, y: 0 },
    JavaScript: { x: 0, y: 0 },
    React: { x: 0, y: 0 },
    Node: { x: 0, y: 0 },
    Git: { x: 0, y: 0 },
    API: { x: 0, y: 0 },
    UX: { x: 0, y: 0 },
  }), []);

  const [positions, setPositions] = useState(initialPositions);

  const handleMouseDown = useCallback((event, tech) => {
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
  }, [positions]);

  // Настройки для анимации появления при скролле
  const { ref: descriptionRef1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: descriptionRef2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: descriptionRef3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: descriptionRef4, inView: inView4 } = useInView({ triggerOnce: true });

  return (
    <section className="about-section">
      <h2 className="about-section__title">
        {t('aboutSection.titlePart1')} <span className="highlight">{t('aboutSection.titlePart2')}</span>
      </h2>
      <div className="about-section__content">
        <div className="about-section__text">
          <Description ref={descriptionRef1} inView={inView1} delay={0}>
            {t('aboutSection.description1')}
          </Description>
          <Description ref={descriptionRef2} inView={inView2} delay={0.3}>
            {t('aboutSection.description2')} <span className="highlight italic">{t('aboutSection.HTML_CSS_JS')}</span>.
          </Description>
          <Description ref={descriptionRef3} inView={inView3} delay={0.6}>
            {t('aboutSection.description3')} <span className="highlight">{t('aboutSection.webApplications')}</span>.
          </Description>
          <Description ref={descriptionRef4} inView={inView4} delay={0.9}>
            {t('aboutSection.description4')} <span className="highlight">{t('aboutSection.node')}</span> {t('aboutSection.and')} <span className="highlight">{t('aboutSection.react')}</span>.
          </Description>
        </div>
        <TechCloud positions={positions} onMouseDown={handleMouseDown} />
      </div>
    </section>
  );
};

export default memo(AboutSection);
