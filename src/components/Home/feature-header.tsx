import Arrow from '@/components/icons/arrow'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export function FeatureHeader() {
  const latexHtml = katex.renderToString('\\LaTeX', {
    throwOnError: false,
    displayMode: false,
  })

  return (
    <div className="max-w-[700px] py-8 md:py-16 text-[28px] md:text-[48px] lg:text-[56px] tracking-tight mx-auto leading-[1.125] px-4">
      Stop copying{' '}
      <span className="text-[0.85em]" dangerouslySetInnerHTML={{ __html: latexHtml }} /> code -
      write and compile with AI
      <div className="bg-primary rounded-[14px] p-2 ml-2 w-10 h-10 md:w-12 md:h-12 inline-flex items-center justify-center">
        <Arrow className="text-white w-5 h-5 md:w-7 md:h-7" />
      </div>
    </div>
  )
}
