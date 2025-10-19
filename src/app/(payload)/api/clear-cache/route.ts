import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { paths = [], tags = [] } = body

    const results = {
      pathsRevalidated: [] as string[],
      tagsRevalidated: [] as string[],
    }

    // Revalidate specific paths if provided
    if (paths.length > 0) {
      for (const path of paths) {
        try {
          revalidatePath(path)
          results.pathsRevalidated.push(path)
        } catch (error) {
          console.error(`Failed to revalidate path: ${path}`, error)
        }
      }
    } else {
      // Revalidate common paths
      const commonPaths = ['/', '/blog', '/about', '/search', '/use-cases']
      for (const path of commonPaths) {
        try {
          revalidatePath(path)
          results.pathsRevalidated.push(path)
        } catch (error) {
          console.error(`Failed to revalidate path: ${path}`, error)
        }
      }
    }

    // Revalidate specific tags if provided
    if (tags.length > 0) {
      for (const tag of tags) {
        try {
          revalidateTag(tag)
          results.tagsRevalidated.push(tag)
        } catch (error) {
          console.error(`Failed to revalidate tag: ${tag}`, error)
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Cache cleared successfully',
      ...results,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Cache clear error:', error)
    return NextResponse.json(
      {
        error: 'Failed to clear cache',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}

// Also support GET for simple health check
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  const secret = process.env.CRON_SECRET

  if (!secret) {
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
  }

  const isAuthorized = authHeader === `Bearer ${secret}`

  if (!isAuthorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({
    status: 'ready',
    message: 'Cache clear endpoint is available. Use POST to clear cache.',
  })
}
