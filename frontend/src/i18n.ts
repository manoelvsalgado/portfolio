import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './locales/resources';

void i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en', 'es'],
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

document.documentElement.lang = i18n.language || 'pt';

export default i18n;
