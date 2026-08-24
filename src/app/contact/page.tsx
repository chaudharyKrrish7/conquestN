"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    citizenOf: "",
    destination: "",
    visaType: "",
    applicants: 1,
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const type = searchParams.get("type");
    const applicants = searchParams.get("applicants");
    if (type) setFormData((prev) => ({ ...prev, visaType: type }));
    if (applicants) setFormData((prev) => ({ ...prev, applicants: Number(applicants) }));
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
    <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl my-12">
      <h1 className="text-2xl font-black text-gray-900 mb-2">Start Your Application</h1>
      <p className="text-sm text-gray-500 mb-8">
        Submit your details below. Our immigration desk will review your credentials and contact you immediately.
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
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none"
              placeholder="e.g. John Doe"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none"
                placeholder="+91 9876543210"
              />
            </div>
          </div>

          {formData.visaType && (
            <div className="bg-sky-50 p-4 rounded-xl border border-sky-100 flex justify-between items-center text-sm">
              <span className="font-semibold text-sky-900">{formData.visaType}</span>
              <span className="text-xs text-sky-700 font-bold">{formData.applicants} Applicant(s)</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Specific Requirements / Notes</label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-500 outline-none"
              placeholder="Provide any additional details or travel dates..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-sky-900 hover:bg-sky-950 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2"
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

