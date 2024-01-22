import { removeTheme, setDarkTheme, setLightTheme } from 'src/utils/theme-switcher'
import { capitalizeString } from 'src/utils/capitalize-string'
import { ThemeContext } from 'src/utils/hooks/theme'
import { THEME_MODE } from 'src/types/theme.type'
import { useState, type ReactNode } from 'react'

import ComputerIcon from 'src/components/icons/ComputerIcon'
import MoonIcon from 'src/components/icons/MoonIcon'
import SunIcon from 'src/components/icons/SunIcon'
import Menu from 'src/components/menu/Menu'

const THEME_TEXT: Record<THEME_MODE, string> = {
  [THEME_MODE.SYSTEM]: 'system',
  [THEME_MODE.WHITE]: 'white',
  [THEME_MODE.DARK]: 'dark'
}

const THEME_ICON: Record<THEME_MODE, ReactNode> = {
  [THEME_MODE.SYSTEM]: <ComputerIcon className='w-4'/>,
  [THEME_MODE.WHITE]: <SunIcon className='w-4'/>,
  [THEME_MODE.DARK]: <MoonIcon className='w-4'/>
}

export default function ThemeButton () {
  const [themeMode, setThemeMode] = useState<THEME_MODE>(THEME_MODE.SYSTEM)

  const changeTheme = (theme: THEME_MODE) => () => {
    if (theme === THEME_MODE.WHITE) setLightTheme()
    else if (theme === THEME_MODE.DARK) setDarkTheme()
    else removeTheme()
    setThemeMode(theme)
  }

  return (
    <ThemeContext.Provider value={{ themeMode, changeTheme }}>
      <Menu>
        <Menu.MenuButton>
          {THEME_ICON[themeMode]}
          <span>{capitalizeString(THEME_TEXT[themeMode])}</span>
        </Menu.MenuButton>
        <Menu.MenuDropdown>
          <li>
            <MenuItemButton onClick={changeTheme(THEME_MODE.SYSTEM)}>
              <ComputerIcon className='w-4'/>
              <span>Sistema</span>
            </MenuItemButton>
          </li>
          <li>
            <MenuItemButton onClick={changeTheme(THEME_MODE.DARK)}>
              <MoonIcon className='w-4'/>
              <span>Obscuro</span>
            </MenuItemButton>
          </li>
          <li>
            <MenuItemButton onClick={changeTheme(THEME_MODE.WHITE)}>
              <SunIcon className='w-4'/>
              <span>Claro</span>
            </MenuItemButton>
          </li>
        </Menu.MenuDropdown>
      </Menu>
    </ThemeContext.Provider>
  )
}

const MenuItemButton = (props: { children: ReactNode, onClick: () => void }) => {
  const { children, onClick } = props
  return (
    <button
      className='flex w-full items-center justify-start gap-2 rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
