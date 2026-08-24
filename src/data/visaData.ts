export interface VisaOption {
  id: string;
  type: string;
  category: "Tourist" | "Business" | "Transit" | "Student" | "Standard";
  entryType: "Single" | "Double" | "Single / Double" | "Multiple" | "Varies" | "On Arrival";
  validity: string;
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
  processingTime?: string;
}

// 1. ALL 55+ COUNTRIES FOR THE DROPDOWNS
export const COUNTRIES = [
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "AR", name: "Argentina", flag: "🇦🇷" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "AT", name: "Austria", flag: "🇦🇹" },
  { code: "AZ", name: "Azerbaijan", flag: "🇦🇿" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩" },
  { code: "BE", name: "Belgium", flag: "🇧🇪" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "KH", name: "Cambodia", flag: "🇰🇭" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "HR", name: "Croatia", flag: "🇭🇷" },
  { code: "DK", name: "Denmark", flag: "🇩🇰" },
  { code: "EG", name: "Egypt", flag: "🇪🇬" },
  { code: "FI", name: "Finland", flag: "🇫🇮" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "GH", name: "Ghana", flag: "🇬🇭" },
  { code: "GR", name: "Greece", flag: "🇬🇷" },
  { code: "HU", name: "Hungary", flag: "🇭🇺" },
  { code: "IS", name: "Iceland", flag: "🇮🇸" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "IE", name: "Ireland", flag: "🇮🇪" },
  { code: "IL", name: "Israel", flag: "🇮🇱" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "JO", name: "Jordan", flag: "🇯🇴" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "MA", name: "Morocco", flag: "🇲🇦" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "NO", name: "Norway", flag: "🇳🇴" },
  { code: "OM", name: "Oman", flag: "🇴🇲" },
  { code: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "PL", name: "Poland", flag: "🇵🇱" },
  { code: "PT", name: "Portugal", flag: "🇵🇹" },
  { code: "RU", name: "Russia", flag: "🇷🇺" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "LK", name: "Sri Lanka", flag: "🇱🇰" },
  { code: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "TZ", name: "Tanzania", flag: "🇹🇿" },
  { code: "TH", name: "Thailand", flag: "🇹🇭" },
  { code: "TR", name: "Turkey", flag: "🇹🇷" },
  { code: "UG", name: "Uganda", flag: "🇺🇬" },
  { code: "UA", name: "Ukraine", flag: "🇺🇦" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳" },
  { code: "AL", name: "Albania", flag: "🇦🇱" }, // Included for Inbound testing
].sort((a, b) => a.name.localeCompare(b.name)); // Automatically alphabetizes the dropdown

// 2. EXHAUSTIVE OUTBOUND MAPPING (India -> Anywhere)
const OUTBOUND_DATA_FROM_SHEET = [
  { dest: "Argentina", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements (Processed via Udaan/Partner)." },
  { dest: "Australia", time: "20-25 DAYS", gFee: 17500, sFee: 5000, docs: "PASSPORT COPY FIRST AND LAST PAGE, AADHAR CARD, 06 MONTH BANK STATEMENT, 03 YEARS ITR. IF BUSINESS: COMPANY 06 MONTH BANK STATEMENT, 03 YEARS COMPANY ITR, COMPANY REGISTRATION." },
  { dest: "Austria", time: "15 WORKING DAYS", gFee: 12380, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL CONFIRMATION, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR ACKNOWLEDGEMENT." },
  { dest: "Azerbaijan", time: "3-4 WORKING DAYS", gFee: 2600, sFee: 2500, docs: "PASSPORT, PHOTO, TICKET" },
  { dest: "Bangladesh", time: "NORMAL 8-10 DAYS / URGENT 4-5 DAYS", gFee: 1000, sFee: 2000, docs: "TOURISM: PASSPORT, ONLINE FORM, COVER LETTER, AADHAR CARD, HOTEL, 03 MONTH BANK STATEMENT (SEAL/SIGN), 02 PHOTOS (WHITE BG)." },
  { dest: "Belgium", time: "15 WORKING DAYS", gFee: 12650, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL CONFIRMATION, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR ACKNOWLEDGEMENT." },
  { dest: "Brazil", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "Cambodia", time: "3-5 BUSINESS WORKING DAYS", gFee: 3000, sFee: 2500, docs: "ONLINE FORM, PASSPORT, TICKET, HOTEL, PHOTO" },
  { dest: "Canada", time: "APPROX 1.5 MONTH", gFee: 14500, sFee: 5000, docs: "PASSPORT COPY, 01 PHOTO, MARRIAGE DATE/PARENTS DOB, OCCUPATION DETAILS, 06 MONTH BANK STATEMENT, 03 YEARS ITR." },
  { dest: "China", time: "15 WORKING DAYS", gFee: 0, sFee: 0, docs: "NORMAL VISA FEE APPLIES. Please contact support for exact pricing and documents." },
  { dest: "Croatia", time: "15 WORKING DAYS", gFee: 12750, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "Denmark", time: "15 WORKING DAYS", gFee: 11952, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "Egypt", time: "1-2 WORKING DAYS", gFee: 1675, sFee: 2500, docs: "PASSPORT, 02 PHOTO, TICKET, HOTEL CONFIRMATION" },
  { dest: "Finland", time: "15 WORKING DAYS", gFee: 12096, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "France", time: "15 WORKING DAYS", gFee: 10863, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "Germany", time: "15 WORKING DAYS", gFee: 11865, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "Ghana", time: "10-12 WORKING DAYS", gFee: 8500, sFee: 3500, docs: "APPLICATION FORM, PHOTO, COVER LETTER, YELLOW FEVER CERTIFICATE, TICKET, INVITATION, ID PROOF OF REF IN GHANA." },
  { dest: "Greece", time: "15 WORKING DAYS", gFee: 10863, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "Hungary", time: "15 WORKING DAYS", gFee: 11733, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "Iceland", time: "15 WORKING DAYS", gFee: 12800, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "Indonesia", time: "ON ARRIVAL", gFee: 0, sFee: 0, docs: "Visa is available ON ARRIVAL. Contact support for assistance with pre-departure documents." },
  { dest: "Ireland", time: "15 WORKING DAYS", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements (Processed via Udaan/Partner)." },
  { dest: "Israel", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "Italy", time: "15 WORKING DAYS", gFee: 10592, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "Japan", time: "5 WORKING DAYS", gFee: 1350, sFee: 2500, docs: "PASSPORT, 01 PHOTO, TICKET, HOTEL CONFIRMATION, DAY TO DAY ITINERARY, COVER LETTER, 06 MONTH BANK STATEMENT, 02 YEARS ITR." },
  { dest: "Jordan", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "Kenya", time: "3-4 WORKING DAYS", gFee: 3000, sFee: 2500, docs: "PASSPORT, 01 PHOTO, CONFIRMED TICKET, HOTEL CONFIRMATION" },
  { dest: "Malaysia", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "Mexico", time: "5-10 WORKING DAYS", gFee: 5600, sFee: 2500, docs: "PASSPORT, 02 PHOTO, COVERING LETTER, CONFIRMED TICKET, HOTEL, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "Morocco", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "Netherlands", time: "15 WORKING DAYS", gFee: 11750, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "New Zealand", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "Nigeria", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "Norway", time: "15 WORKING DAYS", gFee: 11400, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "Oman", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "Philippines", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "Poland", time: "15 WORKING DAYS", gFee: 11400, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "Portugal", time: "15 WORKING DAYS", gFee: 11400, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "Russia", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "Singapore", time: "3-5 WORKING DAYS", gFee: 1500, sFee: 0, docs: "APPLICATION FORM, ORIGINAL PASSPORT, 02 PHOTO, COVER LETTER, CONFIRMED TICKET, HOTEL, OCCUPATION DETAILS, MONTHLY SALARY, 06 MONTH BANK STATEMENT." },
  { dest: "South Africa", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "South Korea", time: "10-12 WORKING DAYS", gFee: 4980, sFee: 2500, docs: "APPLICATION FORM, PASSPORT, PHOTO, TICKET, HOTEL, NOC FROM EMPLOYER, 06 MONTH BANK STATEMENT (SEAL/SIGN), 02 YEARS ITR." },
  { dest: "Spain", time: "15 WORKING DAYS", gFee: 11450, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "Sri Lanka", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "Sweden", time: "15 WORKING DAYS", gFee: 11900, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "Switzerland", time: "15 WORKING DAYS", gFee: 12700, sFee: 2500, docs: "PASSPORT, 02 PHOTO, APPLICATION FORM, REQUEST LETTER, TICKET, HOTEL, TRAVEL INSURANCE, 06 MONTH BANK STATEMENT (SEAL/SIGN), 03 YEARS ITR." },
  { dest: "Tanzania", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "Thailand", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "Turkey", time: "5-7 WORKING DAYS", gFee: 18500, sFee: 2500, docs: "VISA APPLICATION, PASSPORT, 02 PHOTO (2.5X2.5 INC), CONFIRMED TICKET, HOTEL VOUCHER, NOC FROM EMPLOYER." },
  { dest: "Uganda", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "Ukraine", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "United Arab Emirates", time: "3-4 WORKING DAYS", gFee: 7000, sFee: 2500, docs: "CLEAR PASSPORT COPY FIRST AND LAST PAGE, PAN CARD, PHOTO, HOTEL CONFIRMATION, TICKET" },
  { dest: "United Kingdom", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "United States", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
  { dest: "Vietnam", time: "Contact Support", gFee: 0, sFee: 0, docs: "Please contact Conquest support for updated requirements." },
];

export const VISA_DATA: CountryPairVisaData[] = [];

// Populate Outbound (India -> Anywhere)
OUTBOUND_DATA_FROM_SHEET.forEach((item) => {
  VISA_DATA.push({
    citizenOf: "India",
    destination: item.dest,
    visaRequired: true,
    processingTime: item.time,
    requiredDocuments: [
      { name: "Required Documents", description: item.docs }
    ],
    options: [
      {
        id: `in-${item.dest.toLowerCase().substring(0,3)}`,
        type: `${item.dest} Standard Visa`,
        category: "Standard",
        entryType: item.time === "ON ARRIVAL" ? "On Arrival" : "Varies",
        validity: "Consulate Discretion",
        govtFee: item.gFee,
        serviceFee: item.sFee,
        currency: "INR"
      }
    ]
  });
});

// Helper function: Dynamic Inbound (Anywhere -> India)
export function getInboundIndiaVisa(citizenCountry: string): CountryPairVisaData {
  return {
    citizenOf: citizenCountry,
    destination: "India",
    visaRequired: true,
    processingTime: "72 Hours",
    requiredDocuments: [
      { name: "Passport Front", description: "Scanned copy of bio page with 6 months validity" },
      { name: "Photograph", description: "Recent white background photograph (JPEG/PNG)" },
    ],
    options: [
      {
        id: `${citizenCountry.toLowerCase()}-in-tourist`,
        type: "India Tourist 30 Days EVisa",
        category: "Tourist",
        entryType: "Single / Double",
        validity: "30 Days",
        govtFee: 2000, 
        serviceFee: 4279.86,
        currency: "INR",
      },
      {
        id: `${citizenCountry.toLowerCase()}-in-biz`,
        type: "India Business EVisa",
        category: "Business",
        entryType: "Multiple",
        validity: "180 Days",
        govtFee: 3500.00,
        serviceFee: 8435.06,
        currency: "INR",
      },
    ],
  };
}