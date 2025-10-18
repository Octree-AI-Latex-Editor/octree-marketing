import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'

import type { Footer, Blog } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
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

  // LaTeX Tools from Octree
  const toolsItems = [
    { title: 'Image to LaTeX', href: 'https://tools.useoctree.com/image-to-latex' },
    { title: 'Excel to LaTeX', href: 'https://tools.useoctree.com/excel-to-latex' },
    { title: 'TikZ Generator', href: 'https://tools.useoctree.com/tikz-generator' },
    { title: 'LaTeX Preview', href: 'https://tools.useoctree.com/latex-preview' },
    { title: 'Markdown to LaTeX', href: 'https://tools.useoctree.com/markdown-to-latex' },
    { title: 'Citation Generator', href: 'https://tools.useoctree.com/citation-generator' },
    { title: 'MathML to LaTeX', href: 'https://tools.useoctree.com/mathml-to-latex' },
    { title: 'AI LaTeX Generator', href: 'https://tools.useoctree.com/ai-latex-generator' },
    { title: 'HTML to LaTeX', href: 'https://tools.useoctree.com/html-to-latex' },
    { title: 'Mermaid to LaTeX', href: 'https://tools.useoctree.com/mermaid-to-latex' },
    { title: 'Pgfplots Generator', href: 'https://tools.useoctree.com/pgfplots-generator' },
  ]

  return (
    <footer className="mt-auto border-t border-gray-200 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <Link className="flex items-center" href="/">
              <Logo textClassName="text-gray-900 dark:text-white" />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Building the future with modern web technologies and innovative solutions.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Menu</h3>
            <nav className="flex flex-col gap-2">
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

          {/* Blogs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Blogs</h3>
            <nav className="flex flex-col gap-2 max-h-64 overflow-y-auto">
              {blogs.docs.map((blog) => (
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
            </nav>
          </div>

          {/* Tools */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Tools</h3>
            <nav className="flex flex-col gap-2">
              {toolsItems.map((tool, i) => (
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
            </nav>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Payload Website Template. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
