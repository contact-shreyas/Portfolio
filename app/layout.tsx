import type { Metadata } from "next";
import { Anton, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Shreyas Gupta – Portfolio",
  description: "AI/ML • Data • Full-Stack | Portfolio of Shreyas Gupta, Computer Science student at SRMIST specializing in AI/ML and data-driven systems.",
  keywords: ["Shreyas Gupta", "AI", "Machine Learning", "Data Science", "Full Stack Developer", "Portfolio"],
  authors: [{ name: "Shreyas Gupta" }],
  openGraph: {
    title: "Shreyas Gupta – Portfolio",
    description: "AI/ML • Data • Full-Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${anton.variable} ${inter.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-sans bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
