import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Layout } from "../components/Layout";
import { FalPage } from "../pages/FalPage";

describe("/fal top chrome", () => {
  it("copia la barra de producción: banner Nuevo FAL, nav y Acceso/Agendar", () => {
    render(
      <MemoryRouter initialEntries={["/fal"]}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/fal" element={<FalPage />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: /Nuevo FAL/ })).toHaveAttribute("href", "#elegir");
    for (const label of [
      "Soluciones",
      "Cómo trabajamos",
      "Herramientas",
      "FAL",
      "Quiénes somos",
      "FAQ",
      "Contacto",
    ]) {
      expect(screen.getAllByRole("link", { name: label }).length).toBeGreaterThan(0);
    }
    expect(screen.getAllByRole("link", { name: "Acceso clientes" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Agendar/ }).length).toBeGreaterThan(0);
  });
});
