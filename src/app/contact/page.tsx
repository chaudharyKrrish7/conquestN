"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send } from "lucide-react";
import Link from "next/link";
import { COUNTRIES } from "@/data/visaData";

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    dob: "", // New DOB field
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
    <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl my-12 text-gray-900">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-black text-gray-900">Start Your Application</h1>
        <Link href="/" className="text-xs text-sky-700 font-bold hover:underline">&larr; Back to Home</Link>
      </div>
      <p className="text-sm text-gray-500 mb-8">
        Submit your details below. Our immigration desk will review your credentials and contact you immediately. 
        <span className="block text-xs text-red-600 font-semibold mt-1">*Note: Conquest Visa and Immigration Services maintains a strict no-refunds policy once processing is initiated.</span>
      </p>

      {status === "success" ? (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl flex items-center gap-3">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold">Application Received!</h4>
            <p className="text-xs text-emerald-700 mt-1">Our specialists are preparing your documents and will reach out shortly.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 font-medium focus:ring-2 focus:ring-sky-500 outline-none placeholder-gray-400"
                placeholder="e.g. John Doe"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Date of Birth</label>
              <input
                type="date"
                required
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 font-medium focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 font-medium focus:ring-2 focus:ring-sky-500 outline-none placeholder-gray-400"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
              <div className="flex items-center w-full rounded-xl border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-sky-500 overflow-hidden">
                <span className="px-4 py-3 bg-gray-100 text-gray-900 font-bold border-r border-gray-300">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent text-gray-900 font-medium outline-none placeholder-gray-400"
                  placeholder="98765 43210"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Citizen Of</label>
              <input
                type="text"
                required
                value={formData.citizenOf}
                onChange={(e) => setFormData({ ...formData, citizenOf: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 font-medium focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Destination Country</label>
              <select
                required
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 font-medium focus:ring-2 focus:ring-sky-500 outline-none"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Visa Type (Optional)</label>
              <input
                type="text"
                value={formData.visaType}
                onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 font-medium focus:ring-2 focus:ring-sky-500 outline-none placeholder-gray-400"
                placeholder="e.g. Tourist Visa"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Number of Applicants</label>
              <input
                type="number"
                min="1"
                required
                value={formData.applicants}
                onChange={(e) => setFormData({ ...formData, applicants: Number(e.target.value) })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 font-medium focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Specific Requirements / Notes</label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 font-medium focus:ring-2 focus:ring-sky-500 outline-none placeholder-gray-400"
              placeholder="Provide any additional details or travel dates..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-sky-900 hover:bg-sky-950 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            {status === "loading" ? "Submitting..." : <><span>Submit Application</span><Send className="w-4 h-4" /></>}
          </button>
        </form>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-gray-500">Loading form...</div>}>
      <ContactForm />
    </Suspense>
  );
}