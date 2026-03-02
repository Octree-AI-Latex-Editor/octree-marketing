'use client'

import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeSnippetProps {
  code: string
  language?: string
}

export function CodeSnippet({ code }: CodeSnippetProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="relative group rounded-lg border border-border bg-white dark:bg-zinc-950 overflow-hidden shadow-sm">
      <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          aria-label="Copy code"
        >
          {isCopied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
      <div className="overflow-x-auto p-4 py-5 text-[13px] leading-relaxed">
        <pre className="font-mono text-foreground font-medium">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}