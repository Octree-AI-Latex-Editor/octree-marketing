import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'
import { BookOpen, FileText, Wrench, ArrowRight, FileCode } from 'lucide-react'

// Cache blog fetch for performance
const getCachedRecentBlogs = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })
    return await payload.find({
      collection: 'blogs',
      depth: 0,
      limit: 4,
      overrideAccess: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        title: true,
        slug: true,
      },
      sort: '-publishedAt',
    })
  },
  ['homepage-recent-blogs'],
  {
    tags: ['homepage-recent-blogs'],
    revalidate: 3600,
  },
)

const tutorials = [
  {
    title: 'Learn LaTeX',
    description: 'Master LaTeX fundamentals for professional documents',
    href: '/learn/latex',
  },
  {
    title: 'Learn TikZ',
    description: 'Create stunning diagrams and graphics',
    href: '/learn/tikz',
  },
  {
    title: 'Learn PGFPlots',
    description: 'Generate publication-quality plots and charts',
    href: '/learn/pgfplots',
  },
]

export async function ResourcesSection() {
  const blogs = await getCachedRecentBlogs()

  return (
    <div className="py-[34px] md:py-[68px] max-w-[1050px] mx-auto flex flex-col gap-[37px] md:gap-[74px] px-4">
      <div className="text-center">
        <p className="text-primary text-lg md:text-xl tracking-[-0.04] mb-4">Resources</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">
          Everything you need to master LaTeX
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tutorials Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-900/50">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-lg">Tutorials</h3>
          </div>
          <div className="space-y-4">
            {tutorials.map((tutorial) => (
              <Link
                key={tutorial.href}
                href={tutorial.href}
                className="block group"
              >
                <p className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {tutorial.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tutorial.description}
                </p>
              </Link>
            ))}
            <Link
              href="/learn"
              className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline mt-2"
            >
              View all tutorials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Blog Section */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/30 dark:to-purple-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-900/50">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h3 className="font-semibold text-lg">Latest from Blog</h3>
          </div>
          <div className="space-y-4">
            {blogs.docs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="block group"
              >
                <p className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                  {blog.title}
                </p>
              </Link>
            ))}
            {blogs.docs.length === 0 && (
              <p className="text-sm text-gray-500 italic">No posts yet</p>
            )}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline mt-2"
            >
              View all posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Tools Section */}
        <div className="bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/30 dark:to-green-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-900/50">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-green-600 dark:text-green-400" />
            <h3 className="font-semibold text-lg">Free Tools</h3>
          </div>
          <div className="space-y-4">
            <Link
              href="https://tools.useoctree.com/tools/math-to-latex"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <p className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Math to LaTeX
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Convert handwritten math to LaTeX
              </p>
            </Link>
            <Link
              href="https://tools.useoctree.com/tools/tikz-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <p className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                TikZ Generator
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Create diagrams with AI
              </p>
            </Link>
            <Link
              href="https://tools.useoctree.com/tools/table-to-latex"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <p className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Excel to LaTeX
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Convert spreadsheets to tables
              </p>
            </Link>
            <Link
              href="https://tools.useoctree.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-medium hover:underline mt-2"
            >
              View all 17 tools
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Templates Section */}
      <div className="mt-8 bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20 rounded-2xl p-6 border border-orange-100 dark:border-orange-900/50">
        <div className="flex items-center gap-2 mb-4">
          <FileCode className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          <h3 className="font-semibold text-lg">LaTeX Templates</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="https://tools.useoctree.com/templates/research-paper"
            target="_blank"
            rel="noopener noreferrer"
            className="block group p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <p className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-sm">
              Research Paper
            </p>
          </Link>
          <Link
            href="https://tools.useoctree.com/templates/thesis"
            target="_blank"
            rel="noopener noreferrer"
            className="block group p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <p className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-sm">
              PhD Thesis
            </p>
          </Link>
          <Link
            href="https://tools.useoctree.com/templates/beamer-presentation"
            target="_blank"
            rel="noopener noreferrer"
            className="block group p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <p className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-sm">
              Beamer Slides
            </p>
          </Link>
          <Link
            href="https://tools.useoctree.com/templates/academic-cv"
            target="_blank"
            rel="noopener noreferrer"
            className="block group p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <p className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-sm">
              Academic CV
            </p>
          </Link>
          <Link
            href="https://tools.useoctree.com/templates/neurips-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="block group p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <p className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-sm">
              NeurIPS 2026
            </p>
          </Link>
          <Link
            href="https://tools.useoctree.com/templates/icml-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="block group p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <p className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-sm">
              ICML 2026
            </p>
          </Link>
          <Link
            href="https://tools.useoctree.com/templates/cover-letter"
            target="_blank"
            rel="noopener noreferrer"
            className="block group p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <p className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-sm">
              Cover Letter
            </p>
          </Link>
          <Link
            href="https://tools.useoctree.com/templates"
            target="_blank"
            rel="noopener noreferrer"
            className="block group p-3 rounded-lg bg-orange-100 dark:bg-orange-900/30 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
          >
            <p className="font-medium text-orange-700 dark:text-orange-300 text-sm flex items-center gap-1">
              View all 71 templates
              <ArrowRight className="w-4 h-4" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
