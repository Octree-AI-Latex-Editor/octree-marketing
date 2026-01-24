import { InfiniteSlider } from '@/components/ui/infinite-slider'

export function LogoCloud() {
  return (
    <section className="bg-background overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <p className="text-center text-lg md:text-xl font-medium">
              Powering research teams and academics at
            </p>
          </div>
          <div className="relative py-6 w-full">
            <InfiniteSlider speedOnHover={20} speed={40} gap={80}>
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-auto dark:invert"
                  src="/logos/guelph.png"
                  alt="University of Guelph"
                  height="48"
                  width="auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-auto dark:invert"
                  src="/logos/harvard.png"
                  alt="Harvard University"
                  height="48"
                  width="auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="h-14 w-auto dark:invert"
                  src="/logos/rwth.svg"
                  alt="RWTH Aachen University"
                  height="56"
                  width="auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-auto dark:invert"
                  src="/logos/johns-hopkins.png"
                  alt="Johns Hopkins University"
                  height="48"
                  width="auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-auto dark:invert"
                  src="/logos/upenn.png"
                  alt="University of Pennsylvania Logo"
                  height="48"
                  width="auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-auto dark:invert"
                  src="/logos/iitm.png"
                  alt="IIT Madras Logo"
                  height="48"
                  width="auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-auto dark:invert"
                  src="/logos/nyu.png"
                  alt="New York University Logo"
                  height="48"
                  width="auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-auto dark:invert"
                  src="/logos/imu.png"
                  alt="Inner Mongolia University Logo"
                  height="48"
                  width="auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-auto dark:invert"
                  src="/logos/south-dakota.svg"
                  alt="South Dakota State University Logo"
                  height="48"
                  width="auto"
                />
              </div>

              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-auto dark:invert"
                  src="/logos/stevens.png"
                  alt="Stevens Institute of Technology Logo"
                  height="48"
                  width="auto"
                />
              </div>

              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-auto dark:invert"
                  src="/logos/hnu.png"
                  alt="Hainan Normal University Logo"
                  height="48"
                  width="auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-auto dark:invert"
                  src="/logos/muni.png"
                  alt="Masaryk University Logo"
                  height="48"
                  width="auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-auto dark:invert"
                  src="/logos/uaq.svg"
                  alt="Universidad Autónoma de Querétaro Logo"
                  height="48"
                  width="auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-auto dark:invert"
                  src="/logos/umass.png"
                  alt="UMass Logo"
                  height="40"
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
