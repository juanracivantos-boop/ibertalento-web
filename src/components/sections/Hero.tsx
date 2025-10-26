import Link from 'next/link'
import { ArrowRight, Search, Globe, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-muted-4 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-3/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-1/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="py-20 md:py-28 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft mb-8 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-success" />
              <span className="text-sm font-medium text-muted-2">
                Más de 500 profesionales colocados
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-balance mb-6 animate-fade-in">
              Conectamos <span className="gradient-text">talento</span> con empresas que transforman el futuro
            </h1>

            {/* Lead */}
            <p className="text-xl md:text-2xl text-muted-2 text-balance mb-12 animate-fade-in animate-delay-100">
              En Ibertalento seleccionamos profesionales en España y Latinoamérica. 
              Procesos ágiles, enfoque ético y resultados medibles.
            </p>

            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in animate-delay-200">
              <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-1 to-brand-2">
                  <Search className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-lg">Headhunting especializado</h3>
                <p className="text-sm text-muted-3 text-center">
                  Búsqueda activa de los mejores perfiles
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-2 to-brand-3">
                  <Globe className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-lg">Búsqueda internacional</h3>
                <p className="text-sm text-muted-3 text-center">
                  Acceso a talento en 15+ países
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent-1 to-accent-2">
                  <Zap className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-lg">Modelos por éxito</h3>
                <p className="text-sm text-muted-3 text-center">
                  Solo pagas si se incorpora
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animate-delay-300">
              <Link href="/contacto" className="btn-primary text-lg">
                Solicita una consulta gratuita
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link href="/proceso" className="btn-secondary text-lg">
                Ver nuestro proceso
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-muted-4">
              <p className="text-sm text-muted-3 mb-6">Confían en nosotros</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {/* Placeholder para logos de clientes */}
                <div className="h-8 w-24 bg-muted-4 rounded" />
                <div className="h-8 w-24 bg-muted-4 rounded" />
                <div className="h-8 w-24 bg-muted-4 rounded" />
                <div className="h-8 w-24 bg-muted-4 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
