import { ShieldCheck, Users, Target, ArrowRight, Building2, Plane } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | Conquest Visa and Immigration",
  description: "Learn more about Conquest Visa and Immigration Services.",
};

export default function AboutPage() {
  return (
    <main 
      className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white"
      style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}
    >
      {/* Hero Section */}
      <section className="py-24 px-6 relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-zinc-950">
          Conquest Visa & <span className="text-zinc-400">Immigration.</span>
        </h1>
        <p className="text-lg text-zinc-500 font-medium leading-relaxed max-w-2xl mx-auto">
          Independently owned and operated since 2002, delivering elite global mobility and visa processing solutions based on decades of aviation expertise.
        </p>
      </section>

      {/* Legacy & Expertise Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-white p-8 md:p-12 rounded-[2.5rem] border border-zinc-200 shadow-sm">
          <div>
            <h2 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Decades of Expertise</h2>
            <h3 className="text-3xl font-black text-zinc-950 mb-6 tracking-tight">A Foundation Built on Industry Knowledge.</h3>
            <p className="text-zinc-500 font-medium mb-4 leading-relaxed">
              The leadership behind Conquest Visa brings decades of elite corporate travel and aviation experience before transitioning to independent, worldwide visa consulting. Our deep understanding of global travel mechanics ensures your application is handled with unparalleled precision.
            </p>
            <p className="text-zinc-500 font-medium mb-6 leading-relaxed">
              Operating with a dedicated team of immigration experts, we proudly serve a diverse clientele ranging from individual leisure travelers to corporate enterprise clients.
            </p>
            <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl text-xs text-zinc-500 font-bold mb-8">
              *Policy Note: Conquest operates with a strict no-refunds policy once document verification and processing commence.
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3.5 bg-zinc-950 text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors shadow-sm text-sm">
              Start Your Application <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div className="space-y-6">
            {/* Timeline */}
            <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-3xl">
              <h4 className="font-black text-xl text-zinc-950 mb-8 flex items-center gap-3 tracking-tight">
                <Plane className="w-5 h-5 text-zinc-400" />
                Leadership Timeline
              </h4>
              <div className="space-y-8 border-l-2 border-zinc-200 pl-6 ml-2">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3 h-3 bg-zinc-400 rounded-full ring-4 ring-zinc-50"></div>
                  <p className="font-black text-zinc-950">Jet Airways Pvt Ltd</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mt-1">1986 - 1992</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3 h-3 bg-zinc-600 rounded-full ring-4 ring-zinc-50"></div>
                  <p className="font-black text-zinc-950">Airborne Travels Pvt Ltd</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mt-1">1992 - 2002</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3 h-3 bg-zinc-950 rounded-full ring-4 ring-zinc-50"></div>
                  <p className="font-black text-zinc-950">Conquest Visa <span className="font-medium text-zinc-400">(Independent)</span></p>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-950 mt-1">2002 - Present</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-zinc-200 space-y-4 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-50 p-2.5 rounded-xl border border-zinc-100"><Building2 className="w-5 h-5 text-zinc-950" /></div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-950">Headquarters</h4>
                  <p className="text-xs font-medium text-zinc-500 mt-1 leading-relaxed">
                    AFF 188, First Floor, Gaur World Smart Street, Greater Noida West, UP
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-zinc-50 p-2.5 rounded-xl border border-zinc-100"><Users className="w-5 h-5 text-zinc-950" /></div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-950">Clientele</h4>
                  <p className="text-xs font-medium text-zinc-500 mt-1">
                    Serving all types of companies and individual clients globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-20 w-full"></div>
    </main>
  );
}