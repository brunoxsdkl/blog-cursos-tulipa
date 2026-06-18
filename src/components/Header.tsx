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
            ? "bg-gradient-to-r from-rose-100/70 via-white/80 to-pink-100/70 backdrop-blur-xl border-b border-white/30 shadow-lg shadow-rose-200/20"
            : "bg-gradient-to-r from-white/20 via-white/40 to-white/20 backdrop-blur-lg border-b border-white/20"
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Dona Tulipa" className="h-10 sm:h-12 w-auto" />
            <span className="font-bold text-2xl sm:text-3xl tracking-tight bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
              Dona Tulipa
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {categorias.map((cat) => (
              <Link
                key={cat.slug}
                href={`/?categoria=${cat.slug}`}
                className="px-5 py-2.5 text-sm font-medium text-rose-700 hover:text-white hover:bg-gradient-to-r hover:from-rose-500 hover:to-pink-500 rounded-full transition-all duration-300"
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
          <div className="px-4 py-4 flex flex-col gap-2">
            {categorias.map((cat) => (
              <Link
                key={cat.slug}
                href={`/?categoria=${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="px-5 py-3.5 text-rose-700 hover:text-white hover:bg-gradient-to-r hover:from-rose-500 hover:to-pink-500 rounded-xl transition-all duration-300 text-sm font-medium"
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
