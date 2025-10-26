import Link from 'next/link'
import { SectorIcon } from '@/components/ui/SectorIcon'

/**
 * SectorCard component
 * Card with image background, gradient overlay, and white chip for logo/icon
 * Ensures text is always legible over any image
 */

export interface SectorCardProps {
  title: string
  src: string
  href: string
  children: React.ReactNode
}

export function SectorCard({ title, src, href, children }: SectorCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/30 transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* Background image */}
      <div className="aspect-[4/3] relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={src} 
          alt="" 
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Gradient overlay for contrast */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" 
          aria-hidden="true"
        />
        
        {/* Content */}
        <div className="absolute left-5 right-5 bottom-5">
          {/* White chip with icon and title */}
          <div className="inline-flex items-center gap-2 rounded-xl bg-white/85 backdrop-blur-md px-3 py-2 shadow-lg ring-1 ring-black/5">
            <SectorIcon name={title} className="h-5 w-5 text-brand-red" />
            <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          </div>
          
          {/* Description */}
          <p className="mt-3 max-w-md text-sm text-white/95 leading-snug">
            {children}
          </p>
        </div>
      </div>
    </Link>
  )
}

