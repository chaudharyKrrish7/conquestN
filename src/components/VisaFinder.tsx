"use client";

import React, { useState, useEffect } from "react";
import { COUNTRIES, VISA_DATA } from "@/data/visaData";
import {
  FileText,
  Image as ImageIcon,
  Minus,
  Plus,
  ChevronRight,
  AlertCircle,
  Landmark,
  Briefcase,
  Info,
  Download,
} from "lucide-react";

export default function VisaFinder() {
  const citizenOf = "India";

  const [destination, setDestination] = useState<string>("India");
  const [selectedOptionId, setSelectedOptionId] = useState<string>("");
  const [applicantCount, setApplicantCount] = useState<number>(1);

  const currentPair = VISA_DATA.find(
    (item) =>
      item.citizenOf === citizenOf &&
      item.destination === destination
  );

  const destinationData = COUNTRIES.find(
    (c) => c.name === destination
  );

  useEffect(() => {
    if (currentPair && currentPair.options.length > 0) {
      setSelectedOptionId(currentPair.options[0].id);
    } else {
      setSelectedOptionId("");
    }
  }, [destination, currentPair]);

  const activeOption =
    currentPair?.options.find(
      (opt) => opt.id === selectedOptionId
    ) || currentPair?.options[0];

  const baseGovtFee = activeOption?.govtFee || 0;
  const baseServiceFee = activeOption?.serviceFee || 0;

  const totalGovtFee = baseGovtFee * applicantCount;
  const totalServiceFee = baseServiceFee * applicantCount;
  const grandTotal = totalGovtFee + totalServiceFee;

  return (
    <section className="w-full pb-8 relative z-10">

      {/* Sleek Minimal Hero Section */}
      <div className="py-8 px-4 md:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
            Conquest Visa & Immigration.
          </h1>
          <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto font-medium">
            Select your destination to instantly view processing times,
            required documents, and transparent pricing.
          </p>
        </div>

        {/* Compact Dropdown Selector */}
        <div className="max-w-2xl mx-auto bg-white p-5 md:p-6 rounded-3xl border border-zinc-200 shadow-sm relative z-10 text-left">
          <div className="w-full">
            <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-2 pl-1">
              Where are you traveling to?
            </label>
            <div className="relative">
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-zinc-50 text-zinc-950 px-4 py-3.5 rounded-xl font-bold border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent cursor-pointer appearance-none transition-all text-sm md:text-base"
              >
                <option value="" disabled>
                  Select Destination
                </option>
                {COUNTRIES.map((c) => (
                  <option
                    key={`dest-${c.code}`}
                    value={c.name}
                  >
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-950">
                <ChevronRight className="w-5 h-5 rotate-90" strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Visa Results Interface */}
      <div className="max-w-6xl mx-auto px-4 py-6 animate-in fade-in slide-in-from-bottom-8 duration-500">
        {currentPair ? (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            
            {/* LEFT COLUMN */}
            <div className="flex-1 flex flex-col gap-6 w-full">
              
              {/* Visa Types Selection Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentPair.options.map((opt) => {
                  const isSelected = activeOption?.id === opt.id;
                  const cardTotal = opt.govtFee + opt.serviceFee;

                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedOptionId(opt.id)}
                      className={`cursor-pointer rounded-2xl border-2 p-5 transition-all duration-200 relative overflow-hidden group ${
                        isSelected
                          ? "border-zinc-950 bg-zinc-50 shadow-sm"
                          : "border-zinc-200 hover:border-zinc-400 bg-white"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-0 right-0 bg-zinc-950 text-white text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-bl-xl font-bold">
                          Selected
                        </div>
                      )}

                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-black text-zinc-950 pr-2 flex items-center gap-2 tracking-tight">
                          <span className="text-xl" aria-hidden="true">
                            {destinationData?.flag}
                          </span>
                          {opt.type}
                        </h3>
                        <div className="text-right flex-shrink-0">
                          <span className="text-[9px] text-zinc-400 block uppercase tracking-widest font-bold mb-0.5">
                            {opt.currency}
                          </span>
                          <span
                            className={`text-xl font-black tracking-tight ${
                              isSelected ? "text-zinc-950" : "text-zinc-900"
                            }`}
                          >
                            {cardTotal.toLocaleString("en-IN", {
                              minimumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 border-t border-zinc-200 pt-4 text-center text-xs">
                        <div className="bg-white p-2 rounded-xl border border-zinc-100 shadow-sm">
                          <span className="text-[9px] text-zinc-400 block uppercase tracking-widest font-bold mb-0.5">
                            Category
                          </span>
                          <span className="font-bold text-zinc-950">
                            {opt.category}
                          </span>
                        </div>
                        <div className="bg-white p-2 rounded-xl border border-zinc-100 shadow-sm">
                          <span className="text-[9px] text-zinc-400 block uppercase tracking-widest font-bold mb-0.5">
                            Entry
                          </span>
                          <span className="font-bold text-zinc-950">
                            {opt.entryType}
                          </span>
                        </div>
                        <div className="bg-white p-2 rounded-xl border border-zinc-100 shadow-sm">
                          <span className="text-[9px] text-zinc-400 block uppercase tracking-widest font-bold mb-0.5">
                            Validity
                          </span>
                          <span className="font-bold text-zinc-950">
                            {opt.validity}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Required Documents */}
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-6 border-b border-zinc-100 gap-4">
                  <h4 className="text-xl font-black text-zinc-950 tracking-tight">
                    Required Documents
                  </h4>
                  {currentPair.processingTime && (
                    <div className="text-xs bg-zinc-100 text-zinc-950 px-4 py-2 rounded-full font-bold self-start md:self-auto border border-zinc-200">
                      ⏱ {currentPair.processingTime}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentPair.requiredDocuments.map((doc, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-zinc-50 p-4 rounded-2xl border border-zinc-200"
                    >
                      <div className="bg-white p-2 rounded-xl shadow-sm border border-zinc-200 flex-shrink-0 text-zinc-950">
                        {i % 2 === 0 ? (
                          <FileText className="w-4 h-4" strokeWidth={2.5} />
                        ) : (
                          <ImageIcon className="w-4 h-4" strokeWidth={2.5} />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-zinc-950 mb-1">
                          {doc.name}
                        </p>
                        <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                          {doc.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Application Form Button */}
                {currentPair.applicationFormUrl && (
                  <div className="mt-8 pt-6 border-t border-zinc-100">
                    <a
                      href={currentPair.applicationFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 font-bold py-3 px-6 rounded-xl transition-colors w-full justify-center md:w-auto shadow-sm text-sm"
                    >
                      <Download className="w-4 h-4" strokeWidth={2.5} />
                      Download Official Application Form
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Pricing & Checkout Summary */}
            <div className="w-full lg:w-[360px] flex-shrink-0 sticky top-24">
              <div className="bg-white border border-zinc-200 p-6 md:p-8 rounded-3xl shadow-sm">
                <h4 className="text-xl font-black text-zinc-950 mb-6 tracking-tight">
                  Summary
                </h4>

                {/* Applicant Counter */}
                <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200 flex justify-between items-center mb-6">
                  <span className="text-xs font-bold text-zinc-500">
                    Total Applicants
                  </span>
                  <div className="flex items-center gap-3 bg-white p-1 rounded-xl shadow-sm border border-zinc-200">
                    <button
                      onClick={() =>
                        setApplicantCount(Math.max(1, applicantCount - 1))
                      }
                      className="p-2 rounded-lg hover:bg-zinc-100 text-zinc-950 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" strokeWidth={3} />
                    </button>
                    <span className="font-black text-zinc-950 w-5 text-center text-sm">
                      {applicantCount}
                    </span>
                    <button
                      onClick={() => setApplicantCount(applicantCount + 1)}
                      className="p-2 rounded-lg hover:bg-zinc-100 text-zinc-950 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" strokeWidth={3} />
                    </button>
                  </div>
                </div>

                {/* Detailed Fee Breakdown */}
                <div className="space-y-4 mb-6">
                  <h5 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">
                    Fee Breakdown
                  </h5>

                  {/* Government Fee */}
                  <div className="flex items-start justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="bg-zinc-100 p-2 rounded-lg text-zinc-950">
                        <Landmark className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-zinc-950">
                          Govt. Visa Fee
                        </p>
                        <p className="text-[10px] text-zinc-500 font-medium mt-0.5">
                          {activeOption?.currency}{" "}
                          {baseGovtFee.toLocaleString("en-IN", {
                            minimumFractionDigits: 2,
                          })}{" "}
                          × {applicantCount} pax
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-zinc-950 mt-1">
                      {totalGovtFee.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  {/* Service Fee */}
                  <div className="flex items-start justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="bg-zinc-100 p-2 rounded-lg text-zinc-950">
                        <Briefcase className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-zinc-950">
                          Service Fee
                        </p>
                        <p className="text-[10px] text-zinc-500 font-medium mt-0.5">
                          {activeOption?.currency}{" "}
                          {baseServiceFee.toLocaleString("en-IN", {
                            minimumFractionDigits: 2,
                          })}{" "}
                          × {applicantCount} pax
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-zinc-950 mt-1">
                      {totalServiceFee.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="border-t border-zinc-200 pt-6 mb-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-xs font-bold text-zinc-500 block mb-1.5">
                        Total Amount
                      </span>
                      <span className="text-[9px] font-bold tracking-wider uppercase text-zinc-400 bg-zinc-100 px-2 py-1 rounded-md">
                        Taxes Included
                      </span>
                    </div>
                    <div className="text-right flex items-baseline gap-1">
                      <span className="text-xs text-zinc-500 font-bold mb-1">
                        {activeOption?.currency}
                      </span>
                      <span className="text-3xl font-black text-zinc-950 tracking-tighter">
                        {grandTotal.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Start Application */}
                <button
                  onClick={() =>
                    (window.location.href = `/contact?type=${encodeURIComponent(
                      activeOption?.type || ""
                    )}&applicants=${applicantCount}&destination=${encodeURIComponent(
                      destination
                    )}`)
                  }
                  className="w-full bg-zinc-950 hover:bg-zinc-800 text-white font-bold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-zinc-900/10 text-sm"
                >
                  <span>Continue Booking</span>
                  <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
                </button>

                <div className="flex items-center justify-center gap-2 mt-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  <Info className="w-3 h-3" strokeWidth={2.5} />
                  <span>Secure Encrypted Checkout</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200 flex flex-col items-center justify-center text-center max-w-xl mx-auto mt-6 shadow-sm">
            <div className="bg-zinc-100 p-4 rounded-full mb-5">
              <AlertCircle className="w-8 h-8 text-zinc-950" strokeWidth={2} />
            </div>
            <h4 className="font-black text-2xl text-zinc-950 mb-3 tracking-tight">
              {destination === "India"
                ? "Where are you heading?"
                : "Manual Processing Required"}
            </h4>
            <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed font-medium text-sm">
              {destination === "India"
                ? "Please select the country you plan to travel to from the dropdown above to view instant requirements and fees."
                : `We process visas for ${destination}, but specific requirements vary. Please contact us directly for current fees and documentation.`}
            </p>
            {destination !== "India" && (
              <button
                onClick={() =>
                  (window.location.href = `/contact?type=${encodeURIComponent(
                    `Manual Inquiry: India to ${destination}`
                  )}`)
                }
                className="bg-zinc-950 hover:bg-zinc-800 text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-md shadow-zinc-900/10 text-sm"
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