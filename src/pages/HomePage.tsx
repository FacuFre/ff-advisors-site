import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { CONTACT, CUSTODY_PARTNERS, REGULATORY } from "../lib/brand";

const SOLUTIONS = [
  {
    title: "Inversión",
    body: "Carteras en pesos, dólares y activos internacionales según perfil, plazo y objetivo.",
  },
  {
    title: "Liquidez empresaria",
    body: "Estrategias para administrar excedentes, caja operativa y fondos de corto plazo.",
  },
  {
    title: "Financiamiento",
    body: "Alternativas de mercado de capitales para empresas que buscan financiar capital de trabajo.",
  },
  {
    title: "Cobertura",
    body: "Herramientas para administrar exposición al dólar, tasas y riesgo de mercado.",
  },
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
      <a
        href="/fal"
        className="block border-b border-amber-brand/20 bg-amber-brand/[0.08] px-5 py-2.5 text-center text-[13px] text-ink/80"
      >
        Nuevo FAL: el fondo obligatorio para indemnizaciones rige desde el 1/11/2026. Qué tiene que
        hacer tu empresa →
      </a>

      <section className="border-b border-hairline bg-sand/60">
        <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-3 px-5 py-3 text-[12px] text-ink/65 sm:px-8">
          <p className="font-medium uppercase tracking-[0.16em] text-ink/45">Referencias de mercado</p>
          <p>Sin cotización en vivo en esta versión · valores orientativos, no son recomendación.</p>
        </div>
      </section>

      <section id="inicio" className="mx-auto max-w-site px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
        <p className="eyebrow">{REGULATORY.short}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-[2.35rem] font-normal leading-[1.15] tracking-tight sm:text-5xl">
          Estrategia de capital para invertir, financiar y proteger patrimonio.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
          Asesoramiento profesional en mercado de capitales para personas, empresarios y empresas.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={CONTACT.calendly} className="btn-primary" target="_blank" rel="noreferrer">
            Agendar reunión
          </a>
          <a href="#soluciones" className="btn-secondary">
            Conocer soluciones
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-hairline bg-white p-7 shadow-card">
            <p className="eyebrow">Personas</p>
            <h2 className="mt-3 font-serif text-2xl font-normal">Soy inversor individual</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              Invertir ahorros, dolarizar posiciones y proteger patrimonio con una estrategia clara.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink/75">
              <li>Carteras diversificadas en pesos y dólares</li>
              <li>Acceso a activos locales e internacionales</li>
              <li>Seguimiento y ajustes periódicos</li>
            </ul>
            <a href={CONTACT.calendly} className="btn-primary mt-6" target="_blank" rel="noreferrer">
              Agendar reunión
            </a>
          </article>
          <article className="rounded-2xl border border-hairline bg-white p-7 shadow-card">
            <p className="eyebrow">Empresas</p>
            <h2 className="mt-3 font-serif text-2xl font-normal">Represento una empresa</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              Liquidez operativa, financiamiento a través del mercado y cobertura de riesgos.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink/75">
              <li>Manejo de excedentes y caja</li>
              <li>Financiamiento vía mercado de capitales</li>
              <li>Cobertura de tipo de cambio y tasas</li>
            </ul>
            <a href={CONTACT.calendly} className="btn-primary mt-6" target="_blank" rel="noreferrer">
              Agendar reunión
            </a>
          </article>
        </div>
      </section>

      <section id="soluciones" className="border-t border-hairline bg-white py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Soluciones</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">Qué resolvemos.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {SOLUTIONS.map((item) => (
              <article key={item.title} className="rounded-xl border border-hairline bg-paper p-6">
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.body}</p>
              </article>
            ))}
          </div>
          <article className="mt-5 rounded-xl border border-hairline bg-paper p-6">
            <h3 className="font-serif text-xl">Patrimonio del dueño</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink/65">
              Que la empresa sea tuya no significa que su caja lo sea. Son dos patrimonios con
              lógicas, plazos y objetivos distintos. Trabajamos la separación y la estrategia de
              cada frente.
            </p>
          </article>
          <Link
            to="/agro"
            className="mt-5 flex items-center justify-between rounded-xl border border-hairline bg-paper p-6 transition hover:border-amber-brand/40"
          >
            <div>
              <h3 className="font-serif text-xl">Agro</h3>
              <p className="mt-2 max-w-2xl text-sm text-ink/65">
                Cobertura de precios, financiamiento de campaña y manejo de excedentes para
                empresas agropecuarias.
              </p>
            </div>
            <span className="hidden items-center gap-1 text-sm font-semibold text-amber-brand sm:flex">
              Ver más <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Liquidez empresaria</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl font-normal">
            No toda la plata de una empresa cumple la misma función.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAJA.map((item) => (
              <article key={item.title} className="rounded-xl border border-hairline bg-white p-5">
                <h3 className="font-serif text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/65">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink/65">
            Cada una tiene un plazo, una necesidad de liquidez y una tolerancia al riesgo distintas.
            Recién cuando la caja está clasificada tiene sentido preguntarse dónde colocar cada
            parte.
          </p>
        </div>
      </section>

      <section className="border-y border-hairline bg-white py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Encuadre</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">¿Para quién es FF Advisors?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-hairline bg-paper p-7">
              <h3 className="font-serif text-2xl">Es para vos si…</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/75">
                <li>
                  Ya tenés caja, flujo o un patrimonio formado que hoy administrás sin una estrategia
                  definida.
                </li>
                <li>Tomás decisiones financieras solo, por intuición o por recomendaciones sueltas.</li>
                <li>Necesitás ordenar liquidez, plazo, riesgo y objetivos al mismo tiempo.</li>
                <li>Tenés descalces en tu capital de trabajo y necesitás evaluar financiamiento.</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-hairline bg-paper p-7">
              <h3 className="font-serif text-2xl">No es para vos si…</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/75">
                <li>Buscás una recomendación puntual sobre un instrumento y nada más.</li>
                <li>Tu prioridad es la tasa más alta, sin considerar riesgo, plazo ni liquidez.</li>
                <li>Todavía no hay un capital o un flujo para ordenar.</li>
              </ul>
            </article>
          </div>
          <p className="mt-6 text-sm text-ink/60">
            No se trata de cuánto tenés, sino del momento en el que estás.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Criterio</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">El instrumento no define la estrategia.</h2>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {["FCI", "Caución", "Tasa fija", "CER", "Dólar linked"].map((tag) => (
              <span key={tag} className="rounded-full border border-hairline bg-white px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink/70">
            Cuál corresponde no depende del instrumento, sino del plazo disponible, la liquidez
            necesaria, el monto, la moneda y el riesgo tolerable. Y también de algo que no aparece
            en ninguna planilla: cuánta volatilidad podés sostener sin cambiar de plan.
          </p>
          <p className="mt-4 max-w-3xl font-serif text-xl italic text-ink/80">
            Una cartera que no podés sostener en una caída no es una buena cartera, por más que
            prometa.
          </p>
        </div>
      </section>

      <section id="como-trabajamos" className="border-y border-hairline bg-white py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Método</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">Cómo trabajamos.</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            <li className="rounded-xl border border-hairline bg-paper p-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-brand">01</p>
              <h3 className="mt-2 font-serif text-2xl">Diagnóstico</h3>
              <p className="mt-2 text-sm text-ink/65">Antes de proponer un instrumento, entender la situación.</p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-ink/75">
                <li>¿Cuál es el objetivo de este capital: crecer, preservar o usarlo en el corto plazo?</li>
                <li>¿En qué plazo vas a necesitarlo?</li>
                <li>¿Qué porción no puede quedar expuesta bajo ningún concepto?</li>
                <li>¿Es caja operativa, excedente transitorio o patrimonio personal?</li>
                <li>¿Qué compromisos de pago tenés por delante?</li>
                <li>¿Qué experiencia previa tuviste invirtiendo y cómo la viviste?</li>
              </ol>
              <p className="mt-4 text-sm font-medium text-ink">
                Quien recomienda un producto antes de hacer estas preguntas no está asesorando.
              </p>
            </li>
            <li className="space-y-5">
              {[
                ["02", "Diseñamos", "Una estrategia a medida y accionable."],
                ["03", "Implementamos", "Con la infraestructura adecuada."],
                ["04", "Acompañamos", "Con seguimiento y ajustes continuos."],
              ].map(([n, t, d]) => (
                <div key={n} className="rounded-xl border border-hairline bg-paper p-6">
                  <p className="text-xs font-semibold tracking-[0.2em] text-amber-brand">{n}</p>
                  <h3 className="mt-2 font-serif text-2xl">{t}</h3>
                  <p className="mt-2 text-sm text-ink/65">{d}</p>
                </div>
              ))}
            </li>
          </ol>
        </div>
      </section>

      <section id="quienes-somos" className="py-16">
        <div className="mx-auto grid max-w-site items-center gap-10 px-5 sm:px-8 md:grid-cols-[280px_1fr]">
          <img
            src="/images/facundo-fretes.png"
            alt="Facundo Fretes"
            className="mx-auto h-64 w-64 rounded-2xl object-cover md:h-72 md:w-72"
          />
          <div>
            <p className="eyebrow">Quiénes somos</p>
            <h2 className="mt-3 font-serif text-4xl font-normal">Quién está detrás.</h2>
            <h3 className="mt-6 font-serif text-2xl">Facundo Fretes</h3>
            <p className="text-sm text-ink/60">Fundador · {REGULATORY.short}</p>
            <blockquote className="mt-4 font-serif text-xl italic text-ink/80">
              «Primero entender, después decidir.»
            </blockquote>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
              Antes de asesorar, Facundo dirigió compañías propias y tomó las mismas decisiones que
              hoy acompaña: caja, financiamiento, inversión de excedentes. FF Advisors nace de esa
              experiencia — criterio construido al frente de un negocio, no desde un escritorio.
            </p>
            <p className="mt-4 text-sm text-ink/65">
              Operamos con infraestructura local e internacional regulada.
            </p>
          </div>
        </div>
      </section>

      <section id="herramientas" className="border-y border-hairline bg-white py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Ecosistema</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">Herramientas.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Link to="/clientes" className="rounded-xl border border-hairline bg-paper p-6 hover:border-amber-brand/40">
              <h3 className="font-serif text-xl">Portal SGR</h3>
              <p className="mt-2 text-sm text-ink/65">
                Análisis y seguimiento de alternativas de financiamiento con SGR.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-amber-brand">Ver herramienta</span>
            </Link>
            <Link to="/agro" className="rounded-xl border border-hairline bg-paper p-6 hover:border-amber-brand/40">
              <h3 className="font-serif text-xl">Agro Finance Tools</h3>
              <p className="mt-2 text-sm text-ink/65">
                Calculadora de margen para empresas agropecuarias. Estimá el resultado de tu campaña
                antes de tomar decisiones financieras.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-amber-brand">Ver herramienta</span>
            </Link>
            <Link to="/aprende" className="rounded-xl border border-hairline bg-paper p-6 hover:border-amber-brand/40">
              <h3 className="font-serif text-xl">FF Aprende</h3>
              <p className="mt-2 text-sm text-ink/65">
                Microlecciones de educación financiera para individuos y PyMEs. Diagnóstico inicial
                y rutas de aprendizaje según tu perfil.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-amber-brand">Ver herramienta</span>
            </Link>
            <Link to="/fal" className="rounded-xl border border-hairline bg-paper p-6 hover:border-amber-brand/40">
              <h3 className="font-serif text-xl">Guía FAL</h3>
              <p className="mt-2 text-sm text-ink/65">
                El nuevo fondo obligatorio para indemnizaciones, explicado para empresas. Qué es,
                cuánto aporta tu empresa y qué decisiones tomar antes de noviembre de 2026.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-amber-brand">Ver herramienta</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">Todo lo que suelen preguntarnos.</h2>
          <dl className="mt-10 space-y-4">
            {FAQ.map((item) => (
              <details key={item.q} className="rounded-xl border border-hairline bg-white px-5 py-4">
                <summary className="cursor-pointer font-medium">{item.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.a}</p>
              </details>
            ))}
          </dl>
        </div>
      </section>

      <section id="contacto" className="border-t border-hairline bg-white py-16">
        <div className="mx-auto grid max-w-site gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Próximo paso</p>
            <h2 className="mt-3 font-serif text-4xl font-normal">
              Coordinemos una reunión para evaluar tu estrategia.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/65">
              Una conversación breve para entender tu situación y ver cómo podemos ayudarte.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={CONTACT.calendly} className="btn-primary" target="_blank" rel="noreferrer">
                Agendar reunión
              </a>
              <a href={CONTACT.whatsapp} className="btn-secondary" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
            <p className="mt-6 text-sm text-ink/60">
              {CONTACT.email} · Lun a Vie 9 a 18 hs
            </p>
          </div>
          <div className="rounded-2xl border border-hairline bg-paper p-6">
            <h3 className="font-serif text-2xl">Escribinos y te contactamos.</h3>
            <p className="mb-5 mt-1 text-sm text-ink/55">Consulta rápida</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
