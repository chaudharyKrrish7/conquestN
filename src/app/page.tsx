import Link from "next/link";
import { ShieldCheck, Clock, CheckCircle, Users } from "lucide-react";
import VisaFinder from "@/components/VisaFinder";

export default function Home() {
  return (
    <main 
      className="min-h-screen bg-[#fafafa] text-zinc-900 flex flex-col font-sans selection:bg-zinc-900 selection:text-white"
      style={{
        backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      }}
    >
    
      
      {/* 1. Hero & Visa Finder Section */}
      {/* Added top padding to let it breathe like the screenshot */}
      <section className="pt-24 pb-12 px-6 w-full max-w-6xl mx-auto relative z-10">
        <VisaFinder />
      </section>

      {/* 2. About Company & Stats Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] mb-4">About Our Company</h3>
            {/* Vianest Typography: Huge, Black weight, tight tracking */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 mb-6 leading-[1.05] tracking-tighter">
              Simplifying Global Mobility Since Establishment.
            </h2>
            <p className="text-zinc-500 mb-8 leading-relaxed font-medium text-lg">
              Conquest Visa and Immigration Services was established with a singular mission: to remove the friction from international travel. Whether you are traveling for tourism, business, or education, our expert team manages the complex documentation and Embassy protocols so you don't have to.
            </p>
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-3.5 bg-zinc-950 text-white font-bold rounded-full hover:bg-zinc-800 transition-colors shadow-md">
              Read More About Us &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Vianest UI Cards: White, subtle border, heavily rounded */}
            <div className="bg-white p-8 rounded-[2rem] border border-zinc-200 text-center flex flex-col justify-center shadow-sm">
              <h4 className="text-4xl font-black text-zinc-950 mb-2 tracking-tight">10 Lakhs+</h4>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Visas Approved</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-zinc-200 text-center flex flex-col justify-center shadow-sm">
              <h4 className="text-4xl font-black text-zinc-950 mb-2 tracking-tight">50+</h4>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Countries Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 mb-4 tracking-tighter">How Does The Process Work?</h2>
          <p className="text-zinc-500 mb-16 font-medium text-lg">Get your visa sorted in three simple steps.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-zinc-200 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-zinc-950 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md">1</div>
              <h4 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight">Select & Upload</h4>
              <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                Choose your destination and safely upload the required documents online.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-zinc-200 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-zinc-950 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md">2</div>
              <h4 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight">Review & Submit</h4>
              <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                Our team verifies your forms to ensure compliance before submitting to Embassies.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-zinc-200 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-zinc-950 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md">3</div>
              <h4 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight">Visa Approval</h4>
              <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                Receive your approved E-Visa securely via email, ready for your travel date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Conquest Section (Bento Grid Style) */}
      <section className="py-12 px-6 mb-12 relative z-10">
        <div className="max-w-6xl mx-auto bg-zinc-950 text-white py-16 px-6 md:px-12 rounded-[2.5rem] shadow-sm">
          
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-3">
              Why Choose Conquest?
            </h2>
            <p className="text-zinc-400 text-sm font-medium">
              Built on decades of aviation expertise to provide frictionless global mobility.
            </p>
          </div>
          
          {/* Grid Container matching the reference tile layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Tile 1 */}
            <div className="bg-zinc-900/60 border border-zinc-800/80 p-8 rounded-3xl flex flex-col justify-between hover:bg-zinc-900 transition-colors group">
              <ShieldCheck className="w-8 h-8 text-zinc-100 mb-8 group-hover:scale-110 transition-transform" strokeWidth={2} />
              <div>
                <h4 className="font-bold text-base text-white mb-2 tracking-tight">Secure Processing</h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                  Your documents are encrypted and handled with absolute confidentiality.
                </p>
              </div>
            </div>

            {/* Tile 2 */}
            <div className="bg-zinc-900/60 border border-zinc-800/80 p-8 rounded-3xl flex flex-col justify-between hover:bg-zinc-900 transition-colors group">
              <Clock className="w-8 h-8 text-zinc-100 mb-8 group-hover:scale-110 transition-transform" strokeWidth={2} />
              <div>
                <h4 className="font-bold text-base text-white mb-2 tracking-tight">Fast Turnaround</h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                  We expedite submissions to Embassies for the fastest possible approvals.
                </p>
              </div>
            </div>

            {/* Tile 3 */}
            <div className="bg-zinc-900/60 border border-zinc-800/80 p-8 rounded-3xl flex flex-col justify-between hover:bg-zinc-900 transition-colors group">
              <CheckCircle className="w-8 h-8 text-zinc-100 mb-8 group-hover:scale-110 transition-transform" strokeWidth={2} />
              <div>
                <h4 className="font-bold text-base text-white mb-2 tracking-tight">High Success Rate</h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                  Rigorous pre-screening reduces the chance of rejections significantly.
                </p>
              </div>
            </div>

            {/* Tile 4 */}
            <div className="bg-zinc-900/60 border border-zinc-800/80 p-8 rounded-3xl flex flex-col justify-between hover:bg-zinc-900 transition-colors group">
              <Users className="w-8 h-8 text-zinc-100 mb-8 group-hover:scale-110 transition-transform" strokeWidth={2} />
              <div>
                <h4 className="font-bold text-base text-white mb-2 tracking-tight">Dedicated Support</h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                  Our experts are available to guide you at every single step.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}