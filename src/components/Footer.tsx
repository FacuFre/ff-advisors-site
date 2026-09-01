import { Link } from "react-router-dom";
import { CONTACT, REGULATORY } from "../lib/brand";

export function Footer() {
  return (
    <footer className="bg-[#121212] px-5 py-14 text-white sm:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="space-y-4">
            <img
              src="/images/ff-logo-white.png"
              alt="FF Advisors"
              className="h-14 w-auto select-none sm:h-16"
              draggable={false}
            />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Mercado de capitales para personas, empresarios y empresas.
            </p>
            <p className="font-display text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">
              {REGULATORY.figure} — {REGULATORY.license}
            </p>
          </div>
          <div>
            <p className="font-display mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              Contacto
            </p>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneTel}`} className="transition-colors hover:text-white">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>{CONTACT.hours}</li>
            </ul>
          </div>
          <div>
            <p className="font-display mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              Enlaces
            </p>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a href="/#quienes-somos" className="transition-colors hover:text-white">
                  Quiénes somos
                </a>
              </li>
              <li>
                <a href="/#faq" className="transition-colors hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href={CONTACT.calendly} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                  Agendar reunión
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                  WhatsApp
                </a>
              </li>
              <li>
                <Link to="/clientes" className="transition-colors hover:text-white">
                  Acceso clientes
                </Link>
              </li>
              <li>
                <Link to="/clientes" className="transition-colors hover:text-white">
                  Portal SGR
                </Link>
              </li>
              <li>
                <Link to="/agro" className="transition-colors hover:text-white">
                  Agro Finance Tools
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="transition-colors hover:text-white">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-[11px] text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} FF Advisors. Todos los derechos reservados.</p>
          <p className="font-mono">ffadvisors.com.ar</p>
        </div>
      </div>
    </footer>
  );
}
