"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

type BillingPeriod = "monthly" | "annual";

type Tier = {
  id: string;
  name: string;
  badge: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  cta: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    id: "basic",
    name: "DAY PASS / BASIC",
    badge: "Standard Access",
    monthlyPrice: 19,
    annualPrice: 15,
    features: [
      "Access during staffed hours (5AM - 11PM)",
      "Standard cardio & strength floor access",
      "Locker room & shower access",
      "Mobile app workout tracking",
    ],
    cta: "Get Started",
  },
  {
    id: "pro",
    name: "PRO ATHLETE",
    badge: "Most Popular",
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      "Full 24/7 key-fob gym access",
      "All group fitness & HIIT classes included",
      "1 Monthly Guest Pass included",
      "Sauna & Recovery Lounge access",
      "Free high-speed Wi-Fi & lockers",
    ],
    cta: "Claim Pro Pass",
    featured: true,
  },
  {
    id: "elite",
    name: "VIP ELITE",
    badge: "All-Inclusive",
    monthlyPrice: 89,
    annualPrice: 71,
    features: [
      "Everything in Pro Tier",
      "1-on-1 Monthly Personal Trainer Coaching Session",
      "Customized monthly Nutrition Plan",
      "Unlimited Guest Passes",
      "Premium towel service & dedicated VIP locker",
    ],
    cta: "Join Elite",
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  return (
    <section
      id="pricing"
      className="relative border-b border-zinc-800 bg-zinc-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-lime-400">
            Membership Plans
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tighter text-zinc-100 sm:text-4xl lg:text-5xl">
            INVEST IN YOUR <span className="text-lime-400">PERFORMANCE</span>
          </h2>
          <p className="mt-4 text-base leading-6 text-zinc-400 sm:text-lg">
            Flexible membership tiers designed with no hidden fees and easy
            cancellation.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900 p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                billing === "monthly"
                  ? "bg-zinc-100 text-zinc-900 shadow"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              aria-pressed={billing === "annual"}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                billing === "annual"
                  ? "bg-zinc-100 text-zinc-900 shadow"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              Annual Billing
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-bold tracking-wide ${
                  billing === "annual"
                    ? "bg-lime-400 text-black"
                    : "bg-lime-400/20 text-lime-400 border border-lime-400/30"
                }`}
              >
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          {tiers.map((tier) => {
            const price =
              billing === "monthly" ? tier.monthlyPrice : tier.annualPrice;

            // Featured card styling
            if (tier.featured) {
              return (
                <div
                  key={tier.id}
                  className="relative flex flex-col rounded-2xl border-2 border-lime-400 bg-zinc-900 p-8 shadow-xl shadow-lime-400/10 lg:scale-[1.03]"
                >
                  {/* glowing backdrop */}
                  <div className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-lime-400/10 blur-xl" />
                  {/* Most Popular tag */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime-400 px-4 py-1 text-xs font-black uppercase tracking-widest text-black shadow">
                    Most Popular
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black uppercase tracking-widest text-zinc-100">
                      {tier.name}
                    </h3>
                  </div>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-black tracking-tighter text-zinc-100 transition-all duration-300">
                      ${price}
                    </span>
                    <span className="text-sm font-medium text-zinc-400">
                      / mo
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-500">
                    {billing === "annual"
                      ? "Billed annually"
                      : "Billed monthly"}
                  </p>

                  <ul className="mt-8 flex flex-1 flex-col gap-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-zinc-300"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/15 text-lime-400">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-lime-400 px-6 py-3.5 text-sm font-bold text-zinc-950 transition-colors hover:bg-lime-500"
                  >
                    {tier.cta}
                  </Link>
                </div>
              );
            }

            return (
              <div
                key={tier.id}
                className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:border-zinc-700"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-black uppercase tracking-widest text-zinc-100">
                    {tier.name}
                  </h3>
                  <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs font-semibold text-zinc-400">
                    {tier.badge}
                  </span>
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tighter text-zinc-100 transition-all duration-300">
                    ${price}
                  </span>
                  <span className="text-sm font-medium text-zinc-400">
                    / mo
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-500">
                  {billing === "annual" ? "Billed annually" : "Billed monthly"}
                </p>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-zinc-300"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/15 text-lime-400">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-6 py-3.5 text-sm font-bold text-zinc-100 transition-colors hover:border-zinc-600 hover:bg-zinc-800"
                >
                  {tier.cta}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-sm text-zinc-500">
          Need custom corporate or team rates?{" "}
          <Link href="/contact" className="font-semibold text-lime-400 hover:text-lime-300">
            Contact us
          </Link>{" "}
          for group packages.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
