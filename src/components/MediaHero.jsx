import { BackgroundVideo } from './BackgroundVideo'
import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { Button } from './Button'

function MediaMobile() {
  return (
    <div className="relative sm:hidden">
      <BackgroundVideo
        videoUrl="https://res.cloudinary.com/dt3k2apqd/video/upload/v1679852552/Forsvarsadvokat/mobile_xpdaez.mp4"
        loopBoolean={true}
        muteBoolean={true}
        controlsBoolean={false}
      />
      <div className="absolute inset-0">
        <div className="relative flex h-full items-end justify-center px-4 pb-6">
          <h3 className="text-gray-900">Advokat Christian Flemmen Johansen</h3>
        </div>
      </div>
    </div>
  )
}

export function MediaHero() {
  return (
    <>
      <div className="relative hidden sm:block">
        <BackgroundVideo
          videoUrl="https://res.cloudinary.com/dt3k2apqd/video/upload/v1679836925/Forsvarsadvokat/CF_Media_hero_no_text_m7nflw.mp4"
          loopBoolean={true}
          muteBoolean={true}
          controlsBoolean={false}
        />
        <div className="absolute inset-0">
          <div className="relative flex h-full items-center">
            <div className="mx-auto h-fit max-w-7xl">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-start-3">
                  <motion.h1
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', delay: 0.6, duration: 1 }}
                    className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                  >
                    Media
                  </motion.h1>
                  <motion.p
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', delay: 0.9, duration: 1 }}
                    className="mt-6 text-lg leading-8 text-gray-600"
                  >
                    Advokat Christian Flemmen Johansen
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MediaMobile />
    </>
  )
}
