"use client";

import { NavMenu } from "../buttons/NavMenu";

export function Header() {
    return (
        <header className="bg-[#5E5EDA] flex items-center justify-between px-4 py-2 w-full md:justify-start md:h-20 md:px-10 md:gap-6 lg:px-16">
            <img src="/logoIFFA_2(branca).png" alt="Logo da IFFA" className="w-20 h-20 object-contain" />
            <NavMenu />
            <div className="hidden md:flex items-start ">
                <ul className="flex gap-5 text-base leading-6 font-ibm font-light lg:gap-8">
                    <li className="hover:text-white/80"><a href="#welcome">Home Page</a></li>
                    <li className="hover:text-white/80"><a href="#support">Suporte</a></li>
                    <li className="hover:text-white/80"><a href="#support2">Suporte.2</a></li>
                    <li className="hover:text-white/80"><a href="#principios">Princípios</a></li>
                    <li className="hover:text-white/80"><a href="#workshop">Eventos</a></li>
                    <li className="hover:text-white/80"><a href="#donate">Doar</a></li>
                    <li className="hover:text-white/80"><a href="#support3">Links</a></li>
                </ul>
            </div>
        </header>
    )
}