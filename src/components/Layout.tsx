import { Outlet, useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MarketTicker } from "./MarketTicker";
import { CONTACT } from "../lib/brand";

const TOOL_PATHS = new Set(["/agro", "/aprende", "/clientes"]);

export function Layout() {
  const { pathname } = useLocation();
  const useMainChrome = !TOOL_PATHS.has(pathname);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark">
      {useMainChrome ? (
        <div id={pathname === "/" ? "inicio" : undefined}>
          {pathname === "/" ? <MarketTicker /> : null}
          <Header />
          <Outlet />
          <Footer />
        </div>
      ) : (
        <Outlet />
      )}
      {useMainChrome ? (
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Chatear por WhatsApp"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-elevated transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      ) : null}
    </div>
  );
}
