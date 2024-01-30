import { THEME } from 'src/types/theme.type'
import Cookie from 'js-cookie'

export const THEME_COOKIE_KEY = 'theme'

export const isSystemTheme = () => !(THEME_COOKIE_KEY in Cookie.get()) && window.matchMedia('(prefers-color-scheme: dark)').matches
export const isDarkTheme = () => Cookie.get(THEME_COOKIE_KEY) === THEME.DARK

export const themeSwitcher = () => {
  if (isDarkTheme() || isSystemTheme()) {
    document.documentElement.classList.add(THEME.DARK)
  } else {
    document.documentElement.classList.remove(THEME.DARK)
  }
}

export const setLightTheme = () => {
  Cookie.set(THEME_COOKIE_KEY, THEME.LIGHT)
  themeSwitcher()
}

export const setDarkTheme = () => {
  Cookie.set(THEME_COOKIE_KEY, THEME.DARK)
  themeSwitcher()
}

export const removeTheme = () => {
  Cookie.remove(THEME_COOKIE_KEY)
  themeSwitcher()
}
