import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import CodingLove from '../CodingLove/CodingLove'; 
import './About.scss';

const hobbies = [
  'about_me.hobby_drums',
  'about_me.hobby_travel',
  'about_me.hobby_movies',
];

const links = [
  {
    href: 'https://practicum.yandex.ru/',
    label: 'about_me.practicum',
  },
];

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
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="highlight"
                aria-label={t(link.label)}
              >
                {' '}{t(link.label)}
              </a>
            ))}, <br />{t('about_me.self_study')}
          </p>
          <p className="about__hobbies-title">{t('about_me.hobbies')}</p>
          <ul className="about__hobbies">
            {hobbies.map(hobby => (
              <li key={hobby}>{t(hobby)}</li>
            ))}
          </ul>
        </div>
        <div className="about__image">
          <CodingLove /> 
        </div>
      </div>
    </div>
  );
};

export default memo(About);
