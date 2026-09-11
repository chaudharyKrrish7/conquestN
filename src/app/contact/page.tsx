"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";
import Link from "next/link";
import { COUNTRIES } from "@/data/visaData";

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    dob: "", 
    email: "",
    phone: "",
    citizenOf: "India",
    destination: "", 
    visaType: "",
    applicants: 1,
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const type = searchParams.get("type");
    const applicants = searchParams.get("applicants");
    const dest = searchParams.get("destination");
    
    if (type) setFormData((prev) => ({ ...prev, visaType: type }));
    if (applicants) setFormData((prev) => ({ ...prev, applicants: Number(applicants) }));
    if (dest) setFormData((prev) => ({ ...prev, destination: dest }));
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    const payload = {
      ...formData,
      phone: `(+91) ${formData.phone}`
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] border border-zinc-200 shadow-sm my-12 text-zinc-900 relative z-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-black text-zinc-950 tracking-tight">Application.</h1>
        <Link href="/" className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold hover:text-zinc-950 transition-colors">
          &larr; Back
        </Link>
      </div>
      <p className="text-sm text-zinc-500 font-medium mb-8 leading-relaxed">
        Submit your details below. Our immigration desk will review your credentials and contact you immediately. 
        <span className="block text-[10px] uppercase tracking-widest text-zinc-400 font-bold mt-3 bg-zinc-50 p-2.5 rounded-lg inline-block border border-zinc-100">
          * Strict no-refunds policy once processing is initiated.
        </span>
      </p>

      {status === "success" ? (
        <div className="bg-zinc-50 border border-zinc-200 text-zinc-950 p-8 rounded-3xl flex flex-col items-center text-center gap-4">
          <div className="bg-white p-3 rounded-full shadow-sm border border-zinc-200">
            <CheckCircle2 className="w-8 h-8 text-zinc-950" />
          </div>
          <div>
            <h4 className="font-black text-xl tracking-tight mb-2">Application Received</h4>
            <p className="text-sm text-zinc-500 font-medium">Our specialists are preparing your documents and will reach out shortly.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 pl-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-950 font-bold focus:bg-white focus:ring-2 focus:ring-zinc-950 outline-none transition-all placeholder:font-medium placeholder:text-zinc-300 text-sm"
                placeholder="e.g. John Doe"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 pl-1">Date of Birth</label>
              <input
                type="date"
                required
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-950 font-bold focus:bg-white focus:ring-2 focus:ring-zinc-950 outline-none transition-all text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 pl-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-950 font-bold focus:bg-white focus:ring-2 focus:ring-zinc-950 outline-none transition-all placeholder:font-medium placeholder:text-zinc-300 text-sm"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 pl-1">Phone Number</label>
              <div className="flex items-center w-full rounded-xl border border-zinc-200 bg-zinc-50 focus-within:ring-2 focus-within:ring-zinc-950 focus-within:bg-white transition-all overflow-hidden">
                <span className="px-4 py-3.5 bg-zinc-100 text-zinc-500 font-bold border-r border-zinc-200 text-sm">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 bg-transparent text-zinc-950 font-bold outline-none placeholder:font-medium placeholder:text-zinc-300 text-sm"
                  placeholder="98765 43210"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 pl-1">Citizen Of</label>
              <input
                type="text"
                required
                value={formData.citizenOf}
                onChange={(e) => setFormData({ ...formData, citizenOf: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-950 font-bold focus:bg-white focus:ring-2 focus:ring-zinc-950 outline-none transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 pl-1">Destination Country</label>
              <select
                required
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-950 font-bold focus:bg-white focus:ring-2 focus:ring-zinc-950 outline-none transition-all appearance-none text-sm cursor-pointer"
              >
                <option value="" disabled>Select Destination</option>
                {COUNTRIES.map((c) => (
                  <option key={`contact-dest-${c.code}`} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 pl-1">Visa Type (Optional)</label>
              <input
                type="text"
                value={formData.visaType}
                onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-950 font-bold focus:bg-white focus:ring-2 focus:ring-zinc-950 outline-none transition-all placeholder:font-medium placeholder:text-zinc-300 text-sm"
                placeholder="e.g. Tourist Visa"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 pl-1">Applicants</label>
              <input
                type="number"
                min="1"
                required
                value={formData.applicants}
                onChange={(e) => setFormData({ ...formData, applicants: Number(e.target.value) })}
                className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-950 font-bold focus:bg-white focus:ring-2 focus:ring-zinc-950 outline-none transition-all text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 pl-1">Notes / Requirements</label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-950 font-bold focus:bg-white focus:ring-2 focus:ring-zinc-950 outline-none transition-all placeholder:font-medium placeholder:text-zinc-300 text-sm resize-none"
              placeholder="Provide any additional details or travel dates..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-zinc-950 hover:bg-zinc-800 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm text-sm mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Submitting..." : <><span>Submit Application</span><Send className="w-4 h-4" /></>}
          </button>
          
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-xs font-bold justify-center border border-red-100">
              <AlertCircle className="w-4 h-4" /> Failed to submit. Please try again.
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <main 
      className="min-h-screen bg-[#fafafa] font-sans pt-10 px-6" 
      style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}
    >
      <Suspense fallback={<div className="p-12 text-center font-bold text-zinc-400 uppercase tracking-widest text-xs">Loading form...</div>}>
        <ContactForm />
      </Suspense>
    </main>
  );
}