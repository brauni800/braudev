import { removeTheme, setDarkTheme, setLightTheme } from 'src/utils/theme-switcher'
import { useCallback, useEffect, useId, useState } from 'react'
import { ThemeContext } from 'src/utils/hooks/theme'
import { THEME_MODE } from 'src/types/theme.type'

import ToggleMenuButton from 'src/components/menu/ThemeMenu/ToggleMenuButton'
import Menu from 'src/components/menu/ThemeMenu/Menu'

export default function ThemeButton () {
  const [themeMode, setThemeMode] = useState<THEME_MODE>(THEME_MODE.SYSTEM)

  const menuButtonId = useId()
  const menuId = useId()

  const toggleMenu = () => {
    const menu = document.getElementById(menuId)
    if (Boolean(menu?.classList.contains('hidden')) || Boolean(menu?.classList.contains('animate-fade-out'))) {
      menu?.classList.remove('hidden')
      menu?.classList.remove('animate-fade-out')
    } else {
      menu?.classList.add('animate-fade-out')
    }
  }

  const changeTheme = useCallback((theme: THEME_MODE) => {
    if (theme === THEME_MODE.WHITE) setLightTheme()
    else if (theme === THEME_MODE.DARK) setDarkTheme()
    else removeTheme()
    setThemeMode(theme)
  }, [themeMode, setThemeMode])

  useEffect(() => {
    const menuButton = document.getElementById(menuButtonId)
    const menu = document.getElementById(menuId)

    const handleWindowEvent = (event: MouseEvent) => {
      if (!menuButton?.contains(event.target as Node) && !menu?.contains(event.target as Node)) {
        menu?.classList.add('animate-fade-out')
      }
    }
    window.addEventListener('click', handleWindowEvent)
    return () => {
      window.removeEventListener('click', handleWindowEvent)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ themeMode, toggleMenu, changeTheme }}>
      <div className='relative inline-block'>
        <ToggleMenuButton id={menuButtonId}/>
        <Menu id={menuId}/>
      </div>
    </ThemeContext.Provider>
  )
}
