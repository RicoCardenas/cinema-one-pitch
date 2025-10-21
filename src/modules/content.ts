// src/modules/content.ts
import es from '../../content/es.json'
import en from '../../content/en.json'

import type { PitchContent } from './types'

export function loadContent(lang: 'es' | 'en'): PitchContent {
  return (lang === 'es' ? es : en) as PitchContent
}
