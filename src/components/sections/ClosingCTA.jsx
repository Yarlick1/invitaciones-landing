import { MessageCircle } from 'lucide-react'
import { siteInfo } from '../../data/siteData'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function ClosingCTA() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-6xl rounded-lg bg-ink-900 px-5 py-10 text-white shadow-soft sm:px-8 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-300">
              Listo para empezar
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Hagamos una invitación que tus invitados quieran abrir.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
              Mándanos tus datos, fecha y referencias. Te respondemos con el mejor paquete para tu evento.
            </p>
          </div>

          <Button
            as="a"
            href={siteInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 border border-white text-ink-900 hover:bg-brand-100 lg:mt-0"
            icon={false}
            size="lg"
          >
            <MessageCircle aria-hidden="true" size={20} />
            Cotizar ahora
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
