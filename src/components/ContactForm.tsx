import { FormEvent, useState } from "react";
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

export function ContactForm() {
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
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div>
        <label className="mb-1 block text-xs font-medium text-ink/70" htmlFor="nombre">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          required
          className="w-full rounded-lg border border-hairline bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-brand"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-ink/70" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-hairline bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-brand"
        />
      </div>
      <div className="grid grid-cols-[8rem_1fr] gap-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-ink/70" htmlFor="codigo">
            WhatsApp
          </label>
          <select
            id="codigo"
            name="codigo"
            defaultValue="+54"
            className="w-full rounded-lg border border-hairline bg-white px-2 py-2.5 text-sm"
          >
            {CODES.map((c) => (
              <option key={c.label} value={c.code}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-ink/70" htmlFor="telefono">
            Número
          </label>
          <input
            id="telefono"
            name="telefono"
            inputMode="tel"
            placeholder="Sin 0 ni 15. Ej: 11 2345-6789"
            className="w-full rounded-lg border border-hairline bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-brand"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-ink/70" htmlFor="motivo">
          Motivo (opcional)
        </label>
        <textarea
          id="motivo"
          name="motivo"
          rows={3}
          className="w-full rounded-lg border border-hairline bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-brand"
        />
      </div>
      <div className="hidden" aria-hidden="true">
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
      <button type="submit" className="btn-primary w-full">
        Enviar consulta
      </button>
      <p className="text-xs text-ink/50">
        Al enviar aceptás nuestra{" "}
        <a className="underline" href="/privacidad">
          Política de Privacidad
        </a>
        . El mensaje se abre en tu cliente de correo hacia {CONTACT.email}.
      </p>
    </form>
  );
}
