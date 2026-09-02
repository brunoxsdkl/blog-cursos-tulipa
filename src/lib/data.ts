export function formatarDataBrasil(data: string): string {
  const parte = typeof data === "string" ? data.split("T")[0] : ""
  const [ano, mes, dia] = parte.split("-")
  if (ano && mes && dia) return `${dia}/${mes}/${ano}`
  return data
}

export function proximaDataISO(datas: string[]): string {
  const agora = Date.now()
  const futuras = datas
    .map((d) => new Date(d.split("T")[0] + "T00:00:00").getTime())
    .filter((t) => t > agora)
    .sort((a, b) => a - b)
  const escolhida = new Date(futuras[0] ?? new Date(datas[0]).getTime())
  return escolhida.toISOString().split("T")[0]
}
