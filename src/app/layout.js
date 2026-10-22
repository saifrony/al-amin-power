
import "./globals.css";
import Footer from "@/shares/Footer";
import Header from "@/shares/Header";
import Topbar from "@/components/topbar/Topbar";

import { PT_Sans } from 'next/font/google';

// PT Sans ফন্টটি কনফিগার করুন এবং ফলব্যাক ফন্টগুলো সেট করুন
const ptSans = PT_Sans({
  weight: ['400', '700'], // আপনার প্রয়োজনীয় ওয়েট সিলেক্ট করুন (যেমন: Regular এবং Bold)
  subsets: ['latin'],     // সাবসেট সেট করুন
  fallback: ['Arial', 'Helvetica', 'sans-serif'], // আপনার পছন্দমতো ব্যাকআপ ফন্ট
});

export const metadata = {
  title: "Al-Amin Power Engineering",
  description: "Manufacturer of Power Transformers, Switchgears, P.F.I Plants and industrial machinery in Bangladesh."
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ptSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Topbar />
        <Header />
        {/* <Navbar /> */}
        {children}
        <Footer />
        </body>
    </html>
  );
}
