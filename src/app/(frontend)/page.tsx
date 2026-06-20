import type { Metadata } from 'next'
import { HeroSection } from '@/components/Home/hero'
import { LogoCloud } from '@/components/logo-cloud'
import { Features } from '@/components/Home/features'
import { Pricing } from '@/components/Home/pricing'
import { HowItWorks } from '@/components/Home/how-it-works'
import { FAQSection } from '@/components/Home/faq-section'
import { CallToAction } from '@/components/Home/call-to-action'
import { FeatureHeader } from '@/components/Home/feature-header'
// import { ResourcesSection } from '@/components/Home/resources-section'
import { GridSection, HatchGround } from '@/components/grid'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export default function Page() {
  return (
    <main>
      <HatchGround>
        <GridSection first>
          <HeroSection />
        </GridSection>
        <GridSection>
          <LogoCloud />
        </GridSection>
        <GridSection>
          <FeatureHeader />
        </GridSection>
        <GridSection>
          <Features />
        </GridSection>
        {/* <ResourcesSection /> */}
        <GridSection>
          <Pricing />
        </GridSection>
        <GridSection>
          <HowItWorks />
        </GridSection>
        <GridSection>
          <FAQSection />
        </GridSection>
        <GridSection last>
          <CallToAction />
        </GridSection>
      </HatchGround>
    </main>
  )
}

// Explicit metadata for home page - ensures Google shows "Octree" as site name
export const metadata: Metadata = {
  title: 'Octree – AI LaTeX Editor',
  description: 'The open-source LaTeX editor that makes academic writing feel natural and effortless. Write faster with AI assistance, real-time collaboration, and beautiful templates.',
  openGraph: mergeOpenGraph({
    title: 'Octree – AI LaTeX Editor',
    description: 'The open-source LaTeX editor that makes academic writing feel natural and effortless.',
    url: '/',
  }),
  alternates: {
    canonical: '/',
  },
}
