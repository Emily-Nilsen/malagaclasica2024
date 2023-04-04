import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function MediaTilesHero() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <div ref={targetRef} className="bg-white">
      <main>
        <div className="relative isolate">
          <motion.svg
            style={{ y, opacity, scale }}
            className="fixed inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </motion.svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#94a3b8] to-[#cbd5e1] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Mediadekning
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Som profilert forsvarsadvokat dekkes saker ofte av nasjonale
                    og lokale medier. Et selektert utvalg av representative
                    saker følger under.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Button href="#kontakt">Kontakt</Button>
                  </div>
                </div>
                <motion.div
                  style={{ scale }}
                  className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
                >
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <motion.div
                      animate={{ scaleY: 1 }}
                      initial={{ scaleY: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0,
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        restDelta: 0.001,
                      }}
                      className="relative aspect-[2/3] w-full"
                    >
                      <Image
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-32_qccdpi.webp"
                        alt=""
                        fill
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <motion.div
                      animate={{ scaleY: 1 }}
                      initial={{ scaleY: 0 }}
                      transition={{
                        duration: 0.5,
                        type: 'spring',
                        delay: 0.05,
                      }}
                      className="relative aspect-[2/3] w-full"
                    >
                      <Image
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-29_mczkwo.webp"
                        alt=""
                        fill
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div
                      animate={{ scaleY: 1 }}
                      initial={{ scaleY: 0 }}
                      transition={{ duration: 0.5, stiffness: 100, delay: 0.1 }}
                      className="relative aspect-[2/3] w-full"
                    >
                      <Image
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-50_ix6pma.webp"
                        alt=""
                        fill
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <motion.div
                      animate={{ scaleY: 1 }}
                      initial={{ scaleY: 0 }}
                      transition={{ duration: 0.5, damping: 20, delay: 0.15 }}
                      className="relative aspect-[2/3] w-full"
                    >
                      <Image
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-26_gihjpc.webp"
                        alt=""
                        fill
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div
                      animate={{ scaleY: 1 }}
                      initial={{ scaleY: 0 }}
                      transition={{
                        duration: 0.5,
                        restDelta: 0.001,
                        delay: 0.2,
                      }}
                      className="relative aspect-[2/3] w-full"
                    >
                      <Image
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-44_gfnniy.webp"
                        alt=""
                        fill
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
