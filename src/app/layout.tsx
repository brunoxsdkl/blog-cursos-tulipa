import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppFloating from "@/components/WhatsAppFloating"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Dona Tulipa | Cursos e Criações Artesanais",
  description:
    "Cursos de artesanato, velas, cosméticos e perfumaria com Andréia Freitas. Crie, encante e lucre.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white`}>
        <Header />
        <main className="min-h-screen pt-28 sm:pt-60">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <Toaster />
      </body>
    </html>
  )
}