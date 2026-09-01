import { useMemo, useState } from "react";
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

  return (
    <main>
      <section className="mx-auto max-w-site px-5 pb-10 pt-12 sm:px-8">
        <p className="eyebrow">FF Agro · Campaña 2026/2027</p>
        <h1 className="mt-3 font-serif text-4xl font-normal sm:text-5xl">Calculadora de margen</h1>
        <p className="mt-4 max-w-2xl text-ink/70">
          Ajustá rinde, precio, alquiler e insumos para ver el margen bruto por cultivo.
        </p>
        <p className="mt-3 max-w-2xl rounded-lg border border-hairline bg-white px-4 py-3 text-sm text-ink/70">
          Para quién es: empresas agropecuarias que necesitan estimar el margen de campaña, cubrir
          precio y colocar excedentes en dólares hasta cosecha.
        </p>
      </section>

      <section id="calculadora" className="border-y border-hairline bg-white py-12">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <div className="flex flex-wrap gap-2">
            {CROPS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => selectCrop(c.id)}
                className={`rounded-full px-3 py-1.5 text-sm ${
                  c.id === cropId ? "bg-ink text-white" : "border border-hairline bg-paper"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink/50">
            Escenario ejemplo editable. Reemplazá los valores por tus datos reales.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4 sm:grid-cols-2">
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
                <label key={key} className="block text-xs text-ink/65">
                  {label}
                  <input
                    type="number"
                    step={step}
                    value={inputs[key]}
                    onChange={(e) => patch({ [key]: Number(e.target.value) })}
                    className="mt-1 w-full rounded-lg border border-hairline px-3 py-2 text-sm"
                  />
                </label>
              ))}
            </div>
            <div className="rounded-2xl border border-hairline bg-ink p-6 text-white">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">{crop.name}</p>
              <p className="mt-2 text-sm text-white/60">Margen bruto</p>
              <p className="font-serif text-5xl">{formatUSD(result.margenBruto)}</p>
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

          <div className="mt-10 overflow-x-auto">
            <p className="mb-3 text-sm font-medium">
              Margen USD/ha · Sensibilidad por rinde y precio · {crop.name}
            </p>
            <p className="mb-3 text-xs text-ink/50">Filas: rinde (qq/ha) · Columnas: precio (USD/qq)</p>
            <table className="min-w-full border-collapse text-center text-sm">
              <thead>
                <tr>
                  <th className="border border-hairline bg-sand px-2 py-2">qq \ USD</th>
                  {precios.map((p) => (
                    <th key={p} className="border border-hairline bg-sand px-2 py-2">
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rindes.map((r) => (
                  <tr key={r}>
                    <th className="border border-hairline bg-sand px-2 py-2">{r}</th>
                    {precios.map((p) => {
                      const cell = calcularMargen({ ...inputs, rinde: r, precio: p });
                      return (
                        <td
                          key={`${r}-${p}`}
                          className={`border border-hairline px-2 py-2 tabular-nums ${
                            cell.margenBruto >= 0 ? "text-ink" : "text-red-700"
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
        </div>
      </section>

      <section id="hedge" className="py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <h2 className="font-serif text-4xl font-normal">Asegurá tu margen: hedge + ON en una operación</h2>
          <p className="mt-3 max-w-2xl text-sm text-ink/65">
            1) Cubrí parte de tu producción con futuros · 2) Colocá los USD asegurados en ONs hasta
            cosecha.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-hairline bg-white p-6">
              <p className="eyebrow">1</p>
              <h3 className="mt-2 font-serif text-2xl">Hedge con futuros</h3>
              <label className="mt-4 block text-xs text-ink/65">
                Hectáreas
                <input
                  type="number"
                  value={ha}
                  onChange={(e) => setHa(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-hairline px-3 py-2"
                />
              </label>
              <label className="mt-3 block text-xs text-ink/65">
                Precio del futuro (USD/qq)
                <input
                  type="number"
                  value={futuro}
                  onChange={(e) => setFuturo(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-hairline px-3 py-2"
                />
              </label>
              <label className="mt-3 block text-xs text-ink/65">
                Producción a cubrir ({cover}%)
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={cover}
                  onChange={(e) => setCover(Number(e.target.value))}
                  className="mt-2 w-full"
                />
              </label>
              <p className="mt-3 text-xs text-ink/50">
                Tip: 1 tn = 10 qq. Si tu mercado cotiza en USD/tn, dividí por 10.
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-ink/50">qq cubiertos</dt>
                  <dd className="font-serif text-xl">{Math.round(hedge.qqCubiertos)}</dd>
                </div>
                <div>
                  <dt className="text-ink/50">USD asegurados</dt>
                  <dd className="font-serif text-xl">{formatUSD(hedge.usdAsegurados)}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl border border-hairline bg-white p-6">
              <p className="eyebrow">2</p>
              <h3 className="mt-2 font-serif text-2xl">Colocación en ON USD</h3>
              <p className="mt-2 text-sm text-ink/60">ON sugerida según tu vencimiento — ejemplo / sin cotización en vivo.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {EXAMPLE_ONS.map((on) => (
                  <button
                    key={on.dias}
                    type="button"
                    onClick={() => setOnDias(on.dias)}
                    className={`rounded-full px-3 py-1 text-sm ${
                      on.dias === onDias ? "bg-ink text-white" : "border border-hairline"
                    }`}
                  >
                    {on.dias}d
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm">
                {onPick.ticker} · TIR ejemplo {onPick.tirEjemplo}% · {onPick.nota}
              </p>
              <p className="mt-4 font-serif text-3xl">{formatUSD(finalUsd)}</p>
              <p className="text-xs text-ink/50">Capital inicial {formatUSD(hedge.usdAsegurados)} más TIR ejemplo.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ons" className="border-t border-hairline bg-white py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Referencia</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">ONs USD</h2>
          <p className="mt-3 text-sm text-ink/60">
            Tabla de ejemplo / sin cotización en vivo. Los tickers y TIR no son precios de mercado.
          </p>
          <table className="mt-6 w-full text-left text-sm">
            <thead>
              <tr className="border-b border-hairline text-ink/50">
                <th className="py-2">Ticker</th>
                <th>Emisor</th>
                <th>TIR ejemplo</th>
                <th>Días</th>
                <th>Nota</th>
              </tr>
            </thead>
            <tbody>
              {EXAMPLE_ONS.map((on) => (
                <tr key={on.ticker} className="border-b border-hairline">
                  <td className="py-2 font-medium">{on.ticker}</td>
                  <td>{on.emisor}</td>
                  <td>{on.tirEjemplo}%</td>
                  <td>{on.dias}</td>
                  <td className="text-ink/55">{on.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-6 text-xs text-ink/45">
            Próximamente: futuros agrícolas, cauciones y dólares MEP/CCL en vivo.
          </p>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-ink/50">
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
        </div>
      </section>
    </main>
  );
}
