import { defaultLanguage, translations } from 'src/i18n/translations'

export type TranslationKeyProp = keyof typeof translations[typeof defaultLanguage]

export function getLangFromURL (url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in translations) return lang as keyof typeof translations
  return defaultLanguage
}

export function useTranslations (lang: keyof typeof translations) {
  return function t (key: TranslationKeyProp) {
    return translations[lang][key] || translations[defaultLanguage][key]
  }
}
