"use client"

import { useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

const ASPECT = 1920 / 650

const PHONE = {
  leftPct: 112 / 1920,
  topPct: 171 / 650,
  widthPct: 129 / 1920,
  heightPct: 277 / 650,
}

export default function Banner() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [soundOn, setSoundOn] = useState(false)

  const toggleSound = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setSoundOn(!videoRef.current.muted)
  }

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="relative w-full" style={{ aspectRatio: `${ASPECT}` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/20 via-transparent to-rose-50/20 sm:bg-none" />
        <img
          src="/banner.png"
          alt="Banner Dona Tulipa"
          className="absolute inset-0 w-full h-full object-contain"
          draggable={false}
        />

        <div
          className="absolute overflow-hidden rounded-[22px] group"
          style={{
            left: `${PHONE.leftPct * 100}%`,
            top: `${PHONE.topPct * 100}%`,
            width: `${PHONE.widthPct * 100}%`,
            height: `${PHONE.heightPct * 100}%`,
          }}
        >
          <video
            ref={videoRef}
            src="/andreia.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />

          <button
            onClick={toggleSound}
            className="absolute bottom-1 right-1 p-1 rounded-full bg-black/50 text-white transition-opacity"
            title={soundOn ? "Desativar som" : "Ativar som"}
          >
            {soundOn ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
          </button>
        </div>
      </div>
    </div>
  )
}
