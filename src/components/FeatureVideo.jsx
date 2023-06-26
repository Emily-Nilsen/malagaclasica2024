import { Container } from '@/components/Container'
import { VideoPlayer } from '@/components/VideoPlayer'
import { MainVideo } from '@/components/MainVideo'
import { VideoHeading } from '@/components/VideoHeading'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid'
import useTranslation from 'next-translate/useTranslation'

const DynamicVideoPlayer = dynamic(() => import('../components/VideoPlayer'), {
  ssr: false,
})

export function FeatureVideo() {
  const { t, lang } = useTranslation('common')
  const videoCaption = t('video-caption')

  return (
    <div className="relative bg-slate-50/50 py-0 sm:py-16">
      <VideoHeading />

      <div className="relative overflow-hidden">
        <div className="mx-auto mb-16 rounded-none sm:my-16 sm:max-w-sm sm:rounded-2xl md:my-24 md:max-w-2xl lg:max-w-7xl lg:px-8">
          {/* video below */}
          <div className="relative flex rounded-none shadow-xl sm:rounded-2xl">
            <div className="relative h-[56vw] w-screen overflow-hidden rounded-none bg-gray-950 sm:rounded-2xl md:h-[22rem] md:w-[80rem] lg:h-[42rem]">
              <div className="absolute flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-none sm:rounded-2xl">
                <DynamicVideoPlayer
                  poster="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/video-poster_gtw71z.webp"
                  publicId="https://res.cloudinary.com/dt3k2apqd/video/upload/v1687798262/Forsvarsadvokat/Forsvarsadvokat_rlzdka.mp4"
                  fetchpriority="auto"
                  autoplayBoolean={true}
                  controlsBoolean={true}
                />
              </div>
            </div>
          </div>
          <figcaption className="mt-4 flex w-full gap-x-2 px-4 text-sm leading-6 text-gray-500 sm:px-0">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            {videoCaption}
          </figcaption>

          <div className="relative" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  )
}
