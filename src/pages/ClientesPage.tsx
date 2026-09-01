import { CONTACT, mailto } from "../lib/brand";

const SCOPE = [
  "Descuento de cheques / ECHEQs",
  "Pagarés bursátiles",
  "Financiamiento con aval SGR",
  "Líneas de financiamiento avaladas",
  "Alternativas de mercado de capitales",
];

const INCLUDES = [
  {
    title: "Datos de la empresa",
    body: "CUIT, actividad, contacto, monto solicitado, plazo y destino de fondos.",
  },
  {
    title: "Documentación contable e impositiva",
    body: "Balances, IVA, Ganancias, SUSS y documentación financiera organizada por bloques.",
  },
  {
    title: "Socios y operación",
    body: "Composición accionaria, representantes, firmantes y reseña del negocio.",
  },
  {
    title: "Privacidad y seguimiento",
    body: "Carga centralizada, acceso restringido al equipo de análisis y avance visible del proceso.",
  },
];

export function ClientesPage() {
  return (
    <main>
      <section className="mx-auto max-w-site px-5 pb-12 pt-14 sm:px-8">
        <p className="eyebrow">Precalificación · Financiamiento PyME</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-normal leading-tight sm:text-5xl">
          Precalificá tu empresa para acceder a financiamiento.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
          Completá los datos de tu empresa y cargá la documentación básica para evaluar
          alternativas vía SGR, avales, descuento de cheques/ECHEQs, pagarés y mercado de
          capitales.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-ink/60">
          La precalificación no implica aprobación final ni garantiza el otorgamiento de
          financiamiento. Sirve para analizar alternativas posibles según el perfil de la empresa y
          los criterios de las entidades intervinientes.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="btn-primary"
            href={mailto(
              "Precalificación PyME — portal de clientes",
              "Hola, quiero iniciar una precalificación de financiamiento. El acceso con Google y la carga de archivos están próximamente; les dejo mis datos por mail.",
            )}
          >
            Iniciar precalificación
          </a>
          <a href="#como-funciona" className="btn-secondary">
            Cómo funciona
          </a>
        </div>
        <p className="mt-4 text-sm text-ink/55">
          Acceso con Google y carga de documentación: próximamente. Mientras tanto, escribinos a{" "}
          {CONTACT.email}.
        </p>
      </section>

      <section className="border-y border-hairline bg-white py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Alcance</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">Qué podemos evaluar.</h2>
          <p className="mt-4 max-w-2xl text-sm text-ink/65">
            Con la información cargada podemos analizar distintas alternativas de financiamiento
            según monto, plazo, destino de fondos y perfil crediticio de la empresa.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {SCOPE.map((item) => (
              <li key={item} className="rounded-xl border border-hairline bg-paper px-5 py-4 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Qué incluye</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">
            Todo lo necesario para analizar tu caso, en un solo lugar.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {INCLUDES.map((item) => (
              <article key={item.title} className="rounded-xl border border-hairline bg-white p-6">
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/65">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="border-t border-hairline bg-white py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Método</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">Cómo funciona.</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["01", "Ingresás", "El acceso con Google está próximamente. Hoy podés escribirnos por mail."],
              ["02", "Completás", "Cargás datos de la empresa y la necesidad de financiamiento."],
              ["03", "Adjuntás documentación", "La carga de archivos está próximamente; podés enviarlos por mail."],
              ["04", "Recibís una devolución", "Analizamos el caso y te contactamos con alternativas posibles."],
            ].map(([n, t, d]) => (
              <li key={n} className="rounded-xl border border-hairline bg-paper p-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-amber-brand">{n}</p>
                <h3 className="mt-2 font-serif text-xl">{t}</h3>
                <p className="mt-2 text-sm text-ink/65">{d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-xs leading-relaxed text-ink/50">
            SGR · Avales · Cheques y ECHEQs · Pagarés bursátiles · ALyCs · Mercado de capitales ·
            Entidades financieras. La carga de documentación no implica aprobación automática ni
            garantiza el otorgamiento de financiamiento.
          </p>
        </div>
      </section>
    </main>
  );
}
