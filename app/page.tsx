"use client";

import { MainPage } from "./components/mainPage/mainPage";
import { useEffect, useState } from "react";

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const instalarApp = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("App instalado");
    }

    setDeferredPrompt(null);
  };

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => console.log("SW registrado com sucesso:", reg.scope))
          .catch((err) => console.error("Falha ao registrar o SW:", err));
      });
    }
  }, []);

  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      <MainPage />
      {deferredPrompt && (
        <button onClick={instalarApp}>
          Instalar aplicativo
        </button>
    </div>
  );
}
