// https://brainsandbeards.com/blog/i18n-in-react-native-apps
// https://dev.to/mell3s/react-native-react-i18next-setup-typescript-22hj
// https://gist.github.com/raghava/6aa2a45f4b897a80c012

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en';

export const resources = {
  en: {
    translation: translationEN,
  },
  // TODO: Add Vietnamese Locale
  // vi: {
  //   translation: translationVI,
  // },
} as const;

export type ResourceType = (typeof resources)['en'];

export const lang = 'en';

export default i18n.use(initReactI18next).init({
  resources,
  lng: lang,
  fallbackLng: lang,
  defaultNS: lang,
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
  // https://stackoverflow.com/questions/70493788/i18nextpluralresolver-your-environment-seems-not-to-be-intl-api-compatible-u
  compatibilityJSON: 'v3',
});
