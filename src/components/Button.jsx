import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-md py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm outline-2 outline-offset-2 transition-colors transition duration-300 ease-in-out',
  outline:
    'inline-flex justify-center rounded-md border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors transition duration-300 ease-in-out',
}

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors transition-colors transition duration-300 ease-in-out',
    white:
      'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70 transition-colors transition duration-300 ease-in-out',
    gray: 'bg-gray-800 text-white hover:bg-gray-950 active:bg-gray-900 active:text-white/80 rounded-md transition-colors transition duration-300 ease-in-out',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 transition-colors transition duration-300 ease-in-out',
  },
}

export const Button = forwardRef(function Button(
  { variant = 'solid', color = 'gray', className, href, ...props },
  ref
) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  )
})
