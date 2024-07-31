'use client'
import Image from "next/image";
import gsap from "gsap";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PhoneMockup from "/public/phone-mockup.png"
import Card01 from "/public/card1.png"
import Card02 from "/public/card2.png"
import Card03 from "/public/card3.png"
import Card04 from "/public/card4.png"
import Card05 from "/public/card5.png"
import Card06 from "/public/card6.png"

gsap.registerPlugin(ScrollTrigger)

export function SectionCards() {
    const mockupPhoneRef = useRef(null)
    const textCardContentRef = useRef(null)
    
    const sectionCardRef = useRef(null)
    const sectionCard = sectionCardRef.current
    
    const card01 = useRef(null)
    const card02 = useRef(null)
    const card03 = useRef(null)
    const card04 = useRef(null)
    const card05 = useRef(null)
    const card06 = useRef(null)

    function animeteCards(images: null[], position: number) {
        gsap.fromTo(images, {
            opacity: 0,
            x: position
        }, {
            opacity: 1,
            x: 0,
            duration: .5,
            stagger: .1,
            scrollTrigger: {
                trigger: sectionCard,
                start: '65% center'
            }
        })
    }

    useEffect(() => {
        const mockupPhone = mockupPhoneRef.current
        const textCardContent = textCardContentRef.current

        
        gsap.fromTo(mockupPhone, {
            opacity: 0,
            scale: .5,
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power4.out',
        })

        gsap.fromTo(textCardContent, {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: sectionCard,
                start: '60% center',
            }
        })

        const img01 = card01.current
        const img02 = card02.current
        const img03 = card03.current
        const img04 = card04.current
        const img05 = card05.current
        const img06 = card06.current

        const imgLeft = [img01, img02, img03]
        const imgRight = [img04, img05, img06]

        animeteCards(imgLeft, 50)
        animeteCards(imgRight, -50)
        
    }, [])

    return (
        <section className="w-full pb-20 bg-zinc-100 flex items-center flex-col" ref={sectionCardRef}>
            <Image 
                src={PhoneMockup} 
                alt="phone-mockup"
                width={375}
                height={666} 
                className="static md:sticky top-56 mx-auto -mt-[17rem] md:-mt-[31rem] mb-16 z-10"
                ref={mockupPhoneRef} 
            />

            <h2 className="m-w-[500px] md:w-full text-center text-3xl md:text-5xl font-semibold text-black mb-12 md:mb-56 px-4" ref={textCardContentRef}>Descubra novas inspirações e mostre ao mundo <span className="text-lime-500">seu talento</span>.</h2>

            <div className="relative w-full max-w-area-cards h-auto md:h-area-cards mx-auto flex flex-col md:flex-row md:flex-wrap items-center justify-center">
            <div className="w-full md:w-auto flex justify-center mb-4 md:mb-0">
                <Image src={Card01} alt="Cards Photos" className="md:absolute md:top-8 md:left-40 opacity-0 md:opacity-100" ref={card01} />
            </div>
            <div className="w-full md:w-auto flex justify-center mb-4 md:mb-0">
                <Image src={Card02} alt="Cards Photos" className="md:absolute md:bottom-32 md:left-0 opacity-0 md:opacity-100" ref={card02} />
            </div>
            <div className="w-full md:w-auto flex justify-center mb-4 md:mb-0">
                <Image src={Card03} alt="Cards Photos" className="md:absolute md:bottom-0 md:left-80 opacity-0 md:opacity-100" ref={card03} />
            </div>
            <div className="w-full md:w-auto flex justify-center mb-4 md:mb-0">
                <Image src={Card04} alt="Cards Photos" className="md:absolute md:top-0 md:right-32 opacity-0 md:opacity-100" ref={card04} />
            </div>
            <div className="w-full md:w-auto flex justify-center mb-4 md:mb-0">
                <Image src={Card05} alt="Cards Photos" className="md:absolute md:right-0 md:bottom-28 opacity-0 md:opacity-100" ref={card05} />
            </div>
            <div className="w-full md:w-auto flex justify-center">
                <Image src={Card06} alt="Cards Photos" className="md:absolute md:bottom-0 md:right-80 opacity-0 md:opacity-100" ref={card06} />
            </div>
            </div>
        </section>
    )
}