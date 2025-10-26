'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { SectorIcon } from '@/components/ui/SectorIcon'
import Image from 'next/image'

const sectors = [
  {
    id: 'industria',
    name: 'Industria',
    description: 'Operarios especializados, técnicos de mantenimiento, supervisores de producción y personal cualificado para la industria manufacturera.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    roles: ['Operarios especializados', 'Técnicos de mantenimiento', 'Supervisores de producción', 'Operadores de maquinaria'],
    stats: { professionals: '200+', success: '98%' }
  },
  {
    id: 'servicios',
    name: 'Servicios',
    description: 'Profesionales del sector servicios: atención al cliente, administración, logística, y personal especializado en diferentes áreas.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    roles: ['Atención al cliente', 'Administrativos', 'Logística', 'Especialistas IT'],
    stats: { professionals: '150+', success: '95%' }
  },
  {
    id: 'hosteleria',
    name: 'Hostelería',
    description: 'Chefs, camareros, personal de cocina, recepcionistas y profesionales con experiencia en el sector hotelero y gastronómico.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    roles: ['Chefs', 'Camareros', 'Personal de cocina', 'Recepcionistas'],
    stats: { professionals: '180+', success: '97%' }
  },
  {
    id: 'construccion',
    name: 'Construcción',
    description: 'Albañiles, electricistas, fontaneros, capataces y personal especializado en construcción con certificaciones de seguridad.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    roles: ['Albañiles', 'Electricistas', 'Fontaneros', 'Capataces'],
    stats: { professionals: '220+', success: '96%' }
  }
]

export function SectorCards() {
  return (
    <section id="sectores" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sectores especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos con experiencia específica en los sectores que más necesitan talento cualificado en España
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector) => (
            <Card key={sector.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={sector.image}
                  alt={`Profesionales trabajando en ${sector.name.toLowerCase()}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <SectorIcon name={sector.name} className="h-6 w-6 text-brand-red" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{sector.name}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {sector.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm">Perfiles típicos:</h4>
                  <ul className="space-y-1">
                    {sector.roles.slice(0, 3).map((role) => (
                      <li key={role} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1 h-1 bg-ibertalento-400 rounded-full mr-2"></div>
                        {role}
                      </li>
                    ))}
                    {sector.roles.length > 3 && (
                      <li className="text-xs text-ibertalento-600 font-medium">
                        +{sector.roles.length - 3} perfiles más
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex justify-between items-center mb-4 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-ibertalento-600">{sector.stats.professionals}</div>
                    <div className="text-gray-500">colocados</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-600">{sector.stats.success}</div>
                    <div className="text-gray-500">éxito</div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-ibertalento-50 group-hover:border-ibertalento-300 group-hover:text-ibertalento-700 transition-colors"
                >
                  Ver casos de éxito
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Tu sector no está listado? Contamos con experiencia en múltiples áreas
          </p>
          <Button 
            variant="ibertalento"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Consulta tu sector específico
          </Button>
        </div>
      </div>
    </section>
  )
}
