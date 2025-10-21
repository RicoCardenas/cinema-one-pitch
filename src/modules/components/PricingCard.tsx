export default function PricingCard({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-800/60 p-6 hover:border-brand-500 transition-colors">
      <div className="flex items-baseline justify-between">
        <h4 className="text-xl font-semibold">{name}</h4>
        <span className="text-2xl font-bold text-brand-400">{price}</span>
      </div>
      <ul className="mt-4 space-y-2 text-neutral-300">
        {features.map((f, i) => <li key={i} className="leading-tight">• {f}</li>)}
      </ul>
    </div>
  )
}