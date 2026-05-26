import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deore & Associates | Chartered Accountants & Company Secretaries",
  description:
    "Deore & Associates — trusted CA & CS firm offering taxation, audit, compliance, GST, company law, and financial advisory services.",
  keywords: [
    "Chartered Accountant",
    "Company Secretary",
    "CA firm",
    "GST",
    "income tax",
    "audit",
    "compliance",
    "Deore Associates",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
