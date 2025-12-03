"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto h-20 px-6 flex items-center justify-between">
        
        {/* LOGO + Texto */}
        <div className="flex items-center gap-3">
          <img
            src="/logoIFFA_2.png"
            alt="Logo da ONG"
            className="h-16 md:h-20 w-auto object-contain"
          />

          <span className="hidden md:block text-lg font-semibold text-black/80">
            Instituto Fórum de Famílias Atípicas
          </span>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 text-[15px] font-medium text-black/70">
          <a href="#welcome" className="hover:text-black transition">Início</a>
          <a href="#support" className="hover:text-black transition">Comunidade</a>
          <a href="#support2" className="hover:text-black transition">Juntos pela Inclusão</a>
          <a href="#workshop" className="hover:text-black transition">Eventos</a>
          <a href="#donate" className="hover:text-black transition">Como Ajudar</a>
          <a href="#contact" className="hover:text-black transition">Contato</a>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-black/80 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE (com animação) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/90 backdrop-blur-md shadow-md overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 text-black/80 text-lg gap-4">
              <a href="#welcome" onClick={() => setOpen(false)}>Início</a>
              <a href="#support" onClick={() => setOpen(false)}>Comunidade</a>
              <a href="#support2" onClick={() => setOpen(false)}>Juntos pela Inclusão</a>
              <a href="#workshop" onClick={() => setOpen(false)}>Eventos</a>
              <a href="#donate" onClick={() => setOpen(false)}>Como Ajudar</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contato</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
