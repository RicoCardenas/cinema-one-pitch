import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

export default function Section(props: PropsWithChildren<{ id: string; title: string; className?: string }>) {
  const { id, title, className, children } = props
  return (
    <section id={id} aria-label={title} className={`snap-section flex items-center ${className ?? ''}`}>
      <motion.div
        className="mx-auto w-full max-w-6xl px-6 py-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">{title}</h2>
        {children}
      </motion.div>
    </section>
  )
}