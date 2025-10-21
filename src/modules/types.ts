export interface PitchContent {
  brand: {
    name: string
    claim: string
    counters: { label: string; value: string }[]
  }
  hero: { hook: string; cta: { label: string; href: string } }
  problema: { bullets: string[]; testimonials: { quote: string; author: string }[] }
  solucion: { unique: string[]; steps: { title: string; desc: string }[] }
  mercado: { segmentos: string[]; validacion: string[] }
  modelo: { planes: { name: string; price: string; features: string[] }[] }
  ventaja: { diferenciadores: string[]; barreras: string[] }
  equipo: { people: { name: string; role: string; note: string; photo?: string }[] }
  contacto: { whatsapp?: string; email?: string; phone?: string; social?: { label: string; href: string }[] }
}