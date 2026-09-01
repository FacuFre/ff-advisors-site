# FF Advisors — sitio público unificado

Sitio institucional de [FF Advisors](https://ffadvisors.com.ar) en un solo app: Vite + React + TypeScript + Tailwind. Idioma: español de Argentina.

FF Advisors es **Agente Productor CNV, matrícula 2016**. No es gestora, ALyC ni administrador del FAL. Este repositorio no inventa AUM, CUIT, domicilio ni bios ajenas.

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Home institucional (portado de ffadvisors.com.ar) |
| `/fal` | Guía FAL + calculadora PyME 2,5% / grande 1% + FAQ + formulario |
| `/agro` | Calculadora de margen agro (ONs de ejemplo / sin cotización en vivo) |
| `/aprende` | Microlecciones (login próximamente / mailto) |
| `/clientes` | Precalificación PyME (Google + upload próximamente / mailto) |
| `/privacidad` | Política de privacidad (Ley 25.326) |

`agro.html` y `aprende.html` incluyen H1 y una línea «para quién es» en el HTML inicial, para que no queden como un shell vacío.

## Contacto

- correo: contacto@ffadvisors.com.ar
- teléfono: +54 11 3239-7427
- Calendly: https://calendly.com/facundo-ffadvisors/30min
- WhatsApp: https://wa.me/541132397427

Marca viva: tinta `#121212`, ámbar `#b45309`, Josefin Sans + Source Serif 4.

## Desarrollo

```bash
npm install
npm run dev
npm test
npm run build
```

## Deploy (aún no)

`Dockerfile` + `nginx.conf` + `railway.json` quedan listos para un deploy posterior. **No desplegar a Railway desde este repo todavía.** No tocar DNS, Cloudflare, ffadvisors.com.ar ni Lovable.

SEO: `public/robots.txt`, `public/sitemap.xml`, `public/404.html` (español + `noindex`), `lang="es"` en el HTML.

## FAL

La calculadora estima masa salarial (empleados × sueldo), aporte (2,5% PyME / 1% grande) y capital a 1 y 3 años **sin rendimientos**. El CTA es elegir administradora antes del 1/11/2026. Se menciona a INVIU y Balanz como administradoras con las que FF trabaja; FF no administra el fondo.
