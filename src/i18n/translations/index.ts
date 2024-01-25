import { en } from 'src/i18n/translations/en'
import { es } from 'src/i18n/translations/es'

import UnitedStatesFlagIcon from 'src/components/icons/flags/UnitedStatesFlagIcon'
import MexicoFlagIcon from 'src/components/icons/flags/MexicoFlagIcon'

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
