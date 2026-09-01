import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { FalPage } from "./pages/FalPage";
import { AgroPage } from "./pages/AgroPage";
import { AprendePage } from "./pages/AprendePage";
import { ClientesPage } from "./pages/ClientesPage";
import { PrivacidadPage } from "./pages/PrivacidadPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/fal" element={<FalPage />} />
        <Route path="/agro" element={<AgroPage />} />
        <Route path="/aprende" element={<AprendePage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/privacidad" element={<PrivacidadPage />} />
        <Route path="/agro.html" element={<Navigate to="/agro" replace />} />
        <Route path="/aprende.html" element={<Navigate to="/aprende" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
