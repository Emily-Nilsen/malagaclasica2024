import { BackgroundVideo } from './BackgroundVideo'
import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { Button } from './Button'

export function MediaHero() {
  return (
    <div>
      <BackgroundVideo
        videoPoster="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/video_url_poster_lqadgo.webp"
        videoUrl="https://res.cloudinary.com/dt3k2apqd/video/upload/v1679767400/Forsvarsadvokat/CF_Media_hero_txr8nt.mp4"
        loopBoolean={true}
        muteBoolean={true}
      />
    </div>
  )
}
