import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { ibm, jost } from "./fonts";

import ServiceWorkerRegister from "@/app/components/ServiceWorkerRegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IFFA",
  description: "Instituto Fórum de Famílias Atípicas",
  manifest: "/manifest.json",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${ibm.variable}
          ${jost.variable}
          antialiased
        `}
      >
        <ServiceWorkerRegister />

        {children}
      </body>
    </html>
  );
}