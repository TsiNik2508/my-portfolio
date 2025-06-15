import React, { memo, useMemo } from 'react';
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

const TechIcon = memo(({ icon, name }) => (
  <div className="tech-stack__item">
    <img 
      src={icon} 
      alt={name} 
      className="tech-stack__icon" 
      loading="lazy"
      width="64"
      height="64"
    />
  </div>
));

const TechStack = () => {
  const { t } = useTranslation();

  const techIcons = useMemo(() => [
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
  ], []);

  return (
    <div className="tech-stack">
      <h2 className="tech-stack__title">
        {t('tech_stack.title')} <span className="highlight">{t('tech_stack.stack')}</span>
      </h2>
      <div className="tech-stack__grid">
        {techIcons.map((tech, index) => (
          <TechIcon key={index} icon={tech.icon} name={tech.name} />
        ))}
      </div>
    </div>
  );
};

export default memo(TechStack);
