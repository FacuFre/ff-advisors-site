import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CONTACT } from "../lib/brand";

export function NotFoundPage() {
  useEffect(() => {
    const previous = document.querySelector('meta[name="robots"]');
    const created = !previous;
    const tag =
      previous ??
      Object.assign(document.createElement("meta"), { name: "robots" });
    tag.setAttribute("content", "noindex");
    if (created) document.head.appendChild(tag);
    return () => {
      if (created) tag.remove();
    };
  }, []);

  return (
    <main className="mx-auto max-w-xl px-5 py-24 text-center sm:px-8">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Esta página no existe.</h1>
      <p className="mt-4 text-sm leading-relaxed text-brand-muted">
        El enlace puede estar vencido o mal escrito. Volvé al inicio o escribinos a {CONTACT.email}.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Volver al inicio
      </Link>
    </main>
  );
}
