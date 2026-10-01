import { MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/554197547175?text=Ol%C3%A1%21%20Quero%20fazer%20uma%20encomenda%20personalizada%20no%20Ateli%C3%AA%20Andr%C3%A9ia%20Freitas."

export default function EncomendaPersonalizada() {
  return (
    <section className="mt-12 overflow-hidden rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-pink-50 shadow-[0_16px_50px_rgba(244,63,94,0.12)]">
      <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-10">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-rose-600">
            Ateliê Andréia Freitas
          </span>
          <h2 className="mt-4 font-heading text-2xl leading-tight font-bold text-rose-900 sm:text-3xl">
            Quer fazer uma encomenda personalizada?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-rose-600/85 sm:text-base">
            No <strong className="font-semibold text-rose-700">Ateliê Andréia Freitas</strong>{" "}
            fazemos para o seu evento, ocasião especial e também trabalhamos com{" "}
            <strong className="font-semibold text-rose-700">identidade olfativa</strong>.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-7 py-3 text-xs uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(244,63,94,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(244,63,94,0.45)]"
            >
              <img
                src="/whatsapp.png"
                alt=""
                aria-hidden="true"
                className="h-4 w-4 rounded-full"
              />
              <MessageCircle className="h-4 w-4" />
              Fale já com uma consultora
            </a>
            <span className="text-xs text-rose-500/80">
              e receba sua cotação personalizada agora mesmo
            </span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto w-40 sm:w-48">
            <div className="absolute inset-0 rounded-full bg-rose-400/20 blur-2xl" />
            <img
              src="/consultora-elaine.jpeg"
              alt="Elaine, consultora do Ateliê Andréia Freitas"
              className="relative h-40 w-40 rounded-full border-4 border-white object-cover shadow-[0_14px_40px_rgba(244,63,94,0.30)] sm:h-48 sm:w-48"
            />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-rose-600 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-white shadow-lg">
              Elaine • Consultora
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}