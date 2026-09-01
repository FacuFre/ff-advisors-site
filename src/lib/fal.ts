export type EmpresaTipo = "pyme" | "grande";

export const FAL_RATES = {
  pyme: 0.025,
  grande: 0.01,
} as const;

export const FAL_DEADLINE = "1 de noviembre de 2026";
export const FAL_DEADLINE_ISO = "2026-11-01";

export type FalInput = {
  empleados: number;
  sueldo: number;
  tipo: EmpresaTipo;
};

export type FalResult = {
  tasa: number;
  masaSalarial: number;
  aporteMensual: number;
  capital1y: number;
  capital3y: number;
};

/** empleados × sueldo → masa, aporte (2,5% PyME / 1% grande), capital 12 y 36 meses, sin rendimientos. */
export function calcularFal({ empleados, sueldo, tipo }: FalInput): FalResult {
  const safeEmpleados = Number.isFinite(empleados) ? Math.max(0, empleados) : 0;
  const safeSueldo = Number.isFinite(sueldo) ? Math.max(0, sueldo) : 0;
  const tasa = FAL_RATES[tipo];
  const masaSalarial = safeEmpleados * safeSueldo;
  const aporteMensual = masaSalarial * tasa;
  return {
    tasa,
    masaSalarial,
    aporteMensual,
    capital1y: aporteMensual * 12,
    capital3y: aporteMensual * 36,
  };
}

export function formatARS(value: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPct(rate: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(rate);
}
