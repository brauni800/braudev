import { ThemeContext } from 'src/utils/hooks/theme'
import { useContext, type ReactNode } from 'react'
import { THEME_MODE } from 'src/types/theme.type'

import ComputerIcon from 'src/components/icons/ComputerIcon'
import MoonIcon from 'src/components/icons/MoonIcon'
import SunIcon from 'src/components/icons/SunIcon'

export default function Menu (props: { id: string }) {
  const { id } = props

  const { changeTheme } = useContext(ThemeContext)

  const handleThemeMode = (mode: THEME_MODE) => () => {
    changeTheme(mode)
  }

  return (
    <ul
      className='absolute left-0 hidden origin-top-right rounded-md border-2 bg-white p-4 text-gray-800 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white'
      id={id}
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
