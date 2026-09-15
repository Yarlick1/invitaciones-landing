import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle, GlobeCode } from 'lucide-react'
import portada from '../../assets/portada.jpg'
import { heroStats, siteInfo } from '../../data/siteData'
import { Button } from '../ui/Button'

const contentVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="inicio"
      className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8"
    >
      <motion.div
        className="max-w-xl"
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="visible"
        variants={contentVariants}
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">
          Catálogo digital
        </p>

        <h1 className="font-display text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl lg:text-6xl">
          {siteInfo.headline}
        </h1>

        <p className="mt-5 text-base leading-7 text-ink-600 sm:text-lg">
          {siteInfo.subtitle}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button as="a" href="#galeria" size="lg">
            {siteInfo.primaryCta}
          </Button>
          <Button
            as="a"
            href={siteInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            size="lg"
            icon={false}
          >
            <MessageCircle aria-hidden="true" size={20} />
            {siteInfo.secondaryCta}
          </Button>
        </div>

        <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-ink-900/10 pt-6">
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.18 + index * 0.08 }}
            >
              <dt className="text-xs leading-5 text-ink-500">{stat.label}</dt>
              <dd className="mt-1 text-xl font-semibold text-ink-900">{stat.value}</dd>
            </motion.div>
          ))}
        </dl>
      </motion.div>

      <motion.div
        className="relative"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.16, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute -left-3 top-6 z-10 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 shadow-soft"
          animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <GlobeCode aria-hidden="true" className="size-4 text-brand-600" />
          Diseño a medida
        </motion.div>
        <div className="overflow-hidden rounded-lg border border-ink-900/10 bg-white p-3 shadow-soft">
          <img
            src={portada}
            alt="Invitación digital destacada en teléfono móvil"
            className="aspect-[4/5] w-full rounded-md object-cover"
            width="720"
            height="900"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </motion.div>
    </section>
  )
}
