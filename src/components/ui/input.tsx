import { forwardRef, type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        'h-12 bg-black text-sm placeholder-zinc-400 border border-zinc-900 hover:border-zinc-800 focus-visible:border-pink-500 rounded-lg outline-none ring-pink-500/10 focus-visible:ring-4 px-4 transition-all',
        props.className
      )}
    />
  )
})

Input.displayName = 'Input'
