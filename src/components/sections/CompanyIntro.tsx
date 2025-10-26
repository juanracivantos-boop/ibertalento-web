'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Shield, Globe, Award, CheckCircle, TrendingUp } from 'lucide-react'

export function CompanyIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-spanish-red/10 text-spanish-red px-4 py-2 rounded-full text-sm font-semibold"
              >
                <Award className="h-4 w-4" />
                <span>Quiénes Somos</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Ibertalento: Tu socio en{' '}
                <span className="bg-gradient-to-r from-spanish-red to-spanish-yellow bg-clip-text text-transparent">
                  contratación internacional
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Somos una empresa especializada que <strong>integra headhunting y despacho de extranjería</strong> para 
                que las empresas españolas capten y traigan talento internacional con un único interlocutor, 
                de principio a fin.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-spanish-red/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-spanish-red" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Headhunting Especializado</h3>
                  <p className="text-gray-600 text-sm">
                    Red de cazatalentos en 15+ países de Latinoamérica con experiencia en sectores clave: 
                    industria, construcción, hostelería y servicios.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-spanish-yellow/20 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-spanish-yellow" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Despacho de Extranjería</h3>
                  <p className="text-gray-600 text-sm">
                    Equipo legal especializado que gestiona todos los trámites: visados, NIE, permisos de trabajo 
                    y Seguridad Social. 100% de cumplimiento legal.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-spanish-red/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-spanish-red" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Proceso Integral</h3>
                  <p className="text-gray-600 text-sm">
                    Desde la búsqueda del candidato hasta su incorporación en tu empresa. 
                    Un único interlocutor para todo el proceso en aproximadamente 4 meses.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-spanish-red">500+</div>
                <div className="text-sm text-gray-600">Profesionales colocados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-spanish-yellow">150+</div>
                <div className="text-sm text-gray-600">Empresas satisfechas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-spanish-red">95%</div>
                <div className="text-sm text-gray-600">Tasa de éxito</div>
              </div>
            </div>
          </motion.div>

          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image - Industria */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-xl group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Trabajadores en industria manufacturera - Ibertalento"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                    Industria
                  </span>
                </div>
              </motion.div>

              {/* Construcción */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative h-48 rounded-2xl overflow-hidden shadow-xl group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Trabajadores de construcción - Ibertalento"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
                    Construcción
                  </span>
                </div>
              </motion.div>

              {/* Hostelería */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative h-48 rounded-2xl overflow-hidden shadow-xl group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Personal de hostelería - Ibertalento"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
                    Hostelería
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border-4 border-spanish-yellow"
            >
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-spanish-red" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">4 meses</div>
                  <div className="text-sm text-gray-600">Proceso completo</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
