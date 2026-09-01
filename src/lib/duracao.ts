export function formatarDuracao(inicio?: string | null, termino?: string | null, fallback?: string): string {
  if (inicio && termino) {
    const [hi, mi] = inicio.split(":").map(Number)
    const [ht, mt] = termino.split(":").map(Number)
    if (!isNaN(hi) && !isNaN(mi) && !isNaN(ht) && !isNaN(mt)) {
      const diffMin = (ht * 60 + mt) - (hi * 60 + mi)
      const horas = Math.floor(diffMin / 60)
      const min = diffMin % 60
      if (diffMin > 0) {
        if (min === 0) return `${horas} hora${horas === 1 ? "" : "s"}`
        return `${horas}h${min.toString().padStart(2, "0")}`
      }
    }
  }
  return fallback || "4 horas"
}
