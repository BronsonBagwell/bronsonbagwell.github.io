import { ReactNode } from 'react'

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-glow backdrop-blur ${className}`}>
      {children}
    </div>
  )
}
