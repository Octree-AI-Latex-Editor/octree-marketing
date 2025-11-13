import { InfiniteSlider } from '@/components/ui/infinite-slider'

export default function LogoCloud() {
  return (
    <section className="bg-background overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <p className="text-center text-lg md:text-xl font-medium">
              Powering research teams and engineers at
            </p>
          </div>
          <div className="relative py-6 w-full">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              <div className="flex">
                <img
                  className="mx-auto h-12 w-fit dark:invert"
                  src="/logos/guelph.png"
                  alt="University of Guelph"
                  height="48"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-14 w-fit dark:invert"
                  src="/logos/rwth.svg"
                  alt="RWTH Aachen University"
                  height="56"
                  width="auto"
                />
              </div>

              <div className="flex items-center justify-center">
                <img
                  className="mx-auto h-10 w-fit dark:invert"
                  src="/logos/google.svg"
                  alt="Google Logo"
                  height="40"
                  width="auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="mx-auto h-12 w-fit dark:invert"
                  src="/logos/south-dakota.svg"
                  alt="South Dakota State University Logo"
                  height="48"
                  width="auto"
                />
              </div>

              <div className="flex items-center justify-center">
                <img
                  className="mx-auto h-12 w-fit dark:invert"
                  src="/logos/stevens.png"
                  alt="Stevens Institute of Technology Logo"
                  height="48"
                  width="auto"
                />
              </div>
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  )
}
