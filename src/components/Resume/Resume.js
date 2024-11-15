import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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

      <motion.div
        className="resume__content"
        initial={{ opacity: 0, x: -100, scale: 0.8, rotate: -5 }} 
        animate={{
          opacity: 1,
          x: 0,
          scale: [0.9, 1.05, 1], 
          rotate: 0,
        }}
        transition={{
          duration: 1.2, 
          ease: [0.43, 0.13, 0.23, 0.96], 
          delay: 0.3, 
        }}
      >
        <div className="resume__download-button"></div>
        <ResumeHTML />
        <div className="resume__download-button"></div>
      </motion.div>
    </div>
  );
};

export default Resume;