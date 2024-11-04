import React from 'react';
import { useTranslation } from 'react-i18next';
import CodingLove from '../CodingLove/CodingLove'; 
import './About.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <h2 className="about__title">
        {t('about_me.title')} <span className="highlight">{t('about_me.highlight_title')}</span>
      </h2>
      <div className="about__content">
        <div className="about__text">
          <p className="about__description">
            {t('about_me.intro')} <span className="highlight">{t('about_me.from')}</span>
          </p>
          <p className="about__description">
            {t('about_me.work')} <span className="highlight">Diar</span>.
          </p>
          <p className="about__description">
            {t('about_me.education')}
            <a href="https://practicum.yandex.ru/" target="_blank" rel="noopener noreferrer" className="highlight"> {t('about_me.practicum') } </a>, <br />{t('about_me.self_study')}
          </p>
          <p className="about__hobbies-title">{t('about_me.hobbies')}</p>
          <ul className="about__hobbies">
            <li>{t('about_me.hobby_drums')}</li>
            <li>{t('about_me.hobby_travel')}</li>
            <li>{t('about_me.hobby_movies')}</li>
          </ul>
        </div>
        <div className="about__image">
        <CodingLove /> 
        </div>
      </div>
    </div>
  );
};

export default About;
