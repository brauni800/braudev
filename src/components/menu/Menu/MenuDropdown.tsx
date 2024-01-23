import type { HTMLAttributes, ReactNode } from 'react'

interface MenuDropdownProps extends HTMLAttributes<HTMLUListElement> {
  align?: 'left' | 'right'
  children: ReactNode
}

export default function MenuDropdown ({ children, align = 'left', ...rest }: MenuDropdownProps) {
  return (
    <ul
      {...rest}
      className={[
        'absolute hidden right-0 origin-top-right rounded-md border-2 bg-white p-4 text-gray-800 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white',
        align === 'left' ? 'left-0' : 'right-0'
      ].join(' ')}
    >
      {children}
    </ul>
  )
}
