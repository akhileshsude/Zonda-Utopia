import Image from "next/image";

export default function MoreInfo() {
    return (
        <section className="relative z-20 bg-[#050505] text-[#ededed] min-h-screen py-24 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif mb-8 text-[#D4AF37]">
                            Art & Science
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-400 mb-6">
                            The Pagani Utopia is a celebration of analog purity in a digital world.
                            Designed by Horacio Pagani, it rejects hybrid complexity for a
                            soul-stirring V12 experience.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-400">
                            Every curve is sculpted for aerodynamic efficiency without distinct
                            appendages, maintaining a timeless silhouette that pays homage to
                            the Zonda while looking boldly into the future.
                        </p>
                    </div>
                    <div className="relative h-[400px] md:h-[600px] w-full bg-[#111] border border-white/5 p-4 flex items-center justify-center">
                        {/* Placeholder for a detail shot */}
                        <div className="text-center text-gray-600">
                            <span className="block text-4xl mb-2">✦</span>
                            <span className="uppercase tracking-widest text-sm">Detail Shot Needed</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    <div className="border-t border-[#D4AF37]/30 pt-6">
                        <h3 className="text-xl font-serif mb-2 text-[#D4AF37]">Power</h3>
                        <p className="text-4xl font-bold">864 <span className="text-sm font-normal text-gray-500">HP</span></p>
                    </div>
                    <div className="border-t border-[#D4AF37]/30 pt-6">
                        <h3 className="text-xl font-serif mb-2 text-[#D4AF37]">Torque</h3>
                        <p className="text-4xl font-bold">1100 <span className="text-sm font-normal text-gray-500">Nm</span></p>
                    </div>
                    <div className="border-t border-[#D4AF37]/30 pt-6">
                        <h3 className="text-xl font-serif mb-2 text-[#D4AF37]">Weight</h3>
                        <p className="text-4xl font-bold">1280 <span className="text-sm font-normal text-gray-500">kg</span></p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="h-[300px] bg-[#0a0a0a] border border-white/10 flex items-center justify-center">
                        <span className="text-gray-700 uppercase tracking-widest">Interior Gallery</span>
                    </div>
                    <div className="h-[300px] bg-[#0a0a0a] border border-white/10 flex items-center justify-center">
                        <span className="text-gray-700 uppercase tracking-widest">Exterior Gallery</span>
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
