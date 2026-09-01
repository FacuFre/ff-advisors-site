import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const root = resolve(__dirname, "../..");
const read = (rel: string) => readFileSync(resolve(root, rel), "utf8");

describe("SEO y HTML inicial", () => {
  it("index, agro y aprende usan lang=es", () => {
    expect(read("index.html")).toMatch(/<html lang="es">/);
    expect(read("agro.html")).toMatch(/<html lang="es">/);
    expect(read("aprende.html")).toMatch(/<html lang="es">/);
  });

  it("agro y aprende tienen H1 en el HTML inicial", () => {
    expect(read("agro.html")).toMatch(/<h1>Calculadora de margen agropecuario<\/h1>/);
    expect(read("aprende.html")).toMatch(/<h1>Ordená tu plata antes de invertirla<\/h1>/);
  });

  it("agro y aprende declaran para quién es en el HTML inicial", () => {
    expect(read("agro.html").toLowerCase()).toContain("para quién es");
    expect(read("aprende.html").toLowerCase()).toContain("para quién es");
  });

  it("robots.txt y sitemap.xml son reales", () => {
    const robots = read("public/robots.txt");
    expect(robots).toMatch(/User-agent:\s*\*/);
    expect(robots).toMatch(/Sitemap:\s*https:\/\/ffadvisors\.com\.ar\/sitemap\.xml/);
    const sitemap = read("public/sitemap.xml");
    expect(sitemap).toMatch(/<\?xml/);
    expect(sitemap).toContain("https://ffadvisors.com.ar/");
    expect(sitemap).toContain("https://ffadvisors.com.ar/fal");
    expect(sitemap).toContain("https://ffadvisors.com.ar/agro");
    expect(sitemap).toContain("https://ffadvisors.com.ar/aprende");
    expect(sitemap).toContain("https://ffadvisors.com.ar/clientes");
    expect(sitemap).toContain("https://ffadvisors.com.ar/privacidad");
  });

  it("404 en español con noindex", () => {
    const html = read("public/404.html");
    expect(html).toMatch(/lang="es"/);
    expect(html).toMatch(/name="robots" content="noindex"/);
    expect(html).toMatch(/Esta página no existe/);
  });

  it("Dockerfile y railway.json existen para un deploy posterior", () => {
    expect(existsSync(resolve(root, "Dockerfile"))).toBe(true);
    expect(existsSync(resolve(root, "railway.json"))).toBe(true);
    expect(read("railway.json")).toContain("DOCKERFILE");
  });

  it("nginx escucha $PORT via envsubst (Railway), no un puerto fijo", () => {
    const nginx = read("nginx.conf");
    const docker = read("Dockerfile");
    expect(nginx).toMatch(/listen \$\{PORT\}/);
    expect(nginx).not.toMatch(/listen 80\b/);
    expect(nginx).not.toMatch(/listen 3000\b/);
    expect(docker).toMatch(/\/etc\/nginx\/templates\/default\.conf\.template/);
    expect(docker).toMatch(/ENV PORT=8080/);
    expect(docker).toMatch(/EXPOSE 8080/);
  });
});
