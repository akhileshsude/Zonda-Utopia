import Image from "next/image";

export default function MoreInfo() {
    return (
        <section className="relative z-20 bg-[#050505] text-[#ededed] min-h-screen py-24 px-6 md:px-20 selection:bg-[#D4AF37] selection:text-black">
            <div className="max-w-7xl mx-auto">

                {/* -- HERO / INTRO -- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32 border-b border-white/10 pb-20">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif mb-8 text-[#D4AF37]">
                            The Alchemy of Time
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-400 mb-6">
                            In a world obsessed with hybridization and automation, the Pagani Utopia stands as a defiant masterpiece of analog purity. Codenamed 'C10', this is the third act in Horacio Pagani’s trilogy, following the raw intensity of the Zonda (C8) and the active aerodynamics of the Huayra (C9).
                        </p>
                        <p className="text-lg leading-relaxed text-gray-400">
                            Developed over six years, the Utopia eschews heavy batteries for a lightweight carbo-titanium core and a soul-stirring V12. It is a harmonious blend of 1950s grace and 21st-century engineering—a hypercar designed not for lap times, but for the purest emotion of driving.
                        </p>
                    </div>
                    <div className="relative h-full min-h-[400px] w-full bg-[#111] border border-white/5 overflow-hidden group">
                        <Image
                            src="/images/utopia-exterior-1.jpg"
                            alt="Pagani Utopia Exterior"
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                            <h3 className="text-xl font-serif text-[#D4AF37] mb-2">Simplicity & Lightness</h3>
                            <p className="text-gray-300 text-sm max-w-sm italic">
                                &quot;It is much more difficult to make things simple than to make things complicated.&quot;
                            </p>
                        </div>
                    </div>
                </div>

                {/* -- LINEAGE / HISTORY -- */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row items-baseline gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif text-white">The Lineage</h2>
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-[#D4AF37] to-transparent opacity-50"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-400">
                        <div className="relative pl-8 border-l border-white/10 group hover:border-[#D4AF37] transition-colors duration-500">
                            <span className="absolute -left-3 top-0 text-[#D4AF37] text-xl bg-[#050505] py-1">I.</span>
                            <h3 className="text-white font-serif text-xl mb-3 group-hover:text-[#D4AF37] transition-colors">The Zonda (1999)</h3>
                            <p className="text-sm leading-relaxed">
                                Named after the hot air current above Argentina. The Zonda established Pagani as a visionary creator, combining Mercedes-Benz V12 power with an aesthetic inspired by Group C race cars and jet fighters.
                            </p>
                        </div>
                        <div className="relative pl-8 border-l border-white/10 group hover:border-[#D4AF37] transition-colors duration-500">
                            <span className="absolute -left-3 top-0 text-[#D4AF37] text-xl bg-[#050505] py-1">II.</span>
                            <h3 className="text-white font-serif text-xl mb-3 group-hover:text-[#D4AF37] transition-colors">The Huayra (2011)</h3>
                            <p className="text-sm leading-relaxed">
                                Named after the Andean god of wind. The Huayra introduced active aerodynamics and a new level of artistic detail, utilizing flaps to tame the air like a living organism.
                            </p>
                        </div>
                        <div className="relative pl-8 border-l border-[#D4AF37] group">
                            <span className="absolute -left-3 top-0 text-[#D4AF37] text-xl bg-[#050505] py-1">III.</span>
                            <h3 className="text-[#D4AF37] font-serif text-xl mb-3">The Utopia (2022)</h3>
                            <p className="text-sm leading-relaxed text-gray-300">
                                A return to timeless forms. Soft, elegant, and devoid of aggressive wings. The Utopia represents the maturity of the Pagani philosophy: finding the perfect equilibrium between art and science.
                            </p>
                        </div>
                    </div>
                </div>

                {/* -- TECHNICAL SPECS -- */}
                <div className="mb-32">
                    <h2 className="text-4xl md:text-5xl font-serif text-center text-[#D4AF37] mb-16">Engineering Masterpiece</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Spec 1 */}
                        <div className="bg-white/5 border border-white/10 p-8 hover:border-[#D4AF37]/50 transition-colors duration-500 hover:-translate-y-2 transform">
                            <h3 className="text-xs tracking-widest uppercase text-gray-500 mb-2">Engine</h3>
                            <div className="text-2xl font-serif text-white mb-1">AMG V12 Twin-Turbo</div>
                            <div className="text-sm text-gray-400">6.0L / 60°</div>
                        </div>

                        {/* Spec 2 */}
                        <div className="bg-white/5 border border-white/10 p-8 hover:border-[#D4AF37]/50 transition-colors duration-500 hover:-translate-y-2 transform">
                            <h3 className="text-xs tracking-widest uppercase text-gray-500 mb-2">Power Chain</h3>
                            <div className="text-2xl font-serif text-white mb-1">864 HP</div>
                            <div className="text-sm text-gray-400">@ 6000 RPM</div>
                        </div>

                        {/* Spec 3 */}
                        <div className="bg-white/5 border border-white/10 p-8 hover:border-[#D4AF37]/50 transition-colors duration-500 hover:-translate-y-2 transform">
                            <h3 className="text-xs tracking-widest uppercase text-gray-500 mb-2">Torque</h3>
                            <div className="text-2xl font-serif text-white mb-1">1100 Nm</div>
                            <div className="text-sm text-gray-400">2800-5900 RPM</div>
                        </div>

                        {/* Spec 4 */}
                        <div className="bg-white/5 border border-white/10 p-8 hover:border-[#D4AF37]/50 transition-colors duration-500 hover:-translate-y-2 transform">
                            <h3 className="text-xs tracking-widest uppercase text-gray-500 mb-2">Dry Weight</h3>
                            <div className="text-2xl font-serif text-white mb-1">1280 Kg</div>
                            <div className="text-sm text-gray-400">Carbo-Titanium Core</div>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-white/10 p-6 flex items-start gap-4 hover:bg-white/5 transition-colors duration-500">
                            <div className="text-[#D4AF37] text-2xl">⚙</div>
                            <div>
                                <h4 className="font-serif text-white text-lg mb-2">Xtrac Transverse Gearbox</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    A 7-speed masterpiece available as an automated manual or a pure, gated manual. It uses helical gears for strength and efficiency, mounted transversely for optimized center of gravity.
                                </p>
                            </div>
                        </div>
                        <div className="border border-white/10 p-6 flex items-start gap-4 hover:bg-white/5 transition-colors duration-500">
                            <div className="text-[#D4AF37] text-2xl">✦</div>
                            <div>
                                <h4 className="font-serif text-white text-lg mb-2">Forged Avionics Aluminum</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    The double-wishbone suspension is crafted from aerospace-grade aluminum. The majestic 21" front and 22" rear APP Tech forged wheels are fitted with expansive carbon-ceramic brakes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -- GALLERY -- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="h-[400px] bg-[#0a0a0a] border border-white/10 flex items-center justify-center group overflow-hidden relative cursor-pointer">
                        <Image
                            src="/images/utopia-rear.jpg"
                            alt="Pagani Utopia Rear View"
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="absolute bottom-6 left-6 z-10">
                            <span className="text-white/80 uppercase tracking-widest text-sm border-b border-[#D4AF37] pb-1">Rear Profile</span>
                        </div>
                    </div>

                    <div className="h-[400px] bg-[#0a0a0a] border border-white/10 flex items-center justify-center group overflow-hidden relative cursor-pointer">
                        <Image
                            src="/images/utopia-detail.jpg"
                            alt="Pagani Utopia Details"
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="absolute bottom-6 left-6 z-10">
                            <span className="text-white/80 uppercase tracking-widest text-sm border-b border-[#D4AF37] pb-1">Design Details</span>
                        </div>
                    </div>
                </div>

                <footer className="mt-32 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p>&copy; 2024 Pagani Automobili. Fan Concept.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Press</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </footer>
            </div>
        </section>
    );
}
