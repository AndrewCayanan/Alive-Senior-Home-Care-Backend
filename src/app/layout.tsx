import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import RevealProvider from "@/components/RevealProvider";

export const metadata: Metadata = {
  title: "Alive Senior Home Care – Compassionate Care in Indiana",
  description:
    "Professional, personalized home care services so your loved one can live with dignity, comfort, and joy in their own home.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        {/* Scroll progress bar */}
        <div className="scroll-progress" id="scrollProgress" />

        {/* GLOBAL REVEAL SYSTEM */}
        <RevealProvider>
          {children}
        </RevealProvider>

        {/* Keep script ONLY if you still need NON-DOM React logic (optional) */}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}