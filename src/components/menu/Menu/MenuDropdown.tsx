import type { HTMLAttributes, ReactNode } from 'react'

interface MenuDropdownProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
}

export default function MenuDropdown ({ children, ...rest }: MenuDropdownProps) {
  return (
    <ul
      {...rest}
      className='absolute left-0 hidden origin-top-right rounded-md border-2 bg-white p-4 text-gray-800 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white'
    >
      {children}
    </ul>
  )
}
