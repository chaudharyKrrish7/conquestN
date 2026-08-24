import { ShieldCheck, Globe, Users, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | Conquest Visa and Immigration",
  description: "Learn more about Conquest Visa and Immigration Services.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-sky-950 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-800 opacity-20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Your Gateway to <span className="text-sky-400">Global Mobility</span>
          </h1>
          <p className="text-lg text-sky-100 leading-relaxed max-w-2xl mx-auto">
            At Conquest Visa and Immigration Services, we believe that crossing borders should be exciting, not exhausting. We specialize in fast, reliable, and secure visa processing for clients worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-sky-700 uppercase tracking-widest mb-3">Our Mission</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6">Simplifying the Complexities of Immigration</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Navigating embassy protocols, document requirements, and approval timelines can be overwhelming. Conquest was founded to take the guesswork out of the equation. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are applying for a tourist e-Visa, coordinating corporate travel, or planning a long-term relocation, our dedicated agents handle the heavy lifting so you can focus on your journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100">
              <Target className="w-10 h-10 text-sky-700 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Precision</h4>
              <p className="text-sm text-gray-600">Meticulous document reviews to ensure a 99.4% first-time approval rate.</p>
            </div>
            <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100 mt-0 sm:mt-12">
              <ShieldCheck className="w-10 h-10 text-sky-700 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Security</h4>
              <p className="text-sm text-gray-600">Bank-level encryption and strict privacy protocols for your sensitive data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlight Strip */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-black text-sky-900 mb-1">50+</p>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Countries</p>
          </div>
          <div>
            <p className="text-4xl font-black text-sky-900 mb-1">10k+</p>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Visas Issued</p>
          </div>
          <div>
            <p className="text-4xl font-black text-sky-900 mb-1">24/7</p>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Support Desk</p>
          </div>
          <div>
            <p className="text-4xl font-black text-sky-900 mb-1">100%</p>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Transparent Fees</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Ready to start your application?</h2>
        <p className="text-gray-600 mb-10">
          Our agents are standing by to process your documents and get your visa approved in record time.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all hover:scale-105"
        >
          <span>Apply Now</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </main>
  );
}