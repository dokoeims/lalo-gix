import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Importamos los recursos de traducción directamente
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Los recursos de traducción
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  // Carga traducciones usando http (puede cargar desde archivos estáticos también)
  .use(Backend)
  // Detecta el idioma del usuario
  .use(LanguageDetector)
  // Integración con React
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false, // React ya lo hace seguro
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
