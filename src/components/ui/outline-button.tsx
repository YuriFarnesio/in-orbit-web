import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function OutlineButton(props: ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={twMerge(
        'flex items-center disabled:opacity-50 text-sm text-zinc-300 leading-none disabled:pointer-events-none border border-dashed border-zinc-800 hover:border-zinc-700 focus-visible:border-pink-500 outline-none ring-pink-500/10 focus-visible:ring-4 rounded-full gap-2 py-2 px-3 transition-all',
        props.className
      )}
    />
  )
}
