import canUseDOM from './canUseDOM'

const normalizeUrl = (rawUrl: string) => {
  const trimmed = rawUrl.trim()
  const withScheme =
    trimmed.startsWith('http://') || trimmed.startsWith('https://') ? trimmed : `https://${trimmed}`

  return withScheme.replace(/\/$/, '')
}

export const getServerSideURL = () => {
  const explicit = process.env.NEXT_PUBLIC_SERVER_URL
  if (explicit) return normalizeUrl(explicit)

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return normalizeUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL)
  }

  return 'http://localhost:3000'
}

export const getClientSideURL = () => {
  if (canUseDOM) {
    const protocol = window.location.protocol
    const domain = window.location.hostname
    const port = window.location.port

    return `${protocol}//${domain}${port ? `:${port}` : ''}`
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return normalizeUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL)
  }

  return process.env.NEXT_PUBLIC_SERVER_URL ? normalizeUrl(process.env.NEXT_PUBLIC_SERVER_URL) : ''
}
