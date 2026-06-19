import { Heart } from "lucide-react"

const imagens = ["/saboaria-1.jpg", "/saboaria-2.jpg", "/saboaria-3.jpg"]

const videos = [
  "/saboaria-video-1.mp4",
  "/saboaria-video-2.mp4",
  "/saboaria-video-3.mp4",
  "/saboaria-video-4.mp4",
  "/saboaria-video-5.mp4",
]

function Cordao() {
  return (
    <div className="hidden sm:flex items-center justify-center shrink-0 -mx-1">
      <div className="w-4 sm:w-6 h-px bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300" />
      <Heart className="h-3.5 w-3.5 text-rose-400 fill-rose-300/70 shrink-0 -mx-0.5" />
      <div className="w-4 sm:w-6 h-px bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300" />
    </div>
  )
}

function CordaoVertical() {
  return (
    <div className="flex sm:hidden flex-col items-center justify-center shrink-0">
      <div className="h-3 w-px bg-gradient-to-b from-rose-300 via-rose-400 to-rose-300" />
      <Heart className="h-3 w-3 text-rose-400 fill-rose-300/70 shrink-0 -my-0.5" />
      <div className="h-3 w-px bg-gradient-to-b from-rose-300 via-rose-400 to-rose-300" />
    </div>
  )
}

function Moldura({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-2.5 rounded-2xl bg-gradient-to-br from-rose-200 via-rose-100 to-pink-200 shadow-lg shadow-rose-200/30">
      <div className="rounded-xl overflow-hidden border-2 border-dashed border-rose-300/60 bg-white ring-1 ring-rose-200/50">
        {children}
      </div>
    </div>
  )
}

function ItemGaleria({
  children,
  ultimo,
}: {
  children: React.ReactNode
  ultimo?: boolean
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col sm:flex-row items-center">
        {children}
        {!ultimo && (
          <>
            <Cordao />
            <CordaoVertical />
          </>
        )}
      </div>
    </div>
  )
}

export default function CursoGaleria() {
  return (
    <section className="mb-14">
      <p className="text-[10px] uppercase tracking-[0.2em] text-rose-400 font-medium text-center mb-6">
        Fotos do Curso
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-0">
        {imagens.map((src, i) => (
          <div key={src} className="flex flex-col sm:flex-row items-center">
            <Moldura>
              <img
                src={src}
                alt=""
                className="w-40 sm:w-56 h-40 sm:h-56 object-cover"
              />
            </Moldura>
            {i < imagens.length - 1 && (
              <>
                <div className="hidden sm:flex items-center justify-center shrink-0 mx-1">
                  <div className="w-6 sm:w-10 h-px bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300" />
                  <Heart className="h-3.5 w-3.5 text-rose-400 fill-rose-300/70 shrink-0 mx-0.5" />
                  <div className="w-6 sm:w-10 h-px bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300" />
                </div>
                <div className="flex sm:hidden flex-col items-center justify-center shrink-0 my-1">
                  <div className="h-3 w-px bg-gradient-to-b from-rose-300 via-rose-400 to-rose-300" />
                  <Heart className="h-3 w-3 text-rose-400 fill-rose-300/70 shrink-0 my-0.5" />
                  <div className="h-3 w-px bg-gradient-to-b from-rose-300 via-rose-400 to-rose-300" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <p className="text-[10px] uppercase tracking-[0.2em] text-rose-400 font-medium text-center mb-6 mt-10">
        Vídeos do Curso
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-0 flex-wrap">
        {videos.map((src, i) => (
          <div key={src} className="flex flex-col sm:flex-row items-center">
            <Moldura>
              <video
                src={src}
                className="w-40 sm:w-48 h-40 sm:h-48 object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </Moldura>
            {i < videos.length - 1 && (
              <>
                <div className="hidden sm:flex items-center justify-center shrink-0 mx-1">
                  <div className="w-4 sm:w-6 h-px bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300" />
                  <Heart className="h-3 w-3 text-rose-400 fill-rose-300/70 shrink-0 mx-0.5" />
                  <div className="w-4 sm:w-6 h-px bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300" />
                </div>
                <div className="flex sm:hidden flex-col items-center justify-center shrink-0 my-1">
                  <div className="h-3 w-px bg-gradient-to-b from-rose-300 via-rose-400 to-rose-300" />
                  <Heart className="h-3 w-3 text-rose-400 fill-rose-300/70 shrink-0 my-0.5" />
                  <div className="h-3 w-px bg-gradient-to-b from-rose-300 via-rose-400 to-rose-300" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
