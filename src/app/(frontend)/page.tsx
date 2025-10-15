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
            <p className="text-[#636363] font-medium tracking-[-0.02] font-satoshi">Now in Beta</p>
          </div>

          <div className="mb-6">
            <div className="max-w-5xl mx-auto px-4">
              <h1 className="text-[56px] text-black leading-[1.05] tracking-tight">
                <span className="inline-block">Write LaTeX like you think</span>
                <br />
                <span className="inline-block text-[#478eff]">The modern Overleaf alternative</span>
              </h1>
            </div>
          </div>

          <div className="mb-8">
            <p className="max-w-3xl mx-auto text-xl font-medium text-[#636363] tracking-[-0.03] font-satoshi">
              Go from idea to publication-ready documents in minutes. Generate TikZ diagrams,
              structure your sections, and refine with AI — no syntax, no setup.
            </p>
          </div>

          <div className="mb-16">
            <Link
              href="https://app.useoctree.com/"
              className="font-satoshi bg-gradient-to-b from-[#6B9FFF] to-[#478eff] text-white px-4 py-2.5 rounded-full"
            >
              Try Now
            </Link>
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <div className="relative">
              <video
                className="w-full h-auto rounded-[20px] shadow-2xl"
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
      <div className="max-w-[700px] py-16 text-[56px] tracking-tight mx-auto leading-[1.125]">
        Stop copying LaTeX code - write and compile with AI
        <div className="bg-primary rounded-[14px] p-2 ml-2 w-12 h-12 inline-flex items-center justify-center">
          <Arrow className="text-white w-7 h-7" />
        </div>
      </div>

      <div className="py-[68px] max-w-[1050px] mx-auto flex flex-col gap-[74px]">
        <p className="text-primary text-xl tracking-[-0.04] font-satoshi text-center">Features</p>

        <div className="grid grid-cols-3 gap-7">
          <div className="w-full flex flex-col gap-8">
            <div
              className="w-full h-[300px] rounded-3xl border border-neutral-100 flex flex-col gap-1 items-center justify-center"
              style={{
                backgroundImage: "url('/api/media/file/bg-grid-pattern.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="bg-white border border-black/10 flex gap-1.5 items-center py-1.5 px-3 rounded-full font-satoshi font-medium">
                <Sparkles className="text-primary w-5 h-5" />
                Edit
              </div>
              <div className="relative">
                <div className="absolute top-0 right-0 w-[162px] h-full bg-primary/20" />
                <code className="font-mono">{`\\textbf{Some LaTeX Code}`}</code>
              </div>
            </div>

            <div className="flex flex-col text-left font-satoshi gap-3 tracking-tight">
              <h3 className="text-2xl font-medium">AI-Powered Assistance</h3>
              <p className="text-[18px] leading-tight">
                Get intelligent suggestions and autocompletions as you write your LaTeX documents.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-8">
            <div
              className="w-full h-[300px] rounded-3xl border border-neutral-100 flex flex-col items-center justify-center"
              style={{
                backgroundImage: "url('/api/media/file/bg-grid-pattern.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative">
                <div className="absolute top-0 -translate-y-8 left-0 -translate-x-4 bg-white border border-black/10 flex gap-1.5 items-center py-1.5 px-3 rounded-full font-satoshi font-medium">
                  <FileText className="text-primary w-5 h-5" />
                  Preview
                </div>
                <Image
                  src="/images/formula.png"
                  alt="Binomial Theorem"
                  width={256}
                  height={113}
                  className="border border-black/10 rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col text-left font-satoshi gap-3 tracking-tight">
              <h3 className="text-2xl font-medium">PDF Preview</h3>
              <p className="text-[18px] leading-tight">
                See your changes instantly with our built-in PDF preview feature.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-8">
            <div
              className="w-full h-[300px] rounded-3xl border border-neutral-100 flex flex-col items-center justify-center relative"
              style={{
                backgroundImage: "url('/api/media/file/bg-grid-pattern.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <span className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded-xl font-satoshi border-[1.5px] border-blue-700/20 text-sm">
                Coming Soon
              </span>
              <div className="flex items-center gap-2">
                <Users className="size-7" />
                <p className="font-satoshi font-medium text-2xl tracking-tight">Collaborators</p>
              </div>
            </div>

            <div className="flex flex-col text-left font-satoshi gap-3 tracking-tight">
              <h3 className="text-2xl font-medium">Real-time Collaboration</h3>
              <p className="text-[18px] leading-tight">
                Work together with your team in real-time, with instant updates and version control.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[68px] max-w-[1050px] mx-auto flex flex-col gap-[74px]">
        <div className="flex flex-col gap-5 max-w-[675px] mx-auto">
          <h3 className="text-primary text-xl tracking-[-0.04] font-satoshi text-center">
            Pricing
          </h3>
          <p className="text-center tracking-tight text-4xl">
            Simple, transparent pricing for all your editing needs
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="p-7 flex flex-col gap-8 border border-neutral-100 rounded-3xl">
            <div className="flex flex-col gap-6">
              <span className="flex items-center gap-1.5 py-2 pl-2.5 pr-3 rounded-full bg-primary text-white w-fit font-satoshi font-medium">
                <Compass />
                Starter
              </span>

              <p className="font-satoshi text-xl">Ideal for individuals just starting out</p>

              <p className="font-satoshi text-3xl font-medium">Free</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-primary flex items-center justify-center">
                  <Check className="text-white size-3.5" />
                </div>
                <p className="font-satoshi text-lg font-medium">User-friendly experience</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-primary flex items-center justify-center">
                  <Check className="text-white size-3.5" />
                </div>
                <p className="font-satoshi text-lg font-medium">Up to 3 documents</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-primary flex items-center justify-center">
                  <Check className="text-white size-3.5" />
                </div>
                <p className="font-satoshi text-lg font-medium">Basic Al assistance</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-primary flex items-center justify-center">
                  <Check className="text-white size-3.5" />
                </div>
                <p className="font-satoshi text-lg font-medium">PDF export</p>
              </div>
            </div>

            <PrimaryButton>Get Started</PrimaryButton>
          </div>

          <div className="p-7 flex flex-col gap-8 border border-neutral-100 rounded-3xl bg-primary">
            <div className="flex flex-col gap-6">
              <span className="flex items-center gap-1.5 py-2 pl-2.5 pr-3 rounded-full bg-white text-black w-fit font-satoshi font-medium">
                <Sparkles className="size-4 text-primary" />
                Pro
              </span>

              <p className="font-satoshi text-xl text-white">
                Perfect for research teams and power users
              </p>

              <p className="font-satoshi text-3xl font-medium text-white">
                $10 <span className="text-lg font-normal">/Month</span>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-white flex items-center justify-center">
                  <Check className="text-black size-3.5" />
                </div>
                <p className="font-satoshi text-lg font-medium text-white">
                  User-friendly experience
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-white flex items-center justify-center">
                  <Check className="text-black size-3.5" />
                </div>
                <p className="font-satoshi text-lg font-medium text-white">Up to 3 documents</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-white flex items-center justify-center">
                  <Check className="text-black size-3.5" />
                </div>
                <p className="font-satoshi text-lg font-medium text-white">Basic Al assistance</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-[7px] bg-white flex items-center justify-center">
                  <Check className="text-black size-3.5" />
                </div>
                <p className="font-satoshi text-lg font-medium text-white">PDF export</p>
              </div>
            </div>

            <PrimaryButton className="from-white to-white text-black">Get Started</PrimaryButton>
          </div>
        </div>
      </div>

      <div className="py-[68px] max-w-[1050px] mx-auto flex flex-col gap-[74px]">
        <div className="flex flex-col gap-5 max-w-[675px] mx-auto">
          <h3 className="text-primary text-xl tracking-[-0.04] font-satoshi text-center">
            How it works
          </h3>
          <p className="text-center tracking-tight text-4xl">
            Seamlessly transform your academic writing experience
          </p>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col font-satoshi gap-4 flex-1">
            <div className="flex flex-col gap-3">
              <p className="text-primary text-lg">Step 1</p>
              <h3 className="text-3xl">Create account</h3>
            </div>
            <p className="text-lg">Create your account and import existing documents in minutes.</p>
          </div>

          <div
            className="w-full min-h-[320px] bg-primary rounded-3xl relative flex-1 flex items-center justify-center"
            style={{
              backgroundImage: "url('/api/media/file/bg-grid-light.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="rounded-full px-5 py-2.5 shadow-sm flex items-center justify-center bg-white w-fit font-satoshi cursor-pointer">
              Create Account
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col font-satoshi gap-4 flex-1">
            <div className="flex flex-col gap-3">
              <p className="text-primary text-lg">Step 2</p>
              <h3 className="text-3xl">Write and edit</h3>
            </div>
            <p className="text-lg">
              Use AI assistance to write faster and better LaTeX documents for all types of use
              cases.
            </p>
          </div>

          <div
            className="w-full min-h-[320px] bg-primary rounded-3xl relative flex-1 flex items-center justify-center"
            style={{
              backgroundImage: "url('/api/media/file/bg-grid-light.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="rounded-3xl shadow-sm bg-white font-satoshi w-[300px]">
              <div className="flex p-3 justify-between border-b border-neutral-100">
                <div className="flex items-center gap-1">
                  <span className="bg-primary rounded-full p-0.5">
                    <OctreeLogo className="size-6" />
                  </span>
                  Octra
                </div>

                <div className="rounded-full bg-blue-50 p-1">
                  <Ellipsis className="text-primary" />
                </div>
              </div>

              <div className="py-12 flex items-center justify-center text-sm text-center text-neutral-500">
                Ask about LaTeX
                <br /> or select text & press ⌘B to improve.
              </div>

              <div className="flex justify-between items-center p-4">
                <p className="text-sm text-neutral-700">Prompt to edit your text...</p>
                <div className="bg-blue-50 rounded-full p-1">
                  <ChevronRight className="text-primary size-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col font-satoshi gap-4 flex-1">
            <div className="flex flex-col gap-3">
              <p className="text-primary text-lg">Step 3</p>
              <h3 className="text-3xl">Export and share</h3>
            </div>
            <p className="text-lg">
              Download your documents as PDF or share with others for collaboration.
            </p>
          </div>

          <div
            className="w-full min-h-[320px] bg-primary rounded-3xl relative flex-1 flex items-center justify-center"
            style={{
              backgroundImage: "url('/api/media/file/bg-grid-light.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="rounded-xl px-5 py-2.5 shadow-sm flex gap-6 items-center justify-center bg-white w-fit font-satoshi cursor-pointer">
              <span>Compile</span>
              <span>Export</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[68px] max-w-[1050px] mx-auto flex flex-col gap-[74px] relative overflow-hidden">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-20 pointer-events-none block opacity-20 z-[1] blur-[5px]"
          style={{
            width: '1050px',
            height: '750px',
            background:
              'linear-gradient(179deg, #c7dbff 0%, rgba(199, 219, 255, 0.35) 60%, rgba(255, 255, 255, 0) 75%)',
            WebkitMask: 'linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 62%)',
            mask: 'linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 62%)',
            borderRadius: '1000px 1000px 0px 0px',
          }}
        />
        <div className="flex flex-col items-center gap-4 relative z-10">
          <div
            className="bg-primary rounded-xl p-1 w-fit"
            style={{
              boxShadow: 'inset 0px 1px 10px 0px rgba(255, 255, 255, 0.38)',
            }}
          >
            <OctreeLogo className="size-12" />
          </div>
          <p className="text-5xl font-medium max-w-[500px] text-center tracking-tighter leading-[1.125]">
            Start your writing journey from today
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </main>
  )
}

function PrimaryButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Button
      className={cn(
        'group w-fit rounded-full bg-gradient-to-b from-[#6B9FFF] to-primary text-white font-satoshi font-medium',
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
  )
}

export { generateMetadata }
