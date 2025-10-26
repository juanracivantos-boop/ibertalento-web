'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Globe2, FileCheck2, Network } from 'lucide-react'
import { FrostedCard } from '@/components/ui/FrostedCard'

/**
 * Hero con marco difuminado (frosted glass) para máxima legibilidad
 * Paleta limpia: Gris + Rojo
 */

const operativeSlides = [
  {
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80&fit=crop',
    alt: 'Soldadores soldando en línea de producción con EPI',
    sector: 'Industria',
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80&fit=crop',
    alt: 'Albañiles trabajando en obra con EPI',
    sector: 'Construcción',
  },
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&fit=crop',
    alt: 'Personal de hostelería en servicio profesional',
    sector: 'Hostelería',
  },
  {
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1920&q=80&fit=crop',
    alt: 'Trabajadores en la viña realizando labores de poda',
    sector: 'Agrícola',
  },
]

export function HeroWithMedia() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [useVideo, setUseVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Auto-advance slideshow
  useEffect(() => {
    if (!useVideo) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % operativeSlides.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [useVideo])

  // Check if video exists
  useEffect(() => {
    const checkVideo = async () => {
      try {
        const response = await fetch('/media/hero-operativo.mp4', { method: 'HEAD' })
        if (response.ok) {
          setUseVideo(true)
        }
      } catch {
        setUseVideo(false)
      }
    }
    checkVideo()
  }, [])

  return (
    <section 
      className="relative min-h-0 flex items-center justify-center overflow-hidden m-0 p-0"
      aria-label="Sección principal"
    >
      {/* Background Media */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {useVideo ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/media/hero-poster.jpg"
            className="w-full h-full object-cover"
            onError={() => setUseVideo(false)}
          >
            <source src="/media/hero-operativo.mp4" type="video/mp4" />
          </video>
        ) : (
          <>
            {operativeSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </>
        )}
        
        {/* Scrim global para contraste sobre TODA la hero */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" 
          aria-hidden="true"
        />
      </div>

      {/* Marco difuminado (Frosted Card) */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-4 md:py-6">
        <FrostedCard>
          <div className="p-6 md:p-8 text-center">
            {/* Badge superior - Talento internacional */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 mb-4"
              role="status"
            >
              <Globe2 className="w-4 h-4 text-brand-red" aria-hidden="true" />
              <span className="text-sm font-semibold text-brand-red">
                Talento internacional verificado
              </span>
            </div>

            {/* H1 - NUEVO MENSAJE */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight text-neutral-900">
              Talento internacional listo para tu negocio
            </h1>

            {/* Subcopy - Enfoque en gestión legal y tiempos */}
            <p className="text-lg md:text-xl mb-6 text-neutral-700 mx-auto max-w-3xl leading-relaxed">
              Reclutamos en origen, tramitamos visados y acompañamos la integración. Desde 3 meses según país. Documentación validada y contrato indefinido.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center">
              <Link 
                href="/contacto" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-brand-red hover:bg-brand-red-600 transition-all duration-200 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/40"
              >
                Solicitar candidatos
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link 
                href="/contacto" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-neutral-900 bg-white border-2 border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-300"
              >
                Consulta gratuita
              </Link>
            </div>

            {/* Métricas/badges - NUEVO CONTENIDO */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-200">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red shadow-md">
                  <FileCheck2 className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-neutral-900 text-sm">Gestión legal incluida</h3>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Visados y permisos según país de origen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red shadow-md">
                  <Network className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-neutral-900 text-sm">Red global de candidatos</h3>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Perfiles validados por competencias
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red shadow-md">
                  <Globe2 className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-neutral-900 text-sm">Cobertura en toda España</h3>
                  <p className="text-xs text-neutral-600 leading-snug">
                    Construcción, hostelería, industria y limpieza
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FrostedCard>
      </div>

      {/* Indicadores de slideshow */}
      {!useVideo && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {operativeSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-brand-red'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>
      )}
    </section>
  )
}
