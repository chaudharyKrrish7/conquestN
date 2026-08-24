import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Conquest Visa</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Independently owned global immigration partner established in 2002. Serving individual and corporate clients worldwide.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact & Apply</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Headquarters</h4>
          <p className="text-sm leading-relaxed text-gray-300">
            AFF 188, First Floor, Gaur World Smart Street, Greater Noida West, Gautam Budh Nagar, UP
          </p>
          <p className="text-xs text-red-400 mt-2">Strict No-Refunds Policy</p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Contact</h4>
          <p className="text-sm">support@conquestvisa.com</p>
          <p className="text-sm mt-1">+91 98765 43210</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-900 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Conquest Visa and Immigration Services. All rights reserved.
      </div>
    </footer>
  );
}