import { generateMetadata } from './[slug]/page'
import { HeroSection } from '@/components/Home/hero'
import { LogoCloud } from '@/components/logo-cloud'
import { Features } from '@/components/Home/features'
import { Pricing } from '@/components/Home/pricing'
import { HowItWorks } from '@/components/Home/how-it-works'
import { FAQSection } from '@/components/Home/faq-section'
import { CallToAction } from '@/components/Home/call-to-action'
import { FeatureHeader } from '@/components/Home/feature-header'
import UseCases from '@/components/use-cases'

export default function Page() {
  return (
    <main>
      <HeroSection />
      <FeatureHeader />
      <LogoCloud />
      <Features />
      <Pricing />
      <HowItWorks />
      <UseCases />
      <FAQSection />
      <CallToAction />
    </main>
  )
}

export { generateMetadata }
