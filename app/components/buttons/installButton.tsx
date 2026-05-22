"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
  }>;
}

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
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

    console.log(outcome);

    setDeferredPrompt(null);
  };

  if (!deferredPrompt) return null;

  return (
    <button
      onClick={instalarApp}
      className="bg-black text-white px-4 py-2 rounded-xl"
    >
      Instalar App
    </button>
  );
}