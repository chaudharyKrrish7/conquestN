import Link from "next/link";
import { Compass } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-sky-900 text-white p-2 rounded-xl">
            <Compass className="w-6 h-6" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-gray-900">
            CONQUEST <span className="text-sky-700 font-semibold text-sm block -mt-1">Visa & Immigration</span>
          </span>
        </Link>
        <nav className="flex items-center gap-8 font-medium text-sm text-gray-600">
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
      </div>
    </header>
  );
}