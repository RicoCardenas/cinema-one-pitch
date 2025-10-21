import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useUI } from './store'
import { loadContent } from './content'
import Section from './components/Section'
import NavProgress from './components/NavProgress'
import PricingCard from './components/PricingCard'
import TeamCard from './components/TeamCard'
import { ArrowRight, Moon, Sun, Globe } from 'lucide-react'

export default function App() {
  const lang = useUI(s => s.lang)
  const theme = useUI(s => s.theme)
  const setLang = useUI(s => s.setLang)
  const toggleTheme = useUI(s => s.toggleTheme)
  const c = loadContent(lang)

  useEffect(() => {
    const ids = ['hero','problema','solucion','mercado','modelo','ventaja','equipo','contacto']
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
      const current = ids.findIndex(id => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5
      })
      const next = e.key === 'ArrowRight' ? Math.min(current + 1, ids.length - 1) : Math.max(current - 1, 0)
      document.getElementById(ids[next])?.scrollIntoView({ behavior: 'smooth' })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="snap-container overflow-y-auto h-dvh">
      <header className="fixed top-0 inset-x-0 z-50 bg-neutral-950/60 backdrop-blur border-b border-neutral-900">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 font-bold">C1</span>
            <span className="font-medium">{c.brand.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <button aria-label="Cambiar idioma"
                    className="px-3 py-1.5 text-sm rounded-lg border border-neutral-800 hover:border-brand-500"
                    onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
              <Globe className="inline -mt-1 mr-1" size={16}/> {lang.toUpperCase()}
            </button>
            <button aria-label="Toggle theme"
                    className="p-2 rounded-lg border border-neutral-800 hover:border-brand-500"
                    onClick={toggleTheme}>
              {theme === 'dark' ? <Sun size={16}/> : <Moon size={16}/>}
            </button>
            <a href="#contacto" className="ml-2 px-3 py-1.5 text-sm rounded-lg bg-brand-500 hover:bg-brand-600">
              {lang === 'es' ? 'Contacto' : 'Contact'}
            </a>
          </div>
        </div>
      </header>

      <NavProgress />

      <section id="hero" className="snap-section relative flex items-center">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 md:pb-24 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
          >
            {c.brand.claim}
          </motion.h1>
          <p className="mt-5 text-lg text-neutral-300 max-w-2xl">
            {c.hero.hook}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href={c.hero.cta.href}
               className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 font-medium hover:bg-brand-600">
              {c.hero.cta.label} <ArrowRight size={18}/>
            </a>
            <div className="flex gap-6 text-sm text-neutral-300">
              {c.brand.counters.map((k, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl font-semibold">{k.value}</span>
                  <span className="opacity-70">{k.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section id="problema" title={lang === 'es' ? 'Problema' : 'Problem'}>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-3">
            {c.problema.bullets.map((b, i) => <li key={i} className="leading-tight">• {b}</li>)}
          </ul>
          <div className="space-y-4">
            {c.problema.testimonials.map((t, i) => (
              <blockquote key={i} className="rounded-2xl border border-neutral-800/60 p-4">
                <p className="text-neutral-200">“{t.quote}”</p>
                <footer className="text-sm text-neutral-400 mt-2">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </Section>

      <Section id="solucion" title={lang === 'es' ? 'Solución' : 'Solution'}>
        <div className="grid md:grid-cols-3 gap-6">
          {c.solucion.steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-neutral-800/60 p-5">
              <div className="text-sm text-brand-400 mb-1">0{i+1}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-neutral-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <h4 className="font-medium mb-2">{lang === 'es' ? 'Por qué es único' : 'Why it’s unique'}</h4>
          <ul className="grid md:grid-cols-3 gap-3 text-neutral-300">
            {c.solucion.unique.map((u, i) => <li key={i} className="rounded-xl border border-neutral-800/60 p-3">• {u}</li>)}
          </ul>
        </div>
      </Section>

      <Section id="mercado" title={lang === 'es' ? 'Mercado' : 'Market'}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">{lang === 'es' ? 'Segmentos' : 'Segments'}</h4>
            <ul className="flex flex-wrap gap-2">
              {c.mercado.segmentos.map((s, i) =>
                <span key={i} className="px-3 py-1 rounded-full border border-neutral-800/60 text-sm">{s}</span>
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">{lang === 'es' ? 'Validación' : 'Validation'}</h4>
            <ul className="space-y-2 text-neutral-300">
              {c.mercado.validacion.map((v, i) => <li key={i}>• {v}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="modelo" title={lang === 'es' ? 'Modelo de negocio' : 'Business model'}>
        <div className="grid md:grid-cols-3 gap-6">
          {c.modelo.planes.map((p, i) => <PricingCard key={i} {...p} />)}
        </div>
      </Section>

      <Section id="ventaja" title={lang === 'es' ? 'Ventaja competitiva' : 'Competitive edge'}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">{lang === 'es' ? 'Diferenciadores' : 'Differentiators'}</h4>
            <ul className="space-y-2 text-neutral-300">
              {c.ventaja.diferenciadores.map((d, i) => <li key={i}>• {d}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">{lang === 'es' ? 'Barreras de entrada' : 'Barriers'}</h4>
            <ul className="space-y-2 text-neutral-300">
              {c.ventaja.barreras.map((b, i) => <li key={i}>• {b}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="equipo" title={lang === 'es' ? 'Equipo' : 'Team'}>
        <div className="grid md:grid-cols-3 gap-6">
          {c.equipo.people.map((p, i) => <TeamCard key={i} {...p} />)}
        </div>
      </Section>

      <Section id="contacto" title={lang === 'es' ? 'CTA final y contacto' : 'Final CTA & contact'}>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-3">
            <p className="text-lg">{lang === 'es' ? 'Hablemos de tu próxima campaña.' : 'Let’s talk about your next campaign.'}</p>
            <div className="flex flex-wrap gap-2">
              {c.contacto.whatsapp && (
                <a className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700" href={c.contacto.whatsapp} target="_blank">WhatsApp</a>
              )}
              {c.contacto.email && (
                <a className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600" href={`mailto:${c.contacto.email}`}>Email</a>
              )}
            </div>
            <div className="flex gap-3">
              {c.contacto.social?.map((s, i) => (
                <a key={i} className="text-sm text-neutral-300 underline underline-offset-4" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
              ))}
            </div>
          </div>
          <form className="rounded-2xl border border-neutral-800/60 p-4 grid gap-3" onSubmit={(e) => e.preventDefault()}>
            <label className="grid gap-1">
              <span className="text-sm">Nombre</span>
              <input className="bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2" placeholder="Tu nombre" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm">Email</span>
              <input type="email" className="bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2" placeholder="tucorreo@ejemplo.com" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm">Mensaje</span>
              <textarea className="bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2" rows={4} placeholder="¿Qué necesitas?"></textarea>
            </label>
            <button className="justify-self-start px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600">Enviar</button>
            <p className="text-xs text-neutral-400">Demo sin backend. {/* TODO: conectar a tu API / Form service */}</p>
          </form>
        </div>
        <footer className="mt-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} {c.brand.name}. {/* TODO: actualizar */}
        </footer>
      </Section>
    </div>
  )
}