import { GraduationCap, MessageCircle } from "lucide-react"

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-8 sm:p-12 my-12 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      </div>
      <div className="relative">
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">
          Pronto para começar?
        </h3>
        <p className="text-rose-100 mb-6 max-w-md mx-auto">
          Escolha seu curso e dê o primeiro passo para transformar criatividade em renda.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 hover:bg-rose-50 shadow-lg rounded-full px-8 py-2.5 text-sm font-medium transition-all"
          >
            <GraduationCap className="h-4 w-4" />
            Ver Cursos
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-2.5 text-sm font-medium transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
