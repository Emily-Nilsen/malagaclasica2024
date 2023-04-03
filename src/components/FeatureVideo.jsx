import { Container } from '@/components/Container'
import { VideoPlayer } from '@/components/VideoPlayer'
import { MainVideo } from '@/components/MainVideo'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import React, { useEffect, useref } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid'

const DynamicVideoPlayer = dynamic(() => import('../components/VideoPlayer'), {
  ssr: false,
})

export function FeatureVideo() {
  return (
    <div className="bg-slate-50/50 py-0 pt-6 sm:pb-10 sm:pt-16">
      {/* <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="w-full p-6 mx-auto bg-white max-w-none sm:max-w-3xl sm:p-12">
          <div className="sm:text-center">
            <h2 className="text-base leading-7 text-gray-600 uppercase">
              Se videoen om
            </h2>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 font-display sm:text-6xl">
              Christian Flemmen Johansen
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis.
            </p>
          </div>
        </div>
      </div> */}
      <div className="relative overflow-hidden">
        <div className="mx-auto my-16 max-w-sm overflow-hidden sm:my-24 sm:max-w-7xl sm:rounded-xl md:px-6 lg:px-8">
          {/* video below */}
          <div className="relative flex w-full rounded-2xl shadow-xl">
            <div className="relative h-[13rem] w-[24rem] overflow-hidden rounded-2xl bg-gray-950 md:h-[42rem] md:w-[80rem]">
              <div className="absolute flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl">
                <DynamicVideoPlayer
                  poster="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/videoPosterCF_e71kl9.webp"
                  publicId="https://res.cloudinary.com/dt3k2apqd/video/upload/v1680194913/Forsvarsadvokat/CF_main_video_qbatur.mp4"
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
            Opprinnelig video fra Jantè Productions, LLC.
            &copy;janteproductions. Redigert av Norsk Nett.
          </figcaption>

          <div className="relative" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  )
}
