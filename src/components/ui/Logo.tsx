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
  const [logoPath, setLogoPath] = useState<string>('/assets/logo-ibertalento-transparente.svg')
  const [logoChecked, setLogoChecked] = useState<boolean>(true)

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
