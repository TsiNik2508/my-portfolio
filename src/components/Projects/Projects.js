import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.scss';

import russianTravelImg from '../../images/across-russia.webp';
import mestoReactImg from '../../images/mesto-react.webp';
import movieExplorerImg from '../../images/movieExplorer.webp';
import portfolioImg from '../../images/portfolio.webp';
import palcImg from '../../images/palc.webp';

const projectsData = [
  {
    title: 'projects.palc_project.title',
    description: 'projects.palc_project.description',
    github: 'https://github.com/TsiNik2508/Palc',
    demo: 'https://tsinik2508.github.io/Palc/',
    imageUrl: palcImg,
  },
  {
    title: 'projects.old_portfolio.title',
    description: 'projects.old_portfolio.description',
    github: 'https://github.com/TsiNik2508/Portfolio',
    demo: 'https://tsinik2508.github.io/Portfolio/',
    imageUrl: portfolioImg,
  },
  {
    title: 'projects.diploma_project.title',
    description: 'projects.diploma_project.description',
    github: 'https://github.com/TsiNik2508/movies-explorer-api',
    demo: 'https://github.com/TsiNik2508/movies-explorer-frontend',
    imageUrl: movieExplorerImg,
  },
  {
    title: 'projects.mesto_russia.title',
    description: 'projects.mesto_russia.description',
    github: 'https://github.com/TsiNik2508/react-mesto-auth',
    demo: 'https://tsinik2508.github.io/sign-in',
    imageUrl: mestoReactImg,
  },
  {
    title: 'projects.russian_travel.title',
    description: 'projects.russian_travel.description',
    github: 'https://github.com/TsiNik2508/russian-travel',
    demo: 'https://tsinik2508.github.io/russian-travel/',
    imageUrl: russianTravelImg,
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="projects">
      <h2 className="projects__title">
        {t('projects.title')} <span className="highlight">{t('projects.highlight')}</span>
      </h2>
      <p className="projects__subtitle">{t('projects.subtitle')}</p>
      <div className="projects__grid">
        {projectsData.map((project, index) => (
          <div key={index} className="projects__card">
            <div className="projects__image-wrapper">
              <img src={project.imageUrl} alt={t(project.title)} className="projects__image" />
            </div>
            <div className="projects__content">
              <h3 className="projects__name">{t(project.title)}</h3>
              <p className="projects__description">{t(project.description)}</p>
              <div className="projects__links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__link">
                  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="projects__icon">
                    <path d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5" />
                  </svg>
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="projects__link">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="projects__icon">
                    <path d="M20,21H4a2,2,0,0,1-2-2V5A2,2,0,0,1,4,3h8a1,1,0,0,1,0,2H4V19H20V16a1,1,0,0,1,2,0v3A2,2,0,0,1,20,21Z" />
                    <path d="M21.71,8.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,8H16.71a11.78,11.78,0,0,0-10.6,6.55,1,1,0,0,0,.44,1.34A.93.93,0,0,0,7,16a1,1,0,0,0,.89-.55A9.81,9.81,0,0,1,16.71,10h1.88l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,8.29Z" />
                  </svg>
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
