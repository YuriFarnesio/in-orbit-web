import { forwardRef, type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center text-sm font-medium tracking-tight rounded-lg outline-none ring-offset-2 ring-offset-black focus-visible:ring-2 gap-2 transition-all',

  variants: {
    variant: {
      primary:
        'bg-violet-500 hover:bg-violet-600 text-violet-50 ring-violet-500',
      secondary: 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 ring-zinc-900',
    },

    size: {
      default: 'py-2.5 px-4',
      sm: 'py-1.5 px-3',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={button({ variant, size, className })}
      />
    )
  }
)

Button.displayName = 'Button'
