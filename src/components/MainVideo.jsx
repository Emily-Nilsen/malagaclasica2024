import { BackgroundVideo } from './BackgroundVideo'
import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { Button } from './Button'
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid'

function MobileHero() {
  return (
    <div className="relative sm:hidden">
      <BackgroundVideo
        videoUrl="https://res.cloudinary.com/dt3k2apqd/video/upload/v1679744767/Forsvarsadvokat/CF_parallax_mobile_cvcjlz.mp4"
        loopBoolean={false}
        muteBoolean={true}
      />
      <div className="absolute inset-0 flex h-full w-full max-w-xs items-center pl-6 pr-24">
        <h1 className="text-gray-950 font-display text-4xl font-bold leading-tight tracking-tight">
          Advokat Christian Flemmen Johansen
          <span className="inline-block"></span>
        </h1>
      </div>
    </div>
  )
}

export function MainVideo() {
  return (
    <>
      <motion.div
        // whileInView={{ display: 'block' }}
        // initial={{ display: 'none' }}
        // transition={{
        //   duration: 0.6,
        //   type: 'fade',
        //   ease: 'easeIn',
        // }}
        className="overflow-hidden sm:rounded-xl"
      >
        <BackgroundVideo
          videoUrl="https://res.cloudinary.com/dt3k2apqd/video/upload/v1680194913/Forsvarsadvokat/CF_main_video_qbatur.mp4"
          loopBoolean={false}
          muteBoolean={false}
          controlsBoolean={true}
        />
        <figcaption className="mt-4 flex gap-x-2 text-right text-sm leading-6 text-gray-500">
          <InformationCircleIcon
            className="mt-0.5 h-5 w-5 flex-none text-gray-300"
            aria-hidden="true"
          />
          Faucibus commodo massa rhoncus, volutpat.
        </figcaption>

        {/* <div className="absolute inset-0">
          <div className="relative">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
                <div className="relative max-w-2xl p-8 mx-auto bg-white shadow-xl shadow-gray-500/5 sm:p-12 lg:mx-0">
                  <h3 className="text-sm text-gray-600 uppercase">
                    Forsvareroppdrag / Tvisteløsning / Rådgivning
                  </h3>
                  <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 font-display sm:mt-10 sm:text-6xl">
                    Advokat Christian Flemmen Johansen
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Ditt liv og dine verdier – våre løsninger.
                  </p>
                  <div className="flex items-center mt-10 gap-x-6">
                    <Button
                      href="#kontakt"
                      className=" bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      Kontakt
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </motion.div>
      {/* <MobileHero /> */}
    </>
  )
}
