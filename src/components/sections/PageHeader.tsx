'use client'

import Image from 'next/image'

/**
 * PageHeader component - Estilo Casos de Éxito
 * Texto blanco directo sobre imagen oscura con overlay + Logo
 * Used across Services, Process, Sectors pages
 */

export interface PageHeaderProps {
  title: string
  subtitle?: string
  badgeLabel?: string
  src?: string
  priority?: boolean
}

export function PageHeader({ 
  title, 
  subtitle, 
  badgeLabel = 'IBERTALENTO',
  src = '/headers/generic.jpg',
  priority = true 
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
      {/* Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src={src} 
        alt="" 
        className="absolute inset-0 h-full w-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
      />
      
      {/* OVERLAY OSCURO para texto blanco */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/70" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/30 via-transparent to-transparent opacity-50" aria-hidden="true" />
      
      {/* Content con LOGO GRANDE */}
      <div className="relative py-20 md:py-28 w-full">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo de Ibertalento - MÁS GRANDE */}
            <div className="mb-10 flex justify-center">
              <div className="relative h-24 w-96 md:h-32 md:w-[32rem] lg:h-40 lg:w-[40rem] drop-shadow-2xl">
                <Image 
                  src="/assets/logo-ibertalento-transparente.png" 
                  alt="Ibertalento"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                  unoptimized
                />
              </div>
            </div>
            
            {/* Title H1 BLANCO con drop shadow */}
            <h1 className="mb-6 text-white drop-shadow-2xl text-5xl md:text-6xl lg:text-7xl font-bold">
              {title}
            </h1>
            
            {/* Subtitle BLANCO con drop shadow */}
            {subtitle && (
              <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-medium leading-relaxed drop-shadow-lg">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

