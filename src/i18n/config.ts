import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uz from './locales/uz.json';
import en from './locales/en.json';
import ru from './locales/ru.json';
import tr from './locales/tr.json';
import fr from './locales/fr.json';

const resources = {
  uz: { translation: uz },
  en: { translation: en },
  ru: { translation: ru },
  tr: { translation: tr },
  fr: { translation: fr },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'uz',
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
