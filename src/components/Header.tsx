import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-site items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="FF Advisors — Inicio">
          <img
            src="/images/ff-logo-black.png"
            alt="FF Advisors"
            className="h-10 w-auto select-none lg:h-11"
            draggable={false}
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {NAV.map((item) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.href}
                href={homeish ? item.href.slice(1) : item.href}
                className="text-[12.5px] font-medium tracking-wide text-ink/70 hover:text-ink"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `text-[12.5px] font-medium tracking-wide ${isActive ? "text-ink" : "text-ink/70 hover:text-ink"}`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Link to="/clientes" className="btn-secondary" data-cta="acceso-clientes">
            Acceso clientes
          </Link>
          <a
            href={CONTACT.calendly}
            className="btn-primary"
            data-cta="agendar"
            target="_blank"
            rel="noreferrer"
          >
            Agendar
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-ink"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-hairline bg-paper px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Móvil">
            {NAV.map((item) =>
              item.href.startsWith("/#") ? (
                <a
                  key={item.href}
                  href={homeish ? item.href.slice(1) : item.href}
                  className="py-1 text-sm text-ink/80"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className="py-1 text-sm text-ink/80"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ),
            )}
            <Link to="/clientes" className="btn-secondary mt-2 w-full" onClick={() => setOpen(false)}>
              Acceso clientes
            </Link>
            <a href={CONTACT.calendly} className="btn-primary w-full" target="_blank" rel="noreferrer">
              Agendar
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
