import { Children, cloneElement, useEffect, useId, type ReactElement, type ReactNode } from 'react'

import MenuDropdown from 'src/components/menu/Menu/MenuDropdown'
import MenuButton from 'src/components/menu/Menu/MenuButton'

interface BasicMenuProps {
  children: ReactNode
}

export default function Menu ({ children }: BasicMenuProps) {
  const menuDropdownId = useId()
  const menuButtonId = useId()

  const toggleMenu = () => {
    const menuDropdown = document.getElementById(menuDropdownId)
    if (Boolean(menuDropdown?.classList.contains('hidden')) || Boolean(menuDropdown?.classList.contains('animate-fade-out'))) {
      menuDropdown?.classList.remove('hidden')
      menuDropdown?.classList.remove('animate-fade-out')
    } else {
      menuDropdown?.classList.add('animate-fade-out')
    }
  }

  useEffect(() => {
    const menuDropdown = document.getElementById(menuDropdownId)
    const menuButton = document.getElementById(menuButtonId)

    const handleWindowEvent = (event: MouseEvent) => {
      if (!menuButton?.contains(event.target as Node) && !menuDropdown?.contains(event.target as Node)) {
        menuDropdown?.classList.add('animate-fade-out')
      }
    }
    window.addEventListener('click', handleWindowEvent)
    return () => {
      window.removeEventListener('click', handleWindowEvent)
    }
  }, [])

  return (
    <div className='relative inline-block'>
      {Children.map(children, (child, index) => {
        if (index === 0) return cloneElement(child as ReactElement, { id: menuButtonId, onClick: toggleMenu })
        return cloneElement(child as ReactElement, { id: menuDropdownId })
      })}
    </div>
  )
}

Menu.MenuDropdown = MenuDropdown
Menu.MenuButton = MenuButton
