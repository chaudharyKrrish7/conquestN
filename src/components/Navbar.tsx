"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to close the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image 
            src="/logo.png" 
            alt="Conquest Visa Logo" 
            width={50} 
            height={50} 
            className="object-contain"
            priority 
          />
          <span className="font-extrabold text-xl tracking-tight text-gray-900">
            CONQUEST <span className="text-sky-700 font-semibold text-sm block -mt-1">Visa & Immigration</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-sm text-gray-600">
          <Link href="/" className="hover:text-sky-800 transition">Home</Link>
          <Link href="/about" className="hover:text-sky-800 transition">About Us</Link>
          <Link href="/contact" className="hover:text-sky-800 transition">Contact Us</Link>
          
          <Link
            href="/contact"
            className="bg-sky-900 hover:bg-sky-950 text-white px-5 py-2.5 rounded-full font-semibold transition"
          >
            Get In Touch
          </Link>
        </nav>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE NAVIGATION DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-4 font-medium text-gray-800 animate-in slide-in-from-top-2 duration-200">
          <Link href="/" className="hover:text-sky-700 p-2 border-b border-gray-50" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" className="hover:text-sky-700 p-2 border-b border-gray-50" onClick={closeMenu}>
            About Us
          </Link>
          <Link href="/contact" className="hover:text-sky-700 p-2 border-b border-gray-50" onClick={closeMenu}>
            Contact Us
          </Link>
          
          <Link
            href="/contact"
            className="bg-sky-900 hover:bg-sky-950 text-white px-5 py-3.5 rounded-xl font-bold text-center mt-2 shadow-md"
            onClick={closeMenu}
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
}