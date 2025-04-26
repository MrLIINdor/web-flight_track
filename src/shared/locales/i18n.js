import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './languages/ru.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ru,
    },
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
