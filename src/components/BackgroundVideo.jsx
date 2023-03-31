export function BackgroundVideo({
  videoUrl,
  loopBoolean,
  muteBoolean,
  controlsBoolean,
}) {
  return (
    <div>
      <video
        width="100%"
        autoPlay
        loop={loopBoolean}
        muted={muteBoolean}
        playsInline
        controls={controlsBoolean}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  )
}
