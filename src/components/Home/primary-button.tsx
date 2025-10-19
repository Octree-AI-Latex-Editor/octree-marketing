import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'

export function PrimaryButton({
  children,
  className,
  href = 'https://app.useoctree.com/',
}: {
  children: React.ReactNode
  className?: string
  href?: string
}) {
  return (
    <Link href={href}>
      <Button
        className={cn(
          'group w-fit rounded-full bg-gradient-to-b from-[#6B9FFF] to-primary text-white font-medium',
          className,
        )}
      >
        <span className="flex items-center">
          {children}
          <span className="max-w-0 overflow-hidden transition-all duration-200 group-hover:max-w-6 group-hover:ml-1">
            <ArrowRight className="size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          </span>
        </span>
      </Button>
    </Link>
  )
}
