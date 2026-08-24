import { ShieldCheck, Users, Target, ArrowRight, Building2, Plane } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | Conquest Visa and Immigration",
  description: "Learn more about Conquest Visa and Immigration Services.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-sky-950 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-800 opacity-20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Conquest Visa & <span className="text-sky-400">Immigration Services</span>
          </h1>
          <p className="text-lg text-sky-100 leading-relaxed max-w-2xl mx-auto">
            Independently owned and operated since 2002, delivering elite global mobility and visa processing solutions based on decades of aviation expertise.
          </p>
        </div>
      </section>

      {/* Legacy & Expertise Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-sky-700 uppercase tracking-widest mb-3">Decades of Aviation & Travel Expertise</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6">A Foundation Built on Industry Knowledge</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The leadership behind Conquest Visa brings decades of elite corporate travel and aviation experience before transitioning to independent, worldwide visa consulting. Our deep understanding of global travel mechanics ensures your application is handled with unparalleled precision.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Operating with a dedicated team of 5–10 immigration experts, we proudly serve a diverse clientele ranging from individual leisure travelers to corporate enterprise clients.
            </p>
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-800 font-semibold mb-6">
              *Policy Note: Conquest operates with a strict no-refunds policy once document verification and processing commence.
            </div>
            <Link href="/contact" className="text-sky-700 font-bold hover:text-sky-900 flex items-center gap-2 transition">
              Start Your Application &rarr;
            </Link>
          </div>
          
          <div className="space-y-6">
            {/* Timeline */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl">
              <h4 className="font-bold text-lg text-gray-900 mb-6 flex items-center gap-2">
                <Plane className="w-5 h-5 text-sky-700" />
                Leadership Timeline
              </h4>
              <div className="space-y-6 border-l-2 border-sky-100 pl-4 ml-2">
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-sky-300 rounded-full ring-4 ring-white"></div>
                  <p className="font-bold text-gray-900">Jet Airways Pvt Ltd</p>
                  <p className="text-sm text-gray-500">1986 - 1992</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-sky-500 rounded-full ring-4 ring-white"></div>
                  <p className="font-bold text-gray-900">Airborne Travels Pvt Ltd</p>
                  <p className="text-sm text-gray-500">1992 - 2002</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-sky-700 rounded-full ring-4 ring-white"></div>
                  <p className="font-bold text-gray-900">Conquest Visa <span className="font-normal text-gray-500">(Self-Employed)</span></p>
                  <p className="text-sm text-sky-600 font-medium">2002 - Present</p>
                </div>
              </div>
            </div>

            <div className="bg-sky-50 p-6 rounded-3xl border border-sky-100 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-white p-2.5 rounded-xl shadow-sm"><Building2 className="w-5 h-5 text-sky-800" /></div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Headquarters</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    AFF 188, First Floor, Gaur World Smart Street, Greater Noida West, Gautam Budh Nagar, UP
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-2.5 rounded-xl shadow-sm"><Users className="w-5 h-5 text-sky-800" /></div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Clientele</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Serving all types of companies and individual clients globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto border-t border-gray-100">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Ready to travel with confidence?</h2>
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