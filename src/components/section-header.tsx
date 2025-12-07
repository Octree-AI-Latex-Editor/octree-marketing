export function SectionHeader({ title, description }: { title: string; description: string }) {
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
