import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
