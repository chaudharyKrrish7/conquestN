"use client";

import React, { useState } from "react";
import { COUNTRIES, VISA_DATA, VisaOption } from "@/data/visaData";
import { ArrowRight, FileText, Image as ImageIcon, Minus, Plus, ChevronRight, AlertCircle } from "lucide-react";

export default function VisaFinder() {
  // Set default state to empty strings so nothing is selected initially
  const [citizenOf, setCitizenOf] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [selectedOptionId, setSelectedOptionId] = useState<string>("");
  const [applicantCount, setApplicantCount] = useState<number>(1);

  // Check if both selections are made
  const isSelectionComplete = citizenOf !== "" && destination !== "";

  // Find matching data based on selection
  const currentPair = VISA_DATA.find(
    (item) => item.citizenOf === citizenOf && item.destination === destination
  );

  // Auto-select the first visa option when a valid pair is found
  React.useEffect(() => {
    if (currentPair && currentPair.options.length > 0) {
      setSelectedOptionId(currentPair.options[0].id);
    }
  }, [currentPair]);

  const activeOption = currentPair?.options.find((opt) => opt.id === selectedOptionId) || currentPair?.options[0];
  const totalPerPerson = (activeOption?.govtFee || 0) + (activeOption?.serviceFee || 0);
  const grandTotal = totalPerPerson * applicantCount;

  return (
    <section className="w-full">
      {/* Hero Dropdown Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-sky-800 to-blue-950 text-white py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Conquest Visa & Immigration
          </h1>
          <p className="text-blue-100 text-lg">
            Select your nationality and destination to check visa requirements and fees instantly.
          </p>
        </div>

        {/* Dropdown Selector Card */}
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-5/12 text-left">
            <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">
              VISA For Citizen Of
            </label>
            <select
              value={citizenOf}
              onChange={(e) => setCitizenOf(e.target.value)}
              className="w-full bg-white text-gray-800 px-4 py-3 rounded-xl font-medium border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="" disabled>Select Nationality</option>
              {COUNTRIES.map((c) => (
                <option key={`cit-${c.code}`} value={c.name}>{c.flag} {c.name}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-center p-3 rounded-full bg-white/20 text-white">
            <ArrowRight className="w-6 h-6" />
          </div>

          <div className="w-full md:w-5/12 text-left">
            <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">
              Destination Country
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-white text-gray-800 px-4 py-3 rounded-xl font-medium border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="" disabled>Select Destination</option>
              {COUNTRIES.map((c) => (
                <option key={`dest-${c.code}`} value={c.name}>{c.flag} {c.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Dynamic Visa Results Interface (Only shows if selections are made) */}
      {isSelectionComplete && (
        <div className="max-w-6xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {currentPair ? (
            <>
              {/* Visa Types Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {currentPair.options.map((opt) => {
                  const isSelected = (activeOption?.id === opt.id);
                  const cardTotal = opt.govtFee + opt.serviceFee;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedOptionId(opt.id)}
                      className={`cursor-pointer rounded-2xl border-2 p-6 transition-all relative ${
                        isSelected ? "border-red-600 bg-red-50/20 shadow-lg" : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute -top-3 right-6 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                          Selected
                        </span>
                      )}
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-bold text-gray-900">{opt.type}</h3>
                        <div className="text-right">
                          <span className="text-xs text-gray-500 block uppercase">{opt.currency}</span>
                          <span className="text-xl font-bold text-gray-900">
                            {cardTotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 border-t pt-4 text-center text-sm text-gray-600">
                        <div>
                          <span className="text-xs text-gray-400 block uppercase">Type</span>
                          <span className="font-semibold text-gray-800">{opt.category}</span>
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 block uppercase">Entry</span>
                          <span className="font-semibold text-gray-800">{opt.entryType}</span>
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 block uppercase">Duration</span>
                          <span className="font-semibold text-gray-800">{opt.validity}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Lower Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-8">
                  {/* Required Documents */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Required Documents</h4>
                    <div className="flex flex-wrap gap-4">
                      {currentPair.requiredDocuments.map((doc, i) => (
                        <div key={i} className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-200">
                          {i === 0 ? <FileText className="text-sky-600 w-6 h-6" /> : <ImageIcon className="text-indigo-600 w-6 h-6" />}
                          <div>
                            <p className="text-sm font-semibold text-gray-800">{doc.name}</p>
                            <p className="text-xs text-gray-500">{doc.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing & Checkout Summary */}
                <div className="bg-sky-50 border border-sky-200 p-6 rounded-2xl shadow-md sticky top-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Visa Details</h4>
                  <div className="bg-white p-3 rounded-xl border border-sky-200 flex justify-between items-center mb-6">
                    <span className="text-sm font-semibold text-gray-700">Applicant(s)</span>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setApplicantCount(Math.max(1, applicantCount - 1))} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700"><Minus className="w-4 h-4" /></button>
                      <span className="font-bold text-gray-900">{applicantCount}</span>
                      <button onClick={() => setApplicantCount(applicantCount + 1)} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700"><Plus className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline my-4">
                    <div>
                      <span className="text-sm font-bold text-gray-800 block">Total</span>
                      <span className="text-xs text-gray-500">(To Be Paid Now)</span>
                    </div>
                    <span className="text-2xl font-black text-red-600">
                      INR {grandTotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <button
                    onClick={() => window.location.href = `/contact?type=${encodeURIComponent(activeOption?.type || "")}&applicants=${applicantCount}`}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg transition"
                  >
                    <span>Apply Now</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-red-50 text-red-800 p-6 rounded-2xl border border-red-200 flex items-center gap-4">
              <AlertCircle className="w-8 h-8 text-red-600" />
              <div>
                <h4 className="font-bold text-lg">No Data Available</h4>
                <p className="text-sm">We currently do not have automated data for this specific country pair. Please contact us directly for manual processing.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}