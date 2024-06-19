// eslint-disable-next-line import/no-unresolved
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';

import en from './en.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

export const geti18nResolvedLanguage = (): string =>
  i18n.resolvedLanguage ?? 'en';

export type SupportedLanguage = 'en';

export const LANGUAGES = ['en'];

const resources = {
  en: {
    translation: en,
  },
};

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  fallbackLng: ['en'],
  lng: `${deviceLanguage[0]}${deviceLanguage[1]}`,
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});

export default i18n;
