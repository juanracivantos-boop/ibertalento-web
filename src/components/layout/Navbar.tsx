'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Inicio', href: '/' },
  { 
    name: 'Servicios', 
    href: '/servicios',
    submenu: [
      { name: 'Headhunting', href: '/servicios/headhunting' },
      { name: 'Trámites de Extranjería', href: '/servicios/tramites-extranjeria' },
      { name: 'Soluciones por Sector', href: '/servicios/sectores' },
    ]
  },
  { name: 'Proceso', href: '/proceso' },
  { 
    name: 'Sectores', 
    href: '/sectores',
    submenu: [
      { name: 'Industria', href: '/sectores/industria' },
      { name: 'Servicios', href: '/sectores/servicios' },
      { name: 'Hostelería', href: '/sectores/hosteleria' },
      { name: 'Construcción', href: '/sectores/construccion' },
    ]
  },
  { name: 'Casos de Éxito', href: '/casos-exito' },
  { name: 'Equipo', href: '/equipo' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contacto' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-ibertalento-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">I</span>
          </div>
          <span className="font-bold text-xl text-gray-900">Ibertalento</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center space-x-1 text-gray-700 hover:text-ibertalento-600 transition-colors font-medium"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <span>{item.name}</span>
                {item.submenu && (
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {/* Submenu */}
              {item.submenu && activeSubmenu === item.name && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-ibertalento-50 hover:text-ibertalento-600 transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Button 
            variant="ibertalento"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Consulta gratuita
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="container py-4 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-ibertalento-600 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-1 text-sm text-gray-600 hover:text-ibertalento-600 transition-colors"
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
                variant="ibertalento" 
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false)
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Consulta gratuita
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
