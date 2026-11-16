export function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-3">
      <span className="relative grid h-10 w-10 place-items-center rounded-full bg-sun ring-2 ring-ink transition-transform duration-300 group-hover:-rotate-6">
        <span className="font-display text-[13px] font-extrabold tracking-tight text-ink">
          EO
        </span>
        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-ink ring-2 ring-cream" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-ink">
        Eugene<span className="text-sun">.</span>
      </span>
    </a>
  );
}
