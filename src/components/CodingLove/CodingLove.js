import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CodingLove.scss';

const CodingLove = () => {
  const { t } = useTranslation();
  const [styleIndex, setStyleIndex] = useState(0);

  const styles = [
    { color: '#8E2DE2' },
    { color: '#FFCB6B' },
    { color: '#C3E88D' },
    { color: '#89DDFF' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStyleIndex((prevIndex) => (prevIndex + 1) % styles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coding-love" style={styles[styleIndex]}>
      {t('about_me.love_coding')}
    </div>
  );
};

export default CodingLove;
