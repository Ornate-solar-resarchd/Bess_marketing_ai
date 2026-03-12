import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UnityESS BESS | India's #1 Battery Energy Storage System | Ornate Solar",
    template: "%s | UnityESS by Ornate Solar",
  },
  description:
    "UnityESS by Ornate Solar: Premium Battery Energy Storage Systems (BESS) for C&I and utility-scale applications. 261 kWh to 6.25 MWh capacity, 97%+ efficiency, 10-year warranty.",
  keywords: [
    "Battery Energy Storage System",
    "BESS India",
    "LFP Battery Storage",
    "C&I BESS",
    "Solar Battery Storage",
    "Ornate Solar",
    "UnityESS",
    "Grid Scale Battery India",
  ],
  authors: [{ name: "Ornate Solar", url: "https://www.ornatesolar.com" }],
  creator: "Ornate Solar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.ornatesolar.com/bess",
    siteName: "UnityESS by Ornate Solar",
    title: "UnityESS BESS | India's Premium Battery Energy Storage System",
    description:
      "Industry-leading BESS from 261 kWh to 6.25 MWh with 97%+ efficiency and 10-year warranty.",
    images: [
      {
        url: "https://www.ornatesolar.com/bess/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UnityESS Battery Energy Storage System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UnityESS BESS | India's #1 Battery Energy Storage System",
    description: "Premium BESS for homes, businesses, and utilities with 97%+ efficiency.",
    images: ["https://www.ornatesolar.com/bess/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.ornatesolar.com/bess",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ornate Solar",
              url: "https://www.ornatesolar.com",
              logo: "https://www.ornatesolar.com/logo.svg",
              description:
                "India's leading Battery Energy Storage System (BESS) provider.",
              contact: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+91-1800-2026-252",
                email: "info@ornatesolar.com",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "A-87, Okhla Phase – II",
                addressCountry: "IN",
                addressLocality: "New Delhi",
                addressRegion: "Delhi",
                postalCode: "110020",
              },
            }),
          }}
        />
      </head>
      <body className="bg-white text-[#f5f5f7] antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
