import { ReactNode } from 'react'

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-white/10 py-20 first:border-t-0 first:pt-0">
      <div className="mb-10 max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        {description ? <p className="text-base leading-7 text-zinc-400">{description}</p> : null}
      </div>
      {children}
    </section>
  )
}
