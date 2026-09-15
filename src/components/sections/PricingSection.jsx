import { Check } from 'lucide-react'
import { pricingPackages, siteInfo } from '../../data/siteData'
import { Button } from '../ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card'
import { Reveal } from '../ui/Reveal'
import { SectionShell } from '../ui/SectionShell'

export function PricingSection() {
  return (
    <SectionShell
      id="precios"
      eyebrow="Paquetes"
      title="Precios claros para empezar rápido"
      description="Elige una base y la ajustamos al estilo, información y nivel de detalle de tu evento."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {pricingPackages.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.08}>
            <Card className={item.featured ? 'border-brand-300 bg-brand-50' : undefined}>
              <CardHeader>
                {item.featured ? (
                  <span className="w-fit rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                    Más elegido
                  </span>
                ) : null}
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-ink-900">{item.price}</p>
                <ul className="mt-6 space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-ink-700">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  as="a"
                  href={siteInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 w-full"
                  variant={item.featured ? 'primary' : 'secondary'}
                >
                  Cotizar paquete
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
