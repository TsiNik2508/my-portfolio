import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.scss';

const HeroSection = () => {
  const { t } = useTranslation();
  const phrases = [
    t('heroSection.phrase1'),
    t('heroSection.phrase2'),
    t('heroSection.phrase3'),
    t('heroSection.phrase4'),
    t('heroSection.phrase5')
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let typingSpeed = 100;
    let timeout;

    if (isPaused) {
      timeout = setTimeout(() => setIsPaused(false), 2000);
    } else if (isDeleting) {
      typingSpeed = 50;
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(phrases[phraseIndex].slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, typingSpeed);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    } else {
      if (charIndex < phrases[phraseIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(phrases[phraseIndex].slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        setIsPaused(true);
        setIsDeleting(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isPaused, phraseIndex, phrases]);

  return (
    <div className="hero-section">
      <div className="hero-section__text">
        <h1 className="hero-section__greeting">
          {t('heroSection.greeting')} <span className="hero-section__smile">:)</span>
        </h1>
        <h2 className="hero-section__name">
          {t('heroSection.intro')} <span className="highlight">{t('heroSection.name')}</span>
        </h2>
        <h3 className="hero-section__role">
          {displayedText}
          <span className="hero-section__cursor">|</span>
        </h3>
      </div>
      <div 
        className="hero-section__code"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="hero-section__code-header">
          <span className="header-btn close"></span>
          <span className="header-btn minimize"></span>
          <span className="header-btn expand"></span>
          <span className="header-title">HelloWorld.js</span>
        </div>
        <pre className="hero-section__code-window">
          <code>
            {isHovered ? (
              <span className="code__string">"Hello, World!"</span>
            ) : (
              <>
                <span className="code__keyword">function</span> <span className="code__function">sayHello</span>() &#123;
                <br />
                &nbsp;&nbsp;<span className="code__keyword">console</span>.<span className="code__method">log</span>(<span className="code__string">"Hello, World!"</span>);
                <br />
                &#125;
                <br />
                <span className="code__function">sayHello</span>();
              </>
            )}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default HeroSection;
