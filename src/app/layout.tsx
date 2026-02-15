import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import EasterEggs from "@/components/EasterEggs";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pagani Utopia | Cinematic Experience",
  description: "A scroll-driven journey through automotive perfection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#050505] text-[#ededed] ${cinzel.variable} ${montserrat.variable} font-sans`}
      >
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <EasterEggs />
        <div className="grain-overlay" />
      </body>
    </html>
  );
}
