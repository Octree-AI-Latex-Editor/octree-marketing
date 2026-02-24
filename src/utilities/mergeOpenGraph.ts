import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'The open-source LaTeX editor that makes academic writing feel natural and effortless',
  images: [
    {
      url: `${getServerSideURL()}/images/homepage-og.png`,
      width: 1200,
      height: 630,
      alt: 'Octree - AI LaTeX Editor',
    },
  ],
  siteName: 'Octree',
  title: 'Octree',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
