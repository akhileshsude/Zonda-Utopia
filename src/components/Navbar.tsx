"use client";

import Link from "next/link";
import { toast } from "react-hot-toast";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-black/80 backdrop-blur-md text-white pointer-events-auto border-b border-white/10">
            <div
                className="text-2xl font-serif tracking-widest font-bold uppercase cursor-pointer select-none"
                onDoubleClick={() => {
                    toast("Fun Fact: Each titanium bolt on a Pagani costs $80 and is laser-etched with the logo.", {
                        icon: "🔩",
                        style: {
                            background: "#1a1a1a",
                            color: "#CC0000",
                            border: "1px solid #CC0000",
                        }
                    });
                }}
            >
                Pagani
            </div>
            <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase items-center">
                <Link href="#" className="hover:text-[#CC0000] transition-colors duration-300">
                    Model
                </Link>
                <Link href="#" className="hover:text-[#CC0000] transition-colors duration-300">
                    Specs
                </Link>
                <Link href="#" className="hover:text-[#CC0000] transition-colors duration-300">
                    Bespoke
                </Link>
                <Link href="#" className="hover:text-[#CC0000] transition-colors duration-300 border border-white/20 px-4 py-2 hover:border-[#CC0000]/50">
                    Enquire
                </Link>
            </div>
        </nav>
    );
}
