import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import translationEN from './locales/en';
import translationVI from './locales/vi';

export const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
} as const;

export type Resource = (typeof resources)['en'];

export const lang = 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: lang,
  fallbackLng: lang,
  defaultNS: lang,
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
});

export function useI18n() {
  return useTranslation('translation');
}
