import { CONTACT, mailto } from "../lib/brand";

const TRACKS = [
  {
    title: "Patrimonio personal",
    body: "Ordenar tu patrimonio, con o sin empresa detrás. El paso previo a invertir: definir para qué es tu plata, en qué plazo la vas a usar y qué riesgo tolerás.",
  },
  {
    title: "Caja de la PyME",
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

export function AprendePage() {
  return (
    <main>
      <section className="mx-auto max-w-site px-5 pb-12 pt-14 sm:px-8">
        <p className="eyebrow">FF Aprende</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-normal leading-tight sm:text-5xl">
          Ordená tu plata antes de invertirla
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
          Tener plata invertida no es tener tu plata ordenada. Educación financiera para dueños de
          PyME y para su patrimonio personal, en el contexto argentino.
        </p>
        <p className="mt-4 max-w-2xl rounded-lg border border-hairline bg-white px-4 py-3 text-sm text-ink/70">
          Para quién es: dueños de PyME y personas que ya tienen caja, flujo o un patrimonio
          formado y necesitan ordenarlo antes de elegir un instrumento. No es para una
          recomendación suelta ni para montos en los que una estrategia a medida no se justifica.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="btn-primary"
            href={mailto(
              "FF Aprende — acceso (próximamente)",
              "Hola, quiero que me avisen cuando esté el acceso a FF Aprende.",
            )}
          >
            Quiero que me avisen
          </a>
          <a href={CONTACT.calendly} className="btn-secondary" target="_blank" rel="noreferrer">
            Agendar reunión
          </a>
        </div>
        <p className="mt-4 text-sm text-ink/55">
          Ingreso / login: próximamente. Mientras tanto, escribinos a {CONTACT.email}.
        </p>
      </section>

      <section className="border-y border-hairline bg-white py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <h2 className="font-serif text-4xl font-normal">Elegí por dónde empezar</h2>
          <p className="mt-3 max-w-2xl text-sm text-ink/65">
            La caja de tu empresa y tu plata personal son dos cajas distintas — podés recorrer las
            dos.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {TRACKS.map((t) => (
              <article key={t.title} className="rounded-2xl border border-hairline bg-paper p-6">
                <h3 className="font-serif text-2xl">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <p className="eyebrow">Microlecciones</p>
          <h2 className="mt-3 font-serif text-4xl font-normal">Una muestra del criterio</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {LESSONS.map((l) => (
              <article key={l.title} className="rounded-xl border border-hairline bg-white p-6">
                <h3 className="font-serif text-xl">{l.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{l.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-white py-16">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <h2 className="font-serif text-3xl font-normal">
            Para decisiones sobre tu plata concreta, mejor charlarlo.
          </h2>
          <p className="mt-3 text-sm text-ink/65">Reunión de 30 minutos, sin costo ni compromiso.</p>
          <a href={CONTACT.calendly} className="btn-primary mt-6" target="_blank" rel="noreferrer">
            Agendar 30 min
          </a>
        </div>
      </section>
    </main>
  );
}
