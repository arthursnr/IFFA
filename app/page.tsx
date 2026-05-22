"use client";

import { useEffect, useState } from "react";
import { MainPage } from "./components/mainPage/mainPage";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
  }>;
}

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    // SERVICE WORKER
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) =>
          console.log(
            "SW registrado com sucesso:",
            reg.scope
          )
        )
        .catch((err) =>
          console.error(
            "Falha ao registrar o SW:",
            err
          )
        );
    }

    // PWA INSTALL
    const handler = (
      e: BeforeInstallPromptEvent
    ) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handler as EventListener
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handler as EventListener
      );
    };
  }, []);

  const instalarApp = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();

    const { outcome } =
      await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("App instalado");
    }

    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      <MainPage />

      {deferredPrompt && (
        <button
          onClick={instalarApp}
          className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-xl"
        >
          Instalar aplicativo
        </button>
      )}
    </div>
  );
}