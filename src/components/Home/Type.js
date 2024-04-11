import React from 'react';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

function Type() {
  const { t } = useTranslation();

  return (
    <Typewriter
      options={{
        strings: [
          t('Full Stack Developer'),
          t('Data Scientist / Data Analyst'),
          t('Machine Learning Enthusiast'),
          t('Open-Source Contributor'),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
