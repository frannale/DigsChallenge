import { useTranslation } from 'react-i18next';

export const useTranslationByNamespace = (namespace = '') => {
  const { t: tHook, i18n } = useTranslation();
  const t = (key: string, params?: Record<string, unknown>) => {
    return tHook(`${namespace}${key}`, params ?? {});
  };
  return { t, i18n };
};
