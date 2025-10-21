# Cinema ONE — Pitch SPA

SPA para presentar el pitch de **Cinema ONE** con storytelling por secciones, scroll-snap, accesibilidad y contenido desacoplado.

## Requisitos
- Node 18+
- npm

## Comandos
```bash
npm i
npm run dev   # desarrollo
npm run build # producción
npm run preview
```

## Estructura
```
content/
  es.json      # <--- EDITA AQUÍ tus textos (ES)
  en.json      # i18n opcional
src/
  modules/
    App.tsx
    components/ (Section, NavProgress, PricingCard, TeamCard)
    content.ts
    store.ts
  index.css
  main.tsx
```

## Edición de contenido
- Cambia textos, planes, equipo y contactos en `content/es.json`.
- Marca TODOs en comentarios del código si necesitas recordar cambios.
- Colores/Tipografía en `tailwind.config.js` (paleta `brand`).

## Deploy
- Sube a Vercel / Netlify.
- Output de build en `dist/`.

## Accesibilidad y UX
- Roles semánticos, foco visible, navegación por teclado (← →).
- Progreso lateral con *IntersectionObserver*.
- Modo oscuro por defecto, toggle para claro.
