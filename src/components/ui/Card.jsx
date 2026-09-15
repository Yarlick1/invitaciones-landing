import { cn } from '../../utils/classNames'

export function Card({ as: Component = 'article', children, className, ...props }) {
  return (
    <Component
      className={cn(
        'rounded-lg border border-ink-900/10 bg-white p-5 shadow-soft',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export function CardHeader({ children, className }) {
  return <div className={cn('space-y-2', className)}>{children}</div>
}

export function CardTitle({ as: Component = 'h3', children, className }) {
  return (
    <Component
      className={cn(
        'text-xl font-semibold leading-tight text-ink-900',
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function CardDescription({ children, className }) {
  return (
    <p className={cn('text-sm leading-6 text-ink-600', className)}>{children}</p>
  )
}

export function CardContent({ children, className }) {
  return <div className={cn('mt-5', className)}>{children}</div>
}
