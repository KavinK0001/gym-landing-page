import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing | PULSE ATHLETICS",
  description:
    "Flexible membership tiers designed with no hidden fees and easy cancellation.",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <Navbar />
      <main className="flex-1">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
