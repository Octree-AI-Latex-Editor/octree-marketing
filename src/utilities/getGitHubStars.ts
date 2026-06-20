/**
 * Fetches a repo's star count from the GitHub API, server-side, cached for 24h.
 *
 * Using Next's data cache (`revalidate`) means at most one real GitHub request
 * per day across all visitors — avoiding the per-IP rate limiting that a
 * client-side fetch on every page load runs into. Set GITHUB_TOKEN to raise the
 * API limit further (optional).
 */
export async function getGitHubStars(repo: string): Promise<number | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        'User-Agent': 'octree-marketing',
        Accept: 'application/vnd.github+json',
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      next: { revalidate: 86400 }, // once per day
    })

    if (!response.ok) return null

    const data = await response.json()
    return typeof data.stargazers_count === 'number' ? data.stargazers_count : null
  } catch (error) {
    console.error('Failed to fetch GitHub stars:', error)
    return null
  }
}
