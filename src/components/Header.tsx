"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { categorias } from "@/data/cursos"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-28 sm:h-32">
          <Link href="/" className="flex-shrink-0">
            <img src="/logo.png" alt="Dona Tulipa" className="h-28 sm:h-32 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
            {categorias.map((cat) => (
              <Link
                key={cat.slug}
                href={`/?categoria=${cat.slug}`}
                className="relative text-sm uppercase tracking-[0.15em] font-medium text-rose-700/80 hover:text-rose-900 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-rose-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {cat.nome}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href="https://www.instagram.com/andreia.tulipa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:text-rose-600 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/tulipaessencias/?hl=pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:text-rose-600 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/tulipaessencias"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:text-rose-600 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

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
                href={`/?categoria=${cat.slug}`}
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
