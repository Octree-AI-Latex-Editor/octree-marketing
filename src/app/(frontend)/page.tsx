import Link from 'next/link'
import { generateMetadata } from './[slug]/page'
import Arrow from '@/components/icons/arrow'
import Sparkles from '@/components/icons/sparkles'
import Image from 'next/image'
import { ArrowRight, Check, ChevronRight, Ellipsis, FileText, Users } from 'lucide-react'
import Compass from '@/components/icons/compass'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import { OctreeLogo } from '@/components/icons/octree'

export default function Page() {
  return (
    <main>
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

          <div className="mb-16">
            <PrimaryButton>Try Now</PrimaryButton>
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
      <div className="max-w-[700px] py-8 md:py-16 text-[28px] md:text-[48px] lg:text-[56px] tracking-tight mx-auto leading-[1.125] px-4">
        Stop copying LaTeX code - write and compile with AI
        <div className="bg-primary rounded-[14px] p-2 ml-2 w-10 h-10 md:w-12 md:h-12 inline-flex items-center justify-center">
          <Arrow className="text-white w-5 h-5 md:w-7 md:h-7" />
        </div>
      </div>

      <div className="py-[34px] md:py-[68px] max-w-[1050px] mx-auto flex flex-col gap-[37px] md:gap-[74px] px-4">
        <p className="text-primary text-lg md:text-xl tracking-[-0.04] text-center">Features</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="w-full flex flex-col gap-6 md:gap-8">
            <div
              className="w-full h-[250px] md:h-[300px] rounded-2xl md:rounded-3xl border border-neutral-100 flex flex-col gap-1 items-center justify-center"
              style={{
                backgroundImage: "url('/api/media/file/bg-grid-pattern.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="bg-white border border-black/10 flex gap-1.5 items-center py-1.5 px-3 rounded-full font-medium text-sm md:text-base">
                <Sparkles className="text-primary w-4 h-4 md:w-5 md:h-5" />
                Edit
              </div>
              <div className="relative">
                <div className="absolute top-0 right-0 w-[120px] md:w-[162px] h-full bg-primary/20" />
                <code className="font-mono text-sm md:text-base">{`\\textbf{Some LaTeX Code}`}</code>
              </div>
            </div>

            <div className="flex flex-col text-left gap-2 md:gap-3 tracking-tight">
              <h3 className="text-xl md:text-2xl font-medium">AI-Powered Assistance</h3>
              <p className="text-base md:text-[18px] leading-tight">
                Get intelligent suggestions and autocompletions as you write your LaTeX documents.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6 md:gap-8">
            <div
              className="w-full h-[250px] md:h-[300px] rounded-2xl md:rounded-3xl border border-neutral-100 flex flex-col items-center justify-center"
              style={{
                backgroundImage: "url('/api/media/file/bg-grid-pattern.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative">
                <div className="absolute top-0 -translate-y-6 md:-translate-y-8 left-0 -translate-x-2 md:-translate-x-4 bg-white border border-black/10 flex gap-1.5 items-center py-1.5 px-3 rounded-full font-medium text-sm md:text-base">
                  <FileText className="text-primary w-4 h-4 md:w-5 md:h-5" />
                  Preview
                </div>
                <Image
                  src="/images/formula.png"
                  alt="Binomial Theorem"
                  width={200}
                  height={88}
                  className="border border-black/10 rounded-lg md:w-[256px] md:h-[113px]"
                />
              </div>
            </div>

            <div className="flex flex-col text-left gap-2 md:gap-3 tracking-tight">
              <h3 className="text-xl md:text-2xl font-medium">PDF Preview</h3>
              <p className="text-base md:text-[18px] leading-tight">
                See your changes instantly with our built-in PDF preview feature.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6 md:gap-8">
            <div
              className="w-full h-[250px] md:h-[300px] rounded-2xl md:rounded-3xl border border-neutral-100 flex flex-col items-center justify-center relative"
              style={{
                backgroundImage: "url('/api/media/file/bg-grid-pattern.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <span className="absolute top-3 right-3 md:top-4 md:right-4 bg-primary text-white px-2 py-1 rounded-xl border-[1.5px] border-blue-700/20 text-xs md:text-sm">
                Coming Soon
              </span>
              <div className="flex items-center gap-2">
                <Users className="size-6 md:size-7" />
                <p className="font-medium text-xl tracking-tight">Collaborators</p>
              </div>
            </div>

            <div className="flex flex-col text-left gap-2 md:gap-3 tracking-tight">
              <h3 className="text-xl md:text-2xl font-medium">Real-time Collaboration</h3>
              <p className="text-base md:text-[18px] leading-tight">
                Work together with your team in real-time, with instant updates and version control.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[34px] md:py-[68px] max-w-[1050px] mx-auto flex flex-col gap-[37px] md:gap-[74px] px-4">
        <div className="flex flex-col gap-4 md:gap-5 max-w-[675px] mx-auto">
          <h3 className="text-primary text-lg md:text-xl tracking-[-0.04] text-center font-heading">
            Pricing
          </h3>
          <p className="text-center tracking-tight text-2xl md:text-3xl lg:text-4xl font-heading">
            Simple, transparent pricing for all your editing needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 md:p-7 flex flex-col gap-6 md:gap-8 border border-neutral-100 rounded-2xl md:rounded-3xl">
            <div className="flex flex-col gap-4 md:gap-6">
              <span className="flex items-center gap-1.5 py-2 pl-2.5 pr-3 rounded-full bg-primary text-white w-fit font-medium text-sm md:text-base">
                <Compass className="w-4 h-4 md:w-5 md:h-5" />
                Starter
              </span>

              <p className="text-lg md:text-xl">Ideal for individuals just starting out</p>

              <p className="text-2xl md:text-3xl font-medium">Free</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-primary flex items-center justify-center">
                  <Check className="text-white size-3.5" />
                </div>
                <p className="text-base md:text-lg font-medium">User-friendly experience</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-primary flex items-center justify-center">
                  <Check className="text-white size-3.5" />
                </div>
                <p className="text-base md:text-lg font-medium">Up to 3 documents</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-primary flex items-center justify-center">
                  <Check className="text-white size-3.5" />
                </div>
                <p className="text-base md:text-lg font-medium">Basic Al assistance</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-primary flex items-center justify-center">
                  <Check className="text-white size-3.5" />
                </div>
                <p className="text-base md:text-lg font-medium">PDF export</p>
              </div>
            </div>

            <PrimaryButton>Get Started</PrimaryButton>
          </div>

          <div className="p-5 md:p-7 flex flex-col gap-6 md:gap-8 border border-neutral-100 rounded-2xl md:rounded-3xl bg-primary">
            <div className="flex flex-col gap-4 md:gap-6">
              <span className="flex items-center gap-1.5 py-2 pl-2.5 pr-3 rounded-full bg-white text-black w-fit font-medium text-sm md:text-base">
                <Sparkles className="size-4 text-primary" />
                Pro
              </span>

              <p className="text-lg md:text-xl text-white">
                Perfect for research teams and power users
              </p>

              <p className="text-2xl md:text-3xl font-medium text-white">
                $10 <span className="text-base md:text-lg font-normal">/Month</span>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-white flex items-center justify-center">
                  <Check className="text-black size-3.5" />
                </div>
                <p className="text-base md:text-lg font-medium text-white">
                  User-friendly experience
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-white flex items-center justify-center">
                  <Check className="text-black size-3.5" />
                </div>
                <p className="text-base md:text-lg font-medium text-white">Up to 3 documents</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-white flex items-center justify-center">
                  <Check className="text-black size-3.5" />
                </div>
                <p className="text-base md:text-lg font-medium text-white">Basic Al assistance</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-white flex items-center justify-center">
                  <Check className="text-black size-3.5" />
                </div>
                <p className="text-base md:text-lg font-medium text-white">PDF export</p>
              </div>
            </div>

            <PrimaryButton
              className="from-white to-white text-black"
              href="https://buy.stripe.com/6oUdR9fyd8Sd6Cifd46oo00"
            >
              Get Started
            </PrimaryButton>
          </div>
        </div>
      </div>

      <div className="py-[34px] md:py-[68px] max-w-[1050px] mx-auto flex flex-col gap-[37px] md:gap-[74px] px-4">
        <div className="flex flex-col gap-4 md:gap-5 max-w-[675px] mx-auto">
          <h3 className="text-primary text-lg md:text-xl tracking-[-0.04] text-center font-heading">
            How it works
          </h3>
          <p className="text-center tracking-tight text-2xl md:text-3xl lg:text-4xl font-heading">
            Seamlessly transform your academic writing experience
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="flex flex-col gap-3 md:gap-4 flex-1">
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="text-primary text-base md:text-lg">Step 1</p>
              <h3 className="text-2xl md:text-3xl font-medium">Create account</h3>
            </div>
            <p className="text-base md:text-lg">
              Create your account and import existing documents in minutes.
            </p>
          </div>

          <div
            className="w-full min-h-[250px] md:min-h-[320px] bg-primary rounded-2xl md:rounded-3xl relative flex-1 flex items-center justify-center"
            style={{
              backgroundImage: "url('/api/media/file/bg-grid-light.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="rounded-full px-4 py-2 md:px-5 md:py-2.5 shadow-sm flex items-center justify-center bg-white w-fit cursor-pointer text-sm md:text-base">
              Create Account
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="flex flex-col gap-3 md:gap-4 flex-1">
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="text-primary text-base md:text-lg">Step 2</p>
              <h3 className="text-2xl md:text-3xl font-medium">Write and edit</h3>
            </div>
            <p className="text-base md:text-lg">
              Use AI assistance to write faster and better LaTeX documents for all types of use
              cases.
            </p>
          </div>

          <div
            className="w-full min-h-[250px] md:min-h-[320px] bg-primary rounded-2xl md:rounded-3xl relative flex-1 flex items-center justify-center"
            style={{
              backgroundImage: "url('/api/media/file/bg-grid-light.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="rounded-2xl md:rounded-3xl shadow-sm bg-white w-[280px] md:w-[300px]">
              <div className="flex p-2 md:p-3 justify-between border-b border-neutral-100">
                <div className="flex items-center gap-1 text-sm md:text-base">
                  <span className="bg-primary rounded-full p-0.5">
                    <OctreeLogo className="size-5 md:size-6" />
                  </span>
                  Octra
                </div>

                <div className="rounded-full bg-blue-50 p-1">
                  <Ellipsis className="text-primary size-4 md:size-5" />
                </div>
              </div>

              <div className="py-8 md:py-12 flex items-center justify-center text-xs md:text-sm text-center text-neutral-500">
                Ask about LaTeX
                <br /> or select text & press ⌘B to improve.
              </div>

              <div className="flex justify-between items-center p-3 md:p-4">
                <p className="text-xs md:text-sm text-neutral-700">Prompt to edit your text...</p>
                <div className="bg-blue-50 rounded-full p-1">
                  <ChevronRight className="text-primary size-3 md:size-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="flex flex-col gap-3 md:gap-4 flex-1">
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="text-primary text-base md:text-lg">Step 3</p>
              <h3 className="text-2xl md:text-3xl font-medium">Export and share</h3>
            </div>
            <p className="text-base md:text-lg">
              Download your documents as PDF or share with others for collaboration.
            </p>
          </div>

          <div
            className="w-full min-h-[250px] md:min-h-[320px] bg-primary rounded-2xl md:rounded-3xl relative flex-1 flex items-center justify-center"
            style={{
              backgroundImage: "url('/api/media/file/bg-grid-light.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="rounded-lg md:rounded-xl px-4 py-2 md:px-5 md:py-2.5 shadow-sm flex gap-4 md:gap-6 items-center justify-center bg-white w-fit cursor-pointer text-sm md:text-base">
              <span>Compile</span>
              <span>Export</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[34px] md:py-[68px] max-w-[1050px] mx-auto flex flex-col gap-[37px] md:gap-[74px] relative px-4">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 md:-translate-y-20 pointer-events-none block opacity-20 z-[1] blur-[5px]"
          style={{
            width: '100vw',
            maxWidth: '1050px',
            height: '500px',
            background:
              'linear-gradient(179deg, #c7dbff 0%, rgba(199, 219, 255, 0.35) 60%, rgba(255, 255, 255, 0) 75%)',
            WebkitMask: 'linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 62%)',
            mask: 'linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 62%)',
            borderRadius: '1000px 1000px 0px 0px',
          }}
        />
        <div className="flex flex-col items-center gap-4 md:gap-6 relative z-10">
          <div
            className="bg-primary rounded-lg md:rounded-xl p-1 w-fit"
            style={{
              boxShadow: 'inset 0px 1px 10px 0px rgba(255, 255, 255, 0.38)',
            }}
          >
            <OctreeLogo className="size-10 md:size-12" />
          </div>
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium max-w-[400px] md:max-w-[500px] text-center tracking-tighter leading-[1.125]">
            Start your writing journey from today
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </main>
  )
}

function PrimaryButton({
  children,
  className,
  href = 'https://app.useoctree.com/',
}: {
  children: React.ReactNode
  className?: string
  href?: string
}) {
  return (
    <Link href={href}>
      <Button
        className={cn(
          'group w-fit rounded-full bg-gradient-to-b from-[#6B9FFF] to-primary text-white font-medium',
          className,
        )}
      >
        <span className="flex items-center">
          {children}
          <span className="max-w-0 overflow-hidden transition-all duration-200 group-hover:max-w-6 group-hover:ml-1">
            <ArrowRight className="size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          </span>
        </span>
      </Button>
    </Link>
  )
}

export { generateMetadata }
