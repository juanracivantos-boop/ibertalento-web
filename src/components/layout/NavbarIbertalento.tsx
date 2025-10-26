'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/Logo'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Inicio', href: '/' },
  { 
    name: 'Servicios', 
    href: '/servicios',
    submenu: [
      { name: 'Headhunting', href: '/servicios/headhunting', description: 'Búsqueda especializada de talento' },
      { name: 'Trámites de Extranjería', href: '/servicios/tramites-extranjeria', description: 'Gestión legal completa' },
      { name: 'Soluciones por Sector', href: '/servicios/sectores', description: 'Especialización sectorial' },
    ]
  },
  { name: 'Proceso', href: '/proceso' },
  { 
    name: 'Sectores', 
    href: '/sectores',
    submenu: [
      { name: 'Industria', href: '/sectores/industria', description: 'Operarios y técnicos especializados' },
      { name: 'Servicios', href: '/sectores/servicios', description: 'Profesionales del sector servicios' },
      { name: 'Hostelería', href: '/sectores/hosteleria', description: 'Personal hotelero y gastronómico' },
      { name: 'Construcción', href: '/sectores/construccion', description: 'Profesionales de la construcción' },
    ]
  },
  { name: 'Casos de Éxito', href: '/casos-exito' },
  { name: 'Blog', href: '/blog' },
]

export function NavbarIbertalento() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <div className={scrolled ? '' : '[&_span]:text-white [&_div]:text-white/80'}>
          <Logo size="md" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-2">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  scrolled
                    ? 'text-gray-700 hover:text-spanish-red hover:bg-spanish-red/5'
                    : 'text-white hover:bg-white/10'
                }`}
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <span>{item.name}</span>
                {item.submenu && (
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {/* Submenu */}
              <AnimatePresence>
                {item.submenu && activeSubmenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setActiveSubmenu(item.name)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 hover:bg-spanish-red/5 transition-colors group"
                      >
                        <div className="font-semibold text-gray-900 group-hover:text-spanish-red transition-colors">
                          {subItem.name}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {subItem.description}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Button
            className="bg-gradient-to-r from-spanish-red to-spanish-yellow hover:from-spanish-red/90 hover:to-spanish-yellow/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Consulta gratuita
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className={`lg:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-3 px-4 text-gray-700 hover:text-spanish-red hover:bg-spanish-red/5 rounded-lg transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1 mt-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-spanish-red hover:bg-spanish-red/5 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t">
                <Button
                  className="w-full bg-gradient-to-r from-spanish-red to-spanish-yellow hover:from-spanish-red/90 hover:to-spanish-yellow/90 text-white font-semibold"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Consulta gratuita
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
