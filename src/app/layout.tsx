import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// THIS CONTROLS THE BROWSER TAB TITLE AND GOOGLE SEARCH RESULTS
export const metadata: Metadata = {
  title: "Conquest Visa and Immigration Services",
  description: "Elite global mobility and visa processing solutions. Established in 2002.",
  icons: {
    icon: '/icon.png', // Or '/favicon.ico' depending on what you named it in Step 1
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900 transition-colors duration-300`}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}