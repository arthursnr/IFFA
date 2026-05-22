"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
  }>;
}

export default function InstallButton() {
  const [prompt, setPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();

      setPrompt(
        e as BeforeInstallPromptEvent
      );
    };

    window.addEventListener(
      "beforeinstallprompt",
      handler
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handler
      );
    };
  }, []);

  const instalar = async () => {
    if (!prompt) return;

    await prompt.prompt();

    const result = await prompt.userChoice;

    console.log(result.outcome);
  };

  if (!prompt) return null;

  return (
    <button onClick={instalar}>
      Instalar App
    </button>
  );
}