import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Curso } from "@/data/cursos"

export default function CursoFAQ({ curso }: { curso: Curso }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-rose-900 mb-6">
        Perguntas Frequentes
      </h2>
      <Accordion className="w-full">
        {curso.faq.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-rose-100">
            <AccordionTrigger className="text-rose-700 hover:text-rose-900 hover:no-underline text-left font-medium">
              {item.pergunta}
            </AccordionTrigger>
            <AccordionContent className="text-rose-500 leading-relaxed">
              {item.resposta}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
