import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="flex items-center gap-1 text-sm text-rose-400 mb-6">
      <Link href="/" className="hover:text-rose-600 transition-colors">
        Início
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight className="h-3.5 w-3.5" />
          {item.href ? (
            <Link href={item.href} className="hover:text-rose-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-rose-600 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
