const ITEMS = ["MEP", "CCL", "Riesgo País", "Badlar", "Merval", "CER / UVA", "S&P 500", "GGAL"];

export function MarketTicker() {
  const row = (
    <>
      {ITEMS.map((label) => (
        <span key={label} className="inline-flex items-center gap-2.5 px-5 py-2 text-[11px]">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">{label}</span>
          <span className="font-semibold tabular-nums text-white/95">—</span>
          <span className="ml-2 inline-block h-3 w-px bg-white/10" />
        </span>
      ))}
    </>
  );

  return (
    <div className="w-full bg-[#121212] text-white">
      <div className="mx-auto flex max-w-[1440px] items-stretch">
        <div className="hidden shrink-0 items-center gap-2 border-r border-white/10 px-4 sm:flex">
          <span className="size-1 rounded-full bg-white/40" />
          <span className="font-display text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
            Referencias de mercado
          </span>
        </div>
        <div className="group relative flex-1 overflow-hidden">
          <div className="ff-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {row}
            {row}
          </div>
        </div>
      </div>
    </div>
  );
}
