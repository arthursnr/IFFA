"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'

export function NavMenu() {
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
    
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [isOpen]);
      
    // toggle drawer
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div className="lg:hidden">

            <button onClick={toggleDrawer} className="z-[999] relative">
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Links do menu */}
            <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: isOpen ? '0' : '100vw' }}
                transition={{ type: 'tween' }} // transição mais suave
                className="flex fixed left-0 right-0 top-23 overflow-y-auto h-full bg-[#5E5EDA] backdrop-blur text-white p-6"
            >

                <ul>
                    <ul className="flex flex-col text-xl font-semibold">
                        <li className="hover:text-gray-300 hover:bg-white/5 rounded-md cursor-pointer py-4 px-2"><a href="#" className="relative">Home Page</a></li>
                        <li className="hover:text-gray-300 hover:bg-white/5 rounded-md cursor-pointer py-4 px-2"><a href="#" className="relative">Sobre Nós</a></li>
                        <li className="hover:text-gray-300 hover:bg-white/5 rounded-md cursor-pointer py-4 px-2"><a href="#" className="relative">Como Apoiar</a></li>
                    </ul>
                </ul>
            </motion.div>
        </div>
    );
}
