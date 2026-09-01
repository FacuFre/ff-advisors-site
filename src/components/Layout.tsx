import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CONTACT } from "../lib/brand";

export function Layout() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <Outlet />
      <Footer />
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 flex h-12 items-center rounded-full bg-[#128C7E] px-4 text-sm font-semibold text-white shadow-lg"
        aria-label="WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  );
}
