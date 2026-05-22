import { useEffect, useRef } from 'react'

const HLS_SRC =
  'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8'

// ─── HLS video background ─────────────────────────────────────────────────────
// Renders a looping, muted video as an absolute-fill background.
// Uses native HLS where available (Safari), hls.js everywhere else.
// Parent must have `relative overflow-hidden` and a z-indexed overlay on top.

export function HlsVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hlsInstance: import('hls.js').default | null = null

    // Safari supports HLS natively
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_SRC
      video.play().catch(() => {})
      return
    }

    // All other browsers: lazy-load hls.js
    import('hls.js').then(({ default: Hls }) => {
      if (!Hls.isSupported()) return

      hlsInstance = new Hls({
        startLevel: -1,          // auto quality
        maxBufferLength: 30,
        lowLatencyMode: false,
      })

      hlsInstance.loadSource(HLS_SRC)
      hlsInstance.attachMedia(video)

      hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {})
      })
    })

    return () => {
      hlsInstance?.destroy()
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
    />
  )
}
