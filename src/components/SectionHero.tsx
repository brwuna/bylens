'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";

import { FilePen } from "lucide-react";
import { Container } from "./Container";

import IconMockup from "/public/mockup.svg"
import gsap from "gsap";

export function SectionHero() {
    const textHeroContentRef = useRef(null)
    const mockupLeftRef = useRef(null)
    const mockupRightRef = useRef(null)

    useEffect(() => {
        const textHeroContent = textHeroContentRef.current
        const mockupLeft = mockupLeftRef.current
        const mockupRight = mockupRightRef.current

        gsap.fromTo(textHeroContent, {
            opacity: 0,
            y: 20,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out'
        })

        gsap.fromTo(mockupLeft, {
            rotate: 0,
        }, {
            rotate: -12,
            duration: 1,
        })

        gsap.fromTo(mockupRight, {
            rotate: 0,
        }, {
            rotate: 12,
            duration: 1
        })
    }, [])

    return (
        <section className="relative w-full bg-zinc-900 h-[600px] md:h-section-hero border-t border-t-lime-500 pt-16 overflow-hidden">
            <Container className="flex flex-col items-center">
                <div className="w-full max-w-hero-content text-center">
                    <h3 className="text-xl font-medium text-lime-500 mb-4">Capture e Compartilhe Suas Memórias</h3>
                    <h1 className="text-white text-3xl md:text-5xl font-semibold mb-2">Junte-se à nossa comunidade de amantes da fotografia</h1>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 my-4">
                        <button className="flex items-center justify-center gap-2 px-4 py-1 md:py-2 font-semibold">
                            <FilePen color="#84cc16" size={20} />
                            <span className="text-white font-medium">Assinar lista de espera</span>
                        </button>
                        <button className="py-2 px-4 bg-lime-500 hover:bg-lime-600 rounded-lg font-semibold transition-all">
                            Começar agora
                        </button>
                    </div>
                </div>
                <div className="absolute -bottom-40 md:-bottom-56 w-full max-w-area-mockups flex justify-between">
                    <Image 
                        src={IconMockup} 
                        alt="Mockup" 
                        className="relative md:top-[18px] left-[53px] hidden md:block"
                        ref={mockupLeftRef} 
                    />
                    <Image 
                        src={IconMockup} 
                        alt="Mockup" 
                        className="relative md:top-[18px] right-[53px] hidden md:block"
                        ref={mockupRightRef}
                    />
                </div>
            </Container>
        </section>
    );
}