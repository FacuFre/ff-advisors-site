import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CONTACT, mailto } from "../lib/brand";

const CODES = [
  { code: "+54", label: "+54 Argentina" },
  { code: "+598", label: "+598 Uruguay" },
  { code: "+56", label: "+56 Chile" },
  { code: "+595", label: "+595 Paraguay" },
  { code: "+55", label: "+55 Brasil" },
  { code: "+591", label: "+591 Bolivia" },
  { code: "+34", label: "+34 España" },
  { code: "+1", label: "+1 Estados Unidos" },
  { code: "", label: "Otro" },
];

export function ContactForm({ dark = false }: { dark?: boolean }) {
  const [honeypot, setHoneypot] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (honeypot) return;
    const data = new FormData(event.currentTarget);
    const nombre = String(data.get("nombre") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const codigo = String(data.get("codigo") ?? "").trim();
    const tel = String(data.get("telefono") ?? "").trim();
    const motivo = String(data.get("motivo") ?? "").trim();
    window.location.href = mailto(
      `Consulta web — ${nombre || "sin nombre"}`,
      [`Nombre: ${nombre}`, `Email: ${email}`, `WhatsApp: ${codigo} ${tel}`, motivo && `Motivo: ${motivo}`]
        .filter(Boolean)
        .join("\n"),
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={dark ? "rounded-3xl border border-brand-hairline bg-white p-6 shadow-elevated sm:p-7" : "space-y-4"}
    >
      {dark ? (
        <>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">Consulta rápida</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-brand-dark">Escribinos y te contactamos.</h3>
        </>
      ) : null}
      <div className={dark ? "mt-5 space-y-3" : "space-y-4"}>
        <div>
          <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-brand-muted" htmlFor="nombre">
            Nombre
          </label>
          <input id="nombre" name="nombre" required placeholder="Nombre y apellido" className="field" />
        </div>
        <div>
          <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-brand-muted" htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="vos@email.com" className="field" />
        </div>
        <div>
          <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-brand-muted" htmlFor="telefono">
            WhatsApp
          </label>
          <div className="flex gap-2">
            <select
              id="codigo"
              name="codigo"
              defaultValue="+54"
              aria-label="Código de país"
              className="w-[42%] shrink-0 rounded-xl border border-brand-hairline bg-brand-bg px-3 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand-accent focus:bg-white sm:w-[44%]"
            >
              {CODES.map((c) => (
                <option key={c.label} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
            <input
              id="telefono"
              name="telefono"
              inputMode="tel"
              placeholder="11 2345-6789"
              className="field"
            />
          </div>
          <p className="mt-1 text-[11px] text-brand-muted/70">Sin 0 ni 15. Ej: 11 2345-6789</p>
        </div>
        <div>
          <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-brand-muted" htmlFor="motivo">
            Motivo <span className="font-normal normal-case text-brand-muted/70">(opcional)</span>
          </label>
          <textarea
            id="motivo"
            name="motivo"
            rows={3}
            placeholder="En una línea, contanos el motivo."
            className="field resize-none"
          />
        </div>
        <div className="ff-hp" aria-hidden="true">
          <label htmlFor="empresa_web">No completar este campo</label>
          <input
            id="empresa_web"
            name="empresa_web"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="btn-primary mt-5 w-full py-3.5">
        Enviar consulta
        <ArrowUpRight className="size-4" />
      </button>
      <p className="mt-3 text-center text-[11px] text-brand-muted/80">
        Al enviar aceptás nuestra{" "}
        <a className="underline decoration-brand-muted/40 underline-offset-2 hover:text-brand-dark" href="/privacidad">
          Política de Privacidad
        </a>
        . El mensaje se abre en tu cliente de correo hacia {CONTACT.email}.
      </p>
    </form>
  );
}
