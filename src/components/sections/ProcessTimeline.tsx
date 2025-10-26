'use client'

import { CalendarClock, Search, FileCheck2, Rocket } from 'lucide-react'

/**
 * ProcessTimeline component
 * Enhanced 4-phase process with background images, numbered steps, and time badges
 */

const steps = [
  {
    n: 1,
    title: 'Análisis y briefing',
    time: 'Primera reunión',
    icon: CalendarClock,
    bg: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80&fit=crop',
    description: 'Definimos el perfil ideal, requisitos y calendario del proceso.'
  },
  {
    n: 2,
    title: 'Búsqueda y selección',
    time: '1–2 semanas',
    icon: Search,
    bg: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80&fit=crop',
    description: 'Sourcing, filtrado y entrevistas por competencias de candidatos cualificados.'
  },
  {
    n: 3,
    title: 'Gestión legal',
    time: 'Desde 3 meses (según país)',
    icon: FileCheck2,
    bg: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&fit=crop',
    description: 'Tramitación completa de visados, permisos de trabajo y documentación.'
  },
  {
    n: 4,
    title: 'Incorporación',
    time: '',
    icon: Rocket,
    bg: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&fit=crop',
    description: 'El candidato se incorpora el mismo día de su llegada a España.'
  },
]

export function ProcessTimeline() {
  return (
    <div className="space-y-8">
      {/* Timeline grid */}
      <ol className="grid gap-6 md:grid-cols-2">
        {steps.map((s) => (
          <li
            key={s.n}
            className="relative overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white group hover:ring-brand-red/30 transition-all duration-300"
          >
            {/* Background image with overlay BLANCO */}
            <div className="absolute inset-0 -z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={s.bg} 
                alt="" 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-white/90" />
            </div>
            
            {/* Content */}
            <div className="relative p-6 min-h-[180px] flex flex-col justify-between">
              {/* Header with number, icon, and title */}
              <div className="flex items-center gap-3 mb-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-red text-white font-bold text-lg shrink-0 shadow-lg">
                  {s.n}
                </span>
                <div className="flex items-center gap-2 flex-1">
                  <s.icon className="h-5 w-5 text-brand-red shrink-0" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-neutral-900">{s.title}</h3>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-neutral-900 text-sm leading-relaxed mb-3 font-medium">
                {s.description}
              </p>
              
              {/* Time badge */}
              <span className="inline-block self-start rounded-full bg-brand-red/10 backdrop-blur px-3 py-1.5 text-sm font-bold text-neutral-900 ring-1 ring-brand-red/20 shadow-sm">
                ⏱️ {s.time}
              </span>
            </div>
          </li>
        ))}
      </ol>
      
      {/* Total estimated time */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-xl bg-neutral-50 px-6 py-3 ring-1 ring-neutral-200">
          <span className="text-neutral-700 font-medium">
            Tiempo total estimado del proceso:
          </span>
          <span className="text-2xl font-bold text-brand-red">4 meses</span>
        </div>
      </div>
    </div>
  )
}
