import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "TransCargo SRL - Transport Rutier România & Europa",
  description:
    "Servicii profesionale de transport marfă cu camioane, intern și internațional. Promptitudine, siguranță și seriozitate în fiecare cursă.",
  keywords: "transport, camioane, marfă, România, Europa, logistică, freight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="h-full">
      <body className="min-h-full bg-slate-900 antialiased font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
