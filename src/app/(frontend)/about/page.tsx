import Link from 'next/link'
import { generateMetadata } from '../[slug]/page'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[400px] blur-[20px] rounded-full overflow-hidden z-[1] pointer-events-none"
          style={{
            background:
              'linear-gradient(0deg, #c7dbff 0%, rgba(228, 241, 254, 0.15) 51%, rgba(255, 255, 255, 0) 100%)',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] text-black leading-[1.1] tracking-tight font-heading mb-6">
              About <span className="text-[#478eff]">Our Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#636363] font-medium tracking-[-0.02]">
              We&apos;re on a mission to make research document creation effortless and accessible
              for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-[32px] md:text-[40px] text-black leading-[1.2] tracking-tight font-heading mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-[#636363] leading-relaxed mb-4">
              We believe that creating high-quality research documents shouldn&apos;t require
              mastering complex syntax or spending hours on formatting. That&apos;s why we&apos;ve
              built a modern, AI-powered platform that lets you focus on what matters most — your
              ideas and research.
            </p>
            <p className="text-lg md:text-xl text-[#636363] leading-relaxed">
              Our platform combines the power of artificial intelligence with an intuitive interface
              to help researchers, students, and professionals produce publication-ready documents
              in minutes, not hours.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-[32px] md:text-[40px] text-black leading-[1.2] tracking-tight font-heading mb-12 text-center">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#478eff]/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#478eff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Simplicity</h3>
              <p className="text-[#636363] leading-relaxed">
                We make complex tasks simple. No steep learning curves, just intuitive tools that
                work the way you think.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#478eff]/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#478eff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Innovation</h3>
              <p className="text-[#636363] leading-relaxed">
                We leverage cutting-edge AI technology to push the boundaries of what&apos;s
                possible in document creation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#478eff]/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#478eff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Community</h3>
              <p className="text-[#636363] leading-relaxed">
                We&apos;re building more than software — we&apos;re creating a community of
                researchers and creators.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-[32px] md:text-[40px] text-black leading-[1.2] tracking-tight font-heading mb-6">
              Built by Researchers, for Researchers
            </h2>
            <p className="text-lg md:text-xl text-[#636363] leading-relaxed mb-8">
              Our team has experienced firsthand the challenges of creating research documents.
              We&apos;ve been there — struggling with LaTeX syntax, wrestling with formatting, and
              losing precious time on things that should be simple. That&apos;s why we&apos;re
              passionate about building tools that eliminate these pain points.
            </p>
            <p className="text-lg md:text-xl text-[#636363] leading-relaxed">
              We&apos;re a small but dedicated team of engineers, designers, and researchers working
              together to create the best document creation experience possible.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[32px] md:text-[40px] text-black leading-[1.2] tracking-tight font-heading mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-[#636363] mb-8">
            Join thousands of researchers already using our platform to create better documents
            faster.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-[#478eff] rounded-full hover:bg-[#3a7ae0] transition-colors duration-200 shadow-sm"
          >
            Try Now
          </Link>
        </div>
      </div>
    </main>
  )
}

export { generateMetadata }
