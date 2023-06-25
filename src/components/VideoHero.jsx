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
      <div className="absolute inset-0 mt-[8.5rem] flex max-w-xs pl-6 pr-24">
        <h1 className="text-4xl font-bold leading-tight tracking-tight font-display text-gray-950">
          Advokat Christian Flemmen Johansen
          <span className="inline-block"></span>
        </h1>
      </div>
      
      {/* light div */}
      <div className="relative py-16 bg-gradient-to-t from-slate-50 sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-display sm:text-4xl">
              Forsvareroppdrag / Tvisteløsning / Rådgivning
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ditt liv og dine verdier – våre løsninger.
            </p>
            <div className="flex items-center w-full mt-6 gap-x-6">
              <Brenner />
            </div>
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
              <div className="px-6 pt-20 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                <div className="relative max-w-2xl p-8 mx-auto bg-white shadow-xl shadow-gray-500/5 lg:mx-0 lg:p-12">
                  <h3 className="text-xs text-gray-600 uppercase lg:text-sm">
                    Forsvareroppdrag / Tvisteløsning / Rådgivning
                  </h3>
                  <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 font-display lg:mt-16 lg:text-6xl">
                    Advokat Christian <br /> Flemmen Johansen
                  </h1>
                  <p className="mt-6 leading-8 text-gray-600 sm:mb-6 lg:mb-16 lg:text-lg">
                    Ditt liv og dine verdier – våre løsninger.
                  </p>

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
