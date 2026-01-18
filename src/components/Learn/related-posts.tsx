import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'
import { ArrowRight } from 'lucide-react'

// Cache blog fetch for performance
const getCachedRelatedBlogs = unstable_cache(
  async (searchTerm: string) => {
    const payload = await getPayload({ config: configPromise })
    return await payload.find({
      collection: 'blogs',
      depth: 0,
      limit: 4,
      overrideAccess: false,
      where: {
        and: [
          {
            _status: {
              equals: 'published',
            },
          },
          {
            title: {
              contains: searchTerm,
            },
          },
        ],
      },
      select: {
        title: true,
        slug: true,
      },
      sort: '-publishedAt',
    })
  },
  ['learn-related-blogs'],
  {
    tags: ['learn-related-blogs'],
    revalidate: 3600,
  },
)

interface RelatedPostsProps {
  searchTerm: string
  title?: string
}

export async function RelatedPosts({ searchTerm, title = 'Related Articles' }: RelatedPostsProps) {
  const blogs = await getCachedRelatedBlogs(searchTerm)

  if (blogs.docs.length === 0) {
    return null
  }

  return (
    <div className="not-prose mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.docs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors group"
          >
            <p className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
              {blog.title}
            </p>
          </Link>
        ))}
      </div>
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline mt-4"
      >
        View all articles
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
