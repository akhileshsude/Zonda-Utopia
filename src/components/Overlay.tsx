"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

function Section({
    children,
    range,
    progress,
}: {
    children: React.ReactNode;
    range: [number, number];
    progress: MotionValue<number>;
}) {
    const [start, end] = range;
    const opacity = useTransform(
        progress,
        [start, start + 0.05, end - 0.05, end],
        [0, 1, 1, 0]
    );
    const y = useTransform(
        progress,
        [start, start + 0.05, end - 0.05, end],
        [50, 0, 0, -50]
    );

    return (
        <motion.div
            style={{ opacity, y }}
            className="fixed inset-0 flex items-center justify-center pointer-events-none z-10"
        >
            {children}
        </motion.div>
    );
}

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    return (
        <>
            {/* 0-20% Title */}
            <Section range={[0, 0.2]} progress={scrollYProgress}>
                <div className="text-center">
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase text-white mix-blend-difference">
                        Pagani <br />
                        <span className="text-[#D4AF37] text-glow">Utopia</span>

                    </h1>
                    <p className="mt-4 text-sm tracking-[0.5em] text-gray-400 uppercase">
                        Start Scrolling
                    </p>
                </div>
            </Section>

            {/* 20-40% Engine */}
            <Section range={[0.2, 0.4]} progress={scrollYProgress}>
                <div className="flex flex-col items-center md:items-start md:ml-[-40vw] max-w-md bg-black/50 p-8 backdrop-blur-md border-l-2 border-[#D4AF37]">
                    <h2 className="text-4xl font-light text-[#D4AF37] mb-2 uppercase">V12 Twin Turbo</h2>
                    <div className="grid grid-cols-2 gap-8 text-sm tracking-widest">
                        <div>
                            <p className="text-gray-500">Power</p>
                            <p className="text-xl">864 HP</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Torque</p>
                            <p className="text-xl">1100 Nm</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 40-60% Aero */}
            <Section range={[0.4, 0.6]} progress={scrollYProgress}>
                <div className="flex flex-col items-center md:items-end md:mr-[-40vw] text-right max-w-md p-8">
                    <h2 className="text-5xl font-bold mb-4 uppercase mix-blend-overlay">Aerodynamics</h2>
                    <p className="text-lg text-gray-300 leading-relaxed text-balance">
                        Designed to slice through the air with surgical precision. Active aerodynamics adapt in real-time.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <div className="h-1 w-24 bg-[#D4AF37]"></div>
                        <div className="h-1 w-12 bg-gray-700"></div>
                    </div>
                </div>
            </Section>

            {/* 60-80% Interior */}
            <Section range={[0.6, 0.8]} progress={scrollYProgress}>
                <div className="text-center bg-black/80 p-12 border border-[#D4AF37]/30 rounded-full w-[500px] h-[500px] flex flex-col items-center justify-center backdrop-blur-xl">
                    <h3 className="text-sm tracking-[0.5em] text-[#D4AF37] mb-4">INTERIOR</h3>
                    <p className="text-3xl font-serif italic text-white/90">
                        "A celebration of analog mechanical purity."
                    </p>
                </div>
            </Section>

            {/* 80-100% Brand */}
            <Section range={[0.8, 1]} progress={scrollYProgress}>
                <div className="text-center">
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
                        The Legend
                    </h2>
                    <button className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 uppercase tracking-widest text-sm">
                        Discover More
                    </button>
                </div>
            </Section>

            {/* Persistent Progress Bar or HUD Elements */}
            <div className="fixed bottom-10 left-10 text-xs text-[#D4AF37] font-mono z-50 mix-blend-exclusion">
                PAGANI AUTOMOBILI © 2026
            </div>
        </>
    );
}
