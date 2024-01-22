const THEME_OPTIONS = Object.freeze({
  LIGHT: 'light',
  DARK: 'dark'
})

export const themeSwitcher = () => {
  if (localStorage.theme === THEME_OPTIONS.DARK || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add(THEME_OPTIONS.DARK)
  } else {
    document.documentElement.classList.remove(THEME_OPTIONS.DARK)
  }
}

export const setLightTheme = () => {
  localStorage.setItem('theme', THEME_OPTIONS.LIGHT)
  themeSwitcher()
}

export const setDarkTheme = () => {
  localStorage.setItem('theme', THEME_OPTIONS.DARK)
  themeSwitcher()
}

export const removeTheme = () => {
  localStorage.removeItem('theme')
  themeSwitcher()
}
