import { generateMetadata } from './[slug]/page'
import { Hero } from '@/components/Home/hero'
import { Features } from '@/components/Home/features'
import { Pricing } from '@/components/Home/pricing'
import { HowItWorks } from '@/components/Home/how-it-works'
import { FAQSection } from '@/components/Home/faq-section'
import { CallToAction } from '@/components/Home/call-to-action'

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
      <HowItWorks />
      <FAQSection />
      <CallToAction />
    </main>
  )
}

export { generateMetadata }
