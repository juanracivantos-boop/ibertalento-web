import { Award, TrendingUp, Clock, Globe } from 'lucide-react'

const stats = [
  { 
    icon: Award,
    value: '5 años', 
    label: 'Experiencia legal', 
    sublabel: 'Como despacho de abogados expertos en extranjería',
    color: 'from-brand-red to-brand-red-600'
  },
  { 
    icon: TrendingUp,
    value: 'Alta', 
    label: 'Tasa de éxito', 
    sublabel: 'Clientes satisfechos e incorporaciones efectivas',
    color: 'from-brand-red to-brand-red-600'
  },
  { 
    icon: Clock,
    value: '3-4 meses', 
    label: 'Proceso completo', 
    sublabel: 'Asesoría legal y gestión integral',
    color: 'from-brand-red to-brand-red-600'
  },
  { 
    icon: Globe,
    value: '15+', 
    label: 'Países', 
    sublabel: 'Red internacional de talento',
    color: 'from-brand-red to-brand-red-600'
  },
]

export function Stats() {
  return (
    <section className="py-8 md:py-10 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 ring-1 ring-brand-red/20 mb-4">
            <TrendingUp className="h-4 w-4 text-brand-red" aria-hidden="true" />
            <span className="text-sm font-semibold text-brand-red uppercase tracking-wide">
              Nuestros números
            </span>
          </div>
          <h2 className="mb-4 text-neutral-900">Resultados que hablan por sí mismos</h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Nuestra experiencia y metodología se reflejan en cifras concretas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative h-full text-center p-8 rounded-2xl bg-white ring-1 ring-neutral-200 hover:ring-brand-red hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/0 to-brand-red/0 group-hover:from-brand-red/5 group-hover:to-brand-red/10 transition-all duration-300" aria-hidden="true" />
                  
                  {/* Icon */}
                  <div className="relative mb-4 inline-flex">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`} aria-hidden="true" />
                    <div className={`relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  
                  {/* Value */}
                  <div className="relative text-4xl md:text-5xl font-bold bg-gradient-to-br from-neutral-900 to-neutral-700 bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="relative text-lg font-bold mb-2 text-neutral-900">{stat.label}</div>
                  
                  {/* Sublabel */}
                  <div className="relative text-sm text-neutral-600 leading-snug">{stat.sublabel}</div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <div className="h-1 w-12 bg-gradient-to-r from-transparent to-brand-red rounded-full" aria-hidden="true" />
          <div className="h-1 w-12 bg-brand-red rounded-full" aria-hidden="true" />
          <div className="h-1 w-12 bg-gradient-to-r from-brand-red to-transparent rounded-full" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
