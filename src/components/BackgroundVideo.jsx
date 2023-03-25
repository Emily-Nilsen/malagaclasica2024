export function BackgroundVideo({
  videoUrl,
  videoPoster,
  loopBoolean,
  muteBoolean,
}) {
  return (
    <div className="">
      <video
        width="100%"
        autoPlay
        loop={loopBoolean}
        muted={muteBoolean}
        playsInline
        poster={videoPoster}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  )
}
