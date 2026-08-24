export interface VisaOption {
  id: string;
  type: string; // e.g. "India Tourist 30 Days EVisa"
  category: "Tourist" | "Business" | "Transit" | "Student";
  entryType: "Single" | "Double" | "Single / Double" | "Multiple";
  validity: string; // e.g. "30 Days", "180 Days"
  govtFee: number;
  serviceFee: number;
  currency: string;
}

export interface CountryPairVisaData {
  citizenOf: string;
  destination: string;
  visaRequired: boolean;
  requiredDocuments: { name: string; description: string }[];
  options: VisaOption[];
}

export const COUNTRIES = [
  { code: "AL", name: "Albania", flag: "🇦🇱" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
];

export const VISA_DATA: CountryPairVisaData[] = [
  {
    citizenOf: "Albania",
    destination: "India",
    visaRequired: true,
    requiredDocuments: [
      { name: "Passport Front", description: "Scanned copy of bio page with 6 months validity" },
      { name: "Photograph", description: "Recent white background photograph (JPEG/PNG)" },
    ],
    options: [
      {
        id: "in-tourist-30",
        type: "India Tourist 30 Days EVisa",
        category: "Tourist",
        entryType: "Single / Double",
        validity: "30 Days",
        govtFee: 956.90,
        serviceFee: 4279.86,
        currency: "INR",
      },
      {
        id: "in-biz-180",
        type: "India Business EVisa",
        category: "Business",
        entryType: "Multiple",
        validity: "180 Days",
        govtFee: 3500.00,
        serviceFee: 8435.06,
        currency: "INR",
      },
    ],
  },
];