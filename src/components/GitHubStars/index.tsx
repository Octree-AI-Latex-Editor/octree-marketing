'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { GitHubIcon } from '@/components/icons/github'
import { Star } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

interface GitHubStarsProps {
  repo: string
  className?: string
}

export const GitHubStars: React.FC<GitHubStarsProps> = ({ repo, className = '' }) => {
  const [stars, setStars] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`)
        if (response.ok) {
          const data = await response.json()
          setStars(data.stargazers_count)
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stars:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStars()
  }, [repo])

  return (
    <Link
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 hover:border-neutral-300 transition-colors bg-white hover:bg-neutral-50 text-sm font-medium ${className}`}
    >
      <GitHubIcon className="w-4 h-4" />

      <div className="flex items-center gap-1">
        <Star className="w-3 h-3 fill-current" />
        <span className="font-mono text-xs w-[15px] h-[15px]">
          {loading ? (
            <Skeleton className="w-full h-full" />
          ) : stars !== null ? (
            stars.toLocaleString()
          ) : (
            '24'
          )}
        </span>
      </div>
    </Link>
  )
}
