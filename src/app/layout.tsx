import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Mono,
  DM_Sans,
  Noto_Serif_Bengali,
} from "next/font/google";

import Image from "next/image";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CartDrawer } from "@/components/CartDrawer";
import { ExitPopup } from "@/components/ExitPopup";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aaloki — Handcrafted Candles from Kolkata",
    template: "%s | Aaloki",
  },
  description:
    "Premium handcrafted candles & home décor from Kolkata. Made with safe ingredients, designed for gifting. Pan-India delivery.",
  keywords: ["handcrafted candles", "Kolkata candles", "gift candles India", "home décor"],
  openGraph: {
    siteName: "Aaloki",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const fontVars = [
    cormorant.variable,
    dmSans.variable,
    notoSerifBengali.variable,
    dmMono.variable,
  ].join(" ");

  return (
    <html lang="en" className={`${fontVars} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        {/* Global logo watermark — fixed behind all page content */}
        <div
          className="fixed inset-0 pointer-events-none select-none overflow-hidden"
          style={{ zIndex: 0 }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/aaloki-logo.png"
              alt=""
              width={700}
              height={700}
              className="opacity-[0.045]"
              style={{
                filter: "blur(32px)",
                width: "min(75vw, 75vh)",
                height: "auto",
                mixBlendMode: "multiply",
              }}
              priority
            />
          </div>
        </div>

        <Providers>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <CartDrawer />
          <ExitPopup />
          <Toaster position="bottom-left" />
        </Providers>
      </body>
    </html>
  );
}
