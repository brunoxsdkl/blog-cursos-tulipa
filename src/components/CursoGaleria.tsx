"use client"

import { Heart } from "lucide-react"

const imagens = ["/saboaria-1.jpg", "/saboaria-2.jpg", "/saboaria-3.jpg"]

const videos = [
  "/saboaria-video-1.mp4",
  "/saboaria-video-2.mp4",
  "/saboaria-video-3.mp4",
  "/saboaria-video-4.mp4",
  "/saboaria-video-5.mp4",
]

function Moldura({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-2 rounded-2xl bg-gradient-to-br from-rose-200 via-rose-100 to-pink-200 shadow-lg shadow-rose-200/40">
      <div className="rounded-xl overflow-hidden border-2 border-dashed border-rose-300/70 bg-white">
        {children}
      </div>
    </div>
  )
}

export default function CursoGaleria() {
  return (
    <section className="mb-12">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
        {imagens.map((src, i) => (
          <div key={src} className="flex items-center gap-3 sm:gap-5">
            <Moldura>
              <img
                src={src}
                alt=""
                className="w-36 sm:w-44 h-36 sm:h-44 object-cover"
              />
            </Moldura>
            {i < imagens.length - 1 && (
              <Heart className="h-5 w-5 text-rose-400 fill-rose-300 shrink-0" />
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-4">
        {videos.map((src, i) => (
          <div key={src} className="flex items-center gap-3 sm:gap-5">
            <Moldura>
              <video
                src={src}
                className="w-36 sm:w-44 h-36 sm:h-44 object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </Moldura>
            {i < videos.length - 1 && (
              <Heart className="h-5 w-5 text-rose-400 fill-rose-300 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
