import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Clock, Dumbbell, Flame } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <Navbar />

      {/* Temporary Hero Placeholder */}
      <main className="flex-1">
        <section
          id="home"
          className="relative overflow-hidden border-b border-zinc-800"
        >
          {/* subtle grid + glow */}
          <div className="absolute inset-0 -z-10 bg-zinc-950">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
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
              equipment, and 24/7 access — your transformation starts with a
              single rep.
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

            {/* placeholder cards to prove layout */}
            <div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Flame,
                  title: "HIIT & Conditioning",
                  desc: "Burn fat. Build stamina.",
                },
                {
                  icon: Dumbbell,
                  title: "Strength & Power",
                  desc: "Free weights + machines.",
                },
                {
                  icon: Clock,
                  title: "24/7 Access",
                  desc: "Train on your schedule.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-left"
                >
                  <card.icon className="h-6 w-6 text-lime-400" />
                  <h3 className="mt-3 text-sm font-bold tracking-wide text-zinc-100">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">{card.desc}</p>
                </div>
              ))}
            </div>

            <p className="pt-2 text-xs tracking-widest text-zinc-500">
              ↓ Core layout verified — Navbar + Hero Placeholder + Footer
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
