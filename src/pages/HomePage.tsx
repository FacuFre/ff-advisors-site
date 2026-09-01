import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Banknote,
  Building2,
  ChevronRight,
  Landmark,
  Shield,
  TrendingUp,
  User,
  Check,
  Leaf,
  MessageCircle,
  X,
} from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { CONTACT, CUSTODY_PARTNERS, REGULATORY } from "../lib/brand";

const SOLUTIONS = [
  { title: "Inversión", icon: TrendingUp, body: "Carteras en pesos, dólares y activos internacionales según perfil, plazo y objetivo." },
  { title: "Liquidez empresaria", icon: Banknote, body: "Estrategias para administrar excedentes, caja operativa y fondos de corto plazo." },
  { title: "Financiamiento", icon: Landmark, body: "Alternativas de mercado de capitales para empresas que buscan financiar capital de trabajo." },
  { title: "Cobertura", icon: Shield, body: "Herramientas para administrar exposición al dólar, tasas y riesgo de mercado." },
];

const CAJA = [
  { title: "Caja operativa", body: "Sostiene el día a día del negocio." },
  { title: "Excedente transitorio", body: "Disponible por semanas, sin destino inmediato." },
  { title: "Capital de trabajo", body: "Sostiene el ciclo del negocio." },
  { title: "Fondos con destino", body: "Ya tienen una aplicación definida." },
];

const FAQ = [
  {
    q: "¿Tiene costo la primera reunión?",
    a: "No. La primera reunión no tiene costo. Es una conversación para entender tu situación, tus objetivos y evaluar si podemos aportar valor.",
  },
  {
    q: "¿Dónde se custodian los fondos?",
    a: `Los fondos se custodian en las ALyCs locales y brokers internacionales regulados con los que operamos — ${CUSTODY_PARTNERS.join(", ")}. FF Advisors no custodia fondos: la operatoria y las cuentas quedan siempre a nombre del cliente en la institución elegida.`,
  },
  {
    q: "¿Hay un monto mínimo para invertir?",
    a: "No manejamos un mínimo formal. Sí importa que el asesoramiento tenga sentido: por debajo de cierto volumen, el costo de una estrategia a medida no se justifica y conviene empezar por instrumentos más simples. Lo definimos juntos en la primera reunión.",
  },
  {
    q: "¿Trabajan con empresas de cualquier tamaño?",
    a: "Sí. Trabajamos con PyMEs, empresas familiares, grandes empresas y empresarios que quieren separar la gestión financiera de la operativa. El alcance se define en la primera reunión según necesidades y volumen.",
  },
  {
    q: "¿Qué significa ser Agente Productor CNV?",
    a: "Es una figura registrada ante la Comisión Nacional de Valores (CNV) que habilita a asesorar y canalizar operaciones en el mercado de capitales argentino a través de ALyCs (agentes de liquidación y compensación) autorizados. FF Advisors opera bajo la Matrícula N° 2016.",
  },
  {
    q: "¿Me van a recomendar un producto en la primera reunión?",
    a: "No. La primera instancia es de diagnóstico. Cualquier propuesta llega después de entender objetivo, plazo, liquidez y riesgo.",
  },
  {
    q: "¿Trabajan solo con empresas?",
    a: "No. Trabajamos con empresas, dueños, profesionales y familias. Lo que define el encuadre no es el tipo de cliente, sino si hay un capital o un flujo para ordenar.",
  },
];

export function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 lg:pb-20 lg:pt-28">
        <div className="pointer-events-none absolute -top-32 right-[-10%] size-[520px] rounded-full bg-brand-accent/[0.05] blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-30%] left-[-10%] size-[380px] rounded-full bg-brand-dark/[0.03] blur-3xl" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-hairline bg-white px-3 py-1 text-[10px] font-medium tracking-wide text-brand-muted">
            <span className="size-1 rounded-full bg-brand-accent" />
            {REGULATORY.short}
          </span>
          <h1 className="mt-6 text-[2.1rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            Estrategia de capital para invertir, financiar y proteger patrimonio.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted sm:text-[17px]">
            Asesoramiento profesional en mercado de capitales para personas, empresarios y empresas.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={CONTACT.calendly}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark px-6 py-4 text-sm font-semibold text-white shadow-elevated transition-transform hover:-translate-y-px sm:py-3.5"
            >
              Agendar reunión
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#soluciones"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-brand-hairline bg-white px-6 py-4 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-surface sm:py-3.5"
            >
              Conocer soluciones
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 pb-4 sm:px-8 lg:pb-8">
        <div className="mx-auto grid max-w-[1280px] gap-5 sm:grid-cols-2">
          <article className="group flex h-full flex-col rounded-3xl border border-brand-hairline bg-white p-7 shadow-card transition-transform hover:-translate-y-0.5 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-brand-accent-soft text-brand-accent">
                <User className="size-5" />
              </div>
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-brand-accent">
                Personas
              </span>
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight sm:text-2xl">Soy inversor individual</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              Invertir ahorros, dolarizar posiciones y proteger patrimonio con una estrategia clara.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-brand-dark/80">
              {["Carteras diversificadas en pesos y dólares", "Acceso a activos locales e internacionales", "Seguimiento y ajustes periódicos"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <a href={CONTACT.calendly} target="_blank" rel="noreferrer" className="btn-primary mt-6 self-start px-5">
              Agendar reunión
              <ArrowUpRight className="size-3.5" />
            </a>
          </article>
          <article className="group flex h-full flex-col rounded-3xl border border-brand-hairline bg-white p-7 shadow-card transition-transform hover:-translate-y-0.5 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-brand-accent-soft text-brand-accent">
                <Building2 className="size-5" />
              </div>
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-brand-accent">
                Empresas
              </span>
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight sm:text-2xl">Represento una empresa</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              Liquidez operativa, financiamiento a través del mercado y cobertura de riesgos.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-brand-dark/80">
              {["Manejo de excedentes y caja", "Financiamiento vía mercado de capitales", "Cobertura de tipo de cambio y tasas"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <a href={CONTACT.calendly} target="_blank" rel="noreferrer" className="btn-primary mt-6 self-start px-5">
              Agendar reunión
              <ArrowUpRight className="size-3.5" />
            </a>
          </article>
        </div>
      </section>

      <section id="soluciones" className="px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <p className="eyebrow">Soluciones</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Qué resolvemos.</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((item) => (
              <article
                key={item.title}
                className="group h-full rounded-2xl border border-brand-hairline bg-white p-6 shadow-card transition-transform hover:-translate-y-0.5"
              >
                <div className="grid size-10 place-items-center rounded-xl bg-brand-accent-soft text-brand-accent">
                  <item.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.body}</p>
              </article>
            ))}
            <article className="group h-full rounded-2xl border border-brand-hairline bg-white p-6 shadow-card">
              <div className="grid size-10 place-items-center rounded-xl bg-brand-accent-soft text-brand-accent">
                <User className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">Patrimonio del dueño</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                Que la empresa sea tuya no significa que su caja lo sea. Son dos patrimonios con lógicas,
                plazos y objetivos distintos. Trabajamos la separación y la estrategia de cada frente.
              </p>
            </article>
            <Link
              to="/agro"
              className="group flex h-full flex-col rounded-2xl border border-brand-hairline bg-white p-6 shadow-card transition-transform hover:-translate-y-0.5"
            >
              <div className="grid size-10 place-items-center rounded-xl bg-brand-accent-soft text-brand-accent">
                <Leaf className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">Agro</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                Cobertura de precios, financiamiento de campaña y manejo de excedentes para empresas
                agropecuarias.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-accent">
                Ver más <ArrowUpRight className="size-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <p className="eyebrow">Liquidez empresaria</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            No toda la plata de una empresa cumple la misma función.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAJA.map((item) => (
              <article key={item.title} className="rounded-2xl border border-brand-hairline bg-white p-5 shadow-card">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-brand-muted">
            Cada una tiene un plazo, una necesidad de liquidez y una tolerancia al riesgo distintas.
            Recién cuando la caja está clasificada tiene sentido preguntarse dónde colocar cada parte.
          </p>
        </div>
      </section>

      <section id="para-quien" className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="eyebrow">Encuadre</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">¿Para quién es FF Advisors?</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="flex h-full flex-col rounded-3xl border border-brand-hairline bg-white p-7 shadow-card sm:p-8">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex size-2 rounded-full bg-emerald-500/80" />
                <h3 className="text-lg font-semibold tracking-tight">Es para vos si…</h3>
              </div>
              <ul className="mt-5 space-y-3.5 text-[15px] leading-relaxed text-brand-dark/85">
                {[
                  "Ya tenés caja, flujo o un patrimonio formado que hoy administrás sin una estrategia definida.",
                  "Tomás decisiones financieras solo, por intuición o por recomendaciones sueltas.",
                  "Necesitás ordenar liquidez, plazo, riesgo y objetivos al mismo tiempo.",
                  "Tenés descalces en tu capital de trabajo y necesitás evaluar financiamiento.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-emerald-500/10 text-emerald-600">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="flex h-full flex-col rounded-3xl border border-brand-hairline bg-white p-7 shadow-card sm:p-8">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex size-2 rounded-full bg-brand-muted/50" />
                <h3 className="text-lg font-semibold tracking-tight">No es para vos si…</h3>
              </div>
              <ul className="mt-5 space-y-3.5 text-[15px] leading-relaxed text-brand-dark/85">
                {[
                  "Buscás una recomendación puntual sobre un instrumento y nada más.",
                  "Tu prioridad es la tasa más alta, sin considerar riesgo, plazo ni liquidez.",
                  "Todavía no hay un capital o un flujo para ordenar.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-brand-surface text-brand-muted">
                      <X className="size-3" strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium tracking-tight text-brand-dark sm:text-xl">
            No se trata de cuánto tenés, sino del momento en el que estás.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#121212] px-5 py-24 text-white sm:px-8 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,135,74,0.10),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Criterio</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            El instrumento no define la estrategia.
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {["FCI", "Caución", "Tasa fija", "CER", "Dólar linked"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-medium text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-white/75 sm:text-base">
            <p>
              Cuál corresponde no depende del instrumento, sino del plazo disponible, la liquidez
              necesaria, el monto, la moneda y el riesgo tolerable. Y también de algo que no aparece
              en ninguna planilla: cuánta volatilidad podés sostener sin cambiar de plan.
            </p>
            <p>Una cartera que no podés sostener en una caída no es una buena cartera, por más que prometa.</p>
          </div>
        </div>
      </section>

      <section id="como-trabajamos" className="border-y border-brand-hairline bg-brand-surface px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <p className="eyebrow">Método</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Cómo trabajamos.</h2>
          <div className="mt-10 rounded-3xl border border-brand-hairline bg-white p-7 shadow-card sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
              <div className="lg:w-56">
                <span className="font-mono text-[11px] tracking-wider text-brand-accent">01</span>
                <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">Diagnóstico</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  Antes de proponer un instrumento, entender la situación.
                </p>
              </div>
              <ol className="grid gap-3 sm:grid-cols-2">
                {[
                  "¿Cuál es el objetivo de este capital: crecer, preservar o usarlo en el corto plazo?",
                  "¿En qué plazo vas a necesitarlo?",
                  "¿Qué porción no puede quedar expuesta bajo ningún concepto?",
                  "¿Es caja operativa, excedente transitorio o patrimonio personal?",
                  "¿Qué compromisos de pago tenés por delante?",
                  "¿Qué experiencia previa tuviste invirtiendo y cómo la viviste?",
                ].map((q, i) => (
                  <li key={q} className="flex items-start gap-3 rounded-xl border border-brand-hairline bg-brand-bg/60 px-4 py-3">
                    <span className="font-mono text-[11px] font-semibold tabular-nums text-brand-accent">
                      0{i + 1}
                    </span>
                    <span className="text-[14px] leading-relaxed text-brand-dark/85">{q}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-8 border-l-2 border-brand-accent pl-4 text-[15px] italic leading-relaxed text-brand-dark/85 sm:text-base">
              Quien recomienda un producto antes de hacer estas preguntas no está asesorando.
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["02", "Diseñamos", "Una estrategia a medida y accionable."],
              ["03", "Implementamos", "Con la infraestructura adecuada."],
              ["04", "Acompañamos", "Con seguimiento y ajustes continuos."],
            ].map(([n, t, d]) => (
              <div key={n} className="h-full rounded-2xl border border-brand-hairline bg-white p-6">
                <span className="font-mono text-[11px] tracking-wider text-brand-accent">{n}</span>
                <h3 className="mt-3 text-base font-semibold tracking-tight">{t}</h3>
                <p className="mt-1 text-sm text-brand-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quienes-somos" className="px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <p className="eyebrow">Quiénes somos</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Quién está detrás.</h2>
          </div>
          <div className="mt-10 grid gap-8 rounded-3xl border border-brand-hairline bg-white p-6 shadow-card sm:p-10 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-12">
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <img
                src="/images/facundo-fretes.png"
                alt="Foto de Facundo Fretes"
                className="size-32 rounded-full object-cover shadow-elevated sm:size-40"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Facundo Fretes</h3>
              <p className="mt-1 text-sm font-medium text-brand-accent">Fundador · {REGULATORY.figure} — {REGULATORY.license}</p>
              <blockquote className="mt-6 border-l border-brand-accent pl-5 text-lg italic leading-relaxed text-brand-dark">
                «Primero entender, después decidir.»
              </blockquote>
              <p className="mt-5 text-[15px] leading-relaxed text-brand-muted">
                Antes de asesorar, Facundo dirigió compañías propias y tomó las mismas decisiones que hoy
                acompaña: caja, financiamiento, inversión de excedentes. FF Advisors nace de esa
                experiencia — criterio construido al frente de un negocio, no desde un escritorio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Infraestructura" className="px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-center text-[12px] font-medium text-brand-muted">
            Operamos con infraestructura local e internacional regulada.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
            {[
              ["inviu.webp", "INVIU"],
              ["balanz.webp", "Balanz"],
              ["interactive-brokers.png", "Interactive Brokers"],
              ["stonex.png", "StoneX"],
              ["pershing.png", "Pershing"],
            ].map(([src, alt]) => (
              <div key={alt} className="flex h-8 items-center sm:h-9">
                <img
                  src={`/images/${src}`}
                  alt={alt}
                  className="h-full w-auto max-w-[140px] object-contain grayscale transition hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="herramientas" className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="eyebrow">Ecosistema</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Herramientas.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["/clientes", "Portal SGR", "Análisis y seguimiento de alternativas de financiamiento con SGR."],
              ["/agro", "Agro Finance Tools", "Calculadora de margen para empresas agropecuarias. Estimá el resultado de tu campaña antes de tomar decisiones financieras."],
              ["/aprende", "FF Aprende", "Microlecciones de educación financiera para individuos y PyMEs. Diagnóstico inicial y rutas de aprendizaje según tu perfil."],
              ["/fal", "Guía FAL", "El nuevo fondo obligatorio para indemnizaciones, explicado para empresas. Qué es, cuánto aporta tu empresa y qué decisiones tomar antes de noviembre de 2026."],
            ].map(([href, title, body]) => (
              <Link
                key={href}
                to={href}
                className="group flex h-full flex-col rounded-2xl border border-brand-hairline bg-white p-5 shadow-card transition-transform hover:-translate-y-0.5"
              >
                <h3 className="text-base font-semibold tracking-tight">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">{body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-accent">
                  Ver herramienta <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[880px]">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Todo lo que suelen preguntarnos.</h2>
          <div className="mt-10 divide-y divide-brand-hairline overflow-hidden rounded-2xl border border-brand-hairline bg-white shadow-card">
            {FAQ.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-brand-surface">
                  {item.q}
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-brand-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden bg-brand-dark px-5 py-24 text-white sm:px-8 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,135,74,0.10),transparent_60%)]" />
        <div className="pointer-events-none absolute right-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />
        <div className="relative mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Próximo paso</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Coordinemos una reunión para evaluar tu estrategia.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
              Una conversación breve para entender tu situación y ver cómo podemos ayudarte.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={CONTACT.calendly}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark shadow-elevated transition-transform hover:-translate-y-px"
                target="_blank"
                rel="noreferrer"
              >
                Agendar reunión
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href={CONTACT.whatsapp}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </div>
            <p className="mt-8 text-[11px] text-white/50">
              {CONTACT.email} · Lun a Vie 9 a 18 hs
            </p>
          </div>
          <ContactForm dark />
        </div>
      </section>
    </main>
  );
}
