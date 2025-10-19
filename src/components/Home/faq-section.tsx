import { FAQ } from './faq'

export function FAQSection() {
  return (
    <div className="py-[34px] md:py-[68px] max-w-[1050px] mx-auto flex flex-col gap-[37px] md:gap-[74px] px-4">
      <div className="flex flex-col gap-4 md:gap-5 max-w-[675px] mx-auto">
        <h3 className="text-primary text-lg md:text-xl tracking-[-0.04] text-center font-heading">
          FAQ
        </h3>
        <p className="text-center tracking-tight text-2xl md:text-3xl lg:text-4xl font-heading">
          Frequently Asked Questions
        </p>
      </div>

      <div className="max-w-[800px] mx-auto w-full">
        <FAQ />
      </div>
    </div>
  )
}
