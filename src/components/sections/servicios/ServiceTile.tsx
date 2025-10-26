import { CheckCircle2, FileSignature, Layers, UserRound, UserCheck, LucideIcon } from 'lucide-react'

/**
 * ServiceTile component
 * Visual tile with background image, icon in white chip, and description
 * Used for integrated services showcase
 */

const iconMap: Record<string, LucideIcon> = {
  'user-check': UserCheck,
  'file-signature': FileSignature,
  'layers': Layers,
  'handshake': UserRound,
  'check-circle': CheckCircle2,
  'headhunting': CheckCircle2,
  'tramites': FileSignature,
  'sectores': Layers,
  'integracion': UserRound,
}

export interface ServiceTileProps {
  icon: string
  title: string
  src: string
  children: React.ReactNode
}

export function ServiceTile({ icon, title, src, children }: ServiceTileProps) {
  const Icon = iconMap[icon] ?? CheckCircle2
  
  return (
    <div className="relative overflow-hidden rounded-2xl min-h-[240px] group">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={src} 
          alt="" 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      </div>
      
      {/* Content */}
      <div className="relative p-6 h-full flex flex-col justify-between min-h-[240px]">
        {/* Icon and title in white chip */}
        <div className="inline-flex items-center gap-2 rounded-xl bg-white/85 backdrop-blur-md px-3 py-2 shadow-lg ring-1 ring-black/5 self-start">
          <Icon className="h-5 w-5 text-brand-red" aria-hidden="true" />
          <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
        </div>
        
        {/* Description at bottom */}
        <p className="text-white/95 text-sm leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  )
}

