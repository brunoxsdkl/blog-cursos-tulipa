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
        <div className="flex items-center justify-between h-20 sm:h-24">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Dona Tulipa" className="h-16 sm:h-18 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
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

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 text-rose-700 hover:bg-white/50 rounded-xl transition-colors"
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
