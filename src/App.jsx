import { ClosingCTA } from './components/sections/ClosingCTA'
import { FAQSection } from './components/sections/FAQSection'
import { FloatingWhatsApp } from './components/sections/FloatingWhatsApp'
import { GallerySection } from './components/sections/GallerySection'
import { HeroSection } from './components/sections/HeroSection'
import { PricingSection } from './components/sections/PricingSection'
import { ProcessSection } from './components/sections/ProcessSection'
import { MainLayout } from './layouts/MainLayout'

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <GallerySection />
      <PricingSection />
      <ProcessSection />
      <FAQSection />
      <ClosingCTA />
      <FloatingWhatsApp />
    </MainLayout>
  )
}

export default App
