import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CONTACT, mailto } from "../lib/brand";

const TRACKS = [
  {
    title: "Patrimonio personal",
    kicker: "Ordenar tu plata personal",
    body: "Ordenar tu patrimonio, con o sin empresa detrás. El paso previo a invertir: definir para qué es tu plata, en qué plazo la vas a usar y qué riesgo tolerás.",
  },
  {
    title: "Caja de la PyME",
    kicker: "Ordenar la plata de la empresa",
    body: "Criterios de tesorería para que la plata de la empresa cumpla su función — sin quedar dormida ni comprometer la operación.",
  },
];

const LESSONS = [
  {
    title: "Tener instrumentos no es tener una cartera",
    body: "Una cartera responde preguntas: para qué es esa plata, en qué plazo, en qué moneda, qué parte necesitás disponible y cuánta variación tolerás.",
  },
  {
    title: "Facturar más no es tener liquidez",
    body: "El flujo entra pero no siempre trabaja. El problema no es cuánto factura la empresa — es qué pasa con la plata en el mientras tanto.",
  },
  {
    title: "Separar caja empresaria y patrimonio del dueño",
    body: "Que la empresa sea tuya no significa que su caja lo sea. Cuando se mezclan, las dos pierden claridad.",
  },
];

const notifyMailto = mailto(
  "FF Aprende — acceso (próximamente)",
  "Hola, quiero que me avisen cuando esté el acceso a FF Aprende.",
);

export function AprendePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-brand-bg text-brand-dark">
      <nav className="sticky top-0 z-40 border-b border-transparent bg-white/70 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-[88px]">
          <Link to="/aprende" className="flex items-center gap-3" aria-label="FF Aprende">
            <img src="/images/ff-logo-black.png" alt="FF Advisors" className="h-10 w-auto sm:h-12" />
            <span className="hidden border-l border-brand-hairline pl-3 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-muted sm:inline">
              FF Aprende
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="hidden text-[13px] text-brand-muted hover:text-brand-dark sm:inline">
              Sitio FF
            </Link>
            <a href={notifyMailto} className="btn-primary">
              Ingresar
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <section className="relative overflow-hidden px-5 pb-16 pt-16 sm:px-8 lg:pb-20 lg:pt-24">
          <div className="pointer-events-none absolute -top-32 right-[-10%] size-[520px] rounded-full bg-brand-accent/[0.05] blur-3xl" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-hairline bg-white px-3 py-1 text-[10px] font-medium tracking-wide text-brand-muted">
              <span className="size-1 rounded-full bg-brand-accent" />
              Educación financiera
            </span>
            <h1 className="mt-6 text-[2.1rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.2rem]">
              Ordená tu plata antes de invertirla
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted sm:text-[17px]">
              Tener plata invertida no es tener tu plata ordenada. Educación financiera para dueños de
              PyME y para su patrimonio personal, en el contexto argentino.
            </p>
            <p className="mt-4 max-w-xl rounded-2xl border border-brand-hairline bg-white px-4 py-3 text-sm leading-relaxed text-brand-muted shadow-card">
              Para quién es: dueños de PyME y personas que ya tienen caja, flujo o un patrimonio
              formado y necesitan ordenarlo antes de elegir un instrumento. No es para una
              recomendación suelta ni para montos en los que una estrategia a medida no se justifica.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={notifyMailto} className="btn-primary px-6 py-3.5">
                Quiero que me avisen
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href={CONTACT.calendly}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-hairline bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark hover:bg-brand-surface"
                target="_blank"
                rel="noreferrer"
              >
                Agendar reunión
              </a>
            </div>
            <p className="mt-4 text-sm text-brand-muted">
              Ingreso / login: próximamente. Mientras tanto, escribinos a {CONTACT.email}.
            </p>
          </div>
        </section>

        <section className="border-y border-brand-hairline bg-white px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-[1280px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Rutas</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Elegí por dónde empezar</h2>
            <p className="mt-3 max-w-2xl text-sm text-brand-muted">
              La caja de tu empresa y tu plata personal son dos cajas distintas — podés recorrer las
              dos.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {TRACKS.map((t) => (
                <article key={t.title} className="rounded-3xl border border-brand-hairline bg-brand-bg p-7 shadow-card">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-accent">{t.kicker}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">{t.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-[1280px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Microlecciones</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Una muestra del criterio</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {LESSONS.map((l) => (
                <article key={l.title} className="rounded-2xl border border-brand-hairline bg-white p-6 shadow-card">
                  <h3 className="text-xl font-semibold tracking-tight">{l.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">{l.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8">
          <div className="mx-auto max-w-[1280px]">
            <div className="rounded-3xl bg-[#121212] px-8 py-14 text-center text-white shadow-elevated sm:px-14">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Próximo paso</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Para decisiones sobre tu plata concreta, mejor charlarlo.
              </h2>
              <p className="mt-3 text-sm text-white/65">Reunión de 30 minutos, sin costo ni compromiso.</p>
              <a href={CONTACT.calendly} className="btn-primary mt-6 bg-white text-brand-dark" target="_blank" rel="noreferrer">
                Agendar 30 min
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-hairline bg-white">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-5 py-8 text-xs text-brand-muted sm:flex-row sm:px-8">
          <img src="/images/ff-logo-black.png" alt="FF Advisors" className="h-10 w-auto" />
          <span>FF Advisors · Agente Productor CNV — Matrícula N° 2016</span>
        </div>
      </footer>
    </div>
  );
}
