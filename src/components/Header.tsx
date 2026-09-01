import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CONTACT } from "../lib/brand";

const NAV = [
  { href: "/#soluciones", label: "Soluciones" },
  { href: "/#como-trabajamos", label: "Cómo trabajamos" },
  { href: "/#herramientas", label: "Herramientas" },
  { href: "/fal", label: "FAL" },
  { href: "/#quienes-somos", label: "Quiénes somos" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const homeish = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-40 border-b border-transparent bg-white/70 backdrop-blur transition-all">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-[88px] lg:px-10">
        <Link to="/" className="flex items-center py-2" aria-label="FF Advisors — Inicio">
          <img
            src="/images/ff-logo-black.png"
            alt="FF Advisors"
            className="h-10 w-auto select-none sm:h-12"
            draggable={false}
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.href}
                href={homeish ? item.href.slice(1) : item.href}
                className="text-[13px] font-medium text-brand-muted transition-colors hover:text-brand-dark"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.href}
                to={item.href}
                className="text-[13px] font-medium text-brand-muted transition-colors hover:text-brand-dark"
              >
                {item.label}
              </NavLink>
            ),
          )}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/clientes"
            className="btn-secondary hidden lg:inline-block"
            data-cta="acceso-clientes"
          >
            Acceso clientes
          </Link>
          <a
            href={CONTACT.calendly}
            className="btn-primary hidden sm:inline-flex"
            data-cta="agendar"
            target="_blank"
            rel="noreferrer"
          >
            Agendar reunión
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
          <a
            href={CONTACT.calendly}
            className="btn-primary inline-flex px-3.5 py-2 text-[12px] sm:hidden"
            data-cta="agendar"
            target="_blank"
            rel="noreferrer"
          >
            Agendar
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Menú"}
            className="grid size-10 place-items-center rounded-full border border-brand-hairline bg-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-brand-hairline bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Móvil">
            {NAV.map((item) =>
              item.href.startsWith("/#") ? (
                <a
                  key={item.href}
                  href={homeish ? item.href.slice(1) : item.href}
                  className="py-1 text-sm text-brand-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className="py-1 text-sm text-brand-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ),
            )}
            <Link to="/clientes" className="btn-secondary mt-2" onClick={() => setOpen(false)}>
              Acceso clientes
            </Link>
            <a href={CONTACT.calendly} className="btn-primary w-full" target="_blank" rel="noreferrer">
              Agendar
            </a>
          </nav>
        </div>
      ) : null}
    </nav>
  );
}
