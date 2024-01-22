import { capitalizeString } from 'src/utils/capitalize-string'
import { ThemeContext } from 'src/utils/hooks/theme'
import { useContext, type ReactNode } from 'react'
import { THEME_MODE } from 'src/types/theme.type'

import ComputerIcon from 'src/components/icons/ComputerIcon'
import MoonIcon from 'src/components/icons/MoonIcon'
import SunIcon from 'src/components/icons/SunIcon'

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

export default function ToggleMenuButton (props: { id: string }) {
  const { id } = props

  const { themeMode, toggleMenu } = useContext(ThemeContext)
  const handleButtonClick = () => {
    toggleMenu()
  }

  return (
    <button
      className='flex items-center justify-start gap-2 rounded-md bg-bright-turquoise-400 px-4 py-2 text-gray-800 shadow-sm transition-colors hover:bg-bright-turquoise-300'
      onClick={handleButtonClick}
      id={id}
    >
      {THEME_ICON[themeMode]}
      <span>{capitalizeString(THEME_TEXT[themeMode])}</span>
    </button>
  )
}
