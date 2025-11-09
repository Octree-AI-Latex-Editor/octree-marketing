import { Check, Users } from 'lucide-react'
import { cn } from '@/utilities/ui'
import Compass from '@/components/icons/compass'
import Sparkles from '@/components/icons/sparkles'
import { PrimaryButton } from './primary-button'

export function Pricing() {
  const starterFeatures = [
    '5 free AI edits per day',
    'Unlimited compile',
    'PDF export',
    'User-friendly experience',
  ]

  const proFeatures = [
    'Everything in Starter plan',
    'Unlimited edits',
    'Unlimited documents',
    'Priority support',
  ]

  const enterpriseFeatures = [
    'Everything in Pro plan',
    'Privately hosted AI model',
    '10+ integrations',
    'Dedicated support',
  ]

  return (
    <div className="py-[34px] md:py-[68px] max-w-[1050px] mx-auto flex flex-col gap-[37px] md:gap-[74px] px-4">
      <SectionHeader
        title="Pricing"
        description="Simple, transparent pricing for all your editing needs"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <PricingCard
          icon={<Compass className="w-4 h-4 md:w-5 md:h-5" />}
          name="Starter"
          description="Ideal for individuals just starting out"
          price="Free"
          features={starterFeatures}
          buttonText="Get Started"
        />

        <PricingCard
          icon={<Sparkles className="size-4 text-primary" />}
          name="Pro"
          description="Perfect for research teams and power users"
          price={
            <>
              $10 <span className="text-base md:text-lg font-normal">/Month</span>
            </>
          }
          features={proFeatures}
          buttonText="Get Started"
          buttonHref="https://buy.stripe.com/6oUdR9fyd8Sd6Cifd46oo00"
          isDark
        />

        <PricingCard
          icon={<Users className="size-4" />}
          name="Enterprise"
          description="For large organizations with custom needs"
          price="Custom"
          features={enterpriseFeatures}
          buttonText="Contact Sales"
          buttonHref="https://cal.com/basilyusuf1709/quick-chat"
        />
      </div>
    </div>
  )
}

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-4 md:gap-5 max-w-[675px] mx-auto">
      <h3 className="text-primary text-lg md:text-xl tracking-[-0.04] text-center font-heading">
        {title}
      </h3>
      <p className="text-center tracking-tight text-2xl md:text-3xl lg:text-4xl font-heading">
        {description}
      </p>
    </div>
  )
}

function FeatureItem({ text, isDark = false }: { text: string; isDark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={cn(
          'size-5 rounded-[7px] flex items-center justify-center',
          isDark ? 'bg-white' : 'bg-primary',
        )}
      >
        <Check className={cn('size-3.5', isDark ? 'text-black' : 'text-white')} />
      </div>
      <p className={cn('text-base font-medium', isDark && 'text-white')}>{text}</p>
    </div>
  )
}

function PricingCard({
  icon,
  name,
  description,
  price,
  features,
  buttonText,
  buttonHref,
  isDark = false,
}: {
  icon: React.ReactNode
  name: string
  description: string
  price: React.ReactNode
  features: string[]
  buttonText: string
  buttonHref?: string
  isDark?: boolean
}) {
  return (
    <div
      className={cn(
        'p-5 md:p-7 flex flex-col gap-6 md:gap-8 border-2 rounded-2xl md:rounded-3xl shadow-sm',
        isDark ? 'bg-primary border-neutral-100' : 'border-neutral-100',
      )}
    >
      <div className="flex flex-col gap-4 md:gap-6">
        <span
          className={cn(
            'flex items-center gap-1.5 py-2 pl-2.5 pr-3 rounded-full w-fit font-medium text-sm md:text-base',
            isDark ? 'bg-white text-black' : 'bg-primary text-white',
          )}
        >
          {icon}
          {name}
        </span>

        <p className={cn('text-base md:text-lg', isDark && 'text-white')}>{description}</p>

        <div className={cn('text-2xl md:text-3xl font-medium', isDark && 'text-white')}>
          {price}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {features.map((feature) => (
          <FeatureItem key={feature} text={feature} isDark={isDark} />
        ))}
      </div>

      <PrimaryButton
        className={isDark ? 'from-white to-white text-black' : undefined}
        href={buttonHref}
      >
        {buttonText}
      </PrimaryButton>
    </div>
  )
}
