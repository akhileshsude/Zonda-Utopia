"use client";

import Image from "next/image";
import { useRef } from "react";

const PAGANI_CARS = [
    {
        name: "Zonda F",
        year: "2005",
        description: "Track-focused evolution with 602 HP, featuring advanced aerodynamics and lightweight construction.",
        image: "/images/pagani-cars/zonda-f.png",
    },
    {
        name: "Zonda R",
        year: "2009",
        description: "Track-only beast with 750 HP, pushing the boundaries of performance and engineering.",
        image: "/images/pagani-cars/zonda-r.png",
    },
    {
        name: "Huayra",
        year: "2011",
        description: "Named after the Andean god of wind, featuring active aerodynamics and 730 HP twin-turbo V12.",
        image: "/images/pagani-cars/huayra.png",
    },
    {
        name: "Huayra BC",
        year: "2016",
        description: "Dedicated to Benny Caiola, lighter and more powerful with 789 HP and enhanced aerodynamics.",
        image: "/images/pagani-cars/huayra-bc.png",
    },
    {
        name: "Huayra Roadster",
        year: "2017",
        description: "Open-top elegance with reinforced carbon-titanium monocoque and 764 HP of pure emotion.",
        image: "/images/pagani-cars/huayra-roadster.png",
    },
    {
        name: "Imola",
        year: "2019",
        description: "Ultimate track weapon with 827 HP, advanced aerodynamics, and exclusive production of only 5 units.",
        image: "/images/pagani-cars/imola.png",
    },
];

export default function PaganiCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="relative bg-[#050505] py-20 overflow-hidden border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-20">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-baseline gap-4 mb-4">
                        <h2 className="text-4xl md:text-5xl font-serif text-white">The Pagani Legacy</h2>
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-[#CC0000] to-transparent opacity-50"></div>
                    </div>
                    <p className="text-gray-400 text-lg">Explore the evolution of automotive artistry</p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-[#CC0000] border border-white/20 hover:border-[#CC0000] text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                        aria-label="Scroll left"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-[#CC0000] border border-white/20 hover:border-[#CC0000] text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                        aria-label="Scroll right"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-12"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {PAGANI_CARS.map((car, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[380px] bg-black/40 border border-white/10 hover:border-[#CC0000]/50 transition-all duration-500 group cursor-pointer overflow-hidden"
                            >
                                {/* Image Container */}
                                <div className="relative h-[250px] overflow-hidden bg-[#0a0a0a]">
                                    <Image
                                        src={car.image}
                                        alt={`Pagani ${car.name}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                                    {/* Year badge */}
                                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 px-3 py-1 text-xs tracking-widest text-[#CC0000]">
                                        {car.year}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#CC0000] transition-colors duration-300">
                                        {car.name}
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {car.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Hint */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-600 uppercase tracking-widest">
                        Scroll to explore • {PAGANI_CARS.length} Models
                    </p>
                </div>
            </div>
        </section>
    );
}
