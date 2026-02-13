import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-black/80 backdrop-blur-md text-white pointer-events-auto border-b border-white/10">
            <div className="text-2xl font-serif tracking-widest font-bold uppercase">
                Pagani
            </div>
            <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase items-center">
                <Link href="#" className="hover:text-[#D4AF37] transition-colors duration-300">
                    Model
                </Link>
                <Link href="#" className="hover:text-[#D4AF37] transition-colors duration-300">
                    Specs
                </Link>
                <Link href="#" className="hover:text-[#D4AF37] transition-colors duration-300">
                    Bespoke
                </Link>
                <Link href="#" className="hover:text-[#D4AF37] transition-colors duration-300 border border-white/20 px-4 py-2 hover:border-[#D4AF37]/50">
                    Enquire
                </Link>
            </div>
        </nav>
    );
}
