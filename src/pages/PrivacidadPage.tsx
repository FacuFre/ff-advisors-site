import { Link } from "react-router-dom";
import { CONTACT, REGULATORY } from "../lib/brand";

export function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <Link to="/" className="text-sm text-amber-brand">
        ← Volver al inicio
      </Link>
      <h1 className="mt-6 font-serif text-4xl font-normal">Política de Privacidad</h1>
      <p className="mt-2 text-sm text-ink/55">Última actualización: septiembre de 2026.</p>

      <section className="mt-10 space-y-8 text-sm leading-relaxed text-ink/75">
        <div>
          <h2 className="font-serif text-2xl text-ink">1. Responsable del tratamiento</h2>
          <p className="mt-2">
            FF Advisors, {REGULATORY.figure} — {REGULATORY.license}. Contacto: {CONTACT.email}.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-ink">2. Datos que se recopilan</h2>
          <p className="mt-2">
            A través del formulario de contacto del sitio recopilamos: nombre y apellido, dirección
            de email, número de WhatsApp y, opcionalmente, el motivo de la consulta. En la guía FAL
            también podemos recibir razón social, teléfono y mensaje.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-ink">3. Finalidad del tratamiento</h2>
          <p className="mt-2">
            Los datos se utilizan únicamente para responder la consulta recibida y contactar al
            interesado en relación con los servicios de asesoramiento en mercado de capitales
            ofrecidos por FF Advisors.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-ink">4. Cesión a terceros</h2>
          <p className="mt-2">
            Los datos no se ceden, comercializan ni transfieren a terceros. Solo son accedidos por
            personal de FF Advisors afectado a la atención de la consulta.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-ink">5. Plazo de conservación</h2>
          <p className="mt-2">
            Los datos se conservan por el plazo razonable necesario para dar respuesta a la consulta
            y mantener el vínculo comercial, y luego se eliminan a solicitud del titular o cuando
            dejan de ser necesarios para la finalidad que motivó su recolección.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-ink">6. Derechos del titular</h2>
          <p className="mt-2">
            De acuerdo con la Ley 25.326 de Protección de los Datos Personales, el titular tiene
            derecho a acceder, rectificar y suprimir sus datos personales. Puede ejercer estos
            derechos escribiendo a {CONTACT.email}.
          </p>
          <p className="mt-3">
            La Agencia de Acceso a la Información Pública, en su carácter de Órgano de Control de la
            Ley 25.326, tiene la atribución de atender denuncias y reclamos relacionados con el
            incumplimiento de las normas de protección de datos personales.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-ink">7. Seguridad</h2>
          <p className="mt-2">
            Adoptamos medidas técnicas y organizativas razonables para proteger los datos
            personales contra el acceso no autorizado, la alteración o la destrucción.
          </p>
        </div>
      </section>
    </main>
  );
}
