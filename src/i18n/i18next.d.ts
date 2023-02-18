import { lang, Resource } from '.';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: lang;
    resources: Resource;
  }
}
