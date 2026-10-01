"use client"

import { useEffect, useRef, useState } from "react"

type LazyVideoProps = {
  src: string
  className?: string
  poster?: string
  rootMargin?: string
}

export default function LazyVideo({
  src,
  className,
  poster,
  rootMargin = "300px 0px",
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      data-src={src}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
    />
  )
}
