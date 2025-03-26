import React from 'react';
import { useTranslation } from 'react-i18next';

const Loading = () => {
  const { t } = useTranslation();
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-dark-bg z-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute w-full h-full border-4 border-white border-opacity-10 rounded-full"></div>
          <div className="absolute w-full h-full border-4 border-t-accent border-opacity-80 rounded-full animate-spin"></div>
        </div>
        <h2 className="text-xl font-montserrat font-light">{t('loading.title')}</h2>
        <p className="text-gray-400 text-sm mt-2">{t('loading.description')}</p>
      </div>
    </div>
  );
};

export default Loading;
