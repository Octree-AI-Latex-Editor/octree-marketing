import { PrimaryButton } from './primary-button'
import { CreditCard } from 'lucide-react'

export function Hero() {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[600px] blur-[20px] rounded-full overflow-hidden z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(0deg, #c7dbff 0%, rgba(228, 241, 254, 0.15) 51%, rgba(255, 255, 255, 0) 100%)',
        }}
      />

      <div className="pt-16 pb-8 text-center relative z-10">
        <div className="mb-6">
          <p className="text-[#636363] font-medium tracking-[-0.02] text-sm md:text-base">
            Now in Beta
          </p>
        </div>

        <div className="mb-6">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] text-black leading-[1.05] tracking-tight font-heading">
              <span className="inline-block">Write research documents with AI</span>
              <br />
              <span className="inline-block text-[#478eff]">The modern Overleaf alternative</span>
            </h1>
          </div>
        </div>

        <div className="mb-8">
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium text-[#636363] tracking-[-0.03] px-4">
            Go from idea to publication-ready documents in minutes. Generate TikZ diagrams,
            structure your sections, and refine with AI — no syntax, no setup.
          </p>
        </div>

        <div className="mb-16 flex flex-col items-center gap-3">
          <PrimaryButton className="text-base md:text-lg px-4 py-2 md:px-5 md:py-2.5 h-auto">
            Try now - it&apos;s free!
          </PrimaryButton>
          <div className="flex items-center gap-1.5 text-[#636363] text-xs md:text-sm">
            <CreditCard className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>No credit card required</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            <video
              className="w-full h-auto rounded-[12px] md:rounded-[20px] shadow-2xl"
              src="https://framerusercontent.com/assets/Qb8rAh2lhNSjgtoOoRPquNU90.mp4"
              poster="https://framerusercontent.com/images/0KpAYGPoed1PdUqI3M0JaK9QtHA.png?width=2998&height=1666"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{
                objectFit: 'cover',
                objectPosition: '50% 50%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
