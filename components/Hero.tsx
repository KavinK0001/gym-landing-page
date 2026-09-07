import Link from "next/link";
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
      {/* subtle grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        {/* radial gradient glow behind headline for atmospheric depth */}
        <div className="absolute left-1/2 top-[22%] h-[720px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-500/10 via-zinc-950 to-zinc-950 blur-[1px] opacity-90" />
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
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
          <Link
            href="#free-pass"
            className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 text-sm font-bold tracking-wide text-black transition-colors hover:bg-lime-500"
          >
            Claim Free Day Pass <ArrowRight className="h-4 w-4" />
          </Link>
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
