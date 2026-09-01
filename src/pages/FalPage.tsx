import { FormEvent, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CONTACT, mailto } from "../lib/brand";
import { calcularFal, formatARS, formatPct, type EmpresaTipo } from "../lib/fal";

const FAQ = [
  {
    q: "¿A qué empresas aplica el FAL?",
    a: "Grandes empresas: contribución del 1%. Todas las empresas fuera del Régimen PyME deben integrar mensualmente el 1% de la base salarial SIPA. El Poder Ejecutivo puede incrementar este porcentaje hasta el 1,5% con aprobación de la Comisión Bicameral. PyMEs (Ley 24.467): contribución del 2,5%. Las micro, pequeñas y medianas empresas tienen una contribución obligatoria del 2,5%, con posibilidad de incremento hasta el 3%. La integración es mensual y ARCA actúa como agente de derivación. En ambos casos, el FAL cubre a trabajadores registrados con al menos 12 meses de antigüedad y no reemplaza ni modifica el sistema indemnizatorio vigente.",
  },
  {
    q: "¿Cuándo entra en vigencia el régimen?",
    a: "A partir del 1 de noviembre de 2026.",
  },
  {
    q: "¿Aumenta mis costos?",
    a: "El FAL no representa un costo laboral extra ni un impuesto adicional para las empresas. Su funcionamiento se basa en una reasignación o redirección de los aportes patronales ya existentes que se destinaban al SIPA.",
  },
  {
    q: "¿Qué beneficios impositivos contempla el FAL?",
    a: "El FAL contempla cuatro beneficios impositivos principales para las empresas: los aportes son deducibles del Impuesto a las Ganancias; los rendimientos generados están exentos de ese impuesto; determinadas operaciones vinculadas al fondo no están alcanzadas por IVA; y las cuentas destinadas exclusivamente al FAL están exentas del Impuesto sobre los Créditos y Débitos Bancarios.",
  },
  {
    q: "¿Qué pasa si no elijo administradora antes del 1 de noviembre?",
    a: "ARCA igual retendrá los aportes patronales correspondientes, pero el dinero quedará sin derivar a ningún fondo. Pasado un mes, la CNV te asignará un administrador de oficio y tu empresa quedará expuesta a sanciones.",
  },
  {
    q: "¿Qué es el ID FAL?",
    a: "Es un código de identificación único que se le asigna a una empresa en Argentina cuando abre su cuenta del Fondo de Asistencia Laboral. Este identificador debe informarse obligatoriamente a ARCA para derivar los aportes destinados a cubrir futuras indemnizaciones laborales.",
  },
  {
    q: "¿Cuál es el objetivo del fondo?",
    a: "Acumular reservas invertidas en instrumentos financieros para pagar despidos o indemnizaciones sin generar un costo laboral extra para las empresas privadas.",
  },
  {
    q: "¿En qué puede invertir el FAL?",
    a: "El FAL puede invertir en: deuda del Estado Nacional, sin límite propio; deuda de provincias y CABA, hasta 15% en conjunto y 5% por jurisdicción; depósitos en entidades financieras, hasta 15%; obligaciones negociables, hasta 20% en conjunto y 10% por emisor. Además, debe mantener una liquidez mínima del 10% y puede tener hasta un 10% de exposición a instrumentos con ajuste por tipo de cambio.",
  },
  {
    q: "¿Cuánto tiempo deben acumularse los fondos antes de poder utilizarlos?",
    a: "Una vez cumplidos 6 períodos mensuales completos y consecutivos de aportes al Fondo.",
  },
  {
    q: "¿Puedo cambiar de administradora una vez elegido el FAL?",
    a: "Sí. El régimen contempla la portabilidad, por lo que la empresa puede solicitar el traslado de los recursos acumulados a otro Fondo de Asistencia Laboral administrado por una entidad habilitada por la CNV. La portabilidad podrá ejercerse durante los meses de junio y diciembre, debiendo transcurrir un plazo mínimo de seis meses entre un cambio y otro.",
  },
];

export function FalPage() {
  const [tipo, setTipo] = useState<EmpresaTipo>("pyme");
  const [empleados, setEmpleados] = useState(1000);
  const [sueldo, setSueldo] = useState(700_000);
  const result = useMemo(() => calcularFal({ empleados, sueldo, tipo }), [empleados, sueldo, tipo]);

  function onLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    window.location.href = mailto(
      `Consulta FAL — ${String(data.get("razon") ?? "")}`,
      [
        `Razón social: ${data.get("razon")}`,
        `Nombre: ${data.get("nombre")}`,
        `Mail: ${data.get("mail")}`,
        `Teléfono: ${data.get("telefono")}`,
        `Mensaje: ${data.get("mensaje")}`,
        `Estimación: ${tipo} · ${empleados} empleados · sueldo ${sueldo}`,
      ].join("\n"),
    );
  }

  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-14 pt-20 sm:px-8 lg:pb-20 lg:pt-28">
        <div className="pointer-events-none absolute -top-32 right-[-10%] size-[520px] rounded-full bg-brand-accent/[0.05] blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Guía informativa</p>
          <h1 className="mt-4 text-[2.1rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.2rem]">
            Fondo de Asistencia Laboral (FAL).
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-[17px]">
            Desde el 1° de noviembre de 2026, todo empleador del sector privado deberá contribuir a un
            fondo destinado a cubrir indemnizaciones laborales. Una guía clara de qué es, qué cambia y
            qué decisiones tenés que tomar antes de esa fecha.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Qué es</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Un fondo con afectación específica.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-brand-muted sm:text-[17px]">
            <p>
              El FAL fue creado por la{" "}
              <strong className="font-semibold text-brand-dark">Ley 27.802 de Modernización Laboral</strong> y
              reglamentado por el{" "}
              <strong className="font-semibold text-brand-dark">Decreto 408/2026</strong>. Es una cuenta de
              capitalización individual por empleador, destinada exclusivamente a asistir el pago de
              indemnizaciones (despido, preaviso, integración).
            </p>
            <p>No reemplaza el régimen indemnizatorio: lo financia. El patrimonio del fondo tiene afectación específica.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-hairline bg-brand-surface/40 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Cómo se financia</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Cómo se financia.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Contribución mensual obligatoria", "Sobre la remuneración: 2,5% para PyMEs y 1% para grandes empresas."],
              [
                "02",
                "No es un costo nuevo",
                "La contribución es deducible de Ganancias y se compensa con una reducción equivalente de contribuciones patronales — es una reorganización de cargas existentes.",
              ],
              [
                "03",
                "Inversión regulada",
                "Los fondos se invierten exclusivamente en instrumentos financieros negociados en Argentina, con comisión de administración limitada por ley al 1% anual.",
              ],
            ].map(([n, t, d]) => (
              <article key={n} className="flex h-full flex-col rounded-2xl border border-brand-hairline bg-white p-6 shadow-card">
                <span className="font-mono text-[12px] font-semibold tracking-wider text-brand-accent">{n}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="elegir" className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div
            className="relative overflow-hidden rounded-3xl border border-brand-hairline bg-white p-8 shadow-elevated sm:p-12"
            style={{ borderLeft: "3px solid #A8874A" }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">
              La decisión que importa
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Elegir con criterio o que te lo asignen.
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-brand-muted sm:text-[17px]">
              <p>
                Cada empresa debe elegir la entidad habilitada que administrará su FAL. Si no elegís, la
                CNV te asigna una de oficio. Y no todos los FAL serán iguales: difieren en objetivos de
                inversión, liquidez y gestión.
              </p>
              <p className="ff-quote text-brand-dark">
                «Elegir con criterio o que te lo asignen: esa es la diferencia entre administrar la
                obligación y padecerla.»
              </p>
              <p className="text-sm text-brand-muted">
                Nota informativa: entre las entidades que participarán como administradoras se
                encuentran ALyCs con las que FF Advisors trabaja habitualmente, como INVIU y Balanz. FF
                Advisors es Agente Productor CNV (matrícula 2016): no es gestora, ALyC ni administrador
                del FAL.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="calculadora" className="border-t border-brand-hairline bg-brand-surface/40 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Estimación</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Calculá el aporte de tu empresa.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-muted">
            Empleados × sueldo bruto promedio = masa salarial. Sobre esa masa se aplica 2,5% (PyME) o
            1% (grande). El capital a 1 y 3 años suma los aportes mensuales, sin rendimientos.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-brand-hairline bg-white p-6 shadow-card sm:p-8">
              <div className="flex rounded-full bg-brand-surface p-1 text-sm">
                <button
                  type="button"
                  className={`flex-1 rounded-full px-4 py-2 font-semibold ${tipo === "pyme" ? "bg-brand-dark text-white" : "text-brand-dark"}`}
                  onClick={() => setTipo("pyme")}
                >
                  Micro y PyME · 2,5%
                </button>
                <button
                  type="button"
                  className={`flex-1 rounded-full px-4 py-2 font-semibold ${tipo === "grande" ? "bg-brand-dark text-white" : "text-brand-dark"}`}
                  onClick={() => setTipo("grande")}
                >
                  Grande · 1%
                </button>
              </div>
              <label className="mt-6 block text-[11px] font-semibold uppercase tracking-wider text-brand-muted" htmlFor="empleados">
                Empleados en relación de dependencia
              </label>
              <input
                id="empleados"
                type="number"
                min={1}
                max={20000}
                value={empleados}
                onChange={(e) => setEmpleados(Number(e.target.value))}
                className="field mt-1.5"
              />
              <label className="mt-4 block text-[11px] font-semibold uppercase tracking-wider text-brand-muted" htmlFor="sueldo">
                Sueldo bruto promedio
              </label>
              <input
                id="sueldo"
                type="number"
                min={0}
                step={1000}
                value={sueldo}
                onChange={(e) => setSueldo(Number(e.target.value))}
                className="field mt-1.5"
              />
            </div>

            <dl className="rounded-3xl bg-[#121212] p-8 text-white shadow-elevated">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-white/50">Masa salarial mensual</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight">{formatARS(result.masaSalarial)}</dd>
              </div>
              <div className="mt-5">
                <dt className="text-xs uppercase tracking-[0.16em] text-white/50">
                  Aporte FAL mensual ({formatPct(result.tasa)})
                </dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-brand-accent">
                  {formatARS(result.aporteMensual)}
                </dd>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                <div>
                  <dt className="text-xs text-white/50">Capital acumulado en un año</dt>
                  <dd className="mt-1 text-xl font-semibold">{formatARS(result.capital1y)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-white/50">Capital acumulado en tres años</dt>
                  <dd className="mt-1 text-xl font-semibold">{formatARS(result.capital3y)}</dd>
                </div>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-white/45">
                La información presentada es meramente estimativa y se encuentra elaborada sobre la
                base de la masa salarial declarada, sin contemplar los posibles rendimientos. El
                cálculo no implica una proyección ni garantiza un determinado resultado de la
                inversión.
              </p>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-hairline bg-brand-surface/40 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Antes de noviembre</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Qué conviene definir antes de noviembre.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Qué entidad administrará tu FAL.",
              "Qué objetivos de inversión tiene sentido darle según tu nómina y tu caja.",
              "Cómo integra la contribución mensual con tu flujo operativo.",
              "Cómo queda tu cobertura frente a las contingencias de tu plantilla.",
            ].map((item, i) => (
              <div key={item} className="flex gap-5 rounded-2xl border border-brand-hairline bg-white p-6 shadow-card">
                <span className="font-mono text-[14px] font-semibold tracking-wider text-brand-accent">
                  0{i + 1}
                </span>
                <p className="text-base leading-relaxed text-brand-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[880px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Preguntas frecuentes</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Preguntas frecuentes</h2>
          <div className="mt-10 divide-y divide-brand-hairline overflow-hidden rounded-2xl border border-brand-hairline bg-white shadow-card">
            {FAQ.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-[15px] font-semibold text-brand-dark transition-colors hover:bg-brand-surface/60">
                  {item.q}
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-brand-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto-fal" className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="rounded-3xl bg-[#121212] px-8 py-14 text-white shadow-elevated sm:px-14 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Próximo paso</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  Si querés llegar al 1° de noviembre con la administradora elegida, podemos analizarlo
                  en una reunión.
                </h2>
                <p className="mt-4 text-sm text-white/60">
                  El CTA es elegir administradora antes del 1/11/2026, no “gestionar” el fondo. FF no
                  administra tu FAL.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <a
                  href={CONTACT.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-brand-dark shadow-elevated transition-transform hover:-translate-y-px"
                >
                  Agendar reunión
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={onLead}
            className="mt-10 grid gap-8 rounded-3xl border border-brand-hairline bg-white p-6 shadow-card sm:p-8 lg:grid-cols-2"
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Consulta FAL</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">Escribinos para elegir administradora.</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                Razón social, nombre, mail, teléfono y un mensaje. Respondemos como Agente Productor
                CNV, no como administradora del fondo.
              </p>
            </div>
            <div className="space-y-3">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-brand-muted" htmlFor="razon">
                Razón social
              </label>
              <input id="razon" name="razon" required className="field" />
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-brand-muted" htmlFor="fal-nombre">
                Nombre y apellido
              </label>
              <input id="fal-nombre" name="nombre" required className="field" />
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-brand-muted" htmlFor="fal-mail">
                Mail
              </label>
              <input id="fal-mail" name="mail" type="email" required className="field" />
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-brand-muted" htmlFor="fal-tel">
                Teléfono
              </label>
              <input id="fal-tel" name="telefono" required className="field" />
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-brand-muted" htmlFor="fal-msg">
                Mensaje
              </label>
              <textarea id="fal-msg" name="mensaje" rows={3} className="field resize-none" />
              <button type="submit" className="btn-primary w-full py-3.5">
                Enviar consulta
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-[12px] leading-relaxed text-brand-muted">
            Contenido informativo y educativo. No constituye asesoramiento legal, impositivo ni una
            recomendación de inversión. La operatoria del FAL está sujeta a la reglamentación vigente
            y a las definiciones pendientes de la CNV. Fuentes: Ley 27.802, Decreto 408/2026.
          </p>
        </div>
      </section>
    </main>
  );
}
