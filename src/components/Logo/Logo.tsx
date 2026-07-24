import React from 'react'
import { cn } from '@/utilities/ui'
interface Props {
  className?: string
  textClassName?: string
}

export const Logo = (props: Props) => {
  const { className, textClassName } = props
  const id = React.useId()
  const tileId = `${id}-tile`
  const ringId = `${id}-ring`

  return (
    <div className="flex items-center space-x-2">
      <svg
        width={32}
        height={32}
        viewBox="0 0 96 96"
        fill="none"
        aria-label="Octree Logo"
        className={cn('h-8 w-8', className)}
      >
        <defs>
          <linearGradient
            id={tileId}
            x1="48"
            y1="0"
            x2="48"
            y2="96"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#4485FE" />
            <stop offset="1" stopColor="#0C50D0" />
          </linearGradient>
          <linearGradient
            id={ringId}
            x1="48"
            y1="20"
            x2="48"
            y2="76"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#ABC8FF" />
          </linearGradient>
        </defs>
        <rect width="96" height="96" rx="22" fill={`url(#${tileId})`} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35 20 L61 20 L76 35 L76 61 L61 76 L35 76 L20 61 L20 35 Z M41.5 34.4 L34.4 41.5 L34.4 54.5 L41.5 61.6 L54.5 61.6 L61.6 54.5 L61.6 41.5 L54.5 34.4 Z"
          fill={`url(#${ringId})`}
        />
      </svg>
      <span
        className={cn(
          'font-[family-name:var(--font-space-grotesk)] text-xl font-medium tracking-[-0.02em] text-neutral-900',
          textClassName,
        )}
      >
        octree
      </span>
    </div>
  )
}
