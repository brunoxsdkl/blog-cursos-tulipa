import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/sonner"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Blog de Cursos | Dona Tulipa",
  description:
    "Transforme criatividade em renda com nossos cursos artesanais. Saboaria, velas, cosméticos e muito mais.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Blog de Cursos | Dona Tulipa",
    description: "Transforme criatividade em renda com nossos cursos artesanais.",
    type: "website",
  },
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
        <main className="min-h-screen pt-20 sm:pt-24">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
