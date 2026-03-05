'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/utilities/ui'

const navItems: {
  category: string
  items: {
    id: string
    label: string
    method?: string
    methodColor?: string
  }[]
}[] = [
  {
    category: 'Endpoints',
    items: [
      { 
        id: 'health-check', 
        label: 'Health Check', 
        method: 'GET', 
        methodColor: 'text-green-600 dark:text-green-400 bg-green-500/10' 
      },
      { 
        id: 'compile-multi-file', 
        label: 'Compile (Multi-file)', 
        method: 'POST', 
        methodColor: 'text-blue-600 dark:text-blue-400 bg-blue-500/10' 
      },
    ]
  },
  {
    category: 'Concepts',
    items: [
      { id: 'performance-caching', label: 'Performance & Caching' }
    ]
  }
]

export function DocsSidebar() {
  const [activeId, setActiveId] = useState<string>('health-check')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length > 0) {
          // Sort by top coordinate to pick the topmost visible section
          visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          setActiveId(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-100px 0px -60% 0px',
      }
    )

    const allIds = navItems.flatMap(cat => cat.items.map(item => item.id))
    allIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <aside className="lg:w-64 shrink-0">
      <div className="sticky top-24 space-y-8">
        {navItems.map((category, idx) => (
          <div key={idx}>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
              {category.category}
            </h3>
            <nav className="flex flex-col space-y-1">
              {category.items.map((item) => {
                const isActive = activeId === item.id
                return (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors',
                      isActive 
                        ? 'bg-muted text-foreground font-medium' 
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )}
                    onClick={() => setActiveId(item.id)}
                  >
                    {item.method && (
                      <span className={cn('text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded', item.methodColor)}>
                        {item.method}
                      </span>
                    )}
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  )
}
