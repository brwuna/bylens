'use client'
import Image from "next/image";
import { useState } from 'react';

import LogoImg from "/public/icon-blink.png"
import Link from "next/link";

import { Menu, Search, User, X } from "lucide-react";
import { Modal } from "./Modal";

export const itemsMenu = [
    'Início',
    'Por que byLens?',
    'Funcionalidades',
    'Sobre Nós'
]


export function Header() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    return (
        <header className="relative w-full h-20 bg-zinc-900 flex items-center">
            <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row items-center gap-2">
                    <Image src={LogoImg} alt="Logo" className="md:w-[64px] md:h-[64px] w-[42px] h-[42px]" />
                    <span className="text-white font-bold text-base">byLens</span>
                </div>

                <div className="hidden md:flex items-center text-center gap-4 lg:gap-10">
                    <nav className="flex gap-2">
                        {itemsMenu.map((item, index) => (
                            <Link
                                href="#"
                                key={index}
                                className={`px-3 py-1 text-white hover:text-opacity-100 transition-all ${index === 0 ? 'border-b-lime-600' : 'text-opacity-50'}`}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                                style={{
                                    borderBottom: activeIndex === index ? '2px solid #84cc16' : (activeIndex === null && index === 0 ? '2px solid #84cc16' : 'none'),
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6">
                        <button>
                            <Search className="text-white text-opacity-70" size={19} />
                        </button>

                        <button className="flex items-center gap-2">
                            <User className="text-white text-opacity-70" size={19} />
                            <span className="text-white font-medium pt-1">Criar Conta</span>
                            <span className="text-white">|</span>
                            <span className="font-medium pt-1 text-lime-500">Explorar</span>
                        </button>
                    </div>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <Modal activeIndex={activeIndex} setActiveIndex={setActiveIndex}  />
            )}
        </header>
    );
}
