import { Play } from "lucide-react"
import type { CategoriaCriacao } from "@/data/criacoes"

export default function CardCategoriaCriacao({ categoria }: { categoria: CategoriaCriacao }) {
  const { nome, resumo, capa, capaTipo, midias } = categoria

  return (
    <div
      className="group relative block overflow-hidden rounded-3xl border border-white/60 bg-white/30 p-2 shadow-[0_10px_40px_rgba(244,63,94,0.10)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/80 hover:shadow-[0_24px_60px_rgba(244,63,94,0.20)] sm:p-2.5"
    >
      <div className="relative overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-rose-100 via-rose-50 to-pink-100">
        <div className="relative h-52 w-full overflow-hidden sm:h-64">
          {capa ? (
            capaTipo === "video" ? (
              <video
                src={capa}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={capa}
                alt={nome}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
            )
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-rose-200/70 via-rose-100/70 to-pink-200/70" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-rose-900/45 via-rose-900/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-rose-300/20" />

          {capaTipo === "video" && capa && (
            <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/25 backdrop-blur-md transition-all duration-500 group-hover:bg-white/45">
              <Play className="h-3.5 w-3.5 translate-x-px text-white drop-shadow" />
            </div>
          )}

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="text-[10px] uppercase tracking-[0.35em] text-white/80 drop-shadow">
              Criação
            </span>
            <h3 className="max-w-[85%] font-heading text-2xl leading-tight font-semibold text-white drop-shadow-[0_2px_10px_rgba(120,20,45,0.55)] sm:text-[1.7rem]">
              {nome}
            </h3>
            <div className="h-px w-12 bg-white/60 transition-all duration-500 group-hover:w-20" />
            <p className="max-w-[90%] text-[11px] leading-relaxed text-white/85 drop-shadow sm:text-xs">
              {resumo}
            </p>
            <span className="mt-1 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-white backdrop-blur-sm">
              {midias.length > 0 ? `${midias.length} criações` : "em breve"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
