"use client";

import React, { useState, useEffect } from "react";
import { COUNTRIES, VISA_DATA } from "@/data/visaData";
import { FileText, Image as ImageIcon, Minus, Plus, ChevronRight, AlertCircle, Landmark, Briefcase, Info } from "lucide-react";

export default function VisaFinder() {
  const citizenOf = "India";
  const [destination, setDestination] = useState<string>("India");
  const [selectedOptionId, setSelectedOptionId] = useState<string>("");
  const [applicantCount, setApplicantCount] = useState<number>(1);

  const currentPair = VISA_DATA.find(
    (item) => item.citizenOf === citizenOf && item.destination === destination
  );

  // Grab the destination data to display the flag
  const destinationData = COUNTRIES.find((c) => c.name === destination);

  useEffect(() => {
    if (currentPair && currentPair.options.length > 0) {
      setSelectedOptionId(currentPair.options[0].id);
    }
  }, [currentPair]);

  const activeOption = currentPair?.options.find((opt) => opt.id === selectedOptionId) || currentPair?.options[0];
  
  // Fee Calculations
  const baseGovtFee = activeOption?.govtFee || 0;
  const baseServiceFee = activeOption?.serviceFee || 0;
  
  const totalGovtFee = baseGovtFee * applicantCount;
  const totalServiceFee = baseServiceFee * applicantCount;
  const grandTotal = totalGovtFee + totalServiceFee;

  return (
    <section className="w-full bg-gray-50/50 pb-12">
      {/* Premium Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-sky-900 text-white py-20 px-4 md:px-8 relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center mb-12 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-sm">
            Conquest Visa & Immigration
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Select your destination to instantly view processing times, required documents, and transparent pricing.
          </p>
        </div>

        {/* Elevated Dropdown Selector */}
        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/20 shadow-2xl relative z-10">
          <div className="w-full text-left">
            <label className="block text-xs font-bold text-blue-100 uppercase tracking-widest mb-3 pl-1">
              Where are you traveling to?
            </label>
            <div className="relative">
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-white text-gray-900 px-5 py-4 rounded-2xl font-semibold border-0 focus:ring-4 focus:ring-sky-500/50 shadow-lg cursor-pointer appearance-none transition-all"
              >
                <option value="" disabled>Select Destination</option>
                {COUNTRIES.map((c) => (
                  <option key={`dest-${c.code}`} value={c.name}>{c.flag} {c.name}</option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <ChevronRight className="w-5 h-5 rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Visa Results Interface */}
      <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {currentPair ? (
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: Visa Selection Cards AND Required Documents */}
            <div className="flex-1 flex flex-col gap-8 w-full">
              
              {/* Visa Types Selection Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {currentPair.options.map((opt) => {
                  const isSelected = (activeOption?.id === opt.id);
                  const cardTotal = opt.govtFee + opt.serviceFee;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedOptionId(opt.id)}
                      className={`cursor-pointer rounded-3xl border-2 p-7 transition-all duration-300 relative overflow-hidden group ${
                        isSelected 
                          ? "border-sky-600 bg-sky-50/30 shadow-xl shadow-sky-900/5 scale-[1.02]" 
                          : "border-gray-200 hover:border-sky-300 bg-white hover:shadow-md"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-0 right-0 bg-sky-600 text-white text-[10px] uppercase tracking-wider px-4 py-1.5 rounded-bl-xl font-bold">
                          Selected
                        </div>
                      )}
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-xl font-bold text-gray-900 pr-4 flex items-center gap-2">
                          <span className="text-2xl" aria-hidden="true">{destinationData?.flag}</span>
                          {opt.type}
                        </h3>
                        <div className="text-right flex-shrink-0">
                          <span className="text-xs text-gray-400 block uppercase font-semibold mb-1">{opt.currency}</span>
                          <span className={`text-2xl font-black ${isSelected ? 'text-sky-700' : 'text-gray-900'}`}>
                            {cardTotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 border-t border-gray-100 pt-5 text-center text-sm">
                        <div className="bg-gray-50/50 p-2 rounded-xl">
                          <span className="text-[10px] text-gray-500 block uppercase tracking-wider font-semibold mb-1">Category</span>
                          <span className="font-bold text-gray-800">{opt.category}</span>
                        </div>
                        <div className="bg-gray-50/50 p-2 rounded-xl">
                          <span className="text-[10px] text-gray-500 block uppercase tracking-wider font-semibold mb-1">Entry</span>
                          <span className="font-bold text-gray-800">{opt.entryType}</span>
                        </div>
                        <div className="bg-gray-50/50 p-2 rounded-xl">
                          <span className="text-[10px] text-gray-500 block uppercase tracking-wider font-semibold mb-1">Validity</span>
                          <span className="font-bold text-gray-800">{opt.validity}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Required Documents */}
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900">Required Documents</h4>
                  {currentPair.processingTime && (
                    <div className="text-sm bg-amber-50 text-amber-700 px-4 py-2 rounded-full font-bold border border-amber-100/50 shadow-sm">
                      ⏱ {currentPair.processingTime}
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentPair.requiredDocuments.map((doc, i) => (
                    <div key={i} className="flex items-start gap-4 bg-gray-50/50 hover:bg-gray-50 p-5 rounded-2xl border border-gray-100 transition-colors">
                      <div className="bg-white p-2.5 rounded-xl shadow-sm border border-gray-200 flex-shrink-0">
                        {i % 2 === 0 ? <FileText className="text-sky-600 w-5 h-5" /> : <ImageIcon className="text-indigo-600 w-5 h-5" />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 mb-1">{doc.name}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{doc.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Pricing & Checkout Summary (Sticky) */}
            <div className="w-full lg:w-[400px] flex-shrink-0 sticky top-8">
              <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-xl shadow-gray-200/50">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Application Summary</h4>
                
                {/* Applicant Counter */}
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex justify-between items-center mb-8">
                  <span className="text-sm font-bold text-gray-700">Total Applicants</span>
                  <div className="flex items-center gap-4 bg-white p-1 rounded-xl shadow-sm border border-gray-200">
                    <button onClick={() => setApplicantCount(Math.max(1, applicantCount - 1))} className="p-2 rounded-lg hover:bg-gray-50 text-gray-600 transition"><Minus className="w-4 h-4" /></button>
                    <span className="font-black text-gray-900 w-4 text-center">{applicantCount}</span>
                    <button onClick={() => setApplicantCount(applicantCount + 1)} className="p-2 rounded-lg hover:bg-gray-50 text-gray-600 transition"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>

                {/* Detailed Fee Breakdown */}
                <div className="space-y-4 mb-6">
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Fee Breakdown</h5>
                  
                  <div className="flex items-start justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="bg-sky-50 p-1.5 rounded-lg text-sky-600"><Landmark className="w-4 h-4" /></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Govt. Visa Fee</p>
                        <p className="text-[10px] text-gray-400">{activeOption?.currency} {baseGovtFee.toLocaleString("en-IN", { minimumFractionDigits: 2 })} × {applicantCount} person</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-900 mt-1">
                      {totalGovtFee.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  <div className="flex items-start justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="bg-indigo-50 p-1.5 rounded-lg text-indigo-600"><Briefcase className="w-4 h-4" /></div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Conquest Service Fee</p>
                        <p className="text-[10px] text-gray-400">{activeOption?.currency} {baseServiceFee.toLocaleString("en-IN", { minimumFractionDigits: 2 })} × {applicantCount} person</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-900 mt-1">
                      {totalServiceFee.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="border-t border-gray-100 pt-6 mb-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-sm font-bold text-gray-900 block mb-1">Total Amount</span>
                      <span className="text-[11px] font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded-md">Inclusive of all taxes</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-500 font-bold mr-1">{activeOption?.currency}</span>
                      <span className="text-3xl font-black text-sky-600">
                        {grandTotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </div>

               
<button
  onClick={() => window.location.href = `/contact?type=${encodeURIComponent(activeOption?.type || "")}&applicants=${applicantCount}&destination=${encodeURIComponent(destination)}`}
  className="w-full bg-sky-900 hover:bg-sky-950 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-sky-900/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
>
  <span className="text-lg">Start Application</span>
  <ChevronRight className="w-5 h-5" />
</button>
                <div className="flex items-center justify-center gap-1.5 mt-4 text-[11px] font-medium text-gray-400">
                  <Info className="w-3 h-3" />
                  <span>Secure 256-bit encrypted checkout</span>
                </div>
              </div>
            </div>
            
          </div>
        ) : (
          <div className="bg-white p-10 rounded-3xl border border-gray-200 flex flex-col items-center justify-center text-center max-w-2xl mx-auto mt-8 shadow-sm">
            <div className="bg-sky-50 p-4 rounded-full mb-5">
              <AlertCircle className="w-10 h-10 text-sky-600" />
            </div>
            <h4 className="font-bold text-2xl text-gray-900 mb-3">
              {destination === "India" 
                ? "Where are you heading?" 
                : "Manual Processing Required"}
            </h4>
            <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
              {destination === "India"
                ? "Please select the country you plan to travel to from the dropdown above to view instant requirements and fees."
                : `We process visas for ${destination}, but specific requirements vary. Please contact us directly for current fees and documentation.`}
            </p>
            {destination !== "India" && (
              <button
                onClick={() => window.location.href = `/contact?type=${encodeURIComponent(`Manual Inquiry: India to ${destination}`)}`}
                className="bg-sky-900 hover:bg-sky-950 text-white font-bold py-3.5 px-8 rounded-xl transition shadow-lg shadow-sky-900/20"
              >
                Contact Support Team
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}