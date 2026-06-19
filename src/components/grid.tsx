import React from 'react'
import { Plus } from 'lucide-react'

import { cn } from '@/utilities/ui'

// Faint diagonal hatch used to fill the gutters/margins around framed content.
export const hatchStyle: React.CSSProperties = {
  backgroundImage:
    'repeating-linear-gradient(-45deg, rgb(115 115 115 / 0.12) 0, rgb(115 115 115 / 0.12) 1px, transparent 1px, transparent 10px)',
}

const railLine = 'border-neutral-200 dark:border-neutral-800'

// Cross mark centered on a corner where the grid lines intersect. The
// background-colored square masks the lines so there's a gap around the plus.
export function Cross({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'pointer-events-none absolute z-10 flex size-8 items-center justify-center bg-background',
        className,
      )}
    >
      <Plus strokeWidth={1.5} className="size-5 text-neutral-400 dark:text-neutral-500" />
    </span>
  )
}

// Faint diagonal hatch ground. Children that set their own `bg-background`
// (e.g. GridSection's column) mask the hatch, so it only shows in the margins.
export function HatchGround({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('relative', className)} style={hatchStyle}>
      {children}
    </div>
  )
}

// A section framed by the page's vertical rails, with a divider line above it
// and crosses where the lines meet. Stack several to form one continuous column.
export function GridSection({
  children,
  first = false,
  last = false,
  className,
}: {
  children: React.ReactNode
  first?: boolean
  last?: boolean
  className?: string
}) {
  return (
    <div className={cn('relative', !first && 'border-t', railLine)}>
      <div
        className={cn(
          'relative mx-auto max-w-[1050px] border-x bg-background',
          railLine,
          className,
        )}
      >
        {!first && (
          <>
            <Cross className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
            <Cross className="right-0 top-0 -translate-y-1/2 translate-x-1/2" />
          </>
        )}
        {last && (
          <>
            <Cross className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
            <Cross className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
          </>
        )}
        {children}
      </div>
    </div>
  )
}
