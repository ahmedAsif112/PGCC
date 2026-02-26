import type { Metadata } from "next";
import { Merriweather, Nunito } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "900"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "UK Global Competence Initiative | PGCC",
  description:
    "Equipping Pakistani nationals with pre-departure preparation for UK visas. Mandatory Competency Certificate by the Pakistan Global Competence Council.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}