'use client'

import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export interface ResponseTab {
  status: string
  label?: string
  code: string
}

interface ResponseTabsProps {
  tabs: ResponseTab[]
}

export function ResponseTabs({ tabs }: ResponseTabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [isCopied, setIsCopied] = useState(false)

  if (!tabs || tabs.length === 0) return null

  const activeTab = tabs[activeTabIndex]

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeTab.code)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="relative group rounded-lg border border-border bg-white dark:bg-zinc-950 overflow-hidden shadow-sm flex flex-col">
      <div className="flex items-center justify-between px-3 pt-2 overflow-x-auto">
        <div className="flex gap-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTabIndex(index)}
              className={`text-xs font-medium px-3 py-1.5 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTabIndex === index
                  ? 'text-foreground bg-muted'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <div 
                className={`w-2 h-2 rounded-full ${
                  tab.status.startsWith('2') ? 'bg-green-500' : 
                  tab.status.startsWith('4') || tab.status.startsWith('5') ? 'bg-red-500' : 
                  'bg-blue-500'
                }`} 
              />
              <span>{tab.status}</span>
              {tab.label && <span className="opacity-70 font-normal">{tab.label}</span>}
            </button>
          ))}
        </div>
        
        <button
          onClick={handleCopy}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {isCopied ? (
            <Check className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>

      <div className="overflow-x-auto p-4 py-5 text-[13px] leading-relaxed">
        <pre className="font-mono text-foreground font-medium">
          <code>{activeTab.code}</code>
        </pre>
      </div>
    </div>
  )
}