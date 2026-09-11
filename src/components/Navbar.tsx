"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image 
            src="/logo.png" 
            alt="Conquest Visa Logo" 
            width={40} 
            height={40} 
            className="object-contain"
            priority 
          />
          <span className="font-black text-xl tracking-tighter text-zinc-950 leading-none">
            CONQUEST <span className="text-zinc-400 font-bold text-[10px] uppercase tracking-widest block mt-1">Visa & Immigration</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-950 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-zinc-950 transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-zinc-950 transition-colors">Contact Us</Link>
          
          <Link
            href="/contact"
            className="bg-zinc-950 hover:bg-zinc-800 text-white px-6 py-2.5 rounded-xl transition-colors shadow-sm text-xs uppercase tracking-widest"
          >
            Get In Touch
          </Link>
        </nav>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button 
          className="md:hidden p-2 text-zinc-950 hover:bg-zinc-100 rounded-xl transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE NAVIGATION DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-zinc-200 shadow-xl py-6 px-6 flex flex-col gap-4 font-bold text-zinc-500 animate-in slide-in-from-top-2 duration-200">
          <Link href="/" className="hover:text-zinc-950 p-2 border-b border-zinc-100" onClick={closeMenu}>Home</Link>
          <Link href="/about" className="hover:text-zinc-950 p-2 border-b border-zinc-100" onClick={closeMenu}>About Us</Link>
          <Link href="/contact" className="hover:text-zinc-950 p-2 border-b border-zinc-100" onClick={closeMenu}>Contact Us</Link>
          
          <Link
            href="/contact"
            className="bg-zinc-950 text-white px-5 py-4 rounded-xl text-center mt-2 shadow-sm uppercase tracking-widest text-xs"
            onClick={closeMenu}
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
}