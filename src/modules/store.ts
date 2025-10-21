import { create } from 'zustand'

interface UIState {
  lang: 'es' | 'en'
  theme: 'dark' | 'light'
  setLang: (l: 'es' | 'en') => void
  toggleTheme: () => void
}

export const useUI = create<UIState>((set, get) => ({
  lang: 'es',
  theme: 'dark',
  setLang: (l) => set({ lang: l }),
  toggleTheme: () => {
    const next = get().theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    if (next === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    set({ theme: next })
  },
}))