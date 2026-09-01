export type CropId = "soja_1" | "soja_2" | "maiz_temp" | "maiz_tard" | "trigo" | "girasol";

export type CropPreset = {
  id: CropId;
  name: string;
  shortName: string;
  unit: string;
  defaultRinde: number;
  defaultPrecio: number;
  defaultRetenciones: number;
  defaultComercializacion: number;
  defaultCosechaPct: number;
  defaultLabores: number;
  defaultAlquilerQq: number;
  defaultInsumosUsdHa: number;
};

/** Defaults from the live agro.ffadvisors.com.ar calculator (campaña ejemplo). */
export const CROPS: CropPreset[] = [
  {
    id: "soja_1",
    name: "Soja 1ª",
    shortName: "Soja 1ª",
    unit: "qq/ha",
    defaultRinde: 50,
    defaultPrecio: 32,
    defaultRetenciones: 33,
    defaultComercializacion: 12,
    defaultCosechaPct: 8,
    defaultLabores: 95,
    defaultAlquilerQq: 9,
    defaultInsumosUsdHa: 220,
  },
  {
    id: "soja_2",
    name: "Soja 2ª",
    shortName: "Soja 2ª",
    unit: "qq/ha",
    defaultRinde: 32,
    defaultPrecio: 28,
    defaultRetenciones: 33,
    defaultComercializacion: 13,
    defaultCosechaPct: 8,
    defaultLabores: 90,
    defaultAlquilerQq: 8,
    defaultInsumosUsdHa: 200,
  },
  {
    id: "maiz_temp",
    name: "Maíz temprano",
    shortName: "Maíz T",
    unit: "qq/ha",
    defaultRinde: 90,
    defaultPrecio: 17,
    defaultRetenciones: 12,
    defaultComercializacion: 14,
    defaultCosechaPct: 9,
    defaultLabores: 130,
    defaultAlquilerQq: 18,
    defaultInsumosUsdHa: 520,
  },
  {
    id: "maiz_tard",
    name: "Maíz tardío",
    shortName: "Maíz Tard",
    unit: "qq/ha",
    defaultRinde: 75,
    defaultPrecio: 17,
    defaultRetenciones: 12,
    defaultComercializacion: 14,
    defaultCosechaPct: 9,
    defaultLabores: 120,
    defaultAlquilerQq: 14,
    defaultInsumosUsdHa: 420,
  },
  {
    id: "trigo",
    name: "Trigo",
    shortName: "Trigo",
    unit: "qq/ha",
    defaultRinde: 45,
    defaultPrecio: 19,
    defaultRetenciones: 12,
    defaultComercializacion: 13,
    defaultCosechaPct: 8,
    defaultLabores: 110,
    defaultAlquilerQq: 10,
    defaultInsumosUsdHa: 280,
  },
  {
    id: "girasol",
    name: "Girasol",
    shortName: "Girasol",
    unit: "qq/ha",
    defaultRinde: 24,
    defaultPrecio: 38,
    defaultRetenciones: 7,
    defaultComercializacion: 13,
    defaultCosechaPct: 8,
    defaultLabores: 100,
    defaultAlquilerQq: 7,
    defaultInsumosUsdHa: 240,
  },
];

export type CropInputs = {
  rinde: number;
  precio: number;
  retenciones: number;
  comercializacion: number;
  cosechaPct: number;
  labores: number;
  alquilerQq: number;
  insumosUsdHa: number;
};

export type MarginResult = {
  ingresoBruto: number;
  retenciones: number;
  comercializacion: number;
  ingresoNeto: number;
  cosecha: number;
  labores: number;
  insumosTotal: number;
  alquilerUsdHa: number;
  costosTotales: number;
  gastosDirectos: number;
  gastosVenta: number;
  margenBruto: number;
  rindeIndiferencia: number;
};

export function inputsFromPreset(crop: CropPreset): CropInputs {
  return {
    rinde: crop.defaultRinde,
    precio: crop.defaultPrecio,
    retenciones: crop.defaultRetenciones,
    comercializacion: crop.defaultComercializacion,
    cosechaPct: crop.defaultCosechaPct,
    labores: crop.defaultLabores,
    alquilerQq: crop.defaultAlquilerQq,
    insumosUsdHa: crop.defaultInsumosUsdHa,
  };
}

export function calcularMargen(t: CropInputs): MarginResult {
  const ingresoBruto = t.rinde * t.precio;
  const retenciones = ingresoBruto * (t.retenciones / 100);
  const comercializacion = ingresoBruto * (t.comercializacion / 100);
  const ingresoNeto = ingresoBruto - retenciones - comercializacion;
  const cosecha = ingresoBruto * (t.cosechaPct / 100);
  const alquilerUsdHa = t.alquilerQq * t.precio;
  const insumosTotal = t.insumosUsdHa;
  const gastosDirectos = alquilerUsdHa + t.labores + insumosTotal;
  const gastosVenta = cosecha + retenciones + comercializacion;
  const costosTotales = cosecha + t.labores + insumosTotal + alquilerUsdHa;
  const margenBruto = ingresoNeto - costosTotales;
  const fixed = t.labores + insumosTotal + alquilerUsdHa;
  const netPerQq = t.precio * (1 - (t.retenciones + t.comercializacion + t.cosechaPct) / 100);
  const rindeIndiferencia = netPerQq > 0 ? fixed / netPerQq : 0;

  return {
    ingresoBruto,
    retenciones,
    comercializacion,
    ingresoNeto,
    cosecha,
    labores: t.labores,
    insumosTotal,
    alquilerUsdHa,
    costosTotales,
    gastosDirectos,
    gastosVenta,
    margenBruto,
    rindeIndiferencia: Number.isFinite(rindeIndiferencia) ? rindeIndiferencia : 0,
  };
}

export function formatUSD(value: number, digits = 0): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);
}

export type ExampleOn = {
  ticker: string;
  emisor: string;
  tirEjemplo: number;
  dias: number;
  nota: string;
};

export const EXAMPLE_ONS: ExampleOn[] = [
  {
    ticker: "ON-A",
    emisor: "Ejemplo A",
    tirEjemplo: 7.2,
    dias: 90,
    nota: "ejemplo / sin cotización en vivo",
  },
  {
    ticker: "ON-B",
    emisor: "Ejemplo B",
    tirEjemplo: 8.1,
    dias: 180,
    nota: "ejemplo / sin cotización en vivo",
  },
  {
    ticker: "ON-C",
    emisor: "Ejemplo C",
    tirEjemplo: 8.8,
    dias: 365,
    nota: "ejemplo / sin cotización en vivo",
  },
];

export function hedgeUsd(rinde: number, hectareas: number, coverPct: number, futurePrice: number) {
  const produccion = rinde * hectareas;
  const qqCubiertos = produccion * (coverPct / 100);
  return {
    produccion,
    qqCubiertos,
    qqLibres: produccion - qqCubiertos,
    usdAsegurados: qqCubiertos * futurePrice,
  };
}

export function onProceeds(capital: number, tirAnualPct: number, dias: number) {
  const factor = 1 + (tirAnualPct / 100) * (dias / 365);
  return capital * factor;
}
