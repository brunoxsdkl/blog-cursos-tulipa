"use client"

import { useState, useEffect } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"
import { categorias, getCursosPorCategoria } from "@/data/cursos"
import Link from "next/link"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-rose-100/60 via-white/80 to-pink-100/60 backdrop-blur-xl border-b border-white/30 shadow-lg shadow-rose-200/20"
            : "bg-gradient-to-r from-rose-50/30 via-white/50 to-pink-50/30 backdrop-blur-lg border-b border-white/20"
        }`}
      />

      {/* Top bar: redes sociais + site oficial */}
      <div className="relative border-b border-rose-200/20 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-8">
          <div className="flex items-center gap-3 sm:gap-5">
            <a href="https://www.instagram.com/andreia.tulipa/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] font-medium text-rose-500/70 hover:text-rose-700 transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @andreia.tulipa
            </a>
            <a href="https://www.instagram.com/tulipaessencias/?hl=pt" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] font-medium text-rose-500/70 hover:text-rose-700 transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              tulipa essências
            </a>
            <a href="https://www.facebook.com/tulipaessencias" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] font-medium text-rose-500/70 hover:text-rose-700 transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              tulipa essências
            </a>
            <a href="https://www.tiktok.com/@andreia.tulipa" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] font-medium text-rose-500/70 hover:text-rose-700 transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              @andreia.tulipa
            </a>
            <span className="w-px h-3 bg-rose-200/40" />
            <a href="https://www.tulipaessencias.com.br" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] font-medium text-rose-500/70 hover:text-rose-700 transition-colors">
              <ShoppingCart className="w-3 h-3" />
              site oficial
            </a>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-28 sm:h-32">
          <Link href="/" className="flex-shrink-0 mr-8 sm:mr-16">
            <img src="/logo.png" alt="Dona Tulipa" className="h-28 sm:h-32 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
            {categorias.map((cat) => (
              <Link
                key={cat.slug}
                href={(() => {
                  const curso = getCursosPorCategoria(cat.slug)
                  return curso.length > 0 ? `/cursos/${curso[0].slug}` : "/"
                })()}
                className="relative text-sm uppercase tracking-[0.15em] font-medium text-rose-700/80 hover:text-rose-900 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-rose-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {cat.nome}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 text-rose-700 hover:bg-white/50 rounded-xl transition-colors flex-shrink-0"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-gradient-to-b from-white/90 to-rose-50/90 backdrop-blur-xl border-t border-white/30">
          <div className="px-4 py-4 flex flex-col gap-1">
            {categorias.map((cat) => (
              <Link
                key={cat.slug}
                href={(() => {
                  const curso = getCursosPorCategoria(cat.slug)
                  return curso.length > 0 ? `/cursos/${curso[0].slug}` : "/"
                })()}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-rose-700 hover:text-rose-900 border-l-2 border-transparent hover:border-rose-400 transition-all duration-300 text-sm uppercase tracking-wider"
              >
                {cat.nome}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
