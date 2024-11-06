import React from 'react';
import { useTranslation } from 'react-i18next';
import ResumeHTML from '../ResumeHTML/ResumeHTML';
import './Resume.scss';

const Resume = () => {
  const { t } = useTranslation();

  return (
    <div className="resume">
      <h2
        className="resume__title"
        dangerouslySetInnerHTML={{ __html: t('resume.title') }}
      ></h2>

      <div className="resume__download-button">
      </div>
      <ResumeHTML />

      <div className="resume__download-button">
      </div>
    </div>
  );
};

export default Resume;
