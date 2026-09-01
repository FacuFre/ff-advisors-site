import { describe, expect, it } from "vitest";
import { FAL_RATES, calcularFal } from "../lib/fal";

describe("calcularFal", () => {
  it("PyME 2,5%: empleados × sueldo → masa, aporte, capital 1y/3y", () => {
    const r = calcularFal({ empleados: 1000, sueldo: 700_000, tipo: "pyme" });
    expect(r.tasa).toBe(FAL_RATES.pyme);
    expect(r.masaSalarial).toBe(700_000_000);
    expect(r.aporteMensual).toBe(17_500_000);
    expect(r.capital1y).toBe(210_000_000);
    expect(r.capital3y).toBe(630_000_000);
  });

  it("grande 1%", () => {
    const r = calcularFal({ empleados: 2000, sueldo: 1_000_000, tipo: "grande" });
    expect(r.tasa).toBe(0.01);
    expect(r.masaSalarial).toBe(2_000_000_000);
    expect(r.aporteMensual).toBe(20_000_000);
    expect(r.capital1y).toBe(240_000_000);
    expect(r.capital3y).toBe(720_000_000);
  });

  it("trata entradas inválidas como cero", () => {
    const r = calcularFal({ empleados: Number.NaN, sueldo: -10, tipo: "pyme" });
    expect(r.masaSalarial).toBe(0);
    expect(r.aporteMensual).toBe(0);
  });
});
