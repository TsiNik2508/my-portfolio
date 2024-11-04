import React from 'react';
import { useTranslation } from 'react-i18next';
import './TechStack.scss';
import JSIcon from '../../assets/js.svg';
import ReactIcon from '../../assets/react.svg';
import NodeIcon from '../../assets/node.svg';
import NextIcon from '../../assets/next.svg';
import PostmanIcon from '../../assets/postman.svg';
import MongoDBIcon from '../../assets/mongodb.svg';
import APIIcon from '../../assets/api.svg';
import WebpackIcon from '../../assets/webpack.svg';
import ReduxIcon from '../../assets/redux.svg';
import GithubIcon from '../../assets/github.svg';

const TechStack = () => {
  const { t } = useTranslation();

  const techIcons = [
    { icon: JSIcon, name: 'JavaScript' },
    { icon: ReactIcon, name: 'React' },
    { icon: NodeIcon, name: 'Node.js' },
    { icon: NextIcon, name: 'Next.js' },
    { icon: PostmanIcon, name: 'Postman' },
    { icon: MongoDBIcon, name: 'MongoDB' },
    { icon: APIIcon, name: 'API' },
    { icon: WebpackIcon, name: 'Webpack' },
    { icon: ReduxIcon, name: 'Redux' },
    { icon: GithubIcon, name: 'GitHub' },
  ];

  return (
    <div className="tech-stack">
      <h2 className="tech-stack__title">
        {t('tech_stack.title')} <span className="highlight">{t('tech_stack.stack')}</span>
      </h2>
      <div className="tech-stack__grid">
        {techIcons.map((tech, index) => (
          <div key={index} className="tech-stack__item">
            <img src={tech.icon} alt={tech.name} className="tech-stack__icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
