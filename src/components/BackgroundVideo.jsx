export function BackgroundVideo({ videoUrl, videoPoster }) {
  return (
    <div>
      <video width="100%" autoPlay muted playsInline poster={videoPoster}>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  )
}
