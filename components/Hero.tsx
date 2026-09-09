import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "2,500+", label: "Active Members" },
  { value: "45+", label: "Weekly Classes" },
  { value: "15+", label: "Certified Coaches" },
  { value: "100%", label: "High-Energy Vibe" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-zinc-800 bg-zinc-950"
    >
      {/* 1. Background Hero Image — absolute behind content */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
          alt="Athlete performing heavy barbell deadlift in moody, well-lit gym with chiaroscuro lighting"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* heavy dark gradient overlay for high-contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/80 to-zinc-950" />
      </div>

      {/* 2. Ambient Artwork & Glow Effects */}
      {/* subtle high-tech dot-grid overlay pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      {/* glowing lime-green radial accent blur behind headline */}
      <div className="pointer-events-none absolute left-1/2 top-[28%] h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-500/15 blur-3xl" />

      {/* 3. Content Layering — relative z-10 above all background */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-medium tracking-wide text-zinc-400">
          <span className="inline-flex h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
          PREMIUM 24/7 FITNESS • NOW OPEN
        </div>

        <h1 className="max-w-3xl text-4xl font-black tracking-tighter text-zinc-100 sm:text-5xl lg:text-6xl">
          UNLEASH YOUR{" "}
          <span className="text-lime-400">POTENTIAL</span> AT PULSE
        </h1>

        <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
          High-energy, modern gym built for PRs. Elite coaches, cutting-edge
          equipment, and 24/7 access — your transformation starts with a single
          rep.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 text-sm font-bold tracking-wide text-black transition-colors hover:bg-lime-500"
          >
            Claim Free Day Pass <ArrowRight className="h-4 w-4" />
          </button>
          <Link
            href="#classes"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-zinc-100 hover:bg-zinc-800"
          >
            Explore Classes
          </Link>
        </div>

        {/* Stats Bar — responsive 4-column */}
        <div className="mt-4 grid w-full max-w-4xl grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center px-6 py-6 sm:py-8 ${
                idx !== stats.length - 1
                  ? "border-b border-zinc-800 md:border-b-0 md:border-r"
                  : ""
              } ${idx % 2 === 0 ? "border-r md:border-r" : ""} ${
                idx === 1 ? "md:border-r" : ""
              } ${idx === 2 ? "border-b-0 border-r md:border-r" : ""}`}
            >
              <span className="text-2xl font-black tracking-tighter text-zinc-100 sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-widest text-zinc-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
