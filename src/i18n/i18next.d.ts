import { ResourceType } from '.';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: ResourceType;
  }
}
