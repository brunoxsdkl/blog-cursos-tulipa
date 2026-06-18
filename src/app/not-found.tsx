import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <span className="text-6xl mb-4">🌷</span>
      <h1 className="text-2xl font-bold text-rose-900 mb-2">Página não encontrada</h1>
      <p className="text-rose-500 mb-6">O curso que você procura não está disponível.</p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium px-6 py-2.5 transition-colors"
      >
        Ver todos os cursos
      </Link>
    </div>
  )
}
