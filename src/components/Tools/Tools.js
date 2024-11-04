import React from 'react';
import { useTranslation } from 'react-i18next';
import './Tools.scss';
import WindowsIcon from '../../assets/windows.svg';
import VSCodeIcon from '../../assets/vscode.svg';
import FigmaIcon from '../../assets/figma.svg';
import GitIcon from '../../assets/git.svg'; 

const Tools = () => {
  const { t } = useTranslation();

  const toolsIcons = [
    { icon: WindowsIcon, name: 'Windows' },
    { icon: VSCodeIcon, name: 'VS Code' },
    { icon: FigmaIcon, name: 'Figma' },
    { icon: GitIcon, name: 'Git' }, 
  ];

  return (
    <div className="tools">
      <h2 className="tools__title">
        <span className="highlight">{t('tools.highlight')}</span> {t('tools.title')}
      </h2>
      <div className="tools__grid">
        {toolsIcons.map((tool, index) => (
          <div key={index} className="tools__item">
            <img src={tool.icon} alt={tool.name} className="tools__icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
