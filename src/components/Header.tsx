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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌷</span>
            <span className="font-semibold text-lg tracking-tight text-rose-800">
              Dona Tulipa
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {categorias.map((cat) => (
              <Link
                key={cat.slug}
                href={`/?categoria=${cat.slug}`}
                className="px-3 py-2 text-sm text-rose-700 hover:text-rose-900 hover:bg-rose-50 rounded-full transition-all"
              >
                {cat.nome}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-rose-700 hover:bg-rose-50 rounded-lg transition-colors"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-rose-100">
          <div className="px-4 py-4 flex flex-col gap-2">
            {categorias.map((cat) => (
              <Link
                key={cat.slug}
                href={`/?categoria=${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-rose-700 hover:bg-rose-50 rounded-xl transition-colors text-sm font-medium"
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
