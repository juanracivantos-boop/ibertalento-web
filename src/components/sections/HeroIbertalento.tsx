'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Shield, Clock, Globe, TrendingUp, Award } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Profesionales colocados', icon: Users },
  { value: '95%', label: 'Tasa de éxito', icon: TrendingUp },
  { value: '4 meses', label: 'Tiempo promedio', icon: Clock },
  { value: '15+', label: 'Países de origen', icon: Globe },
]

const floatingImages = [
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Equipo trabajando',
    position: 'top-20 right-20',
    delay: 0,
  },
  {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Profesional en industria',
    position: 'top-40 right-60',
    delay: 0.2,
  },
  {
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Equipo colaborando',
    position: 'bottom-40 right-40',
    delay: 0.4,
  },
]

export function HeroIbertalento() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-spanish-red">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(198, 11, 30, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255, 196, 0, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(198, 11, 30, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-spanish-yellow/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-spanish-yellow/20 backdrop-blur-sm border border-spanish-yellow/30 text-spanish-yellow px-4 py-2 rounded-full text-sm font-medium"
            >
              <Award className="h-4 w-4" />
              <span>Líderes en Contratación Internacional</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Talento sin fronteras
                <span className="block bg-gradient-to-r from-spanish-yellow via-spanish-red to-spanish-yellow bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                  para España
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                Integramos <strong className="text-white">headhunting especializado</strong> y{' '}
                <strong className="text-white">despacho de extranjería</strong> para que las empresas 
                capten y traigan talento a España con un único interlocutor, de principio a fin.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-spanish-red/20 to-spanish-yellow/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <stat.icon className="h-6 w-6 text-spanish-yellow" />
                      <div>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-gray-300">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="xl"
                className="group bg-gradient-to-r from-spanish-red to-spanish-yellow hover:from-spanish-red/90 hover:to-spanish-yellow/90 text-white font-semibold shadow-2xl hover:shadow-spanish-yellow/50 transition-all duration-300"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Agenda una consulta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => document.getElementById('proceso')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver proceso completo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {['Industria', 'Servicios', 'Hostelería', 'Construcción'].map((sector, index) => (
                <motion.span
                  key={sector}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-default"
                >
                  {sector}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual - 3D Card Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Card */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  transform: `perspective(1000px) rotateY(${(mousePosition.x - window.innerWidth / 2) / 50}deg) rotateX(${-(mousePosition.y - window.innerHeight / 2) / 50}deg)`,
                }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-spanish-red/20 to-spanish-yellow/20 z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Equipo diverso trabajando en colaboración - Talento internacional integrado en empresas españolas"
                  width={600}
                  height={700}
                  className="w-full h-[600px] object-cover"
                  priority
                />
                
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-spanish-red to-spanish-yellow bg-clip-text text-transparent">
                        4 meses
                      </div>
                      <div className="text-sm text-gray-600">Proceso completo</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-spanish-red to-spanish-yellow border-2 border-white" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">+150 empresas</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Elements */}
              {floatingImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  className={`absolute ${img.position} hidden xl:block`}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: img.delay }}
                    className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>
              ))}

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-spanish-red/20 to-spanish-yellow/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-r from-spanish-yellow/20 to-spanish-red/20 rounded-full blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
