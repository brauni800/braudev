import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children: ReactNode
}

export default function MenuButton ({ children, ...rest }: MenuButtonProps) {
  return (
    <button
      {...rest}
      className='flex items-center justify-start gap-2 rounded-md bg-bright-turquoise-400 px-4 py-2 text-gray-800 shadow-sm transition-colors hover:bg-bright-turquoise-300'
    >
      {children}
    </button>
  )
}
