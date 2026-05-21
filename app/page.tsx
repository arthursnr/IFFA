"use client";

import { useEffect } from "react";
import { MainPage } from "./components/mainPage/mainPage";

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
    </div>
  );
}
