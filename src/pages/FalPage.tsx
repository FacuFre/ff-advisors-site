import { FormEvent, useMemo, useState } from "react";
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
      <a
        href="#elegir"
        className="block border-b border-amber-brand/20 bg-amber-brand/[0.08] px-5 py-2.5 text-center text-[13px] text-ink/80"
      >
        Nuevo FAL: el fondo obligatorio para indemnizaciones rige desde el 1/11/2026. Qué tiene que
        hacer tu empresa →
      </a>

      <section className="mx-auto max-w-site px-5 pb-12 pt-14 sm:px-8">
        <p className="eyebrow">Guía informativa</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-normal leading-tight sm:text-5xl">
          Fondo de Asistencia Laboral (FAL).
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
          Desde el 1° de noviembre de 2026, todo empleador del sector privado deberá contribuir a un
          fondo destinado a cubrir indemnizaciones laborales. Una guía clara de qué es, qué cambia y
          qué decisiones tenés que tomar antes de esa fecha.
        </p>
      </section>

      <section className="border-y border-hairline bg-white py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Qué es</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">Un fondo con afectación específica.</h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink/70">
            El FAL fue creado por la Ley 27.802 de Modernización Laboral y reglamentado por el
            Decreto 408/2026. Es una cuenta de capitalización individual por empleador, destinada
            exclusivamente a asistir el pago de indemnizaciones (despido, preaviso, integración).
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink/70">
            No reemplaza el régimen indemnizatorio: lo financia. El patrimonio del fondo tiene
            afectación específica.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Cómo se financia</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">Cómo se financia.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-xl border border-hairline bg-white p-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-brand">01</p>
              <h3 className="mt-2 font-serif text-xl">Contribución mensual obligatoria</h3>
              <p className="mt-3 text-sm text-ink/65">
                Sobre la remuneración: 2,5% para PyMEs y 1% para grandes empresas.
              </p>
            </article>
            <article className="rounded-xl border border-hairline bg-white p-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-brand">02</p>
              <h3 className="mt-2 font-serif text-xl">No es un costo nuevo</h3>
              <p className="mt-3 text-sm text-ink/65">
                La contribución es deducible de Ganancias y se compensa con una reducción
                equivalente de contribuciones patronales — es una reorganización de cargas
                existentes.
              </p>
            </article>
            <article className="rounded-xl border border-hairline bg-white p-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-brand">03</p>
              <h3 className="mt-2 font-serif text-xl">Inversión regulada</h3>
              <p className="mt-3 text-sm text-ink/65">
                Los fondos se invierten exclusivamente en instrumentos financieros negociados en
                Argentina, con comisión de administración limitada por ley al 1% anual.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="elegir" className="border-y border-hairline bg-white py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">La decisión que importa</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">Elegir con criterio o que te lo asignen.</h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink/70">
            Cada empresa debe elegir la entidad habilitada que administrará su FAL. Si no elegís, la
            CNV te asigna una de oficio. Y no todos los FAL serán iguales: difieren en objetivos de
            inversión, liquidez y gestión.
          </p>
          <blockquote className="mt-6 max-w-3xl font-serif text-xl italic text-ink/80">
            «Elegir con criterio o que te lo asignen: esa es la diferencia entre administrar la
            obligación y padecerla.»
          </blockquote>
          <p className="mt-6 max-w-3xl rounded-xl border border-hairline bg-paper p-5 text-sm leading-relaxed text-ink/70">
            Nota informativa: entre las entidades que participarán como administradoras se
            encuentran ALyCs con las que FF Advisors trabaja habitualmente, como INVIU y Balanz. FF
            Advisors es Agente Productor CNV (matrícula 2016): no es gestora, ALyC ni administrador
            del FAL.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Estimación</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">Calculá el aporte de tu empresa.</h2>
          <p className="mt-3 max-w-2xl text-sm text-ink/65">
            Empleados × sueldo bruto promedio = masa salarial. Sobre esa masa se aplica 2,5% (PyME)
            o 1% (grande). El capital a 1 y 3 años suma los aportes mensuales, sin rendimientos.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-hairline bg-white p-6">
              <div className="flex rounded-full bg-sand p-1 text-sm">
                <button
                  type="button"
                  className={`flex-1 rounded-full px-4 py-2 ${tipo === "pyme" ? "bg-ink text-white" : ""}`}
                  onClick={() => setTipo("pyme")}
                >
                  Micro y PyME · 2,5%
                </button>
                <button
                  type="button"
                  className={`flex-1 rounded-full px-4 py-2 ${tipo === "grande" ? "bg-ink text-white" : ""}`}
                  onClick={() => setTipo("grande")}
                >
                  Grande · 1%
                </button>
              </div>
              <label className="mt-6 block text-xs font-medium text-ink/70" htmlFor="empleados">
                Empleados en relación de dependencia
              </label>
              <input
                id="empleados"
                type="number"
                min={1}
                max={20000}
                value={empleados}
                onChange={(e) => setEmpleados(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-hairline px-3 py-2.5"
              />
              <label className="mt-4 block text-xs font-medium text-ink/70" htmlFor="sueldo">
                Sueldo bruto promedio
              </label>
              <input
                id="sueldo"
                type="number"
                min={0}
                step={1000}
                value={sueldo}
                onChange={(e) => setSueldo(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-hairline px-3 py-2.5"
              />
            </div>
            <dl className="grid gap-3 rounded-2xl border border-hairline bg-ink p-6 text-white">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-white/50">Masa salarial mensual</dt>
                <dd className="mt-1 font-serif text-3xl">{formatARS(result.masaSalarial)}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-white/50">
                  Aporte FAL mensual ({formatPct(result.tasa)})
                </dt>
                <dd className="mt-1 font-serif text-3xl text-amber-400">
                  {formatARS(result.aporteMensual)}
                </dd>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                <div>
                  <dt className="text-xs text-white/50">Capital acumulado en un año</dt>
                  <dd className="mt-1 font-serif text-xl">{formatARS(result.capital1y)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-white/50">Capital acumulado en tres años</dt>
                  <dd className="mt-1 font-serif text-xl">{formatARS(result.capital3y)}</dd>
                </div>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-white/55">
                La información presentada es meramente estimativa y se encuentra elaborada sobre la
                base de la masa salarial declarada, sin contemplar los posibles rendimientos. El
                cálculo no implica una proyección ni garantiza un determinado resultado de la
                inversión.
              </p>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-hairline bg-white py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Antes de noviembre</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">
            Qué conviene definir antes de noviembre.
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Qué entidad administrará tu FAL.",
              "Qué objetivos de inversión tiene sentido darle según tu nómina y tu caja.",
              "Cómo integra la contribución mensual con tu flujo operativo.",
              "Cómo queda tu cobertura frente a las contingencias de tu plantilla.",
            ].map((item, i) => (
              <li key={item} className="rounded-xl border border-hairline bg-paper p-5">
                <span className="text-xs font-semibold tracking-[0.2em] text-amber-brand">
                  0{i + 1}
                </span>
                <p className="mt-2 text-sm text-ink/80">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <h2 className="font-serif text-4xl font-normal">Preguntas frecuentes</h2>
          <dl className="mt-8 space-y-3">
            {FAQ.map((item) => (
              <details key={item.q} className="rounded-xl border border-hairline bg-white px-5 py-4">
                <summary className="cursor-pointer font-medium">{item.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.a}</p>
              </details>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-hairline bg-white py-16">
        <div className="mx-auto grid max-w-site gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Próximo paso</p>
            <h2 className="mt-3 font-serif text-4xl font-normal">
              Si querés llegar al 1° de noviembre con la administradora elegida, podemos analizarlo
              en una reunión.
            </h2>
            <p className="mt-4 text-sm text-ink/65">
              El CTA es elegir administradora antes del 1/11/2026, no “gestionar” el fondo. FF no
              administra tu FAL.
            </p>
            <a href={CONTACT.calendly} className="btn-primary mt-6" target="_blank" rel="noreferrer">
              Agendar reunión
            </a>
          </div>
          <form onSubmit={onLead} className="space-y-3 rounded-2xl border border-hairline bg-paper p-6">
            <h3 className="font-serif text-2xl">Consulta FAL</h3>
            <label className="block text-xs text-ink/70" htmlFor="razon">
              Razón social
            </label>
            <input id="razon" name="razon" required className="w-full rounded-lg border border-hairline px-3 py-2.5" />
            <label className="block text-xs text-ink/70" htmlFor="fal-nombre">
              Nombre y apellido
            </label>
            <input id="fal-nombre" name="nombre" required className="w-full rounded-lg border border-hairline px-3 py-2.5" />
            <label className="block text-xs text-ink/70" htmlFor="fal-mail">
              Mail
            </label>
            <input id="fal-mail" name="mail" type="email" required className="w-full rounded-lg border border-hairline px-3 py-2.5" />
            <label className="block text-xs text-ink/70" htmlFor="fal-tel">
              Teléfono
            </label>
            <input id="fal-tel" name="telefono" required className="w-full rounded-lg border border-hairline px-3 py-2.5" />
            <label className="block text-xs text-ink/70" htmlFor="fal-msg">
              Mensaje
            </label>
            <textarea id="fal-msg" name="mensaje" rows={3} className="w-full rounded-lg border border-hairline px-3 py-2.5" />
            <button type="submit" className="btn-primary w-full">
              Enviar consulta
            </button>
          </form>
        </div>
        <p className="mx-auto mt-10 max-w-site px-5 text-xs leading-relaxed text-ink/50 sm:px-8">
          Contenido informativo y educativo. No constituye asesoramiento legal, impositivo ni una
          recomendación de inversión. La operatoria del FAL está sujeta a la reglamentación vigente
          y a las definiciones pendientes de la CNV. Fuentes: Ley 27.802, Decreto 408/2026.
        </p>
      </section>
    </main>
  );
}
