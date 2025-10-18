'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { GitHubStars } from '@/components/GitHubStars'
import { RedditIcon } from '@/components/icons/reddit'
import { DiscordIcon } from '@/components/icons/discord'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-3 items-center">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" />
      })}
      <div className="flex items-center gap-1 text-neutral-800">
        <GitHubStars repo="Octree-AI-Latex-Editor/octree" />
        <Link
          href="https://www.reddit.com/r/Octree/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-neutral-100"
        >
          <span className="sr-only">Reddit</span>
          <RedditIcon className="w-5 h-5" />
        </Link>
        <Link
          href="https://discord.gg/H6X7rMzBak"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-neutral-100"
        >
          <span className="sr-only">Discord</span>
          <DiscordIcon className="w-5 h-5" />
        </Link>
      </div>
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5" />
      </Link>
    </nav>
  )
}
