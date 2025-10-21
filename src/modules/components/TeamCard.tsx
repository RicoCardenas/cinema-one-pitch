export default function TeamCard({ name, role, note, photo }: { name: string; role: string; note: string; photo?: string }) {
  return (
    <article className="rounded-2xl border border-neutral-800/60 p-5 flex items-center gap-4">
      <img
        src={photo ?? 'https://placehold.co/96x96?text=Photo'}
        alt={`Foto de ${name}`}
        className="w-16 h-16 rounded-full object-cover"
        loading="lazy"
      />
      <div>
        <h5 className="font-semibold">{name}</h5>
        <p className="text-sm text-neutral-300">{role}</p>
        <p className="text-sm text-neutral-400">{note}</p>
      </div>
    </article>
  )
}