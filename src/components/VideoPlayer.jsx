import { useRef } from 'react'
import { Video, CloudinaryContext } from 'cloudinary-react'

export default function VideoPlayer({ publicId, poster }) {
  const videoRef = useRef()

  return (
    <CloudinaryContext cloud_name="dt3k2apqd">
      <div>
        <Video
          playsInline
          autoPlay
          publicId={publicId}
          width="100%"
          controls
          innerRef={videoRef}
          fluid="true"
          seekthumbnails="true"
          poster={{ publicId: poster }}
        />
      </div>
    </CloudinaryContext>
  )
}
