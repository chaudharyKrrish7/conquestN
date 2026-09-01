import Link from "next/link";
import { ShieldCheck, Clock, CheckCircle, Users } from "lucide-react";
import VisaFinder from "@/components/VisaFinder";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      
      {/* 1. Hero & Visa Finder Section */}
      <VisaFinder />

      {/* 2. About Company & Stats Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-xs font-bold text-sky-700 uppercase tracking-widest mb-3">About Our Company</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Simplifying Global Mobility Since Establishment
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Conquest Visa and Immigration Services was established with a singular mission: to remove the friction from international travel. Whether you are traveling for tourism, business, or education, our expert team manages the complex documentation and Embassy protocols so you don't have to.
            </p>
            <Link href="/about" className="text-sky-700 font-bold hover:text-sky-900 transition">
              Read More About Us &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100 text-center flex flex-col justify-center">
              <h4 className="text-4xl font-black text-sky-900 mb-2">10 Lakhs+</h4>
              <p className="text-sm font-bold text-gray-600">Visas Approved</p>
            </div>
            <div className="bg-red-50 p-8 rounded-3xl border border-red-100 text-center flex flex-col justify-center">
              <h4 className="text-4xl font-black text-red-600 mb-2">50+</h4>
              <p className="text-sm font-bold text-gray-600">Countries Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">How Does The Process Work?</h2>
          <p className="text-gray-500 mb-12">Get your visa sorted in three simple steps.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-md">1</div>
              <h4 className="font-bold text-gray-900 mb-3">Select & Upload</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Choose your destination and safely upload the required documents online.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-sky-700 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-md">2</div>
              <h4 className="font-bold text-gray-900 mb-3">Review & Submit</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our team verifies your forms to ensure compliance before submitting to Embassies.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-md">3</div>
              <h4 className="font-bold text-gray-900 mb-3">Visa Approval</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Receive your approved E-Visa securely via email, ready for your travel date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Conquest Section */}
      <section className="py-20 px-6 bg-sky-950 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-12">Why Choose Conquest?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-sky-400 mb-4" />
              <h4 className="font-bold mb-2">Secure Processing</h4>
              <p className="text-xs text-sky-100 leading-relaxed opacity-90 max-w-xs">
                Your documents are encrypted and handled with absolute confidentiality.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-10 h-10 text-sky-400 mb-4" />
              <h4 className="font-bold mb-2">Fast Turnaround</h4>
              <p className="text-xs text-sky-100 leading-relaxed opacity-90 max-w-xs">
                We expedite submissions to Embassies for the fastest possible approvals.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-10 h-10 text-sky-400 mb-4" />
              <h4 className="font-bold mb-2">High Success Rate</h4>
              <p className="text-xs text-sky-100 leading-relaxed opacity-90 max-w-xs">
                Rigorous pre-screening reduces the chance of rejections significantly.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-sky-400 mb-4" />
              <h4 className="font-bold mb-2">Dedicated Support</h4>
              <p className="text-xs text-sky-100 leading-relaxed opacity-90 max-w-xs">
                Our experts are available to guide you at every single step.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}