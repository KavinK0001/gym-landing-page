import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PULSE ATHLETICS | Premium 24/7 Fitness & Gym",
  description:
    "PULSE ATHLETICS — Premium 24/7 fitness & gym. High-energy training, elite coaches, and modern facilities built for your next PR.",
  keywords: ["gym", "fitness", "PULSE ATHLETICS", "24/7 gym", "training"],
  openGraph: {
    title: "PULSE ATHLETICS | Premium 24/7 Fitness & Gym",
    description:
      "High-energy, modern gym experience — classes, trainers, and 24/7 access.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-lime-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
