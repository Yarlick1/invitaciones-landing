import { navigationItems, siteInfo } from '../data/siteData'

export function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-page text-ink-900">
      <header className="sticky top-0 z-40 border-b border-ink-900/10 bg-page/90 backdrop-blur">
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
        >
          <a
            href="#inicio"
            className="inline-flex min-h-11 items-center text-sm font-semibold tracking-wide text-ink-900"
          >
            {siteInfo.brandName}
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-ink-600 transition hover:bg-white hover:text-brand-600"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={siteInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-ink-900 px-4 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Cotizar
          </a>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  )
}
