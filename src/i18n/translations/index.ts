import { en } from 'src/i18n/translations/en'
import { es } from 'src/i18n/translations/es'

import UnitedStatesFlagIcon from 'src/assets/icons/flags/UnitedStatesFlagIcon.astro'
import MexicoFlagIcon from 'src/assets/icons/flags/MexicoFlagIcon.astro'

export const translations = { en, es }

export const languages = Object.freeze({
  en: {
    Icon: UnitedStatesFlagIcon,
    label: 'English'
  },
  es: {
    Icon: MexicoFlagIcon,
    label: 'Español'
  }
})

export const defaultLanguage = 'en'
