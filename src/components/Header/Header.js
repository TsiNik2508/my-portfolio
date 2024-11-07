import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.scss';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolling(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang.toLowerCase());
    localStorage.setItem('preferredLanguage', lang);
  };

  return (
    <header
      className={`header ${isScrolling ? 'header--scrolled' : ''} ${isHovered ? 'header--hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to="/" className="header__logo">
        {t('header.Nikita')}
      </Link>
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <Link to="/" className="header__link">
          <svg className="header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
          {t('header.home')}
        </Link>
        <Link to="/about" className="header__link">
          <svg className="header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle fill="#FFFFFF" cx="12" cy="8" r="4"/>
            <path fill="#FFFFFF" d="M12 12c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          {t('header.about')}
        </Link>
        <Link to="/projects" className="header__link">
          <svg className="header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
          </svg>
          {t('header.projects')}
        </Link>
        <Link to="/resume" className="header__link">
          <svg className="header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d="M13 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9l-5-5zm3 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 10H13z"/>
          </svg>
          {t('header.resume')}
        </Link>
      </nav>
      <div className="header__language-switch">
        <span
          className={`header__language ${language === 'EN' ? 'active' : ''}`}
          onClick={() => handleLanguageChange('EN')}
        >
          EN
        </span>
        <span
          className={`header__language ${language === 'RU' ? 'active' : ''}`}
          onClick={() => handleLanguageChange('RU')}
        >
          RU
        </span>
      </div>
      <div className="header__burger" onClick={toggleMenu}>
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
      </div>
    </header>
  );
};

export default Header;
