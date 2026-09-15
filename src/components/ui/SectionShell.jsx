import { cn } from '../../utils/classNames'

export function SectionShell({
  eyebrow,
  title,
  description,
  children,
  className,
  headerClassName,
  id,
}) {
  return (
    <section
      id={id}
      className={cn('mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8', className)}
    >
      {(eyebrow || title || description) && (
        <div className={cn('mb-8 max-w-2xl', headerClassName)}>
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">
              {eyebrow}
            </p>
          ) : null}

          {title ? (
            <h2 className="font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              {title}
            </h2>
          ) : null}

          {description ? (
            <p className="mt-4 text-base leading-7 text-ink-600">
              {description}
            </p>
          ) : null}
        </div>
      )}

      {children}
    </section>
  )
}
