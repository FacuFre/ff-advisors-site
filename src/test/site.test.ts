import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { BRAND, CONTACT, REGULATORY } from "../lib/brand";

const root = resolve(__dirname, "../..");

function walk(dir: string, acc: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "test") continue;
      walk(p, acc);
    } else if (/\.(ts|tsx|html|css|md)$/.test(name)) acc.push(p);
  }
  return acc;
}

describe("marca, contacto y límites regulatorios", () => {
  it("fija tinta, ámbar y familias tipográficas", () => {
    expect(BRAND.ink).toBe("#121212");
    expect(BRAND.amber).toBe("#b45309");
    expect(BRAND.fonts.sans).toBe("Josefin Sans");
    expect(BRAND.fonts.serif).toBe("Josefin Sans");
  });

  it("publica los datos de contacto vivos", () => {
    expect(CONTACT.email).toBe("contacto@ffadvisors.com.ar");
    expect(CONTACT.phoneDisplay).toBe("+54 11 3239-7427");
    expect(CONTACT.calendly).toBe("https://calendly.com/facundo-ffadvisors/30min");
    expect(CONTACT.whatsapp).toBe("https://wa.me/541132397427");
    expect(REGULATORY.license).toMatch(/2016/);
  });

  it("no inventa AUM, CUIT, domicilio ni que FF administra el FAL", () => {
    const files = walk(join(root, "src")).concat(
      ["README.md", "index.html", "agro.html", "aprende.html"].map((f) => join(root, f)),
    );
    const blob = files.map((f) => readFileSync(f, "utf8")).join("\n");
    expect(blob).not.toMatch(/FF administra el FAL/i);
    expect(blob).not.toMatch(/administramos tu FAL/i);
    expect(blob).not.toMatch(/CUIT\s*\d{2}-\d{8}-\d/);
    expect(blob).not.toMatch(/US\$\s*\d+\s*Bn|AUM de FF/i);
    expect(blob).not.toMatch(/domicilio legal/i);
    expect(blob).not.toMatch(/Agustín Honig|Javier Timerman|Miguel Kiguel/);
    expect(blob).not.toMatch(/\$2,7 Bn|\$1\.293\.820/);
  });

  it("declara que FF es Agente Productor y no gestora/ALyC/administrador FAL", () => {
    const fal = readFileSync(join(root, "src/pages/FalPage.tsx"), "utf8");
    expect(fal).toMatch(/Agente Productor CNV/);
    expect(fal).toMatch(/no es gestora, ALyC ni administrador/);
    expect(fal).toMatch(/INVIU/);
    expect(fal).toMatch(/Balanz/);
    expect(fal).toMatch(/elegir administradora|entidad habilitada que administrará/i);
    expect(fal).not.toMatch(/gestionar tu FAL/i);
  });

  it("agro etiqueta ONs como ejemplo / sin cotización en vivo", () => {
    const agro = readFileSync(join(root, "src/lib/agro.ts"), "utf8");
    expect(agro).toMatch(/ejemplo \/ sin cotización en vivo/);
  });

  it("aprende y clientes stubbean login/upload como próximamente", () => {
    const aprende = readFileSync(join(root, "src/pages/AprendePage.tsx"), "utf8");
    const clientes = readFileSync(join(root, "src/pages/ClientesPage.tsx"), "utf8");
    expect(aprende.toLowerCase()).toContain("próximamente");
    expect(aprende).toMatch(/mailto[:()]/);
    expect(clientes.toLowerCase()).toContain("próximamente");
    expect(clientes).toMatch(/mailto[:()]/);
  });
});
