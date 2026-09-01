import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, ChevronRight, FileCheck, Landmark, LineChart, Receipt, ShieldCheck, Users } from "lucide-react";
import { CONTACT, mailto } from "../lib/brand";

const SCOPE = [
  { title: "Descuento de cheques / ECHEQs", icon: Receipt },
  { title: "Pagarés bursátiles", icon: FileCheck },
  { title: "Financiamiento con aval SGR", icon: ShieldCheck },
  { title: "Líneas de financiamiento avaladas", icon: Landmark },
  { title: "Alternativas de mercado de capitales", icon: LineChart },
];

const INCLUDES = [
  {
    title: "Datos de la empresa",
    body: "CUIT, actividad, contacto, monto solicitado, plazo y destino de fondos.",
    icon: Building2,
  },
  {
    title: "Documentación contable e impositiva",
    body: "Balances, IVA, Ganancias, SUSS y documentación financiera organizada por bloques.",
    icon: FileCheck,
  },
  {
    title: "Socios y operación",
    body: "Composición accionaria, representantes, firmantes y reseña del negocio.",
    icon: Users,
  },
  {
    title: "Privacidad y seguimiento",
    body: "Carga centralizada, acceso restringido al equipo de análisis y avance visible del proceso.",
    icon: ShieldCheck,
  },
];

const startMailto = mailto(
  "Precalificación PyME — portal de clientes",
  "Hola, quiero iniciar una precalificación de financiamiento. El acceso con Google y la carga de archivos están próximamente; les dejo mis datos por mail.",
);

export function ClientesPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-brand-bg text-brand-dark">
      <nav className="sticky top-0 z-40 border-b border-brand-hairline bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-[72px]">
          <Link to="/clientes" aria-label="FF Advisors — Inicio" className="flex items-center gap-3">
            <img
              src="/images/ff-isotype.webp"
              alt="FF Advisors"
              draggable={false}
              className="h-10 w-auto select-none ff-logo-invert lg:h-11"
            />
            <span className="hidden border-l border-brand-hairline pl-3 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-brand-muted sm:inline">
              Portal de Clientes
            </span>
          </Link>
          <div className="hidden items-center gap-7 lg:flex">
            <a href="#alcance" className="text-[13px] font-medium text-brand-muted transition-colors hover:text-brand-dark">
              Qué podemos evaluar
            </a>
            <a href="#como-funciona" className="text-[13px] font-medium text-brand-muted transition-colors hover:text-brand-dark">
              Cómo funciona
            </a>
          </div>
          <a
            href={startMailto}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-dark px-4 py-2.5 text-[13px] font-semibold text-white shadow-card transition-transform hover:-translate-y-px"
          >
            Ingresar
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </nav>

      <main>
        <section className="relative overflow-hidden px-5 pb-10 pt-12 sm:px-8 lg:pb-16 lg:pt-20">
          <div className="pointer-events-none absolute -top-32 right-[-10%] size-[520px] rounded-full bg-brand-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-30%] left-[-10%] size-[380px] rounded-full bg-brand-dark/[0.03] blur-3xl" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-hairline bg-white px-3 py-1 text-[10px] font-medium tracking-wide text-brand-muted">
              <span className="size-1 rounded-full bg-brand-accent" />
              Precalificación · Financiamiento PyME
            </span>
            <h1 className="mt-5 text-[1.85rem] font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.2rem]">
              Precalificá tu empresa para acceder a financiamiento.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-brand-muted sm:text-[17px]">
              Completá los datos de tu empresa y cargá la documentación básica para evaluar
              alternativas vía SGR, avales, descuento de cheques/ECHEQs, pagarés y mercado de
              capitales.
            </p>
            <p className="mt-4 max-w-lg text-xs leading-relaxed text-brand-muted">
              La precalificación no implica aprobación final ni garantiza el otorgamiento de
              financiamiento. Sirve para analizar alternativas posibles según el perfil de la empresa y
              los criterios de las entidades intervinientes.
            </p>
            <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={startMailto}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark px-6 py-3.5 text-sm font-semibold text-white shadow-elevated transition-transform hover:-translate-y-px"
              >
                Iniciar precalificación
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#como-funciona"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-brand-hairline bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-surface"
              >
                Cómo funciona
                <ChevronRight className="size-4" />
              </a>
            </div>
            <p className="mt-4 text-[12px] text-brand-muted">
              Acceso con Google y carga de documentación: próximamente. Mientras tanto, escribinos a{" "}
              <a className="underline underline-offset-2" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
              .
            </p>
          </div>
        </section>

        <section id="alcance" className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Alcance</p>
              <h2 className="mt-3 text-[1.6rem] font-semibold tracking-tight sm:text-4xl">Qué podemos evaluar.</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
                Con la información cargada podemos analizar distintas alternativas de financiamiento
                según monto, plazo, destino de fondos y perfil crediticio de la empresa.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {SCOPE.map((item) => (
                <article
                  key={item.title}
                  className="h-full rounded-2xl border border-brand-hairline bg-white p-5 shadow-card transition-transform hover:-translate-y-0.5"
                >
                  <div className="grid size-9 place-items-center rounded-xl bg-brand-accent-soft text-brand-accent">
                    <item.icon className="size-[18px]" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold leading-snug tracking-tight">{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="que-incluye" className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Qué incluye</p>
              <h2 className="mt-3 text-[1.6rem] font-semibold tracking-tight sm:text-4xl">
                Todo lo necesario para analizar tu caso, en un solo lugar.
              </h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {INCLUDES.map((item) => (
                <article
                  key={item.title}
                  className="h-full rounded-2xl border border-brand-hairline bg-white p-5 shadow-card transition-transform hover:-translate-y-0.5"
                >
                  <div className="grid size-10 place-items-center rounded-xl bg-brand-accent-soft text-brand-accent">
                    <item.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="border-y border-brand-hairline bg-brand-surface px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Método</p>
              <h2 className="mt-3 text-[1.6rem] font-semibold tracking-tight sm:text-4xl">Cómo funciona.</h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Ingresás", "El acceso con Google está próximamente. Hoy podés escribirnos por mail."],
                ["02", "Completás", "Cargás datos de la empresa y la necesidad de financiamiento."],
                ["03", "Adjuntás documentación", "La carga de archivos está próximamente; podés enviarlos por mail."],
                ["04", "Recibís una devolución", "Analizamos el caso y te contactamos con alternativas posibles."],
              ].map(([n, t, d]) => (
                <div key={n} className="h-full rounded-2xl border border-brand-hairline bg-white p-5">
                  <span className="font-mono text-[11px] tracking-wider text-brand-accent">{n}</span>
                  <h3 className="mt-3 text-base font-semibold tracking-tight">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Alcance" className="px-5 py-10 sm:px-8">
          <div className="mx-auto max-w-[1280px]">
            <p className="text-center text-[12px] font-medium text-brand-muted">
              SGR · Avales · Cheques y ECHEQs · Pagarés bursátiles · ALyCs · Mercado de capitales ·
              Entidades financieras
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-14 sm:px-8">
          <div className="rounded-2xl border border-brand-hairline bg-brand-surface p-6 text-center text-sm leading-relaxed text-brand-muted">
            La carga de documentación no implica aprobación automática ni garantiza el otorgamiento de
            financiamiento. La información será utilizada para analizar alternativas disponibles según
            el perfil de la empresa, el instrumento elegido y los criterios de las SGR, ALyC, entidades
            financieras o mercado de capitales que correspondan.
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-hairline bg-white">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-5 py-8 text-xs text-brand-muted sm:flex-row sm:px-8">
          <img
            src="/images/ff-isotype.webp"
            alt="FF Advisors"
            draggable={false}
            className="h-10 w-auto select-none ff-logo-invert"
          />
          <span className="text-center sm:text-right">
            FF Advisors · Agente Productor CNV — Matrícula N° 2016 · ffadvisors.com.ar
          </span>
        </div>
      </footer>
    </div>
  );
}
