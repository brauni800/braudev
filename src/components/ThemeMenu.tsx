import { useEffect, useId, useState, type ReactNode } from 'react'

import { removeTheme, setDarkTheme, setLightTheme } from 'src/utils/theme-switcher'
import { capitalizeString } from 'src/utils/capitalize-string'

import ComputerIcon from 'src/components/icons/ComputerIcon'
import MoonIcon from 'src/components/icons/MoonIcon'
import SunIcon from 'src/components/icons/SunIcon'

enum THEME_MODE {
  SYSTEM,
  WHITE,
  DARK
}

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
  const [isOpen, setIsOpen] = useState(false)

  const menuButtonId = useId()
  const menuId = useId()

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev)
  }

  const handleThemeMode = (mode: THEME_MODE) => () => {
    setThemeMode(mode)
  }

  useEffect(() => {
    const menuButton = document.getElementById(menuButtonId)
    const menu = document.getElementById(menuId)

    const handleWindowEvent = (event: MouseEvent) => {
      if (!menuButton?.contains(event.target as Node) && !menu?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    window.addEventListener('click', handleWindowEvent)
    return () => {
      window.removeEventListener('click', handleWindowEvent)
    }
  }, [])

  useEffect(() => {
    const menu = document.getElementById(menuId)
    if (isOpen) {
      menu?.classList.remove('hidden')
      menu?.classList.remove('animate-fade-out')
    } else {
      menu?.classList.add('animate-fade-out')
    }
  }, [isOpen])

  useEffect(() => {
    if (themeMode === THEME_MODE.WHITE) setLightTheme()
    else if (themeMode === THEME_MODE.DARK) setDarkTheme()
    else removeTheme()
  }, [themeMode])

  return (
    <div className='relative inline-block'>
      <button
        className='flex items-center justify-start gap-2 rounded-md bg-bright-turquoise-400 px-4 py-2 text-gray-800 shadow-sm transition-colors hover:bg-bright-turquoise-300'
        onClick={handleButtonClick}
        id={menuButtonId}
      >
        {THEME_ICON[themeMode]}
        <span>{capitalizeString(THEME_TEXT[themeMode])}</span>
      </button>
      <ul
        className='absolute left-0 hidden origin-top-right rounded-md border-2 bg-white p-4 text-gray-800 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white'
        id={menuId}
      >
        <li>
          <MenuItemButton onClick={handleThemeMode(THEME_MODE.SYSTEM)}>
            <ComputerIcon className='w-4'/>
            <span>Sistema</span>
          </MenuItemButton>
        </li>
        <li>
          <MenuItemButton onClick={handleThemeMode(THEME_MODE.DARK)}>
            <MoonIcon className='w-4'/>
            <span>Obscuro</span>
          </MenuItemButton>
        </li>
        <li>
          <MenuItemButton onClick={handleThemeMode(THEME_MODE.WHITE)}>
            <SunIcon className='w-4'/>
            <span>Claro</span>
          </MenuItemButton>
        </li>
      </ul>
    </div>
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
