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
  metadataBase: new URL("https://shreyas-gupta-portfolio-mu.vercel.app"),
  title: "Shreyas Gupta — AI Engineer",
  description:
    "The official home for the work of Shreyas Gupta in AI, engineering, and research — RAG pipelines, agentic systems, security tooling, and full-stack products.",
  keywords: ["Shreyas Gupta", "AI Engineer", "Machine Learning", "RAG", "Agentic AI", "Full Stack Developer", "Portfolio"],
  authors: [{ name: "Shreyas Gupta" }],
  openGraph: {
    title: "Shreyas Gupta — AI Engineer",
    description: "AI, engineering, and research — selected projects and experience.",
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
