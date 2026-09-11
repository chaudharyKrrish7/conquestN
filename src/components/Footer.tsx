import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900 relative z-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div>
          <h3 className="text-white font-black text-xl tracking-tight mb-4">Conquest Visa.</h3>
          <p className="text-sm text-zinc-500 font-medium leading-relaxed">
            Making visas and international travel completely hassle-free for individuals and businesses since 2002.
          </p>
        </div>

        <div>
          <h4 className="text-zinc-400 font-bold text-[10px] mb-4 uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li><Link href="/" className="hover:text-white transition-colors block">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors block">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors block">Contact & Apply</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-zinc-400 font-bold text-[10px] mb-4 uppercase tracking-widest">Headquarters</h4>
          <p className="text-sm font-medium leading-relaxed text-zinc-400">
            AFF 188, First Floor, Gaur World Smart Street, Greater Noida West, Gautam Budh Nagar, UP
          </p>
          <div className="mt-4">
            <span className="text-[9px] font-bold tracking-widest uppercase text-zinc-500 bg-zinc-900 px-2.5 py-1.5 rounded-md inline-block">
              Strict No-Refunds Policy
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-zinc-400 font-bold text-[10px] mb-4 uppercase tracking-widest">Contact</h4>
          <p className="mb-4">
            <a href="mailto:conquestvisa@gmail.com" className="text-sm text-white font-bold hover:text-zinc-300 transition-colors">
              conquestvisa@gmail.com
            </a>
          </p>
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-zinc-400">+91 98996 95814</p>
            <p className="text-sm font-medium text-zinc-400">+91 98188 73814</p> 
            <p className="text-sm font-medium text-zinc-400">+91 98996 90204</p> 
          </div>
        </div>

      </div>
      
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-900 text-center">
        <div className="text-[11px] font-medium text-zinc-600">
          © {new Date().getFullYear()} Conquest Visa and Immigration Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}