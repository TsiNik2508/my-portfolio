import React from 'react';
import { useTranslation } from 'react-i18next';
import GitHubCalendar from 'react-github-calendar';
import './MyGithub.scss';

const MyGithub = () => {
  const { t } = useTranslation();

  return (
    <div className="my-github">
      <h2 className="my-github__title">
        {t('my_github.title')} <span className="highlight">{t('my_github.github')}</span>
      </h2>
      <div className="my-github__calendar">
        <GitHubCalendar
          username="TsiNik2508"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </div>
    </div>
  );
};

export default MyGithub;
