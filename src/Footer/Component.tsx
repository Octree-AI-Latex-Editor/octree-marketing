import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'

import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

// Cache the blog fetch for better performance
const getCachedFooterBlogs = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })
    return await payload.find({
      collection: 'blogs',
      depth: 0,
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
  ['footer-blogs'],
  {
    tags: ['footer-blogs'],
    revalidate: 3600, // Cache for 1 hour
  },
)

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  // Fetch all published blogs for footer with caching
  const blogs = await getCachedFooterBlogs()

  const navItems = footerData?.navItems || []

  // Learn section items
  const learnItems = [
    { title: 'Learn LaTeX', href: '/learn/latex' },
    { title: 'Learn TikZ', href: '/learn/tikz' },
    { title: 'Learn PGFPlots', href: '/learn/pgfplots' },
    { title: 'Bold, Italics & Underline', href: '/learn/bold-italics-underline' },
    { title: 'Page Size & Margins', href: '/learn/page-size-margins' },
    { title: 'Subscripts & Superscripts', href: '/learn/subscripts-superscripts' },
    { title: 'LaTeX Lists', href: '/learn/lists' },
    { title: 'Greek Letters & Symbols', href: '/learn/greek-letters-math-symbols' },
    { title: 'Using Colors', href: '/learn/colors' },
    { title: 'Math Expressions', href: '/learn/mathematical-expressions' },
    { title: 'Integrals, Sums & Limits', href: '/learn/integrals-sums-limits' },
    { title: 'Matrices', href: '/learn/matrices' },
    { title: 'LaTeX Tables', href: '/learn/tables' },
  ]

  // LaTeX Tools from Octree - All 17 tools
  const toolsItems = [
    { title: 'Math to LaTeX', href: 'https://tools.useoctree.com/tools/math-to-latex' },
    { title: 'Excel to LaTeX', href: 'https://tools.useoctree.com/tools/table-to-latex' },
    { title: 'TikZ Generator', href: 'https://tools.useoctree.com/tools/tikz-generator' },
    { title: 'Image to TikZ', href: 'https://tools.useoctree.com/tools/image-to-tikz' },
    { title: 'LaTeX Preview', href: 'https://tools.useoctree.com/tools/latex-preview' },
    { title: 'Markdown to LaTeX', href: 'https://tools.useoctree.com/tools/markdown-to-latex' },
    { title: 'LaTeX to Markdown', href: 'https://tools.useoctree.com/tools/latex-to-markdown' },
    { title: 'Citation Generator', href: 'https://tools.useoctree.com/tools/citation-generator' },
    { title: 'MathML to LaTeX', href: 'https://tools.useoctree.com/tools/mathml-to-latex' },
    { title: 'AI LaTeX Generator', href: 'https://tools.useoctree.com/tools/ai-latex-generator' },
    { title: 'HTML to LaTeX', href: 'https://tools.useoctree.com/tools/html-to-latex' },
    { title: 'Mermaid to LaTeX', href: 'https://tools.useoctree.com/tools/mermaid-to-latex' },
    { title: 'Pgfplots Generator', href: 'https://tools.useoctree.com/tools/pgfplots-generator' },
    { title: 'PDF to LaTeX', href: 'https://tools.useoctree.com/tools/pdf-to-latex' },
    { title: 'Equation to LaTeX', href: 'https://tools.useoctree.com/tools/equation-to-latex' },
    { title: 'ArXiv to LaTeX', href: 'https://tools.useoctree.com/tools/arxiv-to-latex' },
    { title: 'LaTeX Word Counter', href: 'https://tools.useoctree.com/tools/latex-word-counter' },
  ]

  // LaTeX Templates
  const templatesItems = [
    { title: 'Research Paper', href: 'https://tools.useoctree.com/templates/research-paper' },
    { title: 'PhD Thesis', href: 'https://tools.useoctree.com/templates/thesis' },
    { title: 'Beamer Presentation', href: 'https://tools.useoctree.com/templates/beamer-presentation' },
    { title: 'Academic CV', href: 'https://tools.useoctree.com/templates/academic-cv' },
    { title: 'Cover Letter', href: 'https://tools.useoctree.com/templates/cover-letter' },
    { title: 'Lab Report', href: 'https://tools.useoctree.com/templates/lab-report' },
    { title: 'NeurIPS 2026', href: 'https://tools.useoctree.com/templates/neurips-2026' },
    { title: 'ICML 2026', href: 'https://tools.useoctree.com/templates/icml-2026' },
  ]

  return (
    <footer className="mt-auto border-t border-gray-200 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container py-12">
        {/* Row 1: Logo, Menu, Learn, Blogs, Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <Link className="flex items-center" href="/">
              <Logo textClassName="text-gray-900 dark:text-white" />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Building the future with modern web technologies and innovative solutions.
            </p>
          </div>

          {/* Menu */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Menu</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/learn"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Learn
              </Link>
              <Link
                href="/docs/compile-api"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Docs
              </Link>
              <Link
                href="/about"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                About
              </Link>
              <Link
                href="https://tools.useoctree.com/templates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Templates
              </Link>
              <Link
                href="https://tools.useoctree.com/symbols"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Symbols
              </Link>
              {navItems.map(({ link }, i) => {
                return (
                  <CMSLink
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                    key={i}
                    {...link}
                  />
                )
              })}
            </nav>
          </div>

          {/* Learn */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Learn</h3>
            <nav className="flex flex-col gap-2">
              {learnItems.slice(0, 8).map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="/learn"
                className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
              >
                View all tutorials →
              </Link>
            </nav>
          </div>

          {/* Blogs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Blogs</h3>
            <nav className="flex flex-col gap-2">
              {blogs.docs.slice(0, 10).map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                >
                  {blog.title}
                </Link>
              ))}
              {blogs.docs.length === 0 && (
                <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                  No blogs published yet
                </p>
              )}
              {blogs.docs.length > 10 && (
                <Link
                  href="/blog"
                  className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
                >
                  Show more →
                </Link>
              )}
            </nav>
          </div>

          {/* Tools */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Tools</h3>
            <nav className="flex flex-col gap-2">
              {toolsItems.slice(0, 10).map((tool, i) => (
                <Link
                  key={i}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                >
                  {tool.title}
                </Link>
              ))}
              <Link
                href="https://tools.useoctree.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
              >
                View all tools →
              </Link>
            </nav>
          </div>
        </div>

        {/* Row 2: Templates and Symbols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
          {/* Empty spacer for logo column */}
          <div className="hidden lg:block"></div>

          {/* Templates */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Templates</h3>
            <nav className="flex flex-col gap-2">
              {templatesItems.map((template, i) => (
                <Link
                  key={i}
                  href={template.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                >
                  {template.title}
                </Link>
              ))}
              <Link
                href="https://tools.useoctree.com/templates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
              >
                View all 71 templates →
              </Link>
            </nav>
          </div>

          {/* Symbols */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Symbols</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="https://tools.useoctree.com/symbols"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Greek Letters
              </Link>
              <Link
                href="https://tools.useoctree.com/symbols"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Math Operators
              </Link>
              <Link
                href="https://tools.useoctree.com/symbols"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Arrows
              </Link>
              <Link
                href="https://tools.useoctree.com/symbols"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Relations
              </Link>
              <Link
                href="https://tools.useoctree.com/symbols"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Set Theory
              </Link>
              <Link
                href="https://tools.useoctree.com/symbols"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Calculus
              </Link>
              <Link
                href="https://tools.useoctree.com/symbols"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Logic
              </Link>
              <Link
                href="https://tools.useoctree.com/symbols"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Linear Algebra
              </Link>
              <Link
                href="https://tools.useoctree.com/symbols"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
              >
                Browse all 37 categories →
              </Link>
            </nav>
          </div>

          {/* Open Source */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Open Source</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="https://github.com/octree-labs/octree"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Octree
              </Link>
              <Link
                href="https://github.com/octree-labs/tools"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Tools & Templates
              </Link>
              <Link
                href="https://github.com/octree-labs/octree-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Marketing & Blogs
              </Link>
              <Link
                href="https://github.com/octree-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
              >
                View all repositories →
              </Link>
            </nav>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Socials</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="https://instagram.com/useoctree"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Instagram
              </Link>
              <Link
                href="https://linkedin.com/company/useoctree"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                LinkedIn
              </Link>
              <Link
                href="https://tiktok.com/@useoctree"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                TikTok
              </Link>
              <Link
                href="https://x.com/useoctree"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                X
              </Link>
              <Link
                href="https://www.reddit.com/r/Octree/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Reddit
              </Link>
              <Link
                href="https://discord.gg/H6X7rMzBak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Discord
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Octree. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
