export default function Footer() {
  return (
    <footer className="border-t border-rose-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-3">
              <img src="/logo.png" alt="Dona Tulipa" className="h-28 sm:h-32 w-auto" />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-rose-800 mb-3">Cursos</h4>
            <ul className="space-y-2">
              <li className="text-sm text-rose-500 hover:text-rose-700 cursor-pointer">Saboaria Artesanal</li>
              <li className="text-sm text-rose-500 hover:text-rose-700 cursor-pointer">Velas Artesanais</li>
              <li className="text-sm text-rose-500 hover:text-rose-700 cursor-pointer">Cosméticos & Perfumaria</li>
              <li className="text-sm text-rose-500 hover:text-rose-700 cursor-pointer">Faça & Lucre</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-rose-800 mb-3">Contato</h4>
            <ul className="space-y-2">
              <li className="text-sm text-rose-500">contato@donatulipa.com.br</li>
              <li className="text-sm text-rose-500">@donatulipa</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-sm text-rose-500 leading-relaxed mt-10 mb-6">
          Transforme criatividade em renda com nossos cursos artesanais.
        </p>
        <div className="py-8 border-t border-rose-100">
          <h3 className="text-center text-sm font-semibold text-rose-800 mb-4">PATROCINADORES</h3>
          <div className="flex justify-center gap-8 flex-wrap">
            <img src="/LOGO HALLSTAR.png" alt="Hallstar" className="h-12 w-auto" />
          </div>
        </div>
        <div className="pt-6 border-t border-rose-100 text-center">
          <p className="text-xs text-rose-400">
            &copy; {new Date().getFullYear()} Dona Tulipa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
