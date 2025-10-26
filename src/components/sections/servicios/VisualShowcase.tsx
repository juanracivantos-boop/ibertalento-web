'use client'

import Image from 'next/image'
import { FileCheck, Plane, Users, Building } from 'lucide-react'

const tramites = [
  {
    title: 'Gestión de visados',
    description: 'Tramitación completa de visados de trabajo',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&fit=crop',
    icon: FileCheck,
  },
  {
    title: 'Permisos de trabajo',
    description: 'NIE y autorizaciones de residencia',
    image: 'https://images.unsplash.com/photo-1554224311-beee143f0673?w=800&q=80&fit=crop',
    icon: Building,
  },
  {
    title: 'Coordinación de llegada',
    description: 'Gestión logística del viaje a España',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&fit=crop',
    icon: Plane,
  },
  {
    title: 'Incorporación inmediata',
    description: 'Onboarding y seguimiento personalizado',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&fit=crop',
    icon: Users,
  },
]

export function VisualShowcase() {
  return (
    <section className="py-20 md:py-28 bg-base-bg">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            De los trámites a la incorporación
          </h2>
          <p className="text-xl text-text-secondary">
            Gestionamos cada paso con precisión para que tú puedas enfocarte en tu negocio
          </p>
        </div>

        {/* Mosaico Principal */}
        <div className="grid gap-6 md:grid-cols-12 mb-12">
          {/* Imagen Grande - Visados */}
          <div className="md:col-span-7 relative overflow-hidden rounded-2xl group">
            <div className="relative h-[400px] md:h-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tramites[0].image}
                alt={tramites[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sector-construccion/80 backdrop-blur-sm mb-3">
                  <FileCheck className="h-4 w-4" />
                  <span className="text-sm font-semibold">Trámites legales</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{tramites[0].title}</h3>
                <p className="text-white/90">{tramites[0].description}</p>
              </div>
            </div>
          </div>

          {/* Grid de Imágenes Pequeñas */}
          <div className="md:col-span-5 grid gap-6">
            {tramites.slice(1).map((tramite, index) => {
              const Icon = tramite.icon
              return (
                <div key={index} className="relative overflow-hidden rounded-xl group">
                  <div className="relative h-[150px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tramite.image}
                      alt={tramite.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h4 className="font-bold text-lg">{tramite.title}</h4>
                      </div>
                      <p className="text-sm text-white/80">{tramite.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bullets de Valor */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sector-construccion/10 text-sector-construccion mb-4">
                <FileCheck className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-text-primary mb-2">100% Legal</h4>
              <p className="text-sm text-text-secondary">
                Todos los trámites gestionados conforme a la normativa vigente
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sector-hosteleria/10 text-sector-hosteleria mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-text-primary mb-2">Sin sorpresas</h4>
              <p className="text-sm text-text-secondary">
                Te informamos en cada paso del proceso con claridad total
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sector-industria/10 text-sector-industria mb-4">
                <Plane className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-text-primary mb-2">Experiencia probada</h4>
              <p className="text-sm text-text-secondary">
                Más de 500 procesos completados con éxito
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

