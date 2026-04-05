import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-white text-zinc-950 hover:bg-zinc-200'
      : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${styles}`}
    >
      {children}
    </Link>
  )
}
