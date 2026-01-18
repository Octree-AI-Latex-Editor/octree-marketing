import { getServerSideURL } from './getURL'

export interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * Generates BreadcrumbList JSON-LD structured data for SEO
 * @see https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const siteUrl = getServerSideURL()

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  }
}

/**
 * Generates breadcrumb items for a blog post
 */
export function getBlogBreadcrumbs(
  postTitle: string,
  postSlug: string,
  categoryTitle?: string,
  categorySlug?: string
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]

  if (categoryTitle && categorySlug) {
    breadcrumbs.push({
      name: categoryTitle,
      url: `/blog?category=${categorySlug}`,
    })
  }

  breadcrumbs.push({
    name: postTitle,
    url: `/blog/${postSlug}`,
  })

  return breadcrumbs
}

/**
 * Generates breadcrumb items for learn pages
 */
export function getLearnBreadcrumbs(topicTitle?: string, topicSlug?: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: '/' },
    { name: 'Learn', url: '/learn' },
  ]

  if (topicTitle && topicSlug) {
    breadcrumbs.push({
      name: topicTitle,
      url: `/learn/${topicSlug}`,
    })
  }

  return breadcrumbs
}
