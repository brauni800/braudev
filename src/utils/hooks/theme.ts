import { THEME_MODE } from 'src/types/theme.type'
import { createContext } from 'react'

export const ThemeContext = createContext({
  changeTheme: (theme: THEME_MODE) => {},
  themeMode: THEME_MODE.SYSTEM
})
