import React from 'react';
import { useTranslation } from 'react-i18next';
import './MyGithub.scss';

const MyGithub = () => {
  const { t } = useTranslation();

  return (
    <div className="my-github">
      <h2 className="my-github__title">
        {t('my_github.title')} <span className="highlight">{t('my_github.github')}</span>
      </h2>
      <a
        href="https://github.com/TsiNik2508"
        target="_blank"
        rel="noopener noreferrer"
        className="my-github__link"
      >
        {t('my_github.visit_profile')}
      </a>
    </div>
  );
};

export default MyGithub;
