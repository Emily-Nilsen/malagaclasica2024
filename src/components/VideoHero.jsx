import { BackgroundVideo } from './BackgroundVideo'
import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { Button } from './Button'

export function VideoHero() {
  return (
    <div>
      <BackgroundVideo
        videoPoster="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/video_url_poster_lqadgo.webp"
        videoUrl="https://res.cloudinary.com/dt3k2apqd/video/upload/v1679743924/Forsvarsadvokat/CF_parallax_3s_uep4ri.mp4"
        loopBoolean={false}
        muteBoolean={true}
      />

      <div className="absolute inset-0">
        <div className="relative">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
              <div className="relative mx-auto max-w-2xl bg-white p-8 shadow-xl shadow-gray-500/5 sm:p-12 lg:mx-0">
                <h3 className="text-sm uppercase text-gray-600">
                  Forsvareroppdrag / Tvisteløsning / Rådgivning
                </h3>
                <h1 className="mt-24 font-display text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                  Advokat Christian Flemmen Johansen
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Ditt liv og dine verdier – våre løsninger.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
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
      </div>
    </div>
  )
}
