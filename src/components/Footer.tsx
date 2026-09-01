import { Link } from "react-router-dom";
import { CONTACT, REGULATORY } from "../lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink text-white">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <img
            src="/images/ff-logo-white.png"
            alt="FF Advisors"
            className="mb-5 h-12 w-auto"
          />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Mercado de capitales para personas, empresarios y empresas.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/50">
            {REGULATORY.figure} — {REGULATORY.license}
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
            </li>
            <li>{CONTACT.hours}</li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">Enlaces</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href="/#quienes-somos">Quiénes somos</a>
            </li>
            <li>
              <a href="/#faq">FAQ</a>
            </li>
            <li>
              <a href={CONTACT.calendly} target="_blank" rel="noreferrer">
                Agendar reunión
              </a>
            </li>
            <li>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <Link to="/clientes">Acceso clientes</Link>
            </li>
            <li>
              <Link to="/agro">Agro Finance Tools</Link>
            </li>
            <li>
              <Link to="/aprende">FF Aprende</Link>
            </li>
            <li>
              <Link to="/fal">Guía FAL</Link>
            </li>
            <li>
              <Link to="/privacidad">Política de Privacidad</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45 sm:px-8">
        © {new Date().getFullYear()} FF Advisors. Todos los derechos reservados. · ffadvisors.com.ar
      </div>
    </footer>
  );
}
