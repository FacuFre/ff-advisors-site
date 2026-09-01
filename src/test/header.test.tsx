import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Header } from "../components/Header";
import { CONTACT } from "../lib/brand";

describe("Header", () => {
  it("Agendar es el CTA primario y Acceso clientes el secundario", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const agendar = screen.getAllByRole("link", { name: "Agendar" })[0];
    const clientes = screen.getAllByRole("link", { name: "Acceso clientes" })[0];
    expect(agendar).toHaveClass("btn-primary");
    expect(clientes).toHaveClass("btn-secondary");
    expect(agendar).toHaveAttribute("href", CONTACT.calendly);
    expect(clientes).toHaveAttribute("href", "/clientes");
  });
});
