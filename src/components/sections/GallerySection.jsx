import { useEffect, useRef } from 'react'
import { galleryItems } from '../../data/siteData'
import { Card } from '../ui/Card'
import { SectionShell } from '../ui/SectionShell'

export function GallerySection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) return undefined

    let ctx
    let isCancelled = false

    async function animateGallery() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])

      // Si el componente se desmontó mientras cargaba GSAP, cancelamos la animación
      if (isCancelled) return

      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        gsap.from('[data-gallery-card]', {
          opacity: 0,
          y: 28,
          scale: 0.98,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
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

    animateGallery()

    return () => {
      isCancelled = true
      ctx?.revert()
    }
  }, [])

  return (
    <div ref={sectionRef}>
      <SectionShell
        id="galeria"
        eyebrow="Galería"
        title="Inspiración para diferentes tipos de evento"
        description="Descubre diseños con animaciones fluidas, detalles interactivos y un toque único para cada tipo de celebración."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              data-gallery-card=""
              className="overflow-hidden bg-white p-0"
            >
              <div className="p-3">

                <img src={item.src} alt="invitación" srcset="" />
                {/* <InvitationPreview type={item.previewType} eventType={item.eventType} /> */}
              </div>

              <div className="border-t border-ink-900/10 px-5 pb-5 pt-4">
                <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                  {item.eventType}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-600">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </SectionShell>
    </div>
  )
}