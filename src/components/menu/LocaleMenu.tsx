import type { ReactNode } from 'react'

import { getRelativeLocaleUrl } from 'astro:i18n'
import { languages } from 'src/i18n/translations'
import { getLangFromURL } from 'src/i18n'

import Menu from 'src/components/menu/Menu'

export default function LocaleMenu () {
  const lang = getLangFromURL(new URL(window.location.href))
  const { Icon: CurrentIcon } = languages[lang]

  return (
    <Menu>
      <button aria-label='language'>
        {<CurrentIcon className='h-10'/>}
      </button>
      <Menu.MenuDropdown align='right'>
        {Object.entries(languages).map(([lang, { Icon, label }]) => (
          <li key={lang}>
            <MenuItemLink href={getRelativeLocaleUrl(lang)}>
              <Icon className='h-10'/>
              <span>{label}</span>
            </MenuItemLink>
          </li>
        ))}
      </Menu.MenuDropdown>
    </Menu>
  )
}

const MenuItemLink = (props: { children: ReactNode, href: string }) => {
  const { children, href } = props
  return (
    <a
      className='flex w-full items-center justify-start gap-2 rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'
      href={href}
    >
      {children}
    </a>
  )
}
