'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Factory, Building2, Utensils, HardHat, Users, CheckCircle } from 'lucide-react'

const sectors = [
  {
    id: 'industria',
    name: 'Industria',
    icon: Factory,
    description: 'Operarios especializados, técnicos de mantenimiento y supervisores para la industria manufacturera española.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    roles: ['Operarios de producción', 'Técnicos de mantenimiento', 'Supervisores', 'Operadores de maquinaria CNC'],
    stats: { placed: '200+', success: '98%' },
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'construccion',
    name: 'Construcción',
    icon: HardHat,
    description: 'Profesionales cualificados para el sector de la construcción con certificaciones de seguridad.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    roles: ['Albañiles', 'Electricistas', 'Fontaneros', 'Capataces de obra'],
    stats: { placed: '220+', success: '96%' },
    color: 'from-orange-500 to-orange-700'
  },
  {
    id: 'hosteleria',
    name: 'Hostelería',
    icon: Utensils,
    description: 'Personal cualificado para hoteles, restaurantes y servicios gastronómicos.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    roles: ['Chefs y cocineros', 'Camareros', 'Personal de cocina', 'Recepcionistas'],
    stats: { placed: '180+', success: '97%' },
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'servicios',
    name: 'Servicios',
    icon: Building2,
    description: 'Profesionales para el sector servicios: administrativos, atención al cliente y logística.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    roles: ['Administrativos', 'Atención al cliente', 'Logística', 'Especialistas IT'],
    stats: { placed: '150+', success: '95%' },
    color: 'from-green-500 to-green-700'
  }
]

export function SectorShowcase() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sectores especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiencia comprobada en los sectores que más necesitan talento cualificado en España
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                {/* Image with overlay */}
                <div className="absolute inset-0">
                  <Image
                    src={sector.image}
                    alt={`Profesionales de ${sector.name} - Ibertalento`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${sector.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  {/* Header */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <sector.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">{sector.name}</h3>
                        <div className="flex items-center space-x-4 text-sm mt-1">
                          <span>{sector.stats.placed} colocados</span>
                          <span>•</span>
                          <span>{sector.stats.success} éxito</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {sector.description}
                    </p>
                  </div>

                  {/* Roles */}
                  <div>
                    <div className="space-y-2 mb-6">
                      {sector.roles.map((role, roleIndex) => (
                        <motion.div
                          key={roleIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + roleIndex * 0.05 }}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 flex-shrink-0" />
                          <span className="text-sm">{role}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                      Ver casos de éxito
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-bl-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            ¿Tu sector no está listado? Contamos con experiencia en múltiples áreas
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-spanish-red to-spanish-yellow hover:from-spanish-red/90 hover:to-spanish-yellow/90 text-white font-semibold shadow-xl"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Users className="mr-2 h-5 w-5" />
            Consulta tu sector específico
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
