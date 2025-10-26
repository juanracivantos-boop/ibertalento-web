import React from 'react'

interface FrostedCardProps {
  children: React.ReactNode
  className?: string
}

export function FrostedCard({ children, className = '' }: FrostedCardProps) {
  return (
    <div 
      className={`rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl ring-1 ring-black/10 dark:bg-neutral-900/60 dark:ring-white/10 ${className}`}
    >
      {children}
    </div>
  )
}

