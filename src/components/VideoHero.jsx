import { BackgroundVideo } from './BackgroundVideo'
import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { Button } from './Button'
import { Brenner } from '@/components/Brenner'

function MobileHero() {
  return (
    <div className="relative sm:hidden">
      <BackgroundVideo
        videoUrl="https://res.cloudinary.com/dt3k2apqd/video/upload/Forsvarsadvokat/CF_parallax_mobile_cvcjlz.mp4"
        loopBoolean={false}
        muteBoolean={true}
        controlsBoolean={false}
      />
      <div className="absolute inset-0 -mt-24 flex h-full w-full max-w-xs items-center pl-6 pr-24">
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-gray-950">
          Advokat Christian Flemmen Johansen
          <span className="inline-block"></span>
        </h1>
      </div>
      <div className="relative -mt-10">
        <div className="relative mx-4 max-w-sm bg-white p-6 shadow-xl shadow-gray-500/5">
          <h3 className="text-xs uppercase text-gray-600 lg:text-sm">
            Forsvareroppdrag / Tvisteløsning / Rådgivning
          </h3>

          <p className="mt-6 text-lg font-semibold leading-8 text-gray-700">
            Ditt liv og dine verdier – våre løsninger.
          </p>
          <div className="mt-6 flex w-full items-center gap-x-6">
            <Brenner />
          </div>
        </div>
      </div>
    </div>
  )
}

export function VideoHero() {
  return (
    <section>
      <div className="hidden sm:block">
        <BackgroundVideo
          videoUrl="https://res.cloudinary.com/dt3k2apqd/video/upload/Forsvarsadvokat/CF_parallax_large_less_subtle_ebm3dt.mp4"
          loopBoolean={false}
          muteBoolean={true}
          controlsBoolean={false}
        />

        <div className="absolute inset-0">
          <div className="relative">
            <div className="max-w-md lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div className="px-6 pb-24 pt-20 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                <div className="relative mx-auto max-w-2xl bg-white p-8 shadow-xl shadow-gray-500/5 lg:mx-0 lg:p-12">
                  <h3 className="text-xs uppercase text-gray-600 lg:text-sm">
                    Forsvareroppdrag / Tvisteløsning / Rådgivning
                  </h3>
                  <h1 className="mt-8 font-display text-4xl font-bold tracking-tight text-gray-900 lg:mt-16 lg:text-6xl">
                    Advokat Christian <br /> Flemmen Johansen
                  </h1>
                  <p className="mt-6 leading-8 text-gray-600 lg:mb-16 lg:text-lg">
                    Ditt liv og dine verdier – våre løsninger.
                  </p>
                  {/* <div className="flex items-center mt-10 gap-x-6">
                    <Button href="#kontakt">
                      Kontakt &nbsp; <span aria-hidden="true">→</span>
                    </Button>
                  </div> */}
                  <Brenner />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileHero />
    </section>
  )
}
