import Image from 'next/image'
import { SectionHeader } from './section-header'

export default function UseCases() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <SectionHeader
          title="Use cases"
          description="Built for researchers, students, and engineers"
        />
        <div className="relative">
          <div className="relative z-10 space-y-6 md:w-1/2">
            <p className="text-lg leading-relaxed">
              Octree transforms academic writing and research workflows for everyone.
            </p>

            <div className="grid gap-6 pt-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">For researchers</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  IEEE and arXiv-ready formatting with real-time collaboration. Manage citations
                  effortlessly and streamline your publication workflow.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">For students</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Write math equations, create TikZ diagrams, and build professional resumes.
                  Perfect for coursework, thesis writing, and job applications.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">For engineers</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Create technical documentation, system design docs, and architecture diagrams.
                  Version control alongside code with living, collaborative documents.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center md:absolute md:inset-y-0 md:inset-x-0 md:mt-0 md:mask-l-from-50%">
            <div className="relative rounded-2xl bg-white/50 p-2 backdrop-blur-sm">
              <Image
                src="/images/octree-chat.png"
                className="rounded-[12px] border border-neutral-100 shadow-sm"
                alt="analytics chart showing data trends"
                width={1207}
                height={929}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
