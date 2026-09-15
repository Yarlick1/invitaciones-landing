import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { siteInfo } from '../../data/siteData'

export function FloatingWhatsApp() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.a
      href={siteInfo.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex min-h-14 min-w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-soft transition hover:bg-ink-900 md:hidden"
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.86, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
      transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: 0.28 }}
    >
      <MessageCircle aria-hidden="true" size={24} />
    </motion.a>
  )
}
