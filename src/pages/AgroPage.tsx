import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, Menu, Shield, Wheat, X } from "lucide-react";
import { CONTACT } from "../lib/brand";
import {
  CROPS,
  EXAMPLE_ONS,
  calcularMargen,
  formatUSD,
  hedgeUsd,
  inputsFromPreset,
  onProceeds,
  type CropId,
  type CropInputs,
} from "../lib/agro";

export function AgroPage() {
  const [cropId, setCropId] = useState<CropId>("soja_1");
  const crop = CROPS.find((c) => c.id === cropId)!;
  const [inputs, setInputs] = useState<CropInputs>(() => inputsFromPreset(CROPS[0]));
  const result = useMemo(() => calcularMargen(inputs), [inputs]);
  const [navOpen, setNavOpen] = useState(false);

  const [ha, setHa] = useState(100);
  const [cover, setCover] = useState(50);
  const [futuro, setFuturo] = useState(CROPS[0].defaultPrecio);
  const hedge = hedgeUsd(inputs.rinde, ha, cover, futuro);
  const [onDias, setOnDias] = useState(90);
  const onPick = EXAMPLE_ONS.find((o) => o.dias === onDias) ?? EXAMPLE_ONS[0];
  const finalUsd = onProceeds(hedge.usdAsegurados, onPick.tirEjemplo, onPick.dias);

  function selectCrop(id: CropId) {
    const next = CROPS.find((c) => c.id === id)!;
    setCropId(id);
    setInputs(inputsFromPreset(next));
    setFuturo(next.defaultPrecio);
  }

  function patch(partial: Partial<CropInputs>) {
    setInputs((prev) => ({ ...prev, ...partial }));
  }

  const precios = [inputs.precio - 3, inputs.precio - 2, inputs.precio, inputs.precio + 2, inputs.precio + 3];
  const rindes = [-10, -5, 0, 5, 10].map((d) => Math.max(1, inputs.rinde + d));

  const nav = (
    <nav className="flex flex-col gap-1 text-sm">
      <a href="#calculadora" className="rounded-xl bg-brand-surface px-3 py-2.5 font-semibold text-brand-dark">
        Calculadora
      </a>
      <a href="#hedge" className="rounded-xl px-3 py-2.5 text-brand-muted hover:bg-brand-surface hover:text-brand-dark">
        Hedge + ON
      </a>
      <a href="#ons" className="rounded-xl px-3 py-2.5 text-brand-muted hover:bg-brand-surface hover:text-brand-dark">
        ONs USD
      </a>
    </nav>
  );

  return (
    <div className="flex min-h-dvh bg-brand-bg text-brand-dark">
      <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-brand-hairline bg-brand-bg px-5 py-6 lg:flex">
        <Link to="/agro" className="flex items-center gap-3">
          <img src="/images/ff-logo-black.png" alt="FF Advisors" className="h-10 w-auto" />
        </Link>
        <p className="mt-6 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-brand-accent">
          FF Agro
        </p>
        <div className="mt-4 flex-1">{nav}</div>
        <p className="text-[11px] leading-relaxed text-brand-muted">
          FF Advisors · Agente Productor CNV — Matrícula N° 2016
        </p>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-brand-hairline bg-white/85 px-5 py-3 backdrop-blur-md lg:hidden">
          <Link to="/agro" className="flex items-center gap-2">
            <img src="/images/ff-logo-black.png" alt="FF Advisors" className="h-9 w-auto" />
          </Link>
          <button
            type="button"
            aria-label={navOpen ? "Cerrar menú" : "Menú"}
            className="grid size-10 place-items-center rounded-full border border-brand-hairline bg-white"
            onClick={() => setNavOpen((v) => !v)}
          >
            {navOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </header>
        {navOpen ? <div className="border-b border-brand-hairline bg-white px-5 py-4 lg:hidden">{nav}</div> : null}

        <main>
          <section className="px-5 pb-6 pt-8 sm:px-8">
            <div className="rounded-2xl bg-[#121212] p-5 text-white shadow-elevated sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="h-10 w-1 rounded-full bg-brand-accent" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">
                      Campaña 2026/2027
                    </p>
                    <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Calculadora de margen</h1>
                  </div>
                </div>
                <Wheat className="size-6 text-brand-accent" />
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
                Ajustá rinde, precio, alquiler e insumos para ver el margen bruto por cultivo.
              </p>
              <p className="mt-3 max-w-2xl rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
                Para quién es: empresas agropecuarias que necesitan estimar el margen de campaña, cubrir
                precio y colocar excedentes en dólares hasta cosecha.
              </p>
            </div>
          </section>

          <section id="calculadora" className="px-5 py-8 sm:px-8">
            <div className="flex flex-wrap gap-2">
              {CROPS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => selectCrop(c.id)}
                  className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                    c.id === cropId ? "bg-brand-dark text-white" : "border border-brand-hairline bg-white text-brand-dark"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs text-brand-muted">
              Escenario ejemplo editable. Reemplazá los valores por tus datos reales.
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-4 rounded-2xl border border-brand-hairline bg-white p-5 shadow-card sm:grid-cols-2">
                {(
                  [
                    ["alquilerQq", "Alquiler (qq/ha)", 0.5],
                    ["precio", "Precio (USD/qq)", 0.5],
                    ["rinde", "Tu rinde (qq/ha)", 0.5],
                    ["insumosUsdHa", "Insumos (USD/ha)", 1],
                    ["labores", "Labores (USD/ha)", 1],
                    ["cosechaPct", "Cosecha (%)", 0.5],
                    ["comercializacion", "Flete + comerc. (%)", 0.5],
                    ["retenciones", "Retenciones (%)", 0.5],
                  ] as const
                ).map(([key, label, step]) => (
                  <label key={key} className="block text-[11px] font-semibold uppercase tracking-wider text-brand-muted">
                    {label}
                    <input
                      type="number"
                      step={step}
                      value={inputs[key]}
                      onChange={(e) => patch({ [key]: Number(e.target.value) })}
                      className="field mt-1.5"
                    />
                  </label>
                ))}
              </div>
              <div className="rounded-2xl bg-[#121212] p-6 text-white shadow-lg">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">{crop.name}</p>
                <p className="mt-2 text-sm text-white/60">Margen bruto</p>
                <p className="text-5xl font-semibold tracking-tight">{formatUSD(result.margenBruto)}</p>
                <p className="text-sm text-white/55">/ha</p>
                <dl className="mt-6 space-y-2 text-sm text-white/75">
                  <div className="flex justify-between">
                    <dt>Ingreso total</dt>
                    <dd>{formatUSD(result.ingresoBruto)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Gastos directos</dt>
                    <dd>{formatUSD(result.gastosDirectos)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Gastos de venta</dt>
                    <dd>{formatUSD(result.gastosVenta)}</dd>
                  </div>
                  <div className="flex justify-between text-white/55">
                    <dt>Rinde indiferencia</dt>
                    <dd>≈ {result.rindeIndiferencia.toFixed(1)} qq/ha</dd>
                  </div>
                </dl>
                <a href={CONTACT.whatsapp} className="btn-primary mt-6 w-full" target="_blank" rel="noreferrer">
                  Asegurar este margen
                </a>
              </div>
            </div>

            <div className="mt-10 overflow-x-auto rounded-2xl border border-brand-hairline bg-white p-4 shadow-card">
              <p className="mb-3 text-sm font-semibold">
                Margen USD/ha · Sensibilidad por rinde y precio · {crop.name}
              </p>
              <p className="mb-3 text-xs text-brand-muted">Filas: rinde (qq/ha) · Columnas: precio (USD/qq)</p>
              <table className="min-w-full border-collapse text-center text-sm">
                <thead>
                  <tr>
                    <th className="border border-brand-hairline bg-brand-surface px-2 py-2">qq \ USD</th>
                    {precios.map((p) => (
                      <th key={p} className="border border-brand-hairline bg-brand-surface px-2 py-2">
                        {p}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rindes.map((r) => (
                    <tr key={r}>
                      <th className="border border-brand-hairline bg-brand-surface px-2 py-2">{r}</th>
                      {precios.map((p) => {
                        const cell = calcularMargen({ ...inputs, rinde: r, precio: p });
                        return (
                          <td
                            key={`${r}-${p}`}
                            className={`border border-brand-hairline px-2 py-2 tabular-nums ${
                              cell.margenBruto >= 0 ? "text-brand-dark" : "text-red-700"
                            }`}
                          >
                            {Math.round(cell.margenBruto)}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="hedge" className="px-5 py-12 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-brand-accent-soft text-brand-accent">
                <Shield className="size-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Operación</p>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Asegurá tu margen: hedge + ON en una operación
                </h2>
              </div>
            </div>
            <p className="mt-3 max-w-2xl text-sm text-brand-muted">
              1) Cubrí parte de tu producción con futuros · 2) Colocá los USD asegurados en ONs hasta
              cosecha.
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-brand-hairline bg-white p-6 shadow-card">
                <p className="font-mono text-[11px] tracking-wider text-brand-accent">01</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">Hedge con futuros</h3>
                <label className="mt-4 block text-[11px] font-semibold uppercase tracking-wider text-brand-muted">
                  Hectáreas
                  <input
                    type="number"
                    value={ha}
                    onChange={(e) => setHa(Number(e.target.value))}
                    className="field mt-1.5"
                  />
                </label>
                <label className="mt-3 block text-[11px] font-semibold uppercase tracking-wider text-brand-muted">
                  Precio del futuro (USD/qq)
                  <input
                    type="number"
                    value={futuro}
                    onChange={(e) => setFuturo(Number(e.target.value))}
                    className="field mt-1.5"
                  />
                </label>
                <label className="mt-3 block text-[11px] font-semibold uppercase tracking-wider text-brand-muted">
                  Producción a cubrir ({cover}%)
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={cover}
                    onChange={(e) => setCover(Number(e.target.value))}
                    className="mt-2 w-full accent-[#a8874a]"
                  />
                </label>
                <p className="mt-3 text-xs text-brand-muted">
                  Tip: 1 tn = 10 qq. Si tu mercado cotiza en USD/tn, dividí por 10.
                </p>
                <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="text-brand-muted">qq cubiertos</dt>
                    <dd className="text-xl font-semibold">{Math.round(hedge.qqCubiertos)}</dd>
                  </div>
                  <div>
                    <dt className="text-brand-muted">USD asegurados</dt>
                    <dd className="text-xl font-semibold">{formatUSD(hedge.usdAsegurados)}</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl border border-brand-hairline bg-white p-6 shadow-card">
                <p className="font-mono text-[11px] tracking-wider text-brand-accent">02</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">Colocación en ON USD</h3>
                <p className="mt-2 text-sm text-brand-muted">
                  ON sugerida según tu vencimiento — ejemplo / sin cotización en vivo.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {EXAMPLE_ONS.map((on) => (
                    <button
                      key={on.dias}
                      type="button"
                      onClick={() => setOnDias(on.dias)}
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        on.dias === onDias ? "bg-brand-dark text-white" : "border border-brand-hairline"
                      }`}
                    >
                      {on.dias}d
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-sm">
                  {onPick.ticker} · TIR ejemplo {onPick.tirEjemplo}% · {onPick.nota}
                </p>
                <p className="mt-4 text-3xl font-semibold">{formatUSD(finalUsd)}</p>
                <p className="text-xs text-brand-muted">
                  Capital inicial {formatUSD(hedge.usdAsegurados)} más TIR ejemplo.
                </p>
              </div>
            </div>
          </section>

          <section id="ons" className="border-t border-brand-hairline bg-white px-5 py-12 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-brand-accent-soft text-brand-accent">
                <Calculator className="size-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Referencia</p>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">ONs USD</h2>
              </div>
            </div>
            <p className="mt-3 text-sm text-brand-muted">
              Tabla de ejemplo / sin cotización en vivo. Los tickers y TIR no son precios de mercado.
            </p>
            <table className="mt-6 w-full text-left text-sm">
              <thead>
                <tr className="border-b border-brand-hairline text-brand-muted">
                  <th className="py-2">Ticker</th>
                  <th>Emisor</th>
                  <th>TIR ejemplo</th>
                  <th>Días</th>
                  <th>Nota</th>
                </tr>
              </thead>
              <tbody>
                {EXAMPLE_ONS.map((on) => (
                  <tr key={on.ticker} className="border-b border-brand-hairline">
                    <td className="py-2 font-medium">{on.ticker}</td>
                    <td>{on.emisor}</td>
                    <td>{on.tirEjemplo}%</td>
                    <td>{on.dias}</td>
                    <td className="text-brand-muted">{on.nota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-6 text-xs text-brand-muted">
              Próximamente: futuros agrícolas, cauciones y dólares MEP/CCL en vivo.
            </p>
            <p className="mt-4 max-w-3xl text-xs leading-relaxed text-brand-muted">
              La información presentada es meramente estimativa y no constituye recomendación de
              inversión, asesoramiento financiero, fiscal ni comercial. Los precios, rindes, costos y
              tasas deben ser validados con información actualizada antes de tomar decisiones.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CONTACT.calendly} className="btn-primary" target="_blank" rel="noreferrer">
                Hablar con un asesor
              </a>
              <a href={CONTACT.whatsapp} className="btn-secondary" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
