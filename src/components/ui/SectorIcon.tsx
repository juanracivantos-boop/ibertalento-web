import { Building2, Hammer, UtensilsCrossed, Sparkles, Factory } from 'lucide-react'

/**
 * SectorIcon component
 * Renders an icon for each sector using lucide-react
 * Falls back to Building2 if sector is not found
 */

export interface SectorIconProps {
  name: string
  className?: string
}

export function SectorIcon({ name, className = "h-6 w-6 text-brand-red" }: SectorIconProps) {
  const map: Record<string, React.ElementType> = {
    industria: Factory,
    'industria y automoción': Factory,
    construccion: Hammer,
    construcción: Hammer,
    hosteleria: UtensilsCrossed,
    'hostelería y turismo': UtensilsCrossed,
    'hostelería': UtensilsCrossed,
    limpieza: Sparkles,
    'limpieza y mantenimiento': Sparkles,
    servicios: Building2,
  }
  
  const normalizedName = name.toLowerCase()
  const Icon = map[normalizedName] ?? Building2
  
  return <Icon className={className} aria-hidden="true" />
}

