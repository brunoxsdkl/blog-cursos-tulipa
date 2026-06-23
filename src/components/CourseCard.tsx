import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BarChart } from "lucide-react"
import type { Curso } from "@/data/cursos"

export default function CourseCard({ curso }: { curso: Curso }) {
  return (
    <Link href={`/cursos/${curso.slug}`}>
      <Card className="group h-full overflow-hidden border-rose-100 hover:border-rose-300 hover:shadow-lg transition-all duration-300 bg-white">
        <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "1/1", minHeight: "200px" }}>
          {curso.video ? (
            <video
              src={curso.video}
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-rose-50 to-pink-50 flex items-center justify-center">
              <div className="text-6xl opacity-30 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500">
                🌷
              </div>
            </div>
          )}
          <Badge className="absolute top-3 left-3 bg-white/90 text-rose-700 border-rose-200 backdrop-blur-sm text-xs font-medium">
            {curso.categoriaNome}
          </Badge>
        </div>
        <CardContent className="p-5">
          <h3 className="text-sm uppercase tracking-[0.1em] font-medium text-rose-800 mb-2 line-clamp-2 group-hover:text-rose-600 transition-colors">
            {curso.titulo}
          </h3>
          <p className="text-sm text-rose-500 line-clamp-2 leading-relaxed">
            {curso.descricao}
          </p>
        </CardContent>
        <CardFooter className="px-5 pb-4 pt-0 flex items-center gap-4 text-xs text-rose-400">
          <span className="flex items-center gap-1">
            <BarChart className="h-3.5 w-3.5" />
            {curso.nivel}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {curso.tempoLeitura}
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}
