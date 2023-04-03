import { useRef } from 'react'
import { Video, CloudinaryContext } from 'cloudinary-react'

export default function VideoPlayer({
  publicId,
  poster,
  autoplayBoolean,
  controlsBoolean,
}) {
  const videoRef = useRef()

  return (
    <CloudinaryContext cloud_name="dt3k2apqd">
      <div>
        <Video
          playsInline
          muted
          autoPlay={autoplayBoolean}
          publicId={publicId}
          width="100%"
          controls={controlsBoolean}
          innerRef={videoRef}
          fluid="true"
          seekthumbnails="true"
          poster={{ publicId: poster }}
        />
      </div>
    </CloudinaryContext>
  )
}
