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
      <body className="relative min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-lime-400 selection:text-black">
        {/* Global abstract digital pulse artwork - subtle high-tech architectural texture */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]"
        >
          {/* geometric wireframe grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#52525b_1px,transparent_1px),linear-gradient(to_bottom,#52525b_1px,transparent_1px)] bg-[size:5rem_5rem]" />
          {/* diagonal energetic pulse lines */}
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_40%,#a3e635_50%,transparent_60%)] opacity-20 blur-[0.5px]" />
          {/* subtle concentric pulse rings */}
          <div className="absolute left-1/2 top-[30%] h-[1200px] w-[1200px] -translate-x-1/2 rounded-full border border-zinc-500/20" />
          <div className="absolute left-1/2 top-[30%] h-[900px] w-[900px] -translate-x-1/2 rounded-full border border-zinc-600/20" />
          <div className="absolute left-1/2 top-[30%] h-[600px] w-[600px] -translate-x-1/2 rounded-full border border-lime-400/10" />
        </div>
        {/* faint border-zinc-800/30 wireframe overlay */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 opacity-[0.04] bg-[linear-gradient(to_right,rgba(39,39,42,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(39,39,42,0.3)_1px,transparent_1px)] bg-[size:3rem_3rem]"
        />
        {children}
      </body>
    </html>
  );
}
