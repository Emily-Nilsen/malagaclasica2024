export function BackgroundVideo({ videoUrl, loopBoolean, muteBoolean }) {
  return (
    <div className="">
      <video
        width="100%"
        autoPlay
        loop={loopBoolean}
        muted={muteBoolean}
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  )
}
