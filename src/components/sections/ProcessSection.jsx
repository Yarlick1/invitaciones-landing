import { useEffect, useRef } from 'react'
import { MessageCircle, PenLine, Send, Sparkles } from 'lucide-react'
import { processSteps } from '../../data/siteData'
import { Card } from '../ui/Card'
import { SectionShell } from '../ui/SectionShell'

const icons = {
  messages: MessageCircle,
  sparkles: Sparkles,
  pen: PenLine,
  send: Send,
}

export function ProcessSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) {
      return undefined
    }

    let ctx
    let isCancelled = false


    async function animateSteps() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])

      // Si el componente se desmontó mientras cargaba GSAP, cancelamos la animación
      if (isCancelled) return

      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        gsap.from('[data-process-step]', {
          opacity: 0,
          y: 28,
          duration: 0.62,
          ease: 'power3.out',
          stagger: 0.11,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%', // Punto de activación más cómodo
            toggleActions: 'play none none none',
          },
        })
      }, sectionRef)
      // Recalcula las posiciones en el DOM tras la carga asíncrona
      ScrollTrigger.refresh()
    }

    animateSteps()

    return () => {
      isCancelled = true
      ctx?.revert()
    }
  }, [])

  return (
    <div ref={sectionRef}>
      <SectionShell
        id="proceso"
        eyebrow="Proceso"
        title="De idea inicial a link listo para enviar"
        description="Un flujo simple para que sepas qué enviar, cuándo revisar y cómo recibes tu invitación final."
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = icons[step.icon]

            return (
              <Card key={step.id} data-process-step="" className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-sm font-semibold text-ink-300">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-ink-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-600">{step.description}</p>
              </Card>
            )
          })}
        </div>
      </SectionShell>
    </div>
  )
}
