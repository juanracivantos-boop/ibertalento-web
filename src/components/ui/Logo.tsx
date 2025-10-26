'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  variant?: 'full' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
}

const sizeClasses = {
  sm: { height: 32, width: 133 },
  md: { height: 40, width: 167 },
  lg: { height: 60, width: 200 },
}

export function Logo({ variant = 'full', size = 'md', className = '', href = '/' }: LogoProps) {
  const dimensions = sizeClasses[size]
  const [logoPath, setLogoPath] = useState<string>('/assets/logo.svg')
  const [logoChecked, setLogoChecked] = useState<boolean>(false)

  // Verificar qué logo existe
  useEffect(() => {
    const checkLogo = async () => {
      // Lista de logos a verificar en orden de prioridad
      const logosToCheck = [
        '/assets/logo-ibertalento-transparente.png',
        '/assets/logo-ibertalento.png',
        '/assets/logo-ibertalento.webp',
        '/assets/logo.svg'
      ]

      for (const path of logosToCheck) {
        try {
          const response = await fetch(path, { method: 'HEAD' })
          if (response.ok) {
            console.log(`✅ Logo encontrado: ${path} (${response.status})`)
            setLogoPath(path)
            setLogoChecked(true)
            return
          }
        } catch (error) {
          console.warn(`⚠️ Logo no encontrado: ${path}`)
        }
      }

      // Si ninguno funciona, usar el SVG por defecto
      console.error('❌ No se encontró ningún logo válido. Usando fallback.')
      setLogoPath('/assets/logo.svg')
      setLogoChecked(true)
    }

    checkLogo()
  }, [])

  // Mostrar mensaje en consola solo una vez
  useEffect(() => {
    if (logoChecked && logoPath === '/assets/logo.svg') {
      console.warn(`
╔═══════════════════════════════════════════════════════════════════╗
║ ⚠️  LOGO CORPORATIVO NO ENCONTRADO                                ║
╠═══════════════════════════════════════════════════════════════════╣
║                                                                   ║
║  Por favor, sube tu logo corporativo en:                         ║
║  📁 /public/assets/logo-ibertalento.png                          ║
║  📁 /public/assets/logo-ibertalento.webp (alternativo)           ║
║                                                                   ║
║  Formato: PNG o WebP                                             ║
║  Tamaño recomendado: Altura 80-120px (mantener proporción)      ║
║  Fondo: Transparente preferible                                  ║
║                                                                   ║
║  El logo se renderizará a ~40px de altura en el header          ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
      `)
    }
  }, [logoChecked, logoPath])

  const LogoImage = () => (
    <Image
      src={logoPath}
      alt="IBERTALENTO — Talento sin fronteras"
      width={dimensions.width}
      height={dimensions.height}
      priority
      className={`${className} ${variant === 'icon' ? 'w-auto' : ''}`}
      unoptimized={logoPath.endsWith('.svg')} // SVG no necesita optimización
    />
  )

  if (href) {
    return (
      <Link 
        href={href} 
        className="inline-flex items-center focus-ring rounded-lg"
        aria-label="Ir a la página de inicio"
      >
        <LogoImage />
      </Link>
    )
  }

  return <LogoImage />
}
