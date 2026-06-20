import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { getGitHubStars } from '@/utilities/getGitHubStars'
import React from 'react'

import type { Header } from '@/payload-types'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()
  const githubStars = await getGitHubStars('Octree-AI-Latex-Editor/octree')

  return <HeaderClient data={headerData} githubStars={githubStars} />
}
