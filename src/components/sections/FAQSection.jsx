import { faqItems } from '../../data/siteData'
import { Accordion } from '../ui/Accordion'
import { Reveal } from '../ui/Reveal'
import { SectionShell } from '../ui/SectionShell'

export function FAQSection() {
  const leftItems = faqItems.filter((_, index) => index % 2 === 0)
  const rightItems = faqItems.filter((_, index) => index % 2 !== 0)

  return (
    <SectionShell
      id="faq"
      eyebrow="FAQ"
      title="Preguntas frecuentes antes de cotizar"
      description="Respuestas rápidas para decidir paquete, preparar información y entender la entrega."
    >
      <div className="grid gap-3 lg:grid-cols-2">
        <Reveal delay={0.04}>
          <Accordion items={leftItems} />
        </Reveal>
        <Reveal delay={0.12}>
          <Accordion items={rightItems} />
        </Reveal>
      </div>
    </SectionShell>
  )
}
