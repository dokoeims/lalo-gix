import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button 
        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${i18n.language === 'es' ? 'bg-accent' : 'bg-white bg-opacity-10'}`}
        onClick={() => changeLanguage('es')}
        aria-label="Cambiar a español"
      >
        {t('language.es')}
      </button>
      <button 
        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${i18n.language === 'en' ? 'bg-accent' : 'bg-white bg-opacity-10'}`}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        {t('language.en')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
