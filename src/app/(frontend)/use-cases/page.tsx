import Link from 'next/link'
import { generateMetadata } from '../[slug]/page'

export default function UseCasesPage() {
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
              Powerful <span className="text-[#478eff]">Use Cases</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#636363] font-medium tracking-[-0.02]">
              Discover how researchers, students, and professionals use our platform to create
              exceptional documents.
            </p>
          </div>
        </div>
      </div>

      {/* Primary Use Cases */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-[32px] md:text-[40px] text-black leading-[1.2] tracking-tight font-heading mb-12 text-center">
            Perfect For Every Workflow
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3">Academic Research</h3>
              <p className="text-[#636363] leading-relaxed mb-4">
                Create publication-ready research papers, theses, and dissertations with proper
                citations, formatting, and structure. Perfect for journal submissions and academic
                publications.
              </p>
              <ul className="space-y-2 text-[#636363]">
                <li className="flex items-start">
                  <span className="text-[#478eff] mr-2">•</span>
                  <span>Automated citation management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#478eff] mr-2">•</span>
                  <span>Journal-specific formatting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#478eff] mr-2">•</span>
                  <span>Mathematical equation support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3">Technical Documentation</h3>
              <p className="text-[#636363] leading-relaxed mb-4">
                Build comprehensive technical documentation, API references, and software guides
                with code syntax highlighting and proper formatting.
              </p>
              <ul className="space-y-2 text-[#636363]">
                <li className="flex items-start">
                  <span className="text-[#478eff] mr-2">•</span>
                  <span>Multi-language code blocks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#478eff] mr-2">•</span>
                  <span>Version control integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#478eff] mr-2">•</span>
                  <span>Automated table of contents</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3">Business Reports</h3>
              <p className="text-[#636363] leading-relaxed mb-4">
                Generate professional business reports, whitepapers, and proposals with data
                visualizations and executive summaries.
              </p>
              <ul className="space-y-2 text-[#636363]">
                <li className="flex items-start">
                  <span className="text-[#478eff] mr-2">•</span>
                  <span>Charts and data visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#478eff] mr-2">•</span>
                  <span>Executive summary templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#478eff] mr-2">•</span>
                  <span>Brand-consistent styling</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all">
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
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3">Student Projects</h3>
              <p className="text-[#636363] leading-relaxed mb-4">
                Complete assignments, lab reports, and term papers faster with AI assistance and
                proper academic formatting.
              </p>
              <ul className="space-y-2 text-[#636363]">
                <li className="flex items-start">
                  <span className="text-[#478eff] mr-2">•</span>
                  <span>Citation style guides (APA, MLA, Chicago)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#478eff] mr-2">•</span>
                  <span>Plagiarism detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#478eff] mr-2">•</span>
                  <span>Collaborative editing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Use Cases */}
      <div className="py-16 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-[32px] md:text-[40px] text-black leading-[1.2] tracking-tight font-heading mb-12 text-center">
            More Ways to Create
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-black mb-2">Grant Proposals</h3>
              <p className="text-[#636363] text-sm leading-relaxed">
                Write compelling grant proposals with structured sections and proper budget tables.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-black mb-2">Conference Papers</h3>
              <p className="text-[#636363] text-sm leading-relaxed">
                Prepare papers for academic conferences with submission-ready formatting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-black mb-2">Book Chapters</h3>
              <p className="text-[#636363] text-sm leading-relaxed">
                Draft book chapters and manuscripts with professional typesetting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-black mb-2">Case Studies</h3>
              <p className="text-[#636363] text-sm leading-relaxed">
                Document detailed case studies with proper methodology and analysis sections.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-black mb-2">Literature Reviews</h3>
              <p className="text-[#636363] text-sm leading-relaxed">
                Compile comprehensive literature reviews with organized citations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-black mb-2">Policy Documents</h3>
              <p className="text-[#636363] text-sm leading-relaxed">
                Create policy documents and regulatory reports with consistent formatting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[32px] md:text-[40px] text-black leading-[1.2] tracking-tight font-heading mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg md:text-xl text-[#636363] mb-8">
            Start creating professional documents today. No credit card required.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-[#478eff] rounded-full hover:bg-[#3a7ae0] transition-colors duration-200 shadow-sm"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </main>
  )
}

export { generateMetadata }
