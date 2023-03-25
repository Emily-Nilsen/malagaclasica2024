import { useState } from 'react'
import Image from 'next/image'
import useSound from 'use-sound'

import { paperSound } from '@/components/Sounds'

const ShiftingPaper = () => {
  const [play, { stop }] = useSound(paperSound)

  return (
    <button onMouseEnter={() => play()} onMouseLeave={() => stop()}>
      <span role="img" aria-label="trumpet">
        🎺
      </span>
    </button>
  )
}

const featuredTestimonial = {
  image:
    'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-35_to37kp.webp',
}
const testimonials = [
  [
    [
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-32_qccdpi.webp',
        height: 'h-80',
        rotation: 'rotate-2',
        alt: 'Stunning natural scenery for unforgettable footage',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-29_mczkwo.webp',
        height: 'h-80',
        rotation: '-rotate-2',
        alt: 'Shooting in Norway’s picturesque fjords',
        scale: 'sm:scale-105',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-50_ix6pma.webp',
        height: 'h-80',
        rotation: 'sm:-rotate-3',
        alt: 'LoopFilm’s crew and equipment work together seamlessly to bring your Norway shoot to life',
        scale: 'sm:scale-110',
      },

      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-22_fl2jiv.webp',
        height: 'h-56',
        rotation: '-rotate-3',
        alt: 'LoopFilm’s team of experts makes filming in Norway easy and effortless for you',
        scale: 'sm:scale-105',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1678559687/Loop%20Film/LoopFilm_img-11_yz81f0.webp',
        height: 'h-56',
        rotation: 'rotate-2',
        alt: 'Cinematic shots of Norway’s fjords and other beautiful landscapes',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-08_aefnzo.webp',
        height: 'h-64',
        rotation: '-rotate-2',
        alt: 'Creative filming solutions with LoopFilm',
        scale: 'sm:scale-105',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-09_kaxmg6.webp',
        height: 'h-56',
        rotation: 'rotate-1',
        alt: 'Bringing your vision to life with LoopFilm’s expertise in filming in Norway’s extreme environments',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-13_oagr2e.webp',
        height: 'h-64',
        rotation: '-rotate-3',
        alt: 'A team of professionals for your filming needs in Norway',
        scale: 'sm:scale-105',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1678559687/Loop%20Film/LoopFilm_img-14_emstqh.webp',
        height: 'h-60',
        rotation: 'rotate-2',
        alt: 'Teamwork to bring your vision to life in Norway',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/RA_julebilde-kopi_b3gecs.webp',
        height: 'h-72',
        rotation: '-rotate-1',
        alt: 'From snow-covered roads to icy glaciers, LoopFilm captures the essence of Norway',
        scale: 'sm:scale-105',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-33_zgzprj.webp',
        height: 'h-64',
        rotation: '-rotate-3',
        alt: 'On board with LoopFilm: Filming stunning scenes on the boat in Norway’s crystal-clear waters',
        scale: 'sm:scale-105',
      },
    ],
    [
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-26_gihjpc.webp',
        height: 'h-72',
        rotation: '-rotate-3',
        alt: 'Professional film production team in Norway',
        scale: 'sm:scale-125',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-34_bx3quq.webp',
        height: 'h-60',
        rotation: 'rotate-3',
        alt: 'Capturing Norway’s unique culture on film',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-21_onmk4l.webp',
        height: 'h-60',
        rotation: 'rotate-1',
        alt: 'Professionals who know how to film in Norway',
        scale: 'sm:scale-100',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1678559687/Loop%20Film/LoopFilm_img-17_hcctfo.webp',
        height: 'h-52',
        rotation: '-rotate-2',
        alt: 'Behind the scenes with LoopFilm: Capturing stunning shots in the snowy wonderland of Norway',
        scale: 'sm:scale-125',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/workGallery-09_n3kmy1.webp',
        height: 'h-80',
        rotation: 'rotate-1',
        alt: 'Filming Norway’s natural beauty of endless forests and mountains',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-15_n2ftv6.webp',
        height: 'h-60',
        rotation: '-rotate-3',
        alt: 'Shooting on boats with LoopFilm',
        scale: 'sm:scale-125',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/camera_pejrz0.webp',
        height: 'h-52',
        rotation: 'rotate-2',
        alt: 'High-tech filming equipment in Norway',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/workGallery-05_rv2gji.webp',
        height: 'h-28',
        rotation: '-rotate-3',
        alt: 'High-tech filming equipment for superior results',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-32_ksnlhp.webp',
        height: 'h-96',
        rotation: '-rotate-2',
        alt: 'Unique angles for your Norway film',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/workGallery-01_yizsg2.webp',
        height: 'h-40',
        rotation: 'rotate-3',
        alt: 'LoopFilm’s team braves the cold to capture the perfect shot amidst Norway’s mountainous terrain',
        scale: 'sm:scale-125',
      },
    ],
  ],
  [
    [
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-52_z6nw0n.webp',
        height: 'h-[32rem]',
        rotation: 'rotate-3',
        alt: 'Filming on roads in Norway',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-24_i1fjnf.webp',
        height: 'h-56',
        rotation: '-rotate-3',
        alt: 'LoopFilm takes care of all your filming needs in Norway',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-27_dht1rp.webp',
        height: 'h-52',
        rotation: 'rotate-3',
        alt: 'Filming in Norway’s Arctic regions with LoopFilm',
        scale: 'sm:scale-125',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-16_vtztxu.webp',
        height: 'h-56',
        rotation: '-rotate-2',
        alt: 'Norway’s unique locations captured by LoopFilm',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-07_p5k5rg.webp',
        height: 'h-96',
        rotation: 'rotate-2',
        alt: 'LoopFilm’s expertise ensures a successful shoot',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/workGallery-06_sjppif.webp',
        height: 'h-56',
        rotation: '-rotate-1',
        alt: 'Professionals who know how to film in Norway',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-12_mw7n3n.webp',
        height: 'h-64',
        rotation: 'rotate-3',
        alt: 'LoopFilm’s team captures the beauty of Norway',
        scale: 'sm:scale-125',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-31_ryguae.webp',
        height: 'h-64',
        rotation: '-rotate-2',
        alt: 'Dedicated and experienced film crew in Norway',
        scale: 'sm:scale-125',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/workGallery-10_x5pezl.webp',
        height: 'h-28',
        rotation: 'rotate-1',
        alt: 'Filming scenes in snowy Norway',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-30_fzbijn.webp',
        height: 'h-52',
        rotation: 'rotate-3',
        alt: 'Capturing the beauty of Norway with LoopFilm',
        scale: 'sm:scale-110',
      },
    ],
    [
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-49_ifyrzd.webp',
        height: 'h-72',
        rotation: '-rotate-2',
        alt: 'Breathtaking footage of Norway’s mountains and glaciers, made possible by LoopFilm',
        scale: 'sm:scale-125',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-44_gfnniy.webp',
        height: 'h-96',
        rotation: 'rotate-2',
        alt: 'Trust LoopFilm for all your filming requirements in Norway',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-55_d1osmm.webp',
        height: 'h-40',
        rotation: '-rotate-3',
        alt: 'LoopFilm ensures seamless filming in Norway',
        scale: 'sm:scale-105',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-10_sbw3nb.webp',
        height: 'h-80',
        rotation: 'rotate-2',
        alt: 'Icy landscapes for breathtaking footage',
        scale: 'sm:scale-100',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/workGallery-07_qilvqo.webp',
        height: 'h-64',
        rotation: 'rotate-3',
        alt: 'From the mountains to the ice fields, LoopFilm captures the essence of Norway’s natural beauty',
        scale: 'sm:scale-100',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-05_sxsrpr.webp',
        height: 'h-60',
        rotation: '-rotate-2',
        alt: 'Choose LoopFilm for hassle-free filming in Norway - The land of natural wonders',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1678559686/Loop%20Film/LoopFilm_img-04_z780md.webp',
        height: 'h-80',
        rotation: 'rotate-3',
        alt: 'Dedicated and experienced team',
        scale: 'sm:scale-100',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/big_camera_qm9msm.webp',
        height: 'h-60',
        rotation: '-rotate-1',
        alt: 'Full-service filming in Norway',
        scale: 'sm:scale-110',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_img-03_nnu4qn.webp',
        height: 'h-96',
        rotation: 'rotate-2',
        alt: 'Easy filming in Norway with LoopFilm',
        scale: 'sm:scale-100',
      },
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1678627831/Loop%20Film/LoopFilm_img-34_daan2q.webp',
        height: 'h-64',
        rotation: 'rotate-3',
        alt: 'Professional film crew in Norway',
        scale: 'sm:scale-110',
      },
    ],
  ],
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function MediaCollage() {
  return (
    <section className="w-full overflow-x-hidden">
      {/* Shifting paper */}
      <div>
        <ShiftingPaper />
      </div>
      <div className="relative isolate bg-white pb-6 pt-28 sm:pb-16 sm:pt-32">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <svg
            viewBox="0 0 1313 771"
            aria-hidden="true"
            className="ml-[max(50%,38rem)] w-[82.0625rem]"
          >
            <path
              id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
              fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
              d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"
            />
            <defs>
              <linearGradient
                id="85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3"
                x1="1313.17"
                x2="-88.881"
                y1=".201"
                y2="539.417"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f5d0fe" />
                <stop offset={1} stopColor="#f0abfc" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end">
          <svg
            viewBox="0 0 1313 771"
            aria-hidden="true"
            className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          >
            <use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc" />
          </svg>
        </div>
        <div className="mx-auto -mt-24 max-w-7xl px-6 sm:-mt-16 lg:px-8">
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-2 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="relative col-span-1 hidden h-96 scale-100 transition-all duration-300 ease-in-out hover:z-50 hover:rotate-0 sm:col-span-2 sm:block sm:rounded-none sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 md:hover:scale-125 xl:col-start-2 xl:row-end-1">
              <div className="absolute inset-0">
                <Image
                  className="overflow-hidden rounded-none object-cover"
                  fill
                  src={featuredTestimonial.image}
                  alt="No challenge too big for LoopFilm’s skilled team in capturing stunning shots in Norway’s challenging terrain"
                />
              </div>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div
                key={columnGroupIdx}
                className="space-y-8 xl:contents xl:space-y-0"
              >
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 &&
                          columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-0 sm:space-y-2'
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.image}
                        className={classNames(
                          'relative scale-100 rounded-none bg-white p-6 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 ease-in-out hover:z-50 hover:rotate-0 sm:-mt-0 md:hover:scale-150',
                          testimonial.height
                        )}
                      >
                        <div className="absolute inset-0">
                          <Image
                            className="overflow-hidden rounded-none object-cover"
                            fill
                            src={testimonial.image}
                            alt={testimonial.alt}
                          />
                        </div>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
