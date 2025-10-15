import React from 'react'
import { cn } from '@/utilities/ui'
interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  textClassName?: string
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className, textClassName } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <div className="flex items-center space-x-2">
      <img
        alt="Payload Logo"
        width={193}
        height={34}
        loading={loading}
        fetchPriority={priority}
        decoding="async"
        className={cn('max-w-[9.375rem] w-full h-[34px]', className)}
        src="/octree.svg"
      />
      <span className={cn('text-lg font-medium tracking-tight text-neutral-900', textClassName)}>
        Octree
      </span>
    </div>
  )
}
