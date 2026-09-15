import { ArrowRight } from 'lucide-react'
import { cn } from '../../utils/classNames'

const variants = {
  primary:
    'bg-ink-900 text-white shadow-soft hover:bg-brand-600 focus-visible:outline-ink-900',
  secondary:
    'border border-ink-900/15 bg-white text-ink-900 hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-brand-600',
  ghost:
    'bg-transparent text-ink-700 hover:bg-white/70 hover:text-ink-900 focus-visible:outline-brand-600',
}

const sizes = {
  sm: 'min-h-10 px-4 text-sm',
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-12 px-6 text-base',
}

export function Button({
  as: Component = 'button',
  children,
  className,
  icon = true,
  size = 'md',
  variant = 'primary',
  ...props
}) {
  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
      {icon ? <ArrowRight aria-hidden="true" size={18} strokeWidth={2.2} /> : null}
    </Component>
  )
}
