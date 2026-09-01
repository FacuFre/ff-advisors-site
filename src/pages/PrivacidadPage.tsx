import { Link } from "react-router-dom";
import { CONTACT, REGULATORY } from "../lib/brand";

export function PrivacidadPage() {
  return (
    <main className="bg-brand-bg">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-accent hover:underline">
          ← Volver al inicio
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">Política de Privacidad</h1>
        <p className="mt-3 text-sm text-brand-muted">Última actualización: septiembre de 2026.</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-brand-dark/85">
          <section>
            <h2 className="text-lg font-semibold tracking-tight text-brand-dark">1. Responsable del tratamiento</h2>
            <p className="mt-2 text-brand-muted">
              FF Advisors, {REGULATORY.figure} — {REGULATORY.license}. Contacto:{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-brand-accent hover:underline">
                {CONTACT.email}
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold tracking-tight text-brand-dark">2. Datos que se recopilan</h2>
            <p className="mt-2 text-brand-muted">
              A través del formulario de contacto del sitio recopilamos: nombre y apellido, dirección
              de email, número de WhatsApp y, opcionalmente, el motivo de la consulta. En la guía FAL
              también podemos recibir razón social, teléfono y mensaje.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold tracking-tight text-brand-dark">3. Finalidad del tratamiento</h2>
            <p className="mt-2 text-brand-muted">
              Los datos se utilizan únicamente para responder la consulta recibida y contactar al
              interesado en relación con los servicios de asesoramiento en mercado de capitales
              ofrecidos por FF Advisors.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold tracking-tight text-brand-dark">4. Cesión a terceros</h2>
            <p className="mt-2 text-brand-muted">
              Los datos no se ceden, comercializan ni transfieren a terceros. Solo son accedidos por
              personal de FF Advisors afectado a la atención de la consulta.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold tracking-tight text-brand-dark">5. Plazo de conservación</h2>
            <p className="mt-2 text-brand-muted">
              Los datos se conservan por el plazo razonable necesario para dar respuesta a la consulta
              y mantener el vínculo comercial, y luego se eliminan a solicitud del titular o cuando
              dejan de ser necesarios para la finalidad que motivó su recolección.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold tracking-tight text-brand-dark">6. Derechos del titular</h2>
            <p className="mt-2 text-brand-muted">
              De acuerdo con la Ley 25.326 de Protección de los Datos Personales, el titular tiene
              derecho a acceder, rectificar y suprimir sus datos personales. Puede ejercer estos
              derechos escribiendo a{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-brand-accent hover:underline">
                {CONTACT.email}
              </a>
              .
            </p>
            <p className="mt-3 text-brand-muted">
              La Agencia de Acceso a la Información Pública, en su carácter de Órgano de Control de la
              Ley 25.326, tiene la atribución de atender denuncias y reclamos relacionados con el
              incumplimiento de las normas de protección de datos personales.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold tracking-tight text-brand-dark">7. Seguridad</h2>
            <p className="mt-2 text-brand-muted">
              Adoptamos medidas técnicas y organizativas razonables para proteger los datos
              personales contra el acceso no autorizado, la alteración o la destrucción.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
