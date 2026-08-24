import VisaFinder from "../components/VisaFinder";
import { Shield, Clock, Users, Globe2, CheckCircle2, PlaneTakeoff, FileCheck } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero & Dynamic Visa Engine */}
      <VisaFinder />

      {/* 2. About the Establishment */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xs font-bold text-sky-800 uppercase tracking-widest mb-2">About Our Company</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Simplifying Global Mobility Since Establishment</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Conquest Visa and Immigration Services was established with a singular mission: to remove the friction from international travel. Whether you are traveling for tourism, business, or education, our expert team manages the complex documentation and embassy protocols so you don&apos;t have to.
            </p>
            <Link href="/about" className="text-sky-700 font-bold hover:text-sky-900 flex items-center gap-2 transition">
              Read More About Us &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100 text-center">
               <h4 className="text-4xl font-black text-sky-900 mb-2">10k+</h4>
               <p className="text-sm font-semibold text-gray-700">Visas Approved</p>
             </div>
             <div className="bg-red-50 p-6 rounded-2xl border border-red-100 text-center">
               <h4 className="text-4xl font-black text-red-600 mb-2">50+</h4>
               <p className="text-sm font-semibold text-gray-700">Countries Covered</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Popular Destinations */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
           <h2 className="text-3xl font-extrabold text-gray-900">Popular Destinations</h2>
           <p className="text-gray-600 mt-2">Explore our most requested visa processing routes.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["United Arab Emirates", "United Kingdom", "United States", "Schengen Area"].map((dest, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <PlaneTakeoff className="w-8 h-8 text-sky-700 mb-4" />
              <h3 className="text-lg font-bold text-gray-900">{dest}</h3>
              <p className="text-sm text-gray-500 mt-1">Tourist & Business E-Visas</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. How the Process Works (3 Steps) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">How Does The Process Work?</h2>
          <p className="text-gray-600 mt-2">Get your visa sorted in three simple steps.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
          
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center relative z-10">
            <div className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4 border-4 border-white shadow-sm">1</div>
            <h4 className="font-bold text-gray-900 mb-2">Select & Upload</h4>
            <p className="text-sm text-gray-600">Choose your destination and safely upload the required documents online.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center relative z-10">
            <div className="w-14 h-14 bg-sky-800 text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4 border-4 border-white shadow-sm">2</div>
            <h4 className="font-bold text-gray-900 mb-2">Review & Submit</h4>
            <p className="text-sm text-gray-600">Our team verifies your forms to ensure compliance before submitting to immigration.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center relative z-10">
            <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4 border-4 border-white shadow-sm">3</div>
            <h4 className="font-bold text-gray-900 mb-2">Visa Approval</h4>
            <p className="text-sm text-gray-600">Receive your approved E-Visa securely via email, ready for your travel date.</p>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Conquest */}
      <section className="py-20 px-6 bg-sky-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4">Why Choose Conquest?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="w-10 h-10 mx-auto text-sky-400 mb-3" />
              <h4 className="font-bold mb-2">Secure Processing</h4>
              <p className="text-sm text-sky-200">Your documents are encrypted and handled with absolute confidentiality.</p>
            </div>
            <div className="text-center">
              <Clock className="w-10 h-10 mx-auto text-sky-400 mb-3" />
              <h4 className="font-bold mb-2">Fast Turnaround</h4>
              <p className="text-sm text-sky-200">We expedite submissions to embassies for the fastest possible approvals.</p>
            </div>
            <div className="text-center">
              <FileCheck className="w-10 h-10 mx-auto text-sky-400 mb-3" />
              <h4 className="font-bold mb-2">High Success Rate</h4>
              <p className="text-sm text-sky-200">Rigorous pre-screening reduces the chance of rejections significantly.</p>
            </div>
            <div className="text-center">
              <Users className="w-10 h-10 mx-auto text-sky-400 mb-3" />
              <h4 className="font-bold mb-2">Dedicated Support</h4>
              <p className="text-sm text-sky-200">Our immigration experts are available to guide you at every single step.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}