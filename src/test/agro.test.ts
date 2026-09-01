import { describe, expect, it } from "vitest";
import { CROPS, calcularMargen, hedgeUsd, inputsFromPreset, onProceeds } from "../lib/agro";

describe("calcularMargen", () => {
  it("reproduce el escenario live de Soja 1ª (US$ 149/ha)", () => {
    const soja = CROPS.find((c) => c.id === "soja_1")!;
    const r = calcularMargen(inputsFromPreset(soja));
    expect(r.ingresoBruto).toBe(1600);
    expect(Math.round(r.margenBruto)).toBe(149);
  });

  it("hedge: rinde × ha × % × precio", () => {
    const h = hedgeUsd(50, 100, 50, 28);
    expect(h.produccion).toBe(5000);
    expect(h.qqCubiertos).toBe(2500);
    expect(h.usdAsegurados).toBe(70_000);
  });

  it("ON ejemplo capitaliza TIR simple por días", () => {
    expect(onProceeds(100, 10, 365)).toBeCloseTo(110);
  });
});
