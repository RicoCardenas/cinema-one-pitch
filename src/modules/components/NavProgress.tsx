import { useEffect, useState } from 'react'

const SECTIONS = [
  'hero', 'problema', 'solucion', 'mercado', 'modelo', 'ventaja', 'equipo', 'contacto'
]

export default function NavProgress() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id)
      })
    }, { threshold: 0.5 })
    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <nav aria-label="Progreso"
         className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
      {SECTIONS.map(id => (
        <a key={id} href={`#${id}`}
           className={`w-3 h-3 rounded-full border border-neutral-500 ${active === id ? 'bg-brand-500 border-brand-500' : 'bg-transparent'}`}
           aria-label={`Ir a ${id}`} />
      ))}
    </nav>
  )
}